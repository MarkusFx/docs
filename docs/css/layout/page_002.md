---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_068 from '../.././.vitepress/examples/css/demo_068/index.html?raw';
import css_068 from '../.././.vitepress/examples/css/demo_068/style.css?raw';
import js_068 from '../.././.vitepress/examples/css/demo_068/script.js?raw';
</script>

# Блочная верстка

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Блочная верстка</title>
    </head>
    <body>
        <header>
            <h1>Заголовок сайта</h1>
        </header>

        <nav>Меню: Главная | О нас | Контакты</nav>

        <div class="content">
            <h2>Основной контент</h2>
            <p>Это основной текст сайта.</p>
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

.content {
    background: #eaeaea;
    padding: 15px;
    margin-top: 10px;
}

footer {
    background: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
    margin-top: 10px;
}
```

<CodePreview :html="html_068" :css="css_068" :js="js_068" height="500px" />
