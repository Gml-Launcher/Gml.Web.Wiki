import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PublishVisualStudio1 from '/img/publish-visual-studio-1.png';
import PublishVisualStudio2 from '/img/publish-visual-studio-2.png';
import PublishVisualStudio3 from '/img/publish-visual-studio-3.png';
import PublishRider1 from '/img/publish-rider-1.png';
import PublishRider2 from '/img/publish-rider-2.png';

# Из исходников

### Загрузка лаунчера

Выполните команду в удобной для вас директории

<Tabs>
    <TabItem value="stable" label="Стабильная версия" default>
        ```bash
        git clone --recursive https://github.com/GamerVII-NET/Gml.Launcher.git
        ```
    </TabItem>
    <TabItem value="latest" label="Последняя актуальная">
        ```bash
        git clone --recursive --branch develop https://github.com/GamerVII-NET/Gml.Launcher.git
        ```
    </TabItem>
</Tabs>
После установки у вас будет папка Gml.Launcher, откройте в ней `Gml.Launcher.sln` в
одном [из загруженных IDE](Installation.md)

## Настройка проекта

1. Откройте файл `src/Gml.Launcher/Assets/Resources/ResourceKeysDictionary.cs`
2. Отредактируйте файл

```C#
public static class ResourceKeysDictionary
{
    ...
    
    public const string Host = "{{HOST}}";
    public const string FolderName = "{{FOLDER_NAME}}";
}
```

> - Замените переменную `{{HOST}}` на адрес [вашего API](server-install-from-source.md)
> - Замените переменную `{{FOLDER_NAME}}` на наименование папки, которая будет создаваться у пользователей


3. Соберите проект

<Tabs>
    <TabItem value="visual-studio" label="Visual studio">
        <p><img className="image-zoom-medium" src={PublishVisualStudio1} alt="Установка Visual Studio 1"/></p>
        <p><img className="image-zoom-medium" src={PublishVisualStudio2} alt="Установка Visual Studio 2"/></p>
        <p><img className="image-zoom-medium" src={PublishVisualStudio3} alt="Установка Visual Studio 3"/></p>
    </TabItem>
    <TabItem value="rider" label="JetBrains Rider">
        <p><img className="image-zoom-medium" src={PublishRider1} alt="Установка Rider 1"/></p>
        <p><img className="image-zoom-medium" src={PublishRider2} alt="Установка Rider 2"/></p>
    </TabItem>
</Tabs>