---
sidebar_position: 1
---

# GNU/Linux

This guide installs Gml.Backend on GNU/Linux and makes the dashboard available on your domain over HTTPS.

:::tip Best choice for beginners
For your first installation on a dedicated VPS, **we recommend `global` mode**. Gml Manager starts the services; the bundled Angie proxy configures HTTPS, obtains a Let's Encrypt certificate and renews it automatically. Prepare your domain, DNS and access to ports 80/443 first.

A fresh VPS with a public IPv4 address and no existing websites or web proxy is the simplest setup. If nginx, Caddy, Traefik or another proxy already serves websites on the server, choose `external` and connect GML to that existing configuration.
:::

## Choose a proxy mode

The proxy accepts user requests and routes them to the dashboard, API and skin service. GML runs Angie in two modes.

### `global`: Angie is the public entry point

```text
User → https://gml.example.com:443 → Angie → dashboard / API / skins
```

Angie binds public TCP ports **80 and 443**, obtains a Let's Encrypt certificate for your domain and redirects ordinary HTTP requests to HTTPS. Port 80 remains accessible for domain validation and certificate renewal.

Use this mode when GML is the main web service on a dedicated server. Other applications can use other ports, but nginx, Apache, Caddy or another container must not occupy 80/443. The name `global` does not mean multi-site hosting: the standard configuration serves one configured GML domain.

### `external`: GML runs behind your existing proxy

```text
User → your HTTPS nginx / Caddy / Traefik → Angie over HTTP:5003 → GML services
```

GML exposes its HTTP entry point on `PORT_GML_FRONTEND`, **5003** by default. Your outer proxy accepts domain requests on 80/443, obtains and renews the certificate, and forwards requests to GML. Bundled Angie still routes them between the services.

Choose this mode for an existing website host, an existing HTTPS setup or custom routing. Without an outer proxy, the dashboard is available over HTTP, for example `http://SERVER_IP:5003`; this mode does not configure automatic public HTTPS.

:::info Default mode
A new installation proposes **`external`**. For the recommended automatic HTTPS setup, explicitly select **`2` / `global`** in the menu or pass `--proxy-mode global`.
:::

## Requirements for `global`

### Server and access

- GNU/Linux with `root` access or `sudo`. Gml Manager supports Debian, Ubuntu, Fedora, Alpine Linux, Arch Linux and their derivatives.
- A public **IPv4 address** that accepts incoming TCP connections and can be used in your domain's DNS. The installer requires an A record; an IPv6-only server does not meet this workflow's requirements.
- Internet access to download the installer, packages and Docker images. Allow outbound HTTPS to GitHub, GHCR, Let's Encrypt, public IP detection services, and Google/Cloudflare public DNS-over-HTTPS services, with working DNS resolution.
- An empty or nonexistent installation directory, `/srv/gml` by default. Use **update** for an existing installation instead of installing again into an occupied directory.
- Docker Engine and the Compose plugin. Gml Manager installs Docker if needed; it also needs permission to install system packages.

For beginners, a VPS with a public IPv4 address directly assigned to the server is easiest. A server behind a router needs TCP 80/443 port forwarding; CGNAT without incoming access cannot support this setup.

### Domain and DNS

Prepare a domain or subdomain, such as **`gml.example.com`**, and access to its DNS records. Replace this example with your own domain throughout the guide.

The installer accepts one fully qualified hostname. Enter **`gml.example.com`** without `https://`, a port, a path or a trailing dot. IP addresses, `localhost`, `*.example.com` and names containing underscores are not accepted. Use the ASCII Punycode form (`xn--…`) for an internationalized domain.

Configure DNS:

1. Create an **A record** pointing to your server's public IPv4. Within the `example.com` zone, the record name is usually `gml`; some DNS panels require the full name.
2. If the name has multiple A records, every address must point to this server. Remove old or unrelated addresses: the installer rejects any A record that differs from its detected public IPv4.
3. **AAAA is optional.** Keep it only if this server has working public IPv6 with ports 80/443 reachable over IPv6. Otherwise, remove AAAA for this name. Every existing AAAA must match the server's public IPv6.
4. For Cloudflare, select **DNS only**, shown as a gray cloud. Cloudflare can remain your DNS provider, but its proxy and similar CDN proxying are unsupported by the current `global` workflow: DNS must return the server's own address.
5. Wait for public DNS to update. A local `/etc/hosts` entry does not replace public DNS; the installer queries A/AAAA through public resolvers.

