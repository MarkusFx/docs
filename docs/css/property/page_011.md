---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_062 from '../.././.vitepress/examples/css/demo_062/index.html?raw';
import css_062 from '../.././.vitepress/examples/css/demo_062/style.css?raw';
import js_062 from '../.././.vitepress/examples/css/demo_062/script.js?raw';
</script>

# Тень

- **`box-shadow`** - тень для блока;
    - **`box-shadow: 5px 5px 10px rgba(0,0,0,0.5);`** - сдвиг тени вправо, вниз, размытие, цвет;
    - **`box-shadow: 0 0 5px red, 0 0 10px blue;`** - можно задавать несколько теней;
    - **`box-shadow: inset 0 0 10px #000;`** - тень внутри блока;
- **`text-shadow`** - тень для текста;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="box">Блок с тенью</div>
<div class="text">Текст с тенью</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.box {
    width: 200px;
    height: 100px;
    background: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
}

.text {
    font-size: 32px;
    text-shadow: 3px 3px 5px #000;
    padding: 10px;
}
```

<CodePreview :html="html_062" :css="css_062" :js="js_062" height="250px" />
