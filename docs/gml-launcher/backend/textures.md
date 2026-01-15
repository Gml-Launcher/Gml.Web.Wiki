---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Skins and Cloaks

We have tried to simplify skin uploads for your game project as much as possible; you only need to know the actual URL of the skin.
For Minecraft projects, this is the link to the textures in the user dashboard. If you don't have a website or a project with a dashboard, you can use [TLauncher](https://tlauncher.org/en/catalog/skins/nickname/) or [Ely.by](https://ely.by).

## Using Ready-Made Services

You might have already seen skins by nicknames online. If you don't have a website or a skin system, you can use them.
No extra setup is needed. You can use one of the following options:

<Tabs>
<TabItem value="aurora" label="Aurora">
```yaml
# Skins
https://api.aurora-launcher.ru/mojang/username/skin/{userName}
# Cloaks
https://api.aurora-launcher.ru/mojang/username/cape/{userName}
```
</TabItem>
<TabItem value="danielraybone" label="Danielraybone">
```yaml
# Skins
https://skins.danielraybone.com/v1/skin/{userName}
# Cloaks
https://skins.danielraybone.com/v1/cape/{userName}
```
</TabItem>
<TabItem value="tlauncher" label="TLauncher">
```yaml
# Skins
https://tlauncher.org/upload/all/nickname/{userName}.png
# Cloaks
https://tlauncher.org/upload/all/cloaks/{userName}.png
```
</TabItem>
<TabItem value="tmonitoring" label="T-Monitoring">
```yaml
# Skins
https://tmonitoring.com/uploads/catalog/skins/nickname/{userName}.png
# Cloaks
https://tmonitoring.com/uploads/catalog/capes/{userName}.png
```
</TabItem>
</Tabs>


## Custom Skin Service

:::info
This option is suitable for projects that have a website with the ability to upload skins or cloaks.
:::

If you have a user dashboard, you should know the actual texture URL for each user. For example, it might look like this:

Skins
```
https://mc.recloud.tech/cabinet/skins/GamerVII.png
```
Cloaks
```
https://mc.recloud.tech/cabinet/cloaks/GamerVII.png
```
These are the links you need to specify on the "Integrations" -> "Skin Service" page.

> **Important!** Instead of the nickname, you can use **UUID** or **Player Nickname**.
> Replace it according to the following rules:
> ```
> {userName} - User nickname
> {userUuid} - User UUID
> ```
> As a result, the links will look something like this:
> ```
> https://mc.recloud.tech/cabinet/skins/{userName}.png
> https://mc.recloud.tech/cabinet/cloaks/{userName}.png
> ```

## Troubleshooting Texture Issues

1. Check that skin and cloak files are downloadable via the link you specified on the "Integrations" -> "Skin Service" page.
2. Ensure you know which protocol (HTTP or HTTPS) is used to return textures and use it everywhere.
3. Use proxying for Gml.Web.Proxy: with port 5003 to load skins over HTTPS.
4. If you access the server via IP or localhost, use ONLY HTTP! Specify the same in the settings.
5. In case of incorrect configuration, check the "Panel Settings" section and follow the actions required by the panel.
6. Ensure that the launcher settings also specify the correct protocol used for the connection with Gml Api.