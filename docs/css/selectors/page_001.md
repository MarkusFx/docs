---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_005 from '../.././.vitepress/examples/css/demo_005/index.html?raw';
import css_005 from '../.././.vitepress/examples/css/demo_005/style.css?raw';
import js_005 from '../.././.vitepress/examples/css/demo_005/script.js?raw';

import html_006 from '../.././.vitepress/examples/css/demo_006/index.html?raw';
import css_006 from '../.././.vitepress/examples/css/demo_006/style.css?raw';
import js_006 from '../.././.vitepress/examples/css/demo_006/script.js?raw';

import html_007 from '../.././.vitepress/examples/css/demo_007/index.html?raw';
import css_007 from '../.././.vitepress/examples/css/demo_007/style.css?raw';
import js_007 from '../.././.vitepress/examples/css/demo_007/script.js?raw';

import html_008 from '../.././.vitepress/examples/css/demo_008/index.html?raw';
import css_008 from '../.././.vitepress/examples/css/demo_008/style.css?raw';
import js_008 from '../.././.vitepress/examples/css/demo_008/script.js?raw';

import html_009 from '../.././.vitepress/examples/css/demo_009/index.html?raw';
import css_009 from '../.././.vitepress/examples/css/demo_009/style.css?raw';
import js_009 from '../.././.vitepress/examples/css/demo_009/script.js?raw';
</script>

# Основные типы селекторов

## Что такое селекторы?

**Селекторы** - это способ найти элементы на странице и применить к ним стили.

## Селектор элемента

**Селектор элемента** - все элементы этого типа (_**`<p>`**, **`<div>`** и другие_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>Заголовок</h1>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
        <p>Параграф 3</p>
    </body>
</html>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
p {
    color: blue;
}
```

<CodePreview :html="html_005" :css="css_005" :js="js_005" height="250px" />

## Селектор класса

**Селектор класса** - все элементы с заданным классом (_**`.className`**_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <h1 class="orange-back">Заголовок</h1>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
    <p class="orange-back">Параграф 3</p>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.orange-back {
    background: orange;
}
```

<CodePreview :html="html_006" :css="css_006" :js="js_006" height="250px" />

## Селектор идентификатора

**Селектор идентификатора** - элемент с уникальным **id** (**`#idName`**).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <h1>Заголовок</h1>
    <p id="green-text">Параграф 1</p>
    <p id="red-text">Параграф 2</p>
    <p>Параграф 3</p>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
#green-text {
    color: green;
}

#red-text {
    color: red;
}
```

<CodePreview :html="html_007" :css="css_007" :js="js_007" height="250px" />

## Универсальный

**Универсальный** - все элементы (_**`*`**_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <h1>Заголовок</h1>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
    <p>Параграф 3</p>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
* {
    color: blueviolet;
}
```

<CodePreview :html="html_008" :css="css_008" :js="js_008" height="250px" />

## Группировка селекторов

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <h1>Заголовок 1</h1>
    <h2>Заголовок 2</h2>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
h1,
h2 {
    background: #a8b1ff;
}
```

<CodePreview :html="html_009" :css="css_009" :js="js_009" height="250px" />
