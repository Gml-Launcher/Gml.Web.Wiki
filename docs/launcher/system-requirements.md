---
sidebar_position: 2
---
# System Requirements

Ensure your hardware can support the project installation.

## Launcher Requirements

The launcher can run on the following platforms:

| Platform     | Supported |
|--------------|-----------|
| `Windows`    | ✔️        |
| `macOS`      | ✔️        |
| `Linux`      | ✔️        |

## Windows

* Windows 8.1
* Windows 10
* Windows 11

Although Avalonia applications run on Windows 7, this legacy platform receives limited support. We no longer fix Windows 7-specific bugs.

## macOS

* macOS 10.14 (Mojave)
* macOS 10.15 (Catalina)
* macOS 11 (Big Sur)
* macOS 12 (Monterey)
* macOS 13 (Ventura)
* macOS 14 (Sonoma)
* macOS 15 (Sequoia)

## Linux

* Debian 9+
* Ubuntu 16.04+
* Fedora 30+

The launcher works stably on most Linux distributions that support .NET SDK and have X11 or framebuffer capabilities. Officially supported distributions are Debian 9+, Ubuntu 16.04+, and Fedora 30+, but many other distributions also successfully run Avalonia-based applications. We are actively working to expand Linux compatibility.

WSL 2 distributions are also supported; however, the dependencies `libice6`, `libsm6`, and `libfontconfig1` must be installed manually.
