import fs from 'fs'
import path from 'path'
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

// function getFirstH1(filePath) {
//     if (!fs.existsSync(filePath)) return null
//     const content = fs.readFileSync(filePath, 'utf-8')
//     const match = content.match(/^# (.+)/m)
//     return match ? match[1].trim() : null
// }
//
// function getSidebarItems(dir, basePath = '/css') {
//     const fullPath = path.resolve(dir)
//     const entries = fs.readdirSync(fullPath, { withFileTypes: true })
//
//     const items = entries
//         .filter(
//             (entry) =>
//                 !entry.name.startsWith('.') && entry.name !== 'header.md',
//         ) // ❗ исключаем header.md
//         .map((entry) => {
//             if (entry.isDirectory()) {
//                 const subDir = path.join(dir, entry.name)
//                 const headerPath = path.join(fullPath, entry.name, 'header.md')
//                 const groupTitle =
//                     getFirstH1(headerPath) || capitalize(entry.name)
//
//                 return {
//                     text: groupTitle,
//                     collapsed: true,
//                     items: getSidebarItems(subDir, `${basePath}/${entry.name}`),
//                 }
//             } else if (entry.isFile() && entry.name.endsWith('.md')) {
//                 const filePath = path.join(fullPath, entry.name)
//                 const name = entry.name.replace(/\.md$/, '')
//                 const link = `${basePath}${name === 'index' ? '/' : `/${name}`}`
//                 const text = getFirstH1(filePath) || capitalize(name)
//
//                 return { text, link }
//             }
//         })
//         .filter(Boolean)
//
//     return items
// }
//
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

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
    // lastUpdated: true,

    themeConfig: {
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Обновления', link: '/updates/page_001' },
            {
                text: 'Разделы',
                items: [
                    {
                        text: 'VitePress',
                        link: '/vitepress/page_001',
                        activeMatch: '^/vitepress/',
                    },
                    {
                        text: 'HTML',
                        link: '/html/page_001',
                        activeMatch: '^/html/',
                    },
                    {
                        text: 'CSS',
                        link: '/css/page_001',
                        activeMatch: '^/css/',
                    },
                    {
                        text: 'Jest',
                        link: '/jest/page_001',
                        activeMatch: '^/jest/',
                    },
                    { text: '1С', link: '/1c/page_001', activeMatch: '^/1c/' },
                ],
            },
        ],

        sidebar: {
            // '/css/': [
            //     {
            //         // text: 'CSS_TEST',
            //         items: [
            //             {
            //                 text: 'CSS',
            //                 items: getSidebarItems('./docs/css'),
            //             },
            //         ],
            //     },
            // ],
            '/updates/': [
                {
                    text: 'Обновления',
                    items: [
                        {
                            text: '2025',
                            collapsible: true,
                            collapsed: false,
                            items: [
                                { text: 'Июнь', link: '/updates/page_001' },
                            ],
                        },
                    ],
                },
            ],
            '/vitepress/': [
                {
                    text: 'VitePress',
                    items: [{ text: 'Введение', link: '/vitepress/page_001' }],
                },
            ],
            '/jest/': [
                {
                    text: 'Jest',
                    items: [
                        { text: 'Введение', link: '/jest/page_001' },
                        { text: 'Примеры', link: '/jest/page_002' },
                    ],
                },
            ],
            '/gsap/': [
                {
                    text: 'GSAP',
                    items: [{ text: 'Введение', link: '/gsap/page_001' }],
                },
            ],
            '/socketio/': [
                {
                    text: 'Socket.io',
                    items: [{ text: 'Введение', link: '/socketio/page_001' }],
                },
            ],
            '/rust/': [
                {
                    text: 'Rust',
                    items: [{ text: 'Введение', link: '/rust/page_001' }],
                },
            ],
            '/html/': [
                {
                    text: 'HTML',
                    items: [
                        { text: 'Введение', link: '/html/page_001' },
                        {
                            text: 'Элементы',
                            collapsible: true,
                            collapsed: false,
                            items: [
                                {
                                    text: 'Элементы группировки',
                                    link: '/html/elements/page_001',
                                },
                                {
                                    text: 'Заголовки',
                                    link: '/html/elements/page_002',
                                },
                                {
                                    text: 'Форматирование текста',
                                    link: '/html/elements/page_003',
                                },
                                {
                                    text: 'Изображения',
                                    link: '/html/elements/page_004',
                                },
                                {
                                    text: 'Списки',
                                    link: '/html/elements/page_005',
                                },
                                {
                                    text: 'details',
                                    link: '/html/elements/page_006',
                                },
                                {
                                    text: 'Таблицы',
                                    link: '/html/elements/page_007',
                                },
                                {
                                    text: 'Ссылки',
                                    link: '/html/elements/page_008',
                                },
                                {
                                    text: 'Фреймы',
                                    link: '/html/elements/page_009',
                                },
                            ],
                        },
                        {
                            text: 'Формы',
                            collapsible: true,
                            collapsed: false,
                            items: [
                                {
                                    text: 'Создание формы',
                                    link: '/html/forms/page_001',
                                },
                                {
                                    text: 'Элементы форм',
                                    link: '/html/forms/page_002',
                                },
                            ],
                        },
                        {
                            text: 'Семантические структуры',
                            collapsible: true,
                            collapsed: false,
                            items: [
                                {
                                    text: 'Введение',
                                    link: '/html/semantic/page_001',
                                },
                                {
                                    text: 'Элементы',
                                    link: '/html/semantic/page_002',
                                },
                            ],
                        },
                        {
                            text: 'Мультимедиа',
                            link: '/html/page_005',
                        },
                    ],
                },
            ],
            '/css/': [
                {
                    text: 'CSS',
                    collapsible: true,
                    items: [
                        { text: 'Введение', link: '/css/page_001' },
                        {
                            text: 'Селекторы',
                            collapsible: true,
                            collapsed: false,
                            items: [
                                {
                                    text: 'Основные типы селекторов',
                                    link: '/css/selectors/page_001',
                                },
                                {
                                    text: 'Комбинированные селекторы',
                                    link: '/css/selectors/page_002',
                                },
                                {
                                    text: 'Селекторы по атрибутам',
                                    link: '/css/selectors/page_003',
                                },
                                {
                                    text: 'Псевдоклассы',
                                    link: '/css/selectors/page_004',
                                },
                                {
                                    text: 'Псевдоэлементы',
                                    link: '/css/selectors/page_005',
                                },
                                {
                                    text: '!important',
                                    link: '/css/selectors/page_006',
                                },
                                {
                                    text: 'Каскадность стилей',
                                    link: '/css/selectors/page_007',
                                },
                            ],
                        },
                        {
                            text: 'Свойства',
                            collapsible: true,
                            collapsed: false,
                            items: [
                                {
                                    text: 'Цвет',
                                    link: '/css/property/page_001',
                                },
                                {
                                    text: 'Текст и шрифты',
                                    link: '/css/property/page_002',
                                },
                                {
                                    text: 'Списки',
                                    link: '/css/property/page_003',
                                },
                                {
                                    text: 'Таблицы',
                                    link: '/css/property/page_004',
                                },
                                {
                                    text: 'Отступы',
                                    link: '/css/property/page_005',
                                },
                                {
                                    text: 'Блочная модель',
                                    link: '/css/property/page_006',
                                },
                                {
                                    text: 'Границы',
                                    link: '/css/property/page_007',
                                },
                                {
                                    text: 'Контур',
                                    link: '/css/property/page_008',
                                },
                                {
                                    text: 'Единицы измерения',
                                    link: '/css/property/page_009',
                                },
                                {
                                    text: 'Фон',
                                    link: '/css/property/page_010',
                                },
                                {
                                    text: 'Тень',
                                    link: '/css/property/page_011',
                                },
                                {
                                    text: 'Обтекание',
                                    link: '/css/property/page_012',
                                },
                                {
                                    text: 'Прокрутка',
                                    link: '/css/property/page_013',
                                },
                                {
                                    text: 'Градиент',
                                    link: '/css/property/page_014',
                                },
                            ],
                        },
                    ],
                },
            ],
            '/1c/': [
                {
                    text: '1С',
                    items: [
                        { text: 'Введение', link: '/1c/page_001' },
                        { text: 'Синтаксис 1С', link: '/1c/page_002' },
                    ],
                },
            ],
        },

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
            copyright: '© 2023-2025 MarkusFx (itPit)',
        },
    },
}