If your zone has restrictive [CAA records](https://letsencrypt.org/docs/caa/), they must permit Let's Encrypt issuance. You do not need to change CAA if no such restrictions exist.

### Ports and firewalls

**TCP 80 and 443 must both be free on the server and reachable from the internet.** Check the OS firewall, VPS provider firewall/security group and any router. Opening Linux firewall rules does not remove a provider-side block. The installer’s local port availability check also does not establish reachability from the internet.

Port 80 handles [Let's Encrypt HTTP-01 validation](https://letsencrypt.org/docs/challenge-types/), which requires that specific port. Keep port 80 open after installation for renewals and HTTP → HTTPS redirects, following [Let's Encrypt's recommendation](https://letsencrypt.org/docs/allow-port-80/).

Inspect listening processes:

```bash
sudo ss -ltnp '( sport = :80 or sport = :443 )'
```

Before a new `global` installation, neither port should have a listener. If Docker is already installed, also inspect published container ports:

```bash
sudo docker ps --format 'table {{.Names}}\t{{.Ports}}'
```

If an existing website needs these ports, choose `external`. On a fresh server, identify and disable any unnecessary conflicting service specifically; do not stop all containers or web servers indiscriminately.

If you already use UFW, allow incoming connections:

```bash
sudo ufw status
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

These commands apply only to UFW. Configure equivalent rules with firewalld/nftables and your provider's firewall as needed. Do not enable a new firewall before ensuring access to your SSH port. Check IPv6 rules too if you publish AAAA.

## Install `global` step by step

### 1. Connect and prepare tools

Run installation commands on the server, for example in an SSH session. For **Debian/Ubuntu**:

```bash
sudo apt update
sudo apt install -y curl ca-certificates dnsutils iproute2
```

Use the appropriate package manager on other supported distributions. `dig` from `dnsutils` is for manual DNS diagnostics; the installer itself checks DNS over HTTPS.

### 2. Verify DNS before installation

Check the server's public IPv4 and your domain's published records:

```bash
curl -4 -fsS https://api.ipify.org
dig @1.1.1.1 +short A gml.example.com
dig @1.1.1.1 +short AAAA gml.example.com
```

The first command's IPv4 and the A record must match. With no IPv6 configured, the AAAA answer should be empty. If IPv6 is configured, compare AAAA with:

```bash
curl -6 -fsS https://api64.ipify.org
```

A CNAME may also appear in `dig` output if used; the final A/AAAA records must still point directly to this server. Correct any mismatch and wait for public DNS updates before proceeding.

### 3. Start Gml Manager

Recommended interactive command:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh
```

When already logged in as `root`, omit `sudo`:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sh
```

The manager asks for language, action, directory, proxy settings and version. Choose:

1. Action **`1` — install**.
2. Directory **`/srv/gml`**, unless you need another location. It must be empty or nonexistent.
3. Mode **`2` — `global`**.
4. Your domain, such as **`gml.example.com`**, without protocol or path.
5. Read the [Let's Encrypt terms](https://letsencrypt.org/repository/) and answer **`y`** if you accept them. Acceptance is required to enable this mode.
6. The latest suggested stable version. New installations support **`v2026.2`** and newer, plus `master` and `dev`; beginners should use a stable release.

The installer checks DNS and available ports, prepares Docker Compose and `.env`, generates a security key, downloads images and starts services. Angie requests the certificate automatically. You do not need to install Certbot, copy certificates manually or write an nginx configuration for this setup.

The installer waits for the certificate and checks it through a local HTTPS connection with hostname and trust validation. This can take several minutes. Wait for the success message and dashboard URL; a running container alone does not establish successful certificate issuance.

### 4. Install with explicit parameters

After meeting the requirements, you can supply the installation parameters directly:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- install --dir /srv/gml --proxy-mode global --domain gml.example.com --accept-acme-terms
```

Replace the domain. `--accept-acme-terms` expresses your acceptance of the Let's Encrypt terms. Without `--version`, the manager selects the latest stable tag; add, for example, `--version v2026.2` to pin a release.

:::info Command difference
`install --dir /srv/gml` **without** `--proxy-mode global` creates an `external` installation. Automatic HTTPS requires the global parameters shown above.
:::

### 5. Open the dashboard and verify HTTPS

Open **`https://gml.example.com`**. A redirect to `/mnt` is expected until initial setup is complete; follow the dashboard setup wizard. Use the configured domain, which the certificate covers.

From your laptop or another machine outside the server, run:

```bash
curl -I http://gml.example.com/
curl -I https://gml.example.com/
curl https://gml.example.com/health
```

Expected results:

- HTTP returns **308** with `Location: https://gml.example.com/`.
- HTTPS establishes a trusted TLS connection; the page may return 2xx or redirect to setup/authentication.
- `/health` returns **200** when the API is working.

## Configure `external`

Select **`1` — `external`** during interactive installation, or supply explicit parameters:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- install --dir /srv/gml --proxy-mode external
```

Open `http://SERVER_IP:5003` or point your outer proxy to this HTTP entry point. A proxy on the same host typically uses `http://127.0.0.1:5003`. In a separate container, `127.0.0.1` refers to that container itself; use a host address/network reachable from it.

Configure the outer proxy to:

- serve HTTPS and renew the domain certificate;
- forward the whole site to GML's HTTP entry point, including API and skins;
- support WebSocket with `Upgrade` / `Connection` headers for `/ws*`;
- pass the original `Host`, `X-Forwarded-Proto`, `X-Real-IP` and a correct `X-Forwarded-For`.

`external` trusts metadata supplied by the outer proxy. That proxy must form trusted forwarding headers; restrict network access to GML's HTTP entry point to the outer proxy. The outer proxy manages the certificate in this mode.

## Update or change modes

Use the existing installation directory. An ordinary update preserves the current mode when `--proxy-mode` is omitted:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- update --dir /srv/gml
```

To switch **from `external` to `global`**, first meet all global requirements, including free ports 80/443 and direct DNS, then run:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- update --dir /srv/gml --proxy-mode global --domain gml.example.com --accept-acme-terms
```

To switch **from `global` to `external`**:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- update --dir /srv/gml --proxy-mode external
```

This transition restores the HTTP entry point to port 5003; your outer proxy must serve HTTPS after the switch. To change the domain in `global`, prepare DNS for the new name and run `update --proxy-mode global --domain YOUR_NEW_DOMAIN` with the remaining parameters from the example above.

Without `--version`, update selects the latest stable release, so changing modes can also update services. Pass the current tag explicitly to retain it. The manager separately asks permission to overwrite its managed `docker-compose.yml`, even with command-line parameters; review your customizations before accepting.

Back up your data before updating. The manager downloads images before stopping the old stack, but container switching causes an interruption. If the new configuration fails to start or obtain its certificate during an update, the manager attempts to restore the previous Compose, `.env` and stack. This does not replace backups. A certificate failure during a **new installation** stops the newly created stack and reports an error.

For an installation created by the [legacy installer](https://github.com/Gml-Launcher/Gml.Backend.Installer), point Gml Manager to the existing directory when updating. `global` requires an Angie proxy image with HTTPS/ACME; the legacy YARP proxy does not support this mode.

## Troubleshoot `global`

### DNS mismatch or CDN proxying

For `has no DNS A record` or `DNS A ... points to ...`, compare all A records with the server's public IPv4. Remove unrelated addresses, disable Cloudflare/CDN proxying and wait for public DNS updates. For AAAA errors, fix IPv6 or remove the unused record.

`Unable to query public DNS` means the installer could not query public DNS over HTTPS. Check server egress and DNS resolution; editing `/etc/hosts` does not repair that check.

### Port 80 or 443 is occupied

`TCP port ... is already in use` indicates a listener conflict. Use the `ss` and `docker ps` commands in the requirements section. Choose `external` if an existing website needs the ports.

### Certificate issuance failed

For `Timed out waiting for a valid Let’s Encrypt certificate`, check A/AAAA, inbound TCP 80 from the internet, provider firewall rules and the container's outbound access to Let's Encrypt. Inspect logs for the certificate authority's reason:

```bash
cd /srv/gml
sudo docker compose ps -a
sudo docker compose logs --tail 200 gml-web-proxy
```

If logs report CAA restrictions or issuance limits, address that cause before retrying. Repeated reinstallations do not fix DNS or blocked ports. See [Let's Encrypt's domain validation documentation](https://letsencrypt.org/docs/challenge-types/) for validation failures.

For a failed new installation where the manager already created `/srv/gml/docker-compose.yml` and `/srv/gml/.env`, restart the created stack after correcting DNS/network issues:

```bash
cd /srv/gml
sudo docker compose up -d
sudo docker compose logs --tail 200 gml-web-proxy
```

Then repeat the external HTTP, HTTPS and `/health` checks above. `up -d` starts containers without waiting for a certificate as Gml Manager does. Do not rerun `install` into a nonempty directory or delete data to fix DNS.

### Containers run but the dashboard is unavailable

Check HTTPS by domain from an external machine, not only container status. If `/health` fails, inspect the API:

```bash
cd /srv/gml
sudo docker compose logs --tail 100 gml-web-api
```

Access by IP may produce a certificate hostname error; use the domain configured for `global`. If the domain serves another website, check DNS and which server actually receives ports 80/443.

## Other ways to run GML

If Gml Manager does not suit your system, follow [manual installation](install-source). For development on your laptop without Docker, use the [Rider/Visual Studio or script guide](development).

More information: [Gml.Backend repository](https://github.com/Gml-Launcher/Gml.Backend).
