---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_056 from '../.././.vitepress/examples/css/demo_056/index.html?raw';
import css_056 from '../.././.vitepress/examples/css/demo_056/style.css?raw';
import js_056 from '../.././.vitepress/examples/css/demo_056/script.js?raw';

import html_057 from '../.././.vitepress/examples/css/demo_057/index.html?raw';
import css_057 from '../.././.vitepress/examples/css/demo_057/style.css?raw';
import js_057 from '../.././.vitepress/examples/css/demo_057/script.js?raw';
</script>

# Отступы

## padding

**`padding` (_внутренний отступ_)** - пространство внутри элемента между его содержимым и рамкой (_**`border`**_).

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="box-padding">Я внутри с отступом!</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.box-padding {
    background: lightblue;
    padding: 20px;
    border: 2px solid blue;
}
```

<CodePreview :html="html_056" :css="css_056" :js="js_056" height="180px" />

Отдельно можно задавать:

- **`padding-top: 2px;`** - отступ сверху;
- **`padding-right 2px;`** - отступ справа;
- **`padding-bottom: 2px;`** - отступ снизу;
- **`padding-left: 2px;`** - отступ слева;
- **`padding: 2px 2px 2px 2px;`** - отступ сверху, справа, снизу, слева;

## margin

**`margin` (_внешний отступ_)** - пространство вне элемента, которое отделяет его от других элементов.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="box-margin">Я с внешним отступом!</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.box-margin {
    background: lightgreen;
    margin: 20px;
    border: 2px solid green;
}
```

<CodePreview :html="html_057" :css="css_057" :js="js_057" height="180px" />

Отдельно можно задавать:

- **`margin-top: 2px;`** - отступ сверху;
- **`margin-right 2px;`** - отступ справа;
- **`margin-bottom: 2px;`** - отступ снизу;
- **`margin-left: 2px;`** - отступ слева;
- **`margin: 2px 2px 2px 2px;`** - отступ сверху, справа, снизу, слева;
