# Введение

## Что такое VitePress?

**VitePress** - статический генератор на базе **Vue**.

Особенности:

- Использует **Vue 3** + **Vite**;
- Поддержка **Markdown**, навигации, тем, поиска;

## Установка и первичная настройка

Выполним команды:

```sh :line-numbers
npm create vitepress@latest my-wiki
cd my-wiki
npm install
```

Итоговая структура каталогов и файлов:

<div class="no-lang-label">

```sh :line-numbers
my-wiki/
├── docs/
│   ├── index.md
│   └── .vitepress/
│       └── config.ts
├── node-modules/
│   └── ...
├── .gitignore
├── package-lock.json
└── package.json
```

</div>

Удалим файл **`docs/.vitepress/config.ts`**. Добавим файл **`docs/.vitepress/config.js`** и `docs/html/page_1.md`:

<div class="no-lang-label">

```sh :line-numbers
my-wiki/
├── docs/
│   ├── index.md
│   ├── html/               # [!code ++]
│   │   └── page_1.md       # [!code ++]
│   └── .vitepress/
│       ├── config.ts       # [!code --]
│       └── config.js       # [!code ++]
├── node-modules/
│   └── ...
├── .gitignore
├── package-lock.json
└── package.json
```

</div>

- **`docs/.vitepress/config.js`** - конфигурационный файл;
- **`docs/index.md`** - главная страница сайта;
- **`docs/html/page_1.md`** - дополнительные страницы сайта;

Изменим файл **`docs/.vitepress/config.js`**:

```js [config.js] :line-numbers
export default {
    title: 'My Wiki',
    description: 'Моя документация на VitePress',
    themeConfig: {
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'HTML', link: '/html/page_1' },
        ],
        sidebar: {
            '/html/': [
                {
                    text: 'HTML',
                    items: [{ text: 'Введение', link: '/html/page_1' }],
                },
            ],
        },
    },
}
```

- **`title`** - заголовок сайта (_отображается на вкладке_);
- **`description`** - описание сайта;
- **`themeConfig`** - настройка темы;
    - **`nav`** - верхнее меню навигации (_отображается на всех страницах сайта_);
        - **`{ text: 'Главная', link: '/' }`** - заголовок и путь до файла **`docs/index.md`** (_главная страница_);
        - **`{ text: 'HTML', link: '/html/page_1' }`** - заголовок и путь до файла **`docs/.vitepress/html/index.md`** (_дополнительная страница_);
    - **`sidebar`** - отображение бокового меню слева (_меню навигации по страницам_);
        - **`'/html/'`** - меню будет отображаться для всех страниц начинающихся с **`html`**;
            - **`text: 'HTML'`** - группа пунктов меню с заголовком **`HTML`**;
            - **`items`** - список страниц, которые будут отображаться в сайдбаре;

Изменим файл `docs/index.md`:

```md [index.md] :line-numbers
# Главная

Описание...
```

Изменим файл `docs/html/page_1.md`:

```md [page_1.md] :line-numbers
# HTML

Тут будет документация по HTML...
```

Запустим тестовый сервер. Выполним команду:

```sh :line-numbers
npm run dev
```

Главная страница будет доступна по адресу **`http://localhost:5173`**:

![vitepress_001](/images/vitepress/001.png){data-zoomable class="img-radius"}

Дополнительная по адресу **`http://localhost:5173/html/page_1.html`**:

![vitepress_002](/images/vitepress/002.png){data-zoomable class="img-radius"}

[//]: # '## Сборка и деплой на GitHub Pages'
[//]: #
[//]: # '- пакет gh-pages;'
[//]: #
[//]: # '...'
[//]: #
[//]: # '## Русификация элементов'
[//]: #
[//]: # '...'
[//]: #
[//]: # '## Добавление дополнительных страниц'
[//]: #
[//]: # '...'
[//]: #
[//]: # '## Группировка элементов в меню'
[//]: #
[//]: # '...'
[//]: #
[//]: # '## Добавление поиска'
[//]: #
[//]: # '- другая версия VitePress;'
[//]: #
[//]: # '...'
[//]: #
[//]: # '## Добавление футера'
[//]: #
[//]: # '...'
