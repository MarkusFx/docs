import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import sidebars from './sidebars'

export default {
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
    lang: 'ru-RU',
    title: 'MarkusFx (itPit)',
    description: 'Моя документация на VitePress',
    head: [
        ['link', { rel: 'icon', href: '/favicon/favicon.ico' }],
        [
            'script',
            {},
            `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                   m[i].l=1*new Date();
                   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                
                   ym(102572208, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true
            });`,
        ],
        [
            'noscript',
            {},
            `<div><img src="https://mc.yandex.ru/watch/102572208" style="position:absolute; left:-9999px;" alt="" /></div>`,
        ],
    ],
    themeConfig: {
        logo: 'favicon/android-chrome-192x192.png',
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Обновления', link: '/updates/2025/07-july' },
            // {
            //     text: 'Разделы',
            //     items: [
            //         {
            //             text: 'VitePress',
            //             link: '/vitepress/page_001',
            //             activeMatch: '^/vitepress/',
            //         },
            //         {
            //             text: 'HTML',
            //             link: '/html/page_001',
            //             activeMatch: '^/html/',
            //         },
            //         {
            //             text: 'CSS',
            //             link: '/css/page_001',
            //             activeMatch: '^/css/',
            //         },
            //         {
            //             text: 'Jest',
            //             link: '/jest/page_001',
            //             activeMatch: '^/jest/',
            //         },
            //         { text: '1С', link: '/1c/page_001', activeMatch: '^/1c/' },
            //     ],
            // },
        ],

        sidebar: sidebars,

        // Русификация UI элементов:
        outlineTitle: 'На этой странице',
        lastUpdatedText: 'Последнее обновление',
        docFooter: {
            prev: 'Назад',
            next: 'Вперёд',
        },
        darkModeSwitchLabel: 'Темная тема',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Навигация',

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: 'Поиск',
                        buttonAriaLabel: 'Поиск по документации',
                    },
                    modal: {
                        noResultsText: 'Ничего не найдено',
                        resetButtonTitle: 'Очистить',
                        footer: {
                            selectText: 'Выбрать',
                            navigateText: 'Навигация',
                            closeText: 'Закрыть (Esc)',
                        },
                        displayDetails: 'Показать подробный список',
                    },
                },
            },
        },
        footer: {
            message: '',
            copyright: '© 2023-2025, MarkusFx (itPit)',
        },
    },
}
