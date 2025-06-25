---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_031 from '../.././.vitepress/examples/css/demo_031/index.html?raw';
import css_031 from '../.././.vitepress/examples/css/demo_031/style.css?raw';
import js_031 from '../.././.vitepress/examples/css/demo_031/script.js?raw';

import html_032 from '../.././.vitepress/examples/css/demo_032/index.html?raw';
import css_032 from '../.././.vitepress/examples/css/demo_032/style.css?raw';
import js_032 from '../.././.vitepress/examples/css/demo_032/script.js?raw';

import html_033 from '../.././.vitepress/examples/css/demo_033/index.html?raw';
import css_033 from '../.././.vitepress/examples/css/demo_033/style.css?raw';
import js_033 from '../.././.vitepress/examples/css/demo_033/script.js?raw';

import html_034 from '../.././.vitepress/examples/css/demo_034/index.html?raw';
import css_034 from '../.././.vitepress/examples/css/demo_034/style.css?raw';
import js_034 from '../.././.vitepress/examples/css/demo_034/script.js?raw';
</script>

# Цвет

## color

**`color`** - задаёт цвет текста для элемента.

Типы значений:

- **`color: red;`** - именованный цвет из списка CSS;
- **`color: #ff0000;`** - шестнадцатеричная запись цвета;
- **`color: rgb(255, 0, 0);`** - Red, Green, Blue;
- **`color: rgba(255, 0, 0, 0,5);`** - Red, Green, Blue, Opacity (_прозрачность_);
- **`color: hsl(0, 100%, 50%);`** - оттенок, насыщенность, светлота;
- **`color: hsla(0, 100%, 50%, 0.5);`** - оттенок, насыщенность, светлота, прозрачность;

Например. Изменим файл **`index.html`**:

::: code-group

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <p class="example_1">Параграф 1</p>
        <p class="example_2">Параграф 2</p>
        <p class="example_3">Параграф 3</p>
        <p class="example_4">Параграф 4</p>
    </body>
</html>
```

:::

Изменим файл **`styles.css`**:

```css [style.css] :line-numbers
.example_1 {
    color: red;
}

.example_2 {
    color: #ff0000;
}

.example_3 {
    color: rgb(255, 0, 0);
}

.example_4 {
    color: hsl(0, 100%, 50%);
}
```

<CodePreview :html="html_031" :css="css_031" :js="js_031" height="200px" />

## background-color

**`background-color`** - устанавливает цвет фона элемента.

Например. Изменим файл **`index.html`**:

```html :line-numbers
<div class="box">Текст с фоном</div>
```

Изменим файл **`styles.css`**:

```css :line-numbers
.box {
    background-color: lightblue;
}
```

<CodePreview :html="html_032" :css="css_032" :js="js_032" height="100px" />

## border-color

**`border-color`** - цвет рамки элемента.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="highlight">Текст с рамкой</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.highlight {
    border: 2px solid; /* задаём толщину и стиль рамки */
    border-color: orange; /* задаём цвет рамки */
}
```

<CodePreview :html="html_033" :css="css_033" :js="js_033" height="100px" />

## opacity

**`opacity`** - прозрачность элемента (_значение от **`0`** до **`1`**_).

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="box_1">Блок</div>
<div class="box_2">Полупрозрачный блок</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.box_1,
.box_2 {
    background: blue;
    color: white;
}

.box_2 {
    opacity: 1;
}

.box_2 {
    opacity: 0.5;
}
```

<CodePreview :html="html_034" :css="css_034" :js="js_034" height="100px" />
