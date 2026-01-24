---
sidebar_position: 1
---
import AvaloniaVsExtensionMarketplaceScreenshot from '/img/avalonia-plugin-vs.png';
import AvaloniaVsExtensionNuGetScreenshot from '/img/avalonia-vs-extension-nuget.png';

# Подготовка

Разработанное решение имеет специфичный стек технологий разработки,
установка и настройка которого требует дополнительных навыков и умений.

## Установка DotNET

Первым делом необходимо установить фреймворк, на котором ведется разработка проекта в зависимости от вашей операционной системы

Официальный сайт: [Скачать](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

# Настройка редактора

Вы можете создавать приложения на Avalonia в любом редакторе кода, но мы настоятельно рекомендуем использовать IDE с поддержкой Avalonia XAML, предварительным просмотром и другими полезными функциями.

## JetBrains Rider


Среда разработки [JetBrains Rider](https://www.jetbrains.com/rider/), имеет встроенную поддержку Avalonia XAML с версии 2020.3, а также имеет отличную поддержку специфичных для Avalonia XAML функций и пользовательского кода.

Rider не имеет встроенного предпросмотра, но он находится в разработке. Смотрите [GitHub проект](https://github.com/ForNeVeR/AvaloniaRider) для дополнительной информации и инструкции по установке.

## Visual Studio

Для поддержки Avalonia, необходимо установить расширение [Avalonia для Visual Studio](https://marketplace.visualstudio.com/items?itemName=AvaloniaTeam.AvaloniaVS).

<img className="center" src={AvaloniaVsExtensionMarketplaceScreenshot} alt="" />

Расширение поддерживает IntelliSense для Avalonia XAML и предварительный просмотр.

Установка расширения:

- В Visual Studio выбирете в меню **Расширения** -> **Управление расширениями**
- В поле **Поиск** введите "Avalonia"
- Нажмите **Загрузить** и следуйте инструкциям (для завершения установки, потребуется закрыть IDE)

<img className="center" src={AvaloniaVsExtensionNuGetScreenshot} alt="" />

:::info
Также вы можете скачать расширение [здесь](https://marketplace.visualstudio.com/items?itemName=AvaloniaTeam.AvaloniaVS).
:::

:::info
Если вы используете VS2021 или VS2019, то вам нужно скачать [старую версию расширения](https://marketplace.visualstudio.com/items?itemName=AvaloniaTeam.AvaloniaforVisualStudio).
:::