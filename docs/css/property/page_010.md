---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_061 from '../.././.vitepress/examples/css/demo_061/index.html?raw';
import css_061 from '../.././.vitepress/examples/css/demo_061/style.css?raw';
import js_061 from '../.././.vitepress/examples/css/demo_061/script.js?raw';
</script>

# Фон

- **`background-color`** - задаёт цвет фона;
- **`background-image`** - добавляет фоновое изображение;
- **`background-repeat`** - определяет повторение фона;
- **`background-position`** - задаёт положение фона;
- **`background-size`** - задаёт размер фонового изображения;
- **`background-attachment`** - определяет, прокручивается ли фон при прокрутке страницы;
- **`background`** - универсальное свойство для краткой записи;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="background-box">
    <p>Примерный пример...</p>
</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
body {
    background-image: url('/images/css/pepe-002.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 100px auto;
}

.background-box {
    width: 350px;
    height: 200px;
    border: 2px solid #333;
    padding: 20px;
    color: #fff;

    background-color: #5c73e7;
    background-image:
        url('/images/css/pepe-001.png'),
        linear-gradient(to right, #5c73e7, #00e5a4);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 150px auto;
}
```

<CodePreview :html="html_061" :css="css_061" :js="js_061" height="350px" />
