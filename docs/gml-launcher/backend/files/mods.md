# Working with Minecraft

Gml supports loading files from the client folder out of the box. Below is the client folder hierarchy and the files/folders a typical client should contain.

```text
📂 .                                  // Project root directory
├── 📂 config                         // Folder for mod configurations
├── 📂 client                         // Folder for Minecraft client files
│   ├── 📂 1.21.3                     // Subfolder for a specific version (Example: 1.21.3)
│   └── 📄 version_manifest_v2.json   // Version manifest describing available versions and configurations
├── 📂 libraries                      // Directory for libraries required to launch the client
│   ├── 📂 custom                     // Folder for custom libraries
│   ├── 📂 linux                      // Libraries for Linux
│   ├── 📂 osx                        // Libraries for macOS
│   └── 📂 windows                    // Libraries for Windows
├── 📂 mods                           // Folder for Minecraft modifications
├── 📂 resources                      // Additional resources like textures and sounds
├── 📂 texturepacks or resourcepacks // Game resource packs
├── 📄 options.txt                    // Minecraft settings (Must be whitelisted to prevent deletion)
└── 📄 servers.dat                    // File containing the list of game servers
```

---

### Folder Descriptions and Purpose

#### 📂 client

- Main directory for storing Minecraft client files.
- **1.21.3** – Folder for a specific version, containing all necessary files for that version.
- **version_manifest_v2.json** – JSON file containing information about available versions, dependencies, configurations, and required libraries/resources. Allows the launcher to dynamically update and select the correct versions.

#### 📂 libraries

- Directory containing libraries required for launching Minecraft, separated by platform for optimization:
  - **custom** – For custom or additional libraries that can be connected manually (e.g., used for authlib-injector).
  - **linux, osx, windows** – Platform-specific libraries, allowing the client to load only the files necessary for the user's operating system.

#### 📂 mods

- Folder for installing Minecraft modifications that add new content and features to the game.

#### 📂 resources

- Folder for additional resources like textures, sounds, and fonts used by the Minecraft client. Usually contains elements that can be shared across all versions.

#### 📂 config

- Folder for Minecraft mod settings. Contains configuration files that allow changing mod parameters.

#### 📄 options.txt

- Minecraft settings file storing all user preferences and game parameters.

#### 📄 servers.dat

- File containing the list of game servers, saving information about all servers the user has connected to. You can use it to add default servers.