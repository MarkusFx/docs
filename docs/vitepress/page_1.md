# VitePress

## Что такое VitePress?

**VitePress** — статический генератор на базе **Vue**.

Особенности:

- Использует **Vue 3** + **Vite**;
- Поддержка **Markdown**, навигации, тем, поиска;

## Установка

Выполним команды:

```sh
npm create vitepress@latest my-wiki
cd my-wiki
npm install
```

Итоговая структура каталогов и файлов:

```lua
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

Удалим файл `config.ts` и создадим `config.js`:

```diff {5,6}
my-wiki/
├── docs/
│   ├── index.md
│   └── .vitepress/
-│       └── config.ts
+│       └── config.js
├── node-modules/
│   └── ...
├── .gitignore
├── package-lock.json
└── package.json
```

```
my-wiki/
├── docs/
│   ├── index.md
│   └── .vitepress/
│       └── config.ts // [!code --]
│       └── config.js // [!code ++]
├── node-modules/
│   └── ...
├── .gitignore
├── package-lock.json
└── package.json
```
