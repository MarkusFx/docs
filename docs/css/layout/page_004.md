---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_070 from '../.././.vitepress/examples/css/demo_070/index.html?raw';
import css_070 from '../.././.vitepress/examples/css/demo_070/style.css?raw';
import js_070 from '../.././.vitepress/examples/css/demo_070/script.js?raw';
</script>

# Табличная верстка

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Табличная верстка</title>
    </head>
    <body>
        <table>
            <tr>
                <td colspan="2" class="header">Заголовок сайта</td>
            </tr>
            <tr>
                <td class="sidebar">
                    <p>Боковая панель</p>
                    <p>Меню, ссылки</p>
                </td>
                <td class="content">
                    <p>Основной контент</p>
                    <p>Здесь находится основной текст страницы.</p>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="footer">© 2025 Мой сайт</td>
            </tr>
        </table>
    </body>
</html>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
* {
    margin: 0;
    padding: 0;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
}

td {
    border: 1px solid #333;
    padding: 10px;
}

.header {
    background: #333;
    color: #fff;
    text-align: center;
    font-size: 20px;
}

.sidebar {
    background: #f4f4f4;
    width: 200px;
    vertical-align: top;
}

.content {
    background: #eaeaea;
    vertical-align: top;
    height: 300px;
}

.footer {
    background: #333;
    color: #fff;
    text-align: center;
}
```

<CodePreview :html="html_070" :css="css_070" :js="js_070" height="500px" />
