export default [
    {
        text: 'CSS',
        collapsible: true,
        items: [
            { text: 'Введение', link: '/css/page_001' },
            {
                text: 'Селекторы',
                collapsible: true,
                collapsed: true,
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
                    { text: 'Псевдоклассы', link: '/css/selectors/page_004' },
                    { text: 'Псевдоэлементы', link: '/css/selectors/page_005' },
                    { text: '!important', link: '/css/selectors/page_006' },
                    {
                        text: 'Каскадность стилей',
                        link: '/css/selectors/page_007',
                    },
                ],
            },
            {
                text: 'Свойства',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Цвет', link: '/css/property/page_001' },
                    { text: 'Текст и шрифты', link: '/css/property/page_002' },
                    { text: 'Списки', link: '/css/property/page_003' },
                    { text: 'Таблицы', link: '/css/property/page_004' },
                    { text: 'Отступы', link: '/css/property/page_005' },
                    { text: 'Блочная модель', link: '/css/property/page_006' },
                    { text: 'Границы', link: '/css/property/page_007' },
                    { text: 'Контур', link: '/css/property/page_008' },
                    {
                        text: 'Единицы измерения',
                        link: '/css/property/page_009',
                    },
                    { text: 'Фон', link: '/css/property/page_010' },
                    { text: 'Тень', link: '/css/property/page_011' },
                    { text: 'Обтекание', link: '/css/property/page_012' },
                    { text: 'Прокрутка', link: '/css/property/page_013' },
                    { text: 'Градиент', link: '/css/property/page_014' },
                ],
            },
            {
                text: 'Верстка',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Введение', link: '/css/layout/page_001' },
                    { text: 'Блочная верстка', link: '/css/layout/page_002' },
                    { text: 'Верстка на float', link: '/css/layout/page_003' },
                    { text: 'Табличная верстка', link: '/css/layout/page_004' },
                    { text: 'Свойство display', link: '/css/layout/page_005' },
                    { text: 'Flexbox', link: '/css/layout/page_007' },
                    { text: 'Grid Layout', link: '/css/layout/page_008' },
                    { text: 'Позиционирование', link: '/css/layout/page_006' },
                    {
                        text: 'Адаптивная верстка',
                        link: '/css/layout/page_009',
                    },
                ],
            },
            {
                text: 'Эффекты и анимации',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Трансформации', link: '/css/animation/page_001' },
                    { text: 'Переходы', link: '/css/animation/page_002' },
                    { text: 'Анимации', link: '/css/animation/page_003' },
                ],
            },
            { text: 'Переменные', link: '/css/page_002' },
        ],
    },
]
