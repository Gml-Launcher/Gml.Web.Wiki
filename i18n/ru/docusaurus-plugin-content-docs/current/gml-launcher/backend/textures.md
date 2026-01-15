---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Скины и плащи


Мы постарались максимально упростить загрузку скинов для вашего игрового проекта, достаточно знать реальный адрес скина.
Для игровых проектов майнкрафт - это ссылка на текстуры в личном кабинете, если у вас нет сайта или проекта с личным
кабинетом,
вы можете использовать [TLauncher](https://tlauncher.org/ru/catalog/skins/nickname/) или [Ely.by](https://ely.by)

## Использование готовых сервисов

На просторах интернета вы могли уже встречать скины по никам, и если у вас нет ни сайта, ни системы скинов - используйте
их.
Для их работы ничего не нужно. Вы можете использовать один из следующих вариантов:

<Tabs>
<TabItem value="aurora" label="Aurora">
```yaml
# Скины
https://api.aurora-launcher.ru/mojang/username/skin/{userName}
# Плащи
https://api.aurora-launcher.ru/mojang/username/cape/{userName}
```
</TabItem>
<TabItem value="danielraybone" label="Danielraybone">
```yaml
# Скины
https://skins.danielraybone.com/v1/skin/{userName}
# Плащи
https://skins.danielraybone.com/v1/cape/{userName}
```
</TabItem>
<TabItem value="tlauncher" label="TLauncher">
```yaml
# Скины
https://tlauncher.org/upload/all/nickname/{userName}.png
# Плащи
https://tlauncher.org/upload/all/cloaks/{userName}.png
```
</TabItem>
<TabItem value="tmonitoring" label="T-Monitoring">
```yaml
# Скины
https://tmonitoring.com/uploads/catalog/skins/nickname/{userName}.png
# Плащи
https://tmonitoring.com/uploads/catalog/capes/{userName}.png
```
</TabItem>
</Tabs>


## Свой сервис скинов

:::info
Данных вариант подходит для тех проектов, у которых есть сайт с возможностью загрузки скинов или плащей
:::

Если вы имеете личный кабинет, вы должны знать реальный адрес текстуры, по каждому пользователю, например им может
выступать
примерно такой адрес:

Скины
```
https://mc.recloud.tech/cabient/skins/GamerVII.png
```
Плащи
```
https://mc.recloud.tech/cabient/cloaks/GamerVII.png
```
Именно такие ссылки нужно указать на странице "Интеграции" -> "Сервис скинов"

> **Важно!** Вместо ника вы можете использовать **UUID** или **Ник игрока**
> Замените его в соответствии со следующими правилами
> ```
> {userName} - Ник пользователя
> {userUuid} - Uuid пользователя
> ```
> По итогу ссылки будут выглядеть примерно следующим образом:
> ```
> https://mc.recloud.tech/cabient/skins/{userName}.png
> https://mc.recloud.tech/cabient/cloaks/{userName}.png
> ```

## Устранение проблем с текстурами

1. Проверьте, что файлы скинов и плащей скачиваются, по ссылке, которую вы указали на странице "Интеграции" -> "Сервис
   скинов"
2. Убедитесь по какому протоколу возвращаются текстуры по HTTP или HTTPS и используйте его везде
3. Используйте проксирование для Gml.Web.Proxy: c 5003 портом, для того чтобы грузить скины по HTTPS
4. Если вы обращаетесь к серверу по IP или localhost - используйте ТОЛЬКО HTTP! В настройках укажите его же!
5. В случае неправильной конфигурации - проверьте раздел Настройки панели и выполните действия, которые требует панель
6. Убедитесь, что в настройках лаунчера так же указан верный протокол, по которому работает связка с Gml Api