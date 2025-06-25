---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_063 from '../.././.vitepress/examples/css/demo_063/index.html?raw';
import css_063 from '../.././.vitepress/examples/css/demo_063/style.css?raw';
import js_063 from '../.././.vitepress/examples/css/demo_063/script.js?raw';
</script>

# Контур

- **`outline-color`** - цвет контура;
- **`outline-style`** - стиль линии;
- **`outline-width`** - толщина линии;
- **`outline-offset`** - отступ между контуром и элементом;
- **`outline`** - краткая запись всех свойств;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="outlined-box">Блок с контуром</div>
<button class="button">Кнопка с контуром при наведении</button>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.outlined-box {
    margin: 20px;
    width: 200px;
    height: 100px;
    background: #00e5a4;
    outline: 3px dashed #5c73e7;
    outline-offset: 5px;
}

.button:hover {
    outline: 3px solid #3e63dd;
    outline-offset: 2px;
}
```

<CodePreview :html="html_063" :css="css_063" :js="js_063" height="250px" />
