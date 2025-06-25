---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_029 from '../.././.vitepress/examples/css/demo_029/index.html?raw';
import css_029 from '../.././.vitepress/examples/css/demo_029/style.css?raw';
import js_029 from '../.././.vitepress/examples/css/demo_029/script.js?raw';

import html_030 from '../.././.vitepress/examples/css/demo_030/index.html?raw';
import css_030 from '../.././.vitepress/examples/css/demo_030/style.css?raw';
import js_030 from '../.././.vitepress/examples/css/demo_030/script.js?raw';
</script>

# !important

- **`!important`** - ключевое слово, которое добавляют к значению свойства для того, чтобы повысить приоритет этого правила.

## Без использования !important

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<p style="color: red">Некоторый текст</p>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
p {
    color: green;
}
```

<CodePreview :html="html_029" :css="css_029" :js="js_029" height="100px" />

## С использованием !important

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<p style="color: red">Некоторый текст</p>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
p {
    color: green !important;
}
```

<CodePreview :html="html_030" :css="css_030" :js="js_030" height="100px" />
