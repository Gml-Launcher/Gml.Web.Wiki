---
sidebar_position: 4
---

# Local Development

This guide applies to the current `master` branch of Gml.Backend. In development, Next.js proxies API and skin requests. Open **http://localhost:3000** for all browser requests.

## Prerequisites and dependencies

Install Git, .NET SDK 10, Node.js 20+ and npm. Enable JavaScript/Node.js support in Rider and select your installed Node.js interpreter in the project settings.

```bash
git clone --recursive https://github.com/Gml-Launcher/Gml.Backend.git
cd Gml.Backend
git submodule update --init --recursive
npm --prefix src/Gml.Web.Client ci
dotnet restore Gml.Backend.sln
```

For an existing clone, run the last three commands from the repository root. Restore requires access to the configured NuGet sources. If NuGet reports a missing local source from `NuGet.config`, prepare the corresponding packages in the sibling `Gml.Core` repository or configure an accessible source containing the required package versions.

Make sure ports **3000**, **5002** and **5086** are available.

## Run with Rider

1. Open `Gml.Backend.sln`.
2. Select the saved **GML Development** configuration.
3. Click **Run** or **Debug**. The configuration starts **Frontend**, **Backend (development)** and **Skins (development)**. Debug attaches Rider debuggers to both .NET services.
4. Wait for the services to start and open **http://localhost:3000**.

Use **Stop All** to stop the entire configuration. The API uses the `frontend` launch profile; skins use `http`. Each .NET service runs from its project directory.

## Run from a terminal

On Linux/macOS, run from the repository root:

```bash
./scripts/dev.sh
```

The script checks tools, frontend dependencies and available ports before starting all three services. Ctrl+C, SIGTERM or any service exit stops all processes started by the script. You can also invoke it from another directory using its full path.

## Request routing

Next.js enables these rules only during `npm run dev`:

- `/api*`, `/swagger*`, `/ws*` and the exact `/health` path go to the API at `http://127.0.0.1:5002`, preserving the path. `/ws*` supports WebSocket.
- `/skins` and `/skins/*` go to `http://127.0.0.1:5086`, stripping the `/skins` prefix.
- The frontend serves the remaining pages.

API Swagger is available at **http://localhost:3000/swagger**; the health check is at **http://localhost:3000/health**. Axios and SignalR use the frontend origin.

As in Angie, `/` redirects to `/mnt` until setup is complete. After setup, `/mnt` and its child pages redirect to `/`. The frontend checks `/api/v1/settings/checkInstalled` directly against the API: a 2xx response means setup is incomplete. On a connection error or a 3-second timeout, the home page remains available and `/mnt` redirects to `/`.

To change upstream addresses, create `src/Gml.Web.Client/.env.development.local`:

```dotenv
DEV_BACKEND_URL=http://127.0.0.1:5002
DEV_SKINS_URL=http://127.0.0.1:5086
```

Restart Next.js after editing the file. These server-side variables change proxy destinations only; configure .NET listening ports in the launch profiles. `NEXT_PUBLIC_BACKEND_URL` provides a placeholder in the setup form; browser requests use the current frontend origin.

## Security key and local data

When `SECURITY_KEY` is absent in **Development**, the API generates 32 random bytes on first launch and saves them as 64 hexadecimal characters in `database/development.key` under the API project directory. Subsequent launches reuse the key. The file is excluded from Git and Docker build contexts; new files on Unix have permissions `0600`.

A nonblank `SECURITY_KEY` environment variable takes precedence over the file. In **Production** and other environments except Development, the environment variable is required; the API fails to start without it. You do not need to generate a key manually for local development. Keep `development.key` with the local data that used it.

With the standard Rider configuration or development script, data is stored in:

- API SQLite: `src/Gml.Web.Api/src/Gml.Web.Api/database/data.db`.
- API development key: `src/Gml.Web.Api/src/Gml.Web.Api/database/development.key`.
- Gml.Core SQLite: `~/GmlServer/data.db` with the launch profile defaults `PROJECT_NAME=GmlServer` and empty `PROJECT_PATH`. `~` is your home directory. If set, `PROJECT_PATH` becomes the parent directory; the project directory name comes from `PROJECT_NAME` with invalid characters removed.
- Skins and cloaks: `src/Gml.Web.Skin.Service/src/Gml.Web.Skin.Service/Storage`.

Stopping services preserves this data.
