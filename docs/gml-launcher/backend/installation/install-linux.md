---
sidebar_position: 1
---

# GNU/Linux

This guide will help you install the Gml.Backend server component on GNU/Linux systems. The installation script will automatically configure all the necessary components for you.

## Prerequisites

Before starting the installation, make sure you have:

- A GNU/Linux system with the systemd init system
- Access to a terminal with administrative privileges (sudo)
- An internet connection to download the installation files

### Officially Tested Distributions

The server side should work on most modern GNU/Linux distributions, but the official installation script presented here is limited in the distributions it supports. Here is a list of officially tested distributions and their support status:

- ✅ Fully supported
- ⚠️ Should work but has not been tested
- ❌ Not supported, use [manual installation](install-source)

| Distribution | Versions |
| ------------ | -------- |
| `Ubuntu`     | 25 ✅ 24 ⚠️ 22 ⚠️ |
| `Debian`     | 13 ✅ 12 ⚠️ |
| `Fedora`     | 42 ✅ 41 ⚠️ |
| `Rocky`      | 9  ✅  |
| `Arch Linux` | ⚠️   |
| `Alpine`     | ❌   |

## Installation Steps

### Step 1: Downloading the Installation Script

Open a terminal and run the following command to download the installation script:

```bash
curl -O https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend.Installer/refs/heads/master/installer.sh
````

This command downloads the installation script from the GitHub repository.

### Step 2: Make the Script Executable

After the script is downloaded, you need to make it executable by running:

```bash
chmod +x ./installer.sh
````

This command gives the script permission to run on your system.

### Step 3: Run the Installation

Now you can start the installation by running:

```bash
./installer.sh --version v2025.3.2
````

The script will guide you through the installation process with prompts in Russian. Follow the on-screen instructions to complete the setup.

## Troubleshooting

If you encounter problems during the installation:

- Make sure you have an internet connection
- Check that you have administrative rights (try running with sudo if necessary)
- Check that the commands are entered correctly
- If the script fails to download, you can download it manually
  from the [GitHub repository](https://github.com/GamerVII-NET/Gml.Backend.Installer)

## Additional Information

For more information or to report issues, visit the
GitHub repository: [Gml.Backend.Installer](https://github.com/GamerVII-NET/Gml.Backend.Installer)