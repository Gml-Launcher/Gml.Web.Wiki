import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Running in Docker

This page demonstrates example settings for running a Minecraft server in a Docker container, using the PAPER 1.20.4 server core as an example.

## 1. Preparing the Environment
Before starting, make sure you have the following software installed:

- Docker ([Official Website](https://www.docker.com/products/docker-desktop/))

## 2. Configuration File
Create a file named ```docker-compose.yml``` in a convenient location with the following content:
<Tabs>
    <TabItem value="original" label="Original" default>
        ```yaml
        version: '3.8'
        services:
            mc:
                image: itzg/minecraft-server
                tty: true
                stdin_open: true
                ports:
                    - "25565:25565"
                environment:
                    # Server core type
                    TYPE: PAPER
                    # Server version
                    VERSION: 1.20.4
                    EULA: "TRUE"
                    ONLINE_MODE: "TRUE"
                    ENFORCE_SECURE_PROFILE: "FALSE"
                    # RAM allocation
                    MEMORY: 4G
                    JVM_OPTS: "-javaagent:{PATH_TO_authlib-injector-1.2.5.jar}=https://{YOUR_GML_API_ADDRESS}/api/v1/integrations/authlib/minecraft -Dauthlibinjector.debug"
                volumes:
                    # Create volume to persist server data
                    - ./data:/data
        ```
    </TabItem>
    <TabItem value="example" label="Example Filled File">
        ```yaml
        version: '3.8'
        services:
            mc:
                image: itzg/minecraft-server
                tty: true
                stdin_open: true
                ports:
                    - "25565:25565"
                environment:
                    # Server core type
                    TYPE: PAPER
                    # Server version
                    VERSION: 1.20.4
                    EULA: "TRUE"
                    ONLINE_MODE: "TRUE"
                    ENFORCE_SECURE_PROFILE: "FALSE"
                    # RAM allocation
                    MEMORY: 4G
                    JVM_OPTS: "-javaagent:libraries/authlib-injector-1.2.5-alpha-1.jar=https://localhost:5003/api/v1/integrations/authlib/minecraft -Dauthlibinjector.debug"
                volumes:
                    # Create volume to persist server data
                    - ./data:/data
        ```
        *Note that in this example, the file is placed in the `libraries` folder of your game server.*
    </TabItem>
</Tabs>

> Important!  
> Do not leave `localhost:5003` if the server will be used by other players or deployed on a remote machine!  
> In the `-javaagent` parameter, replace `https://localhost:5003/api/v1/integrations/authlib/minecraft` with the address of your API where the **authlib injector** integration is deployed.

If your server is available at `https://api.example.com`, the line should look like this:

```bash
-javaagent:libraries/authlib-injector-1.2.5-alpha-1.jar=https://api.example.com/api/v1/integrations/authlib/minecraft -Dauthlibinjector.debug
````

## 3. Downloading the Libraries

Create a folder `data/libraries` and download [authlib injector](https://github.com/Gml-Launcher/Gml.Authlib.Injector/releases/tag/authlib-injector-1.2.5-alpha-1) into it.

The final hierarchy should look like this:

```
📁 data
|-- 📁 libraries
    |-- 📄 authlib-injector-1.2.5-alpha-1.jar
📄 docker-compose.yml
```

## 4. First Launch

Run the following command in the console:

```bash
docker compose up
```

