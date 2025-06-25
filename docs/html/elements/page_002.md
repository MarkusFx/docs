---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_007 from '../.././.vitepress/examples/html/demo_007/index.html?raw';
import css_007 from '../.././.vitepress/examples/html/demo_007/style.css?raw';
import js_007 from '../.././.vitepress/examples/html/demo_007/script.js?raw';
</script>

# Заголовки

Элементы **`<h1>`**, **`<h2>`**, **`<h3>`**, **`<h4>`**, **`<h5>`** и **`<h6>`** служат для создания заголовков.

Например:

```html [index.html] :line-numbers
<div>
    <h1>Заголовок 1-го уровня</h1>
    <h2>Заголовок 2-го уровня</h2>
    <h3>Заголовок 3-го уровня</h3>
    <h4>Заголовок 4-го уровня</h4>
    <h5>Заголовок 5-го уровня</h5>
    <h6>Заголовок 6-го уровня</h6>
</div>
```

<CodePreview :html="html_007" :css="css_007" :js="js_007" height="350px" />
