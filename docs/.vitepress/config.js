// .vitepress/config.js
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import sidebars from './sidebars'

// Импорты для работы с файловой системой
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    vite: {
        server: {
            host: true,
            port: 5173,
        },
        plugins: [
            groupIconVitePlugin(),
            // Плагин для API работы с events.json
            {
                name: 'events-api',
                configureServer(server) {
                    server.middlewares.use(
                        '/api/events',
                        async (req, res, next) => {
                            // Разрешаем CORS для локальной разработки
                            res.setHeader('Access-Control-Allow-Origin', '*')
                            res.setHeader(
                                'Access-Control-Allow-Methods',
                                'GET, POST, OPTIONS',
                            )
                            res.setHeader(
                                'Access-Control-Allow-Headers',
                                'Content-Type',
                            )

                            // Обработка preflight-запросов
                            if (req.method === 'OPTIONS') {
                                res.writeHead(200)
                                res.end()
                                return
                            }

                            // Путь к файлу events.json относительно config.js
                            const eventsPath = path.resolve(
                                __dirname,
                                './theme/components/events.json',
                            )

                            if (req.method === 'GET') {
                                // Чтение файла
                                try {
                                    const data = fs.readFileSync(
                                        eventsPath,
                                        'utf-8',
                                    )
                                    res.writeHead(200, {
                                        'Content-Type': 'application/json',
                                    })
                                    res.end(data)
                                } catch (err) {
                                    // Если файл не найден, возвращаем пустой массив
                                    if (err.code === 'ENOENT') {
                                        res.writeHead(200, {
                                            'Content-Type': 'application/json',
                                        })
                                        res.end('[]')
                                    } else {
                                        res.writeHead(500)
                                        res.end(
                                            JSON.stringify({
                                                error: err.message,
                                            }),
                                        )
                                    }
                                }
                            } else if (req.method === 'POST') {
                                // Запись в файл
                                let body = ''
                                req.on('data', (chunk) => {
                                    body += chunk.toString()
                                })
                                req.on('end', async () => {
                                    try {
                                        const data = JSON.parse(body)
                                        // Форматируем и записываем
                                        fs.writeFileSync(
                                            eventsPath,
                                            JSON.stringify(data, null, 4),
                                            'utf-8',
                                        )
                                        res.writeHead(200, {
                                            'Content-Type': 'application/json',
                                        })
                                        res.end(
                                            JSON.stringify({ success: true }),
                                        )
                                    } catch (err) {
                                        res.writeHead(500)
                                        res.end(
                                            JSON.stringify({
                                                error: err.message,
                                            }),
                                        )
                                    }
                                })
                            } else {
                                next()
                            }
                        },
                    )
                },
            },
        ],
        // Эта настройка не влияет на middleware, но оставляем для совместимости
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    lang: 'ru-RU',
    title: 'MarkusFx (itPit)',
    description: 'Берлога слегка ленивого кота...',
    head: [
        ['link', { rel: 'icon', href: '/favicon/favicon.ico' }],
        [
            'script',
            {},
            `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                   m[i].l=1*new Date();
                   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js  ", "ym");
                
                   ym(102572208, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true
            });`,
        ],
        [
            'noscript',
            {},
            `<div><img src="https://mc.yandex.ru/watch/102572208  " style="position:absolute; left:-9999px;" alt="" /></div>`,
        ],
    ],
    themeConfig: {
        logo: 'favicon/android-chrome-192x192.png',
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Дорожная карта', link: '/road-map' },
            { text: 'Обновления', link: '/updates/2026/03-march' },
            { text: 'FAQ', link: '/faq' },
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

        // Поиск
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
            copyright: '© 2023-2026, MarkusFx (itPit)',
        },
    },
}
