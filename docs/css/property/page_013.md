---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_065 from '../.././.vitepress/examples/css/demo_065/index.html?raw';
import css_065 from '../.././.vitepress/examples/css/demo_065/style.css?raw';
import js_065 from '../.././.vitepress/examples/css/demo_065/script.js?raw';
</script>

# Прокрутка

- **`overflow`** - определят, что делать с содержимым, которое выходит за рамки блока;
    - **`visible`** - содержимое выходит за пределы блока (_по умолчанию_);
    - **`hidden`** - обрезает содержимое (_прокрутка скрыта_);
    - **`scroll`** - всегда показывает полосы прокрутки;
    - **`auto`** - показывает полосы прокрутки только при необходимости;
- **`overflow-x`** - управляет прокруткой по горизонтали;
- **`overflow-y`** - управляет прокруткой по вертикали;
- **`scroll-behavior`** - определяет плавность прокрутки;
    - **`smooth`** - плавная прокрутка;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="scroll-box">
    <div class="content">
        Здесь содержимое, которое выходит за рамки контейнера, поэтому
        появляется прокрутка по вертикали и горизонтали.
    </div>
</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.scroll-box {
    width: 300px;
    height: 150px;
    border: 2px solid #333;
    overflow: auto;
    scroll-behavior: smooth;
    white-space: nowrap; /* без переноса слов на новую строку */
    padding: 10px;
}

.content {
    width: 600px;
    height: 300px;
    background: linear-gradient(45deg, #00e5a4, transparent);
}
```

<CodePreview :html="html_065" :css="css_065" :js="js_065" height="250px" />
