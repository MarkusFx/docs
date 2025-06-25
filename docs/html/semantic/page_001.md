---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_034 from '../.././.vitepress/examples/html/demo_034/index.html?raw';
import css_034 from '../.././.vitepress/examples/html/demo_034/style.css?raw';
import js_034 from '../.././.vitepress/examples/html/demo_034/script.js?raw';
</script>

# Введение

## Что такое семантические структуры?

**Семантические структуры** - это теги, которые описывают смысл (_значение_) контента, а не просто его внешний вид. Такие теги делают HTML-код понятнее как для разработчиков, так и для поисковиков, технических средств (_экранных читалок_) и других инструментов.

## Базовая семантическая структура

Например:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Моя первая страница</title>
    </head>
    <body>
        <header>
            <h1>Мой блог</h1>
            <nav>
                <a href="/">Главная</a>
                <a href="/about">О сайте</a>
            </nav>
        </header>

        <main>
            <article>
                <h2>Первая статья</h2>
                <p>Содержимое статьи...</p>
            </article>

            <section>
                <h3>Комментарии</h3>
                <p>Комментарий 1</p>
                <p>Комментарий 2</p>
            </section>
        </main>

        <aside>
            <h3>Категории</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </aside>

        <footer>
            <p>&copy; 2025 Мой блог</p>
        </footer>
    </body>
</html>
```

- **`<header>`** - шапка страницы или раздела;
- **`<main>`** - основное содержимое страницы;
    - **`<article>`** - независимая статья или запись;
    - **`<section>`** - логически обособленный раздел;
- **`<aside>`** - дополнительная информация;
- **`<footer>`** - колонтитул (_подвал_) страницы;

<CodePreview :html="html_034" :css="css_034" :js="js_034" height="500px" />
