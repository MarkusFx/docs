export default {
    lang: 'ru-RU',
    title: 'MarkusFx (itPit)',
    description: 'Моя документация на VitePress',
    head: [['link', { rel: 'icon', href: '/favicon/favicon.ico' }]],
    // lastUpdated: true,

    themeConfig: {
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'VitePress', link: '/vitepress/page_1' },
            { text: 'Jest', link: '/jest/page_1' },
            { text: 'GSAP', link: '/gsap/page_1' },
            { text: 'Socket.io', link: '/socketio/page_1' },
            // {
            //     text: 'DropDown Menu Test)',
            //     items: [
            //         { text: 'Page_1', link: '/socketio/page_1' },
            //         { text: 'Page_2', link: '/socketio/page_1' },
            //         { text: 'Page_3', link: '/socketio/page_1' },
            //     ],
            // },
        ],

        sidebar: {
            '/vitepress/': [
                {
                    text: 'VitePress',
                    items: [{ text: 'Введение', link: '/vitepress/page_1' }],
                },
            ],
            '/jest/': [
                {
                    text: 'Jest',
                    items: [{ text: 'Введение', link: '/jest/page_1' }],
                },
            ],
            '/gsap/': [
                {
                    text: 'GSAP',
                    items: [{ text: 'Введение', link: '/gsap/page_1' }],
                },
            ],
            '/socketio/': [
                {
                    text: 'Socket.io',
                    items: [{ text: 'Введение', link: '/socketio/page_1' }],
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
    },
}
