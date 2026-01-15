# Working with Files

In the 0.1.0-rc1 update, we reorganized the file structure. Now all files related to the server part of our product are centrally stored in a dedicated directory. This simplifies the process of managing these files and speeds up routine tasks.

## File Directories

As an example of a server-side installation, a screenshot below demonstrates the specific directory where the installation was performed. This path serves as a pointer to the location of the server-side files after the installation procedure is successfully completed.

{/* ![server-install-from-source1.png](server-install-from-source1.png) */}

## Folder Hierarchy

```markdown
📂 .                                  // Project root directory
├── 📂 Attachments                    // Additional attachments and files (e.g., launcher .exe files)
│   └── 📄 win-x64-Gml.Launcher.exe   // Launcher executable for Windows
├── 📂 backups                        // Backups of the database and important files
├── 📄 data.db                        // Gml.Backend database
├── 📂 game data                      // Main directory for game data
│   └── 📂 neoforge                   // NeoForge data (example)
│       ├── 📂 client                 // Game client files
│       ├── 📂 libraries              // Game libraries
│       ├── 📂 mods                   // Modifications
│       └── 📂 resources              // Game resources
├── 📂 Launcher                       // Directory with launcher versions and source code
│   └── 📂 v2025.3.3                  // Launcher version
│       ├── 📄 Gml.Launcher.sln       // Project Solution file
│       ├── 📄 identifier.sqlite      // Identifier database
│       ├── 📄 load-repositories.bat  // Repository load script (Windows)
│       ├── 📄 load-repositories.sh   // Repository load script (Linux/macOS)
│       ├── 📄 README.md              // Version description
│       └── 📂 src                    // Launcher source code
├── 📂 LauncherBuilds                 // Launcher build history
│   └── 📂 build-15-01-2026 08-28-48  // Build from a specific date
│       └── 📂 win-x64                // Build files for a specific platform
├── 📂 shared data                    // Shared resources for all clients
│   ├── 📂 assets                     // Minecraft assets (indexes, objects)
│   │   ├── 📁 indexes                // Asset indexes
│   │   ├── 📁 log_configs            // Logging configurations
│   │   └── 📁 objects                // Resource objects
│   └── 📂 runtime                    // Platform-specific Java libraries
│       ├── 📁 linux                  // Libraries for Linux
│       ├── 📁 linux-i386             // Libraries for Linux x86
│       ├── 📁 mac-os                 // Libraries for MacOS
│       ├── 📁 mac-os-arm64           // Libraries for MacOS (ARM64)
│       ├── 📁 windows-arm64          // Libraries for Windows ARM64
│       ├── 📁 windows-x64            // Libraries for Windows x64
│       └── 📁 windows-x86            // Libraries for Windows x86
└── 📂 temp                           // Temporary files and build tools
    ├── 📂 DotnetBuild                // Environment for building .NET projects
    │   └── 📁 dotnet-8               // .NET SDK version 8
    └── 📂 JavaBuild                  // Environment for building Java projects
        └── 📁 jdk-22                 // JDK version 22
```

### Sections and Their Purpose:

- **Attachments**: Intended for storing additional attachments, such as compiled launcher executables (`.exe` for Windows, etc.), which can be automatically downloaded by users.
- **backups**: Contains automatic and manual backups of the `data.db` database, allowing for quick system recovery in case of failure.
- **data.db**: The main SQLite database file that stores all settings, users, and file information.
- **game data**: This directory stores game client files, categorized by type (e.g., NeoForge, Forge, Vanilla). Each version folder contains mods, libraries, and resources.
- **Launcher**: Contains source code and ready-made launcher builds for various versions. It includes scripts for environment preparation and building executables.
- **LauncherBuilds**: This directory stores the history of all performed launcher builds, grouped by their creation time and target platforms.
- **shared data**: Shared resources used by all game clients. This includes Minecraft assets and native libraries (runtime) for different operating systems.
- **temp**: Used for temporary storage of build tools such as .NET SDK and JDK, required for compiling the launcher and preparing game clients.

This structure makes it easy to find and manage the files needed to maintain and improve application functionality.