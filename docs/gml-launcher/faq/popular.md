---

sidebar_position: 1
id: Popular
-----------

import GmlFaq2 from '/img/gml-faq-2.png';
import GmlFaq3 from '/img/gml-faq-3.png';
import GmlFaq4 from '/img/gml-faq-4.png';
import GmlFaq5 from '/img/gml-faq-5.png';
import GmlFaq6 from '/img/gml-faq-6.png';
import GmlFaq7 from '/img/gml-faq-7.png';
import GmlFaq8 from '/img/gml-faq-8.png';
import GmlFaq9 from '/img/gml-faq-9.png';
import GmlFaq10 from '/img/gml-faq-10.png';
import GmlFaq11 from '/img/gml-faq-11.png';
import GmlFaq12 from '/img/gml-faq-12.png';
import GmlFaq13 from '/img/gml-faq-13.png';
import GmlFaq14 from '/img/gml-faq-14.png';

# Common Issues

Throughout the development and operation of the project, users have encountered many questions and problems.
In this section, we have collected the most frequently occurring ones and provided detailed answers and solutions.

## No Connection to the Api Server

A common issue is disconnection or lack of connection to Gml.Web.Api (the data provider).

### Symptoms

* Error: Authorization service error. Contact your platform administrator.
* If you run `docker ps -a` on your server, you may see the Gml.Web.Api container has stopped.
* The service is unavailable on port 5003, for example:

    * [http://localhost:5003](http://localhost:5003)
    * [http://192.168.31.200:5003](http://192.168.31.200:5003)
    * IP_SERVER:5000

### Possible Solutions

* Check your internet connection and ensure the connection parameters to the Gml Api server are configured correctly.
* Verify that your frontend can see the server, and that the device opening the Gml.Frontend page can reach Gml.Api [(How to check)](faq-details.md#api-available)
* Check the Gml.Frontend configuration file `.env` in the folder `src/Gml.Web.Client/.env`, it should look like:

  ```
  # Address to Web Api
  NEXT_PUBLIC_BACKEND_URL=http://localhost:5003/api/v1
  NEXT_PUBLIC_MARKETPLACE_URL=https://gml-market.recloud.tech
  ```

  > Note! There should be no trailing `/` in the address, and the correct protocol `http` or `https` must be selected.

If you have fixed the error, run the [update script](https://github.com/Gml-Launcher/Gml.Backend.Installer)
to re-download and rebuild all necessary system components.

## Game Settings Not Saved

This is normal launcher behavior. For security and integrity of game clients,
the launcher deletes everything unrelated to the [game client folder](Работа-с-модами.md), including files, when starting the game.
To solve this issue, a [whitelist of folders and files](gml-white-lists.md) has been created.
Read this page and add the `options.txt` file to the whitelist.

## Minecraft Version Not Available

We support only official game repositories and modded clients. All versions are automatically parsed from official sources.
This allows us not to track Minecraft updates manually—they will appear automatically without updating the Gml panel.

## Unable to Restore Game Profile

### Symptoms

You may see errors like these:

<p><img className="image-zoom-medium" src={GmlFaq2} alt=""/></p>  
Note that not all game clients support certain system formats.  
For example, 1.20.1 is not supported on OSX systems with 32-bit architecture, which is normal. Such errors can be ignored.

<p><img className="image-zoom-medium" src={GmlFaq3} alt=""/></p>
<p><img className="image-zoom-medium" src={GmlFaq4} alt=""/></p>  
If errors of this kind occur, they may be more serious. Gml Backend is designed to self-repair, but some administrator actions may break profile integrity. In such cases, the only solution is to recreate the game profile.

Also, such errors may happen if the Minecraft client file was not fully downloaded, or there was an ISO/OSI-level error.
In this case, try to "[Download the client again](profiles-download.md)" or, as mentioned earlier, recreate the profile completely. Transport-level issues cannot be fixed from the launcher side.

## Projects Missing in the Launcher

### Symptoms

<p><img className="image-zoom-medium" src={GmlFaq5} alt=""/></p>  
You cannot see all projects or only partially.

### Solution

You need to download the launcher’s dependent projects.
In the project root, there are bat and sh files to run depending on your operating system.
If nothing happens or the console closes immediately, check if [Git version control](https://git-scm.com) is installed.

## Connecting Discord

To connect Discord to your launcher,
[register a bot on the official Discord website](https://discord.com/developers/applications/)
and fill in the corresponding page in the Panel.

<p><img className="image-zoom-medium" src={GmlFaq6} alt=""/></p>

## File System Error

### Symptoms

<p><img className="image-zoom-medium" src={GmlFaq7} alt=""/></p>  
You see this error and the profile cannot be opened.

### Solution

The error is self-explanatory. Restart the entire Gml service with `docker compose restart` or restart the server itself.
This error can be caused by file locks from another process or system service.

## Server Not Starting with authlib-injector

### Symptoms

<p><img className="image-zoom-medium" src={GmlFaq8} alt=""/></p>  
You see this error and the game server crashes.

### Solution

The issue usually occurs because the wrong protocol (`http` or `https`) is specified in the startup parameter.

<p><img className="image-zoom-medium" src={GmlFaq9} alt=""/></p>  
For localhost and IP addresses, only ```http``` is allowed.  
Try visiting the address; you should see something like this:  
<p><img className="image-zoom-medium" src={GmlFaq10} alt=""/></p>

## JAVA Not Detected

### Symptoms

<p><img className="image-zoom-medium" src={GmlFaq11} alt=""/></p>  
You see this error, and the game client won’t start.

### Solution

Your profile is not fully downloaded or built on the server.
First, try rebuilding the profile or [download the profile again](profiles-download.md).

## Authorization Service Data Exchange Error

### Symptoms

<p><img className="image-zoom-medium" src={GmlFaq12} alt=""/></p>  
You see this error, and authorization fails.

### Solution

The Gml.Web.Api authorization server does not see (or returns an invalid response for) your site or CMS used for user authentication.
Ensure the `Integrations` -> `Authorization` section is configured correctly.

## GmlBackend Folder Empty

### Symptoms

<p><img className="image-zoom-medium" src={GmlFaq13} alt=""/></p>  
You see something like this in the ```data/GmlBackend``` folder.

This indicates an incorrect installation.
Ensure your project name in the `.env` file has no spaces or special characters.

## Forgot Admin Panel Password

### Solution

Run the [update script](https://github.com/Gml-Launcher/Gml.Backend.Installer).
The server part will remove all users but will not touch profiles.

## Project Not Found at Path

### Symptoms

<p><img className="image-zoom-medium" src={GmlFaq14} alt=""/></p>  
You see something like this.

Read the documentation [for building via the panel](launcher-panel-build-download.md#download).

## Login Error: Authentication Services Disabled for Maintenance

### Solution

This occurs when your system, site, or platform returns incorrect UUIDs.

[Solution for Azuriom](gml-auth-azuriom.md)
