export default [
    {
        text: '1С',
        items: [
            { text: 'Введение', link: '/1c/page_001' },
            {
                text: 'Синтаксис 1С',
                collapsible: true,
                collapsed: true,
                items: [
                    {
                        text: 'Объявление переменной',
                        link: '/1c/syntax/page_001',
                    },
                    {
                        text: 'Вывод сообщения. Комментарии',
                        link: '/1c/syntax/page_002',
                    },
                    {
                        text: 'Простейшие арифметические операции',
                        link: '/1c/syntax/page_003',
                    },
                    { text: 'Типы данных', link: '/1c/syntax/page_004' },
                    {
                        text: 'Проверка на тип данных',
                        link: '/1c/syntax/page_005',
                    },
                    {
                        text: 'Преобразование типов',
                        link: '/1c/syntax/page_006',
                    },
                    { text: 'Условный оператор', link: '/1c/syntax/page_007' },
                    { text: 'Операции', link: '/1c/syntax/page_008' },
                    { text: 'Циклы', link: '/1c/syntax/page_009' },
                    { text: 'Процедуры', link: '/1c/syntax/page_010' },
                    { text: 'Функции', link: '/1c/syntax/page_011' },
                    { text: 'Встроенные функции', link: '/1c/syntax/page_012' },
                    { text: 'Примеры', link: '/1c/syntax/page_013' },
                ],
            },
            { text: 'Отладчик', link: '/1c/page_002' },
            // {
            //     text: 'Коллекции',
            //     collapsible: true,
            //     collapsed: true,
            //     items: [
            //         {
            //             text: 'Массив',
            //             link: '/1c/collections/page_001',
            //         },
            //     ],
            // },
        ],
    },
]
