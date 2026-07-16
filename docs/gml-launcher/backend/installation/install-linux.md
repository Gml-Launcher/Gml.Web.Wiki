---
sidebar_position: 1
---

# GNU/Linux

This guide will help you install the Gml.Backend server component on a GNU/Linux system.

## Prerequisites

Before starting the installation, make sure you have:

- a GNU/Linux system;
- access to a terminal with administrator privileges;
- an internet connection.

## Installation with Gml Manager

Gml Manager is an interactive script for installing, updating, and removing Gml.Backend. By default, it uses the latest stable version and installs the project in `/srv/gml`.

The following distributions and their derivatives are officially supported: Debian, Ubuntu, Fedora, Alpine Linux, and Arch Linux. For other distributions, use the [manual installation](install-source) instructions.

Run the installation manager:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh
```

The manager will prompt you to choose an action (installation, update, or removal), the installation directory, and the project version.

If you are already running as `root`, run the command without `sudo`:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sh
```

### Non-interactive installation

To install the project in a specified directory without additional prompts, pass the parameters through `sh -s --`:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- install --dir /srv/gml
```

Specify `--version` only if you want to pin a specific Docker image tag:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- install --version v2025.3.2 --dir /srv/gml
```

### Updating and removing

To update or remove the project, run the corresponding command or start the installation manager and select the required action:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- update --dir /srv/gml
```

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- delete --dir /srv/gml
```

### Compatibility with the legacy installer

If you previously installed the project using the [legacy installer](https://github.com/Gml-Launcher/Gml.Backend.Installer), you can use Gml Manager to update it. Select the `update` action and specify the directory where the project was installed.

## Manual installation

If Gml Manager is not suitable for your system, follow the [manual installation](install-source) instructions.

## Services after installation

- **Web API:** `http://<your_host>:5000` — the main service;
- **Web Dashboard:** `http://<your_host>:5003` — the monitoring and administration panel;
- **Gml.Web.Skin.Service:** `http://<your_host>:5006` — the service for managing player textures and personalization.

You can change the addresses and ports in the project settings.

## Troubleshooting

If you encounter problems during installation:

- check your internet connection;
- make sure Docker Hub and GitHub are accessible (for example, run `wget get.docker.com` and `wget raw.githubusercontent.com`);
- check that you have administrator privileges;
- make sure the specified installation directory is writable and empty.

For more information, visit the [Gml.Backend repository](https://github.com/Gml-Launcher/Gml.Backend).
