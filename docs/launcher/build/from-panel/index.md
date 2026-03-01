# Через панель

import {DocsCardList} from "@site/src/components/DocsCard";
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

Этот раздел поможет вам собрать лаунчер Gml.Launcher в самой панели

<DocsCardList list={useCurrentSidebarCategory().items} />