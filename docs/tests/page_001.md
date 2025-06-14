<script setup>
import CodePreview from '.././.vitepress/components/CodePreview.vue'

import html_1 from '.././.vitepress/examples/demo_1/index.html?raw'
import css_1 from '.././.vitepress/examples/demo_1/style.css?raw'
import js_1 from '.././.vitepress/examples/demo_1/script.js?raw'

import html_2 from '.././.vitepress/examples/demo_2/index.html?raw'
import css_2 from '.././.vitepress/examples/demo_2/style.css?raw'
import js_2 from '.././.vitepress/examples/demo_2/script.js?raw'

import html_3 from '.././.vitepress/examples/demo_3/index.html?raw'
import css_3 from '.././.vitepress/examples/demo_3/style.css?raw'
import js_3 from '.././.vitepress/examples/demo_3/script.js?raw'

</script>

# Тесты

## Menu Grid

<CodePreview :html="html_3" :css="css_3" :js="js_3" height="910px" />

[//]: # '## Canvas'
[//]: #
[//]: # '<CodePreview :html="html_2" :css="css_2" :js="js_2" height="470px" />'

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
