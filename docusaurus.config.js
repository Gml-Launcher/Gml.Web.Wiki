// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Gml Launcher Wiki',
    tagline: 'Документация Gml Launcher',
    favicon: 'img/favicon.ico',


    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://gml-launcher.ru',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Gml-Launcher', // Usually your GitHub org/user name.
    projectName: 'Gml.Web.Wiki', // Usually your repo name.

    onBrokenLinks: 'ignore',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ru',
        locales: ['en', 'ru', 'zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Gml-Launcher/Gml.Web.Wiki/tree/master',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Gml-Launcher',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    
    plugins: [
        require('./plugins/tailwind-plugin.cjs'),  
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/social-card.jpg',
            metadata: [

              ],
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'Gml Launcher Wiki',
                logo: {
                    alt: 'Gml Launcher Wiki Logo',
                    src: 'img/logo-gml.svg',
                },
                items: [
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'tutorialSidebar',
                    //     position: 'right',
                    //     label: 'Tutorial',
                    // },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    // {
                    //     href: 'https://github.com/facebook/docusaurus',
                    //     label: 'GitHub',
                    //     position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Продукты',
                        items: [
                            {
                                label: 'Gml Лаунчер',
                                to: '/docs/category/gml-launcher',
                            },
                        ],
                    },
                    // {
                    //     title: 'Community',
                    //     items: [
                    //         {
                    //             label: 'Stack Overflow',
                    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //         },
                    //         {
                    //             label: 'Discord',
                    //             href: 'https://discordapp.com/invite/docusaurus',
                    //         },
                    //         {
                    //             label: 'X',
                    //             href: 'https://x.com/docusaurus',
                    //         },
                    //     ],
                    // },
                    {
                        title: 'Компания',
                        items: [
                            {
                                label: 'Наш сайт',
                                href: 'https://recloud.tech',
                            },
                            {
                                label: 'Блог',
                                href: 'https://blog.recloud.tech',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/RecloudTech',
                            },
                        ],
                    },
                ],
                copyright: `© 2024–${new Date().getFullYear()} ООО «Реклауд Технологии», ИНН 2901318875. Все права защищены.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'HASL3AEWQH',

                // Public API key: it is safe to commit it
                apiKey: '17719a3ff51cc02615c9aead41cf0b87',

                indexName: 'Recloud Wiki',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs

                // Optional: Algolia search parameters
                searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: 'search',

                // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
                insights: false,

                // Optional: whether you want to use the new Ask AI feature (undefined by default)
                askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

              },
        }),
};

export default config;
