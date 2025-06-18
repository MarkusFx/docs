export default {
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
                    { text: 'VitePress', link: '/vitepress/page_001' },
                    { text: 'HTML', link: '/html/page_001' },
                    { text: 'Jest', link: '/jest/page_001' },
                    { text: '1С', link: '/1c/page_001' },
                ],
            },
        ],

        sidebar: {
            '/videos/': [
                {
                    text: 'Видео',
                    items: [{ text: 'Разное', link: '/videos/page_001' }],
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
                        { text: 'Элементы', link: '/html/page_002' },
                    ],
                },
            ],
            '/css/': [
                {
                    text: 'CSS',
                    items: [{ text: 'Введение', link: '/css/page_001' }],
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
