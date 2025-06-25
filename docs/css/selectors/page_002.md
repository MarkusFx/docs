---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_010 from '../.././.vitepress/examples/css/demo_010/index.html?raw';
import css_010 from '../.././.vitepress/examples/css/demo_010/style.css?raw';
import js_010 from '../.././.vitepress/examples/css/demo_010/script.js?raw';

import html_011 from '../.././.vitepress/examples/css/demo_011/index.html?raw';
import css_011 from '../.././.vitepress/examples/css/demo_011/style.css?raw';
import js_011 from '../.././.vitepress/examples/css/demo_011/script.js?raw';

import html_012 from '../.././.vitepress/examples/css/demo_012/index.html?raw';
import css_012 from '../.././.vitepress/examples/css/demo_012/style.css?raw';
import js_012 from '../.././.vitepress/examples/css/demo_012/script.js?raw';

import html_013 from '../.././.vitepress/examples/css/demo_013/index.html?raw';
import css_013 from '../.././.vitepress/examples/css/demo_013/style.css?raw';
import js_013 from '../.././.vitepress/examples/css/demo_013/script.js?raw';
</script>

# Комбинированные селекторы

## A B

**`A B`** - селектор потомков (_все **B** внутри **A**_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <div class="container">
        <p>Параграф 1</p>
        <div>Блок 1</div>
        <p>Параграф 2</p>
    </div>
    <div>
        <p>Параграф 3</p>
        <div>Блок 2</div>
        <p>Параграф 4</p>
    </div>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.container p {
    color: blue;
}
```

<CodePreview :html="html_010" :css="css_010" :js="js_010" height="250px" />

## A > B

**`A > B`** - селектор дочерних элементов (_прямые дочерние **B** внутри **A**_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <div class="card">
        <h3>Заголовок карточки</h3>
        <p>Описание карточки</p>
        <div>
            <p>Футер карточки</p>
        </div>
        <p>(дата)</p>
    </div>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.card > p {
    color: blue;
    font-weight: bold;
}
```

<CodePreview :html="html_011" :css="css_011" :js="js_011" height="200px" />

## A + B

**`A + B`** - селектор соседнего элемента (_первый **B** сразу после **A**_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <h2>Заголовок</h2>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
    <p>Параграф 3</p>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
h2 + p {
    color: red;
}
```

<CodePreview :html="html_012" :css="css_012" :js="js_012" height="250px" />

## A ~ B

**`A ~ B`** - селектор общих соседних элементов (_все **B** после **A** на том же уровне_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <h2>Заголовок</h2>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
    <p>Параграф 3</p>
    <div>
        <p>Параграф 4</p>
    </div>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
h2 ~ p {
    color: green;
}
```

<CodePreview :html="html_013" :css="css_013" :js="js_013" height="250px" />
