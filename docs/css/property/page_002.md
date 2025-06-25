---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_035 from '../.././.vitepress/examples/css/demo_035/index.html?raw';
import css_035 from '../.././.vitepress/examples/css/demo_035/style.css?raw';
import js_035 from '../.././.vitepress/examples/css/demo_035/script.js?raw';

import html_043 from '../.././.vitepress/examples/css/demo_043/index.html?raw';
import css_043 from '../.././.vitepress/examples/css/demo_043/style.css?raw';
import js_043 from '../.././.vitepress/examples/css/demo_043/script.js?raw';

import html_044 from '../.././.vitepress/examples/css/demo_044/index.html?raw';
import css_044 from '../.././.vitepress/examples/css/demo_044/style.css?raw';
import js_044 from '../.././.vitepress/examples/css/demo_044/script.js?raw';

import html_036 from '../.././.vitepress/examples/css/demo_036/index.html?raw';
import css_036 from '../.././.vitepress/examples/css/demo_036/style.css?raw';
import js_036 from '../.././.vitepress/examples/css/demo_036/script.js?raw';

import html_037 from '../.././.vitepress/examples/css/demo_037/index.html?raw';
import css_037 from '../.././.vitepress/examples/css/demo_037/style.css?raw';
import js_037 from '../.././.vitepress/examples/css/demo_037/script.js?raw';

import html_038 from '../.././.vitepress/examples/css/demo_038/index.html?raw';
import css_038 from '../.././.vitepress/examples/css/demo_038/style.css?raw';
import js_038 from '../.././.vitepress/examples/css/demo_038/script.js?raw';

import html_039 from '../.././.vitepress/examples/css/demo_039/index.html?raw';
import css_039 from '../.././.vitepress/examples/css/demo_039/style.css?raw';
import js_039 from '../.././.vitepress/examples/css/demo_039/script.js?raw';

import html_040 from '../.././.vitepress/examples/css/demo_040/index.html?raw';
import css_040 from '../.././.vitepress/examples/css/demo_040/style.css?raw';
import js_040 from '../.././.vitepress/examples/css/demo_040/script.js?raw';

import html_041 from '../.././.vitepress/examples/css/demo_041/index.html?raw';
import css_041 from '../.././.vitepress/examples/css/demo_041/style.css?raw';
import js_041 from '../.././.vitepress/examples/css/demo_041/script.js?raw';

import html_042 from '../.././.vitepress/examples/css/demo_042/index.html?raw';
import css_042 from '../.././.vitepress/examples/css/demo_042/style.css?raw';
import js_042 from '../.././.vitepress/examples/css/demo_042/script.js?raw';

import html_045 from '../.././.vitepress/examples/css/demo_045/index.html?raw';
import css_045 from '../.././.vitepress/examples/css/demo_045/style.css?raw';
import js_045 from '../.././.vitepress/examples/css/demo_045/script.js?raw';
</script>

# Текст и шрифты

## font-family

**`font-family`** - задаёт семейство (_набор_) шрифтов, которые браузер будет использовать для отображения текста.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-font-family">Пример текста с другим шрифтом</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-font-family {
    /* Arial - основной шрифт */
    /* sans-serif - запасной шрифт без засечек (на случай сбоя) */
    /* serif - с засечками */
    font-family: Arial, sans-serif;
}
```

<CodePreview :html="html_035" :css="css_035" :js="js_035" height="100px" />

## Подключение внешнего шрифта

### Через [Google Fonts](https://fonts.google.com/)

Например. Изменим файл **`index.html`**:

```html:line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <p class="example_1">Параграф 1</p>
        <p class="example_2">Параграф 2</p>
        <p class="example_3">Параграф 3</p>
    </body>
</html>
```

Изменим файл **`styles.css`**:

```css:line-numbers
body {
    font-family: 'Oswald', sans-serif;
}
```

<CodePreview :html="html_043" :css="css_043" :js="js_043" height="160px" />

### Подключение локального шрифта

Например. Изменим файл **`index.html`**:

```html:line-numbers
<body>
    <div>BLOCK 1</div>
    <div>BLOCK 2</div>
    <div>BLOCK 3</div>
</body>
```

Изменим файл **`styles.css`**:

```css:line-numbers
@font-face {
    font-family: 'Michroma';
    src: url('/fonts/Michroma/Michroma-Regular.woff2') format('woff2'),
         url('/fonts/Michroma/Michroma-Regular.woff') format('woff'),
         url('/fonts/Michroma/Michroma-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'Michroma', sans-serif;
}
```

<CodePreview :html="html_044" :css="css_044" :js="js_044" height="160px" />

## font-size

**`font-size`** - размер текста.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-font-size">Текст увеличенного размера.</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-font-size {
    font-size: 24px;
}
```

<CodePreview :html="html_036" :css="css_036" :js="js_036" height="120px" />

## font-weight

**`font-weight`** - толщина шрифта.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-font-weight-1">Текст 1</p>
<p class="example-font-weight-2">Текст 2</p>
<p class="example-font-weight-3">Текст 3</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-font-weight-1 {
    font-weight: bold;
}

.example-font-weight-2 {
    font-weight: 100;
}

.example-font-weight-3 {
    font-weight: 900;
}
```

<CodePreview :html="html_037" :css="css_037" :js="js_037" height="150px" />

## font-style

**`font-style`** - стиль текста.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-font-style">Курсивный текст.</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-font-style {
    font-style: italic;
}
```

<CodePreview :html="html_038" :css="css_038" :js="js_038" height="100px" />

## line-height

**`font-style`** - межстрочный интервал.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-line-height">
    Строка 1<br />
    Строка 2<br />
    Строка 3
</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-line-height {
    line-height: 2;
}
```

<CodePreview :html="html_039" :css="css_039" :js="js_039" height="150px" />

## letter-spacing

**`letter-spacing`** - расстояние между буквами.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-letter-spacing">Растянутый текст</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-letter-spacing {
    letter-spacing: 3px;
}
```

<CodePreview :html="html_040" :css="css_040" :js="js_040" height="100px" />

## text-transform

**`text-transform`** - преобразование регистра.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-text-transform">Некоторый текст</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-text-transform {
    text-transform: uppercase;
}
```

<CodePreview :html="html_041" :css="css_041" :js="js_041" height="100px" />

## text-decoration

**`text-decoration`** - декор текста (_подчёркивание, зачёркивание_).

Например. Изменим файл **`index.html`**:

```html:line-numbers
<p class="example-text-decoration">Подчёркнутый текст</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.example-text-decoration {
    text-decoration: underline;
}
```

<CodePreview :html="html_042" :css="css_042" :js="js_042" height="100px" />

## text-align

**`text-align`** - горизонтальное выравнивание текста.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="left">Выравнивание по левому краю</div>
<div class="right">Выравнивание по правому краю</div>
<div class="center">Центрированный текст</div>
<div class="justify">
    Выравнивание текста по ширине блока. Текст занимает всю ширину строки,
    пробелы между словами растягиваются.
</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.left {
    text-align: left;
}

.right {
    text-align: right;
}

.center {
    text-align: center;
}

.justify {
    text-align: justify;
}
```

<CodePreview :html="html_045" :css="css_045" :js="js_045" height="160px" />
