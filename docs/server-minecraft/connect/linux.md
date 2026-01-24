# Running on Linux

### 1. Install JDK

Download and install **Java 17** or a newer version.

### 2. Download the Server Core

Download the server core, for example, [PAPER 1.20.4](https://papermc.io/downloads).

### 3. Configure Authlib Injector

1. Download [authlib-injector](https://github.com/Gml-Launcher/Gml.Authlib.Injector/releases/tag/authlib-injector-1.2.5-alpha-1)  
2. Place it in the server folder.

### 4. Start the Server

Create a file `start.bat` (for Windows) or `start.sh` (for Linux/MacOS) with the following content:

#### Windows (start.bat)

```bash
@echo off
java -Xmx4G -Xms4G -javaagent:authlib-injector-1.2.5-alpha-1.jar=https://localhost:5003/api/v1/integrations/authlib/minecraft -jar paper-1.20.4.jar nogui
pause
````

#### Linux/MacOS (start.sh)

```bash
#!/bin/bash
java -Xmx4G -Xms4G -javaagent:authlib-injector-1.2.5-alpha-1.jar=https://localhost:5003/api/v1/integrations/authlib/minecraft -jar paper-1.20.4.jar nogui
```

Make the script executable on Linux/MacOS:

```bash
chmod +x start.sh
```

Run the script. The server will start.

> Important!
> Do not leave `localhost:5003` if the server will be used by other players or deployed on a remote machine!
> In the `-javaagent` parameter, replace `https://localhost:5003/api/v1/integrations/authlib/minecraft` with the address of your API where the **authlib injector** integration is deployed.

If your server is available at `https://api.example.com`, the line should look like this:

```bash
-javaagent:libraries/authlib-injector-1.2.5-alpha-1.jar=https://api.example.com/api/v1/integrations/authlib/minecraft -Dauthlibinjector.debug
```