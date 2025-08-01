export default [
    {
        text: 'HTML',
        items: [
            { text: 'Введение', link: '/html/page_001' },
            {
                text: 'Элементы',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'Элементы группировки',
                        link: '/html/elements/page_001',
                    },
                    { text: 'Заголовки', link: '/html/elements/page_002' },
                    {
                        text: 'Форматирование текста',
                        link: '/html/elements/page_003',
                    },
                    { text: 'Изображения', link: '/html/elements/page_004' },
                    { text: 'Списки', link: '/html/elements/page_005' },
                    { text: 'details', link: '/html/elements/page_006' },
                    { text: 'Таблицы', link: '/html/elements/page_007' },
                    { text: 'Ссылки', link: '/html/elements/page_008' },
                    { text: 'Фреймы', link: '/html/elements/page_009' },
                ],
            },
            {
                text: 'Формы',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Создание формы', link: '/html/forms/page_001' },
                    { text: 'Элементы форм', link: '/html/forms/page_002' },
                ],
            },
            {
                text: 'Семантические структуры',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Введение', link: '/html/semantic/page_001' },
                    { text: 'Элементы', link: '/html/semantic/page_002' },
                ],
            },
            { text: 'Мультимедиа', link: '/html/page_005' },
        ],
    },
]
