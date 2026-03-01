# Running in Pterodactyl

> **Note**: Support has been tested on a limited number of server cores. If you successfully set up a server,
> please report it in the [project discussions](https://github.com/Gml-Launcher/Gml.Backend/discussions/80).

### Running a Minecraft Game Server

This section covers various ways to run a Minecraft game server, including using the **Pterodactyl** control panel, running on an operating system without additional software, and setting up the server in **Docker**.

---

### 1. **Preparing the Pterodactyl Panel**

* Make sure your server is installed and configured in the Pterodactyl panel.
* To set up a server in Pterodactyl, you will need:

    * Access to the control panel.
    * Pterodactyl installed beforehand.
    * A node added and available resource configuration (CPU, RAM, disk).

### 2. **Creating a New Server**

1. Log in to the Pterodactyl admin panel.
2. Go to **Servers** and click **Create Server**.
3. Fill in the basic parameters:

    * Server name.
    * Specify the node and resource allocation (CPU, RAM, disk).
    * Set the Docker image (e.g., `itzg/minecraft-server` for Paper).
    * Add ports and select the Minecraft server version (e.g., Paper 1.20.4).
4. In the **Startup** section, configure environment variables:

    * `TYPE` — select the server type (PAPER, SPIGOT, etc.).
    * `VERSION` — specify the server version (e.g., 1.20.4).
    * `EULA` — set to `TRUE` to accept the license agreement.
    * `MEMORY` — specify the amount of RAM (e.g., 4G).
    * If needed, add a JVM parameter for Authlib Injector:

      ```bash
      -javaagent:libraries/authlib-injector-1.2.5.jar=https://localhost:5003/api/v1/integrations/authlib/minecraft
      ```
5. Click **Create Server**.

### 3. **Starting the Server**

After creating the server, follow these steps:

1. In the Pterodactyl panel, select the server you created.
2. Go to the **Console** section.
3. Click **Start** to launch the server.
4. Wait for the server to complete the initial setup.

---

> Important!
> Do not leave `localhost:5003` if the server will be used by other players or deployed on a remote machine!
> In the `-javaagent` parameter, replace `https://localhost:5003/api/v1/integrations/authlib/minecraft` with your API address,
> where the **authlib injector** integration is deployed.

If your server is accessible at `https://api.example.com`, the line should look like this:

```bash
-javaagent:libraries/authlib-injector-1.2.5-alpha-1.jar=https://api.example.com/api/v1/integrations/authlib/minecraft -Dauthlibinjector.debug
```
