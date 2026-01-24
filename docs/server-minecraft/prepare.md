---
sidebar_position: 2
---

# Preparing the Game Server

Gml.Backend and Gml.Launcher natively support integration with the server via [authlib-injector](https://github.com/Gml-Launcher/Gml.Authlib.Injector).

:::warning
Attention! Gml.Backend uses a fork of this library during setup. We strongly recommend using this version.  
Current library version: [Version 1.2.5](https://github.com/Gml-Launcher/Gml.Authlib.Injector/releases/tag/authlib-injector-1.2.5-alpha-1)
:::

## System Requirements

Currently, the project supports all available server cores that support javaagent via authlib.

:::note
Note! The project has been tested on a very limited number of server cores, so this information may not be fully accurate.  
If you have experience with installation or successful server launch, [please share it here](https://github.com/Gml-Launcher/Gml.Backend/discussions/80)
:::