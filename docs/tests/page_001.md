<script setup>
import CodePreview from '.././.vitepress/components/CodePreview.vue';

import html_1 from '../.vitepress/examples/different/demo_1/index.html?raw';
import css_1 from '../.vitepress/examples/different/demo_1/style.css?raw';
import js_1 from '../.vitepress/examples/different/demo_1/script.js?raw';

import html_3 from '../.vitepress/examples/different/demo_3/index.html?raw';
import css_3 from '../.vitepress/examples/different/demo_3/style.css?raw';
import js_3 from '../.vitepress/examples/different/demo_3/script.js?raw';

import html_004 from '../.vitepress/examples/different/demo_004/index.html?raw';
import css_004 from '../.vitepress/examples/different/demo_004/style.css?raw';
import js_004 from '../.vitepress/examples/different/demo_004/script.js?raw';

</script>

# Тесты

## Menu Grid

<CodePreview :html="html_004" :css="css_004" :js="js_004" height="900px" />

## Menu Grid

<CodePreview :html="html_3" :css="css_3" :js="js_3" height="910px" />

## iframe c HTML, CSS, JavaScript

**`index.html`**:

```html
<h1>Hello World!</h1>
<button
    style="padding: 8px 16px; border-radius: 4px"
    onclick="console.log('Hello!')"
>
    Чпоньк
</button>
```

**`style.css`**:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    font-family: Arial, sans-serif;
}
h1 {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
button {
    background: white;
    color: #764ba2;
    border: none;
    cursor: pointer;
}
```

**`script.js`**:

```js
console.log('Preview loaded!')
```

Результат:

<CodePreview :html="html_1" :css="css_1" :js="js_1" height="170px" />
