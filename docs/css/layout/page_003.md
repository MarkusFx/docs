---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_069 from '../.././.vitepress/examples/css/demo_069/index.html?raw';
import css_069 from '../.././.vitepress/examples/css/demo_069/style.css?raw';
import js_069 from '../.././.vitepress/examples/css/demo_069/script.js?raw';
</script>

# Верстка на float

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>flex</title>
    </head>
    <body>
        <header>
            <h1>Заголовок сайта</h1>
        </header>

        <nav>Меню: Главная | О нас | Контакты</nav>

        <div class="sidebar">
            <h3>Боковая панель</h3>
            <p>Здесь может быть меню, ссылки, виджеты.</p>
        </div>

        <div class="content">
            <h2>Основной контент</h2>
            <p>
                Это основной текст сайта, который занимает большую часть ширины.
            </p>
        </div>

        <footer>© 2025 Мой сайт</footer>
    </body>
</html>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

header {
    background: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

nav {
    background: #555;
    color: #fff;
    padding: 10px;
}

.sidebar {
    float: left;
    width: 30%;
    background: #f4f4f4;
    padding: 15px;
    box-sizing: border-box;
}

.content {
    float: left;
    width: 70%;
    padding: 15px;
    box-sizing: border-box;
}

footer {
    clear: both;
    background: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}
```

<CodePreview :html="html_069" :css="css_069" :js="js_069" height="500px" />
