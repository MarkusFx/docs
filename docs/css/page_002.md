---
outline: [2, 3]
---

<script setup>
import CodePreview from '.././.vitepress/components/CodePreview.vue';

import html_118 from '.././.vitepress/examples/css/demo_118/index.html?raw';
import css_118 from '.././.vitepress/examples/css/demo_118/style.css?raw';
import js_118 from '.././.vitepress/examples/css/demo_118/script.js?raw';

import html_119 from '.././.vitepress/examples/css/demo_119/index.html?raw';
import css_119 from '.././.vitepress/examples/css/demo_119/style.css?raw';
import js_119 from '.././.vitepress/examples/css/demo_119/script.js?raw';
</script>

# Переменные

## Что такое переменные?

**Переменные** - свойства, которые позволяют хранить значения и переиспользовать их в разных местах стилей (_управление цветами, отступами, шрифтами и др._)

## Использование переменных

Например:

::: code-group

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>CSS Переменные</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h1>Заголовок</h1>
        <button class="btn">Кнопка</button>
    </body>
</html>
```

```css [styles.css] :line-numbers
:root {
    --main-color: #3498db;
    --accent-color: #e74c3c;
    --font-size: 20px;
    --padding: 12px 24px;
    --border-radius: 8px;
}

body {
    font-family: sans-serif;
    background: #f2f2f2;
    color: var(--main-color);
    padding: 40px;
}

h1 {
    font-size: var(--font-size);
    color: var(--accent-color);
}

.btn {
    background-color: var(--main-color);
    color: white;
    padding: var(--padding);
    font-size: var(--font-size);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: var(--accent-color);
}
```

:::

<CodePreview :html="html_118" :css="css_118" :js="js_118" height="250px" />

## Светлая и тёмня тема

Например:

::: code-group

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Переключение темы</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <button id="toggleTheme">Переключить тему</button>
        <h1>Заголовок</h1>
        <p>Это пример переключения темы с помощью CSS переменных.</p>

        <script>
            const toggleBtn = document.getElementById('toggleTheme')
            toggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark')
            })
        </script>
    </body>
</html>
```

```css [styles.css] :line-numbers
:root {
    --bg-color: #ffffff;
    --text-color: #222222;
    --accent-color: #3498db;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: sans-serif;
    transition:
        background-color 0.3s,
        color 0.3s;
    padding: 2rem;
}

button {
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 1rem;
}

body.dark {
    --bg-color: #1e1e1e;
    --text-color: #f1f1f1;
    --accent-color: #e67e22;
}
```

:::

<CodePreview :html="html_119" :css="css_119" :js="js_119" height="250px" />
