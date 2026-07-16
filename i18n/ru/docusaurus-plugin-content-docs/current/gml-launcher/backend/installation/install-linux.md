---
sidebar_position: 1
---

# GNU/Linux

Это руководство поможет установить серверную часть Gml.Backend в системе GNU/Linux.

## Предварительные требования

Перед началом установки убедитесь, что у вас есть:

- система GNU/Linux;
- доступ к терминалу с правами администратора;
- подключение к интернету;

## Установка через Gml Manager

Gml Manager — интерактивный скрипт для установки, обновления и удаления Gml.Backend. По умолчанию он использует последнию стабильную версию и устанавливает проект в `/srv/gml`.

Официально поддерживаются следующие дистрибутивы: Debian, Ubuntu, Fedora, Alpine Linux, Arch Linux и их производные. Для других дистрибутивов используйте [ручную установку](install-source).

Запустите менеджер установки:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh
```

Менеджер предложит выбрать действие (установка, обновление, удаление), директорию установки и версию проекта.

Если вы уже работаете от имени `root`, выполните команду без `sudo`:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sh
```

### Установка без интерактивных запросов

Чтобы установить проект в указанную директорию без дополнительных вопросов, передайте параметры через `sh -s --`:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- install --dir /srv/gml
```

Указывайте `--version` только в том случае, если хотите закрепить определённый тег Docker-образов:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- install --version v2025.3.2 --dir /srv/gml
```

### Обновление и удаление

Для обновления или удаления проекта выполните соответствующую команду или запустите менеджер установки и выберите нужное действие:

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- update --dir /srv/gml
```

```bash
curl -sSL https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend/refs/heads/master/installer/gml-manager.sh | sudo sh -s -- delete --dir /srv/gml
```

### Совместимость со старым установщиком

Если вы ранее устанавливали с помощью [старого установщика](https://github.com/Gml-Launcher/Gml.Backend.Installer), вы можете использовать Gml Manager для обновления проекта. Для этого выберите действие "обновить" и укажите директорию, в которую был установлен проект.

## Ручная установка

Если Gml Manager не подходит для вашей системы, воспользуйтесь инструкцией по [ручной установке](install-source).

## Сервисы после установки

- **Web API:** `http://<ваш_хост>:5000` — основной сервис;
- **Web Dashboard:** `http://<ваш_хост>:5003` — панель мониторинга и администрирования;
- **Gml.Web.Skin.Service:** `http://<ваш_хост>:5006` — сервис управления текстурами и персонализацией игроков.

Адреса и порты можно изменить в настройках проекта.

## Устранение неполадок

Если во время установки возникли проблемы:

- проверьте подключение к интернету;
- убедитесь, что есть возможность подключения к Docker Hub и GitHub (например так: `wget get.docker.com`, `wget raw.githubusercontent.com`);
- проверьте наличие прав администратора;
- убедитесь, что указанная директория установки доступна для записи и пуста.

Для получения дополнительной информации посетите репозиторий [Gml.Backend](https://github.com/Gml-Launcher/Gml.Backend).
