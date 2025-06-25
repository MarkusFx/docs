---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_046 from '../.././.vitepress/examples/css/demo_046/index.html?raw';
import css_046 from '../.././.vitepress/examples/css/demo_046/style.css?raw';
import js_046 from '../.././.vitepress/examples/css/demo_046/script.js?raw';

import html_047 from '../.././.vitepress/examples/css/demo_047/index.html?raw';
import css_047 from '../.././.vitepress/examples/css/demo_047/style.css?raw';
import js_047 from '../.././.vitepress/examples/css/demo_047/script.js?raw';

import html_048 from '../.././.vitepress/examples/css/demo_048/index.html?raw';
import css_048 from '../.././.vitepress/examples/css/demo_048/style.css?raw';
import js_048 from '../.././.vitepress/examples/css/demo_048/script.js?raw';

import html_049 from '../.././.vitepress/examples/css/demo_049/index.html?raw';
import css_049 from '../.././.vitepress/examples/css/demo_049/style.css?raw';
import js_049 from '../.././.vitepress/examples/css/demo_049/script.js?raw';
</script>

# Списки

## list-style-type

**`list-style-type`** - тип маркера.

Значения:

- **`disc`** - закрашенный кружок (_по умолчанию для **`<ul>`**_);
- **`circle`** - кружок с обводкой;
- **`square`** - квадрат;
- **`decimal`** - обычная нумерация (1,2,3…) для **`<ol>`**;
- **`decimal-leading-zero`** - числа с ведущим нулём (_01,02,03…_);
- **`upper-roman`** - заглавные римские цифры;
- **`lower-roman`** - строчные римские цифры;
- **`upper-alpha`** - заглавные буквы;
- **`lower-alpha`** - строчные буквы;
- **`none`** - убирает маркеры.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<ul class="custom-list-ul">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>

<ol class="custom-list-ol">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ol>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.custom-list-ul {
    list-style-type: square;
}

.custom-list-ol {
    list-style-type: decimal-leading-zero;
}
```

<CodePreview :html="html_046" :css="css_046" :js="js_046" height="200px" />

## list-style-image

**`list-style-image`** - маркер-изображение.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<ol class="pepe-img">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
    <li>Пункт 4</li>
</ol>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.pepe-img {
    list-style-image: url('/images/css/pepe-002-icon.png');
}
```

<CodePreview :html="html_047" :css="css_047" :js="js_047" height="300px" />

## list-style-position

**`list-style-position`** - позиция маркера.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>

<ul class="custom-list">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.custom-list {
    list-style-position: inside;
}
```

<CodePreview :html="html_048" :css="css_048" :js="js_048" height="200px" />

## list-style

**`list-style`** - короткая запись для **`list-style-type`**, **`list-style-position`** и **`list-style-image`**.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<ul class="custom-list">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.custom-list {
    list-style: square inside none;
}
```

<CodePreview :html="html_049" :css="css_049" :js="js_049" height="160px" />
