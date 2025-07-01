---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_107 from '../.././.vitepress/examples/css/demo_107/index.html?raw';
import css_107 from '../.././.vitepress/examples/css/demo_107/style.css?raw';
import js_107 from '../.././.vitepress/examples/css/demo_107/script.js?raw';

import html_108 from '../.././.vitepress/examples/css/demo_108/index.html?raw';
import css_108 from '../.././.vitepress/examples/css/demo_108/style.css?raw';
import js_108 from '../.././.vitepress/examples/css/demo_108/script.js?raw';

import html_109 from '../.././.vitepress/examples/css/demo_109/index.html?raw';
import css_109 from '../.././.vitepress/examples/css/demo_109/style.css?raw';
import js_109 from '../.././.vitepress/examples/css/demo_109/script.js?raw';

import html_110 from '../.././.vitepress/examples/css/demo_110/index.html?raw';
import css_110 from '../.././.vitepress/examples/css/demo_110/style.css?raw';
import js_110 from '../.././.vitepress/examples/css/demo_110/script.js?raw';

import html_111 from '../.././.vitepress/examples/css/demo_111/index.html?raw';
import css_111 from '../.././.vitepress/examples/css/demo_111/style.css?raw';
import js_111 from '../.././.vitepress/examples/css/demo_111/script.js?raw';

import html_112 from '../.././.vitepress/examples/css/demo_112/index.html?raw';
import css_112 from '../.././.vitepress/examples/css/demo_112/style.css?raw';
import js_112 from '../.././.vitepress/examples/css/demo_112/script.js?raw';

import html_113 from '../.././.vitepress/examples/css/demo_113/index.html?raw';
import css_113 from '../.././.vitepress/examples/css/demo_113/style.css?raw';
import js_113 from '../.././.vitepress/examples/css/demo_113/script.js?raw';

import html_114 from '../.././.vitepress/examples/css/demo_114/index.html?raw';
import css_114 from '../.././.vitepress/examples/css/demo_114/style.css?raw';
import js_114 from '../.././.vitepress/examples/css/demo_114/script.js?raw';

import html_115 from '../.././.vitepress/examples/css/demo_115/index.html?raw';
import css_115 from '../.././.vitepress/examples/css/demo_115/style.css?raw';
import js_115 from '../.././.vitepress/examples/css/demo_115/script.js?raw';

import html_116 from '../.././.vitepress/examples/css/demo_116/index.html?raw';
import css_116 from '../.././.vitepress/examples/css/demo_116/style.css?raw';
import js_116 from '../.././.vitepress/examples/css/demo_116/script.js?raw';
</script>

# Grid Layout

## Что такое Grid Layout?

**Grid Layout** - это способ создания двухмерных макетов на веб-страницах (_в виде сетки_).

В отличие от **Flexbox**, который лучше подходит для одномерных (_в строку или в столбец_) размещений, **Grid** позволяет размечать строки и столбцы одновременно.

## Создание grid-контейнера

- **`display: grid`** - grid-контейнер;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```

```css [styles.css] :line-numbers
body {
    padding: 20px;
}

.container {
    display: grid;
    grid-template-columns: 100px 1fr 2fr;
    gap: 10px;
}

.item {
    background: lightblue;
    padding: 20px;
}
```

:::

<CodePreview :html="html_107" :css="css_107" :js="js_107" height="200px" />

## Строки и столбцы

- **`grid-template-columns`** - определяет количество и размеры столбцов;
- **`grid-template-rows`** - определяет количество и размеры строк;
- **`grid`** - сокращенная запись;
    - **`grid: 100px 100px 100px / 50px 50px;`** - 3 столбца, 2 строки;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
```

```css [styles.css] :line-numbers
.grid-container {
    display: grid;
    grid-template-columns: 100px 1fr 2fr;
    grid-template-rows: 100px auto;
    gap: 10px;
    padding: 20px;
    background: #eee;
}

.item {
    background: #3498db;
    color: white;
    padding: 10px;
    font-size: 1.2rem;
    text-align: center;
}
```

:::

<CodePreview :html="html_108" :css="css_108" :js="js_108" height="250px" />

## Размеры и repeat

- **`fr`** - доля свободного пространства в контейнере;
- **`auto`** - размер колонки зависит от содержимого;
- **`repeat()`** - сокращенная запись размеров;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="grid-1">
    <div class="cell">1</div>
    <div class="cell">2</div>
    <div class="cell">3</div>
    <div class="cell">4</div>
</div>

<div class="grid-2">
    <div class="cell">1</div>
    <div class="cell">2</div>
    <div class="cell">3</div>
    <div class="cell">4</div>
</div>
```

```css [styles.css] :line-numbers
body {
    padding: 10px;
    background: #eee;
}

.grid-1 {
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr 2fr 100px;
    gap: 10px;
    background: white;
}

.grid-2 {
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr) 50px 2fr;
    gap: 20px;
    background: white;
}

.cell {
    background: steelblue;
    color: white;
    padding: 20px;
    text-align: center;
}
```

:::

<CodePreview :html="html_114" :css="css_114" :js="js_114" height="350px" />

## Именованные области

- **`grid-template-areas`** - задаёт именованные области;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="grid-areas">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
</div>
```

```css [styles.css] :line-numbers
* {
    margin: 0;
    padding: 0;
    text-align: center;
}

.grid-areas {
    display: grid;
    grid-template-areas:
        'header header'
        'sidebar main'
        'footer footer';
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    height: 100vh;
}

.header {
    grid-area: header;
    background: #6c5ce7;
    color: #fff;
    height: 50px;
}
.sidebar {
    grid-area: sidebar;
    background: #00cec9;
    color: #fff;
}
.main {
    grid-area: main;
    background: #0984e3;
    color: #fff;
}
.footer {
    grid-area: footer;
    background: #2d3436;
    color: #fff;
    height: 50px;
}
```

:::

<CodePreview :html="html_109" :css="css_109" :js="js_109" height="350px" />

## Именованные линии

**Линии** - это границы между колонками и строками.

Например:

::: code-group

```html [index.html] :line-numbers
<div class="grid">
    <div class="item a">A</div>
    <div class="item b">B</div>
    <div class="item c">C</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #ddd;
    padding: 10px;
}

.grid {
    display: grid;
    grid-template-columns: [left] 1fr [middle] 2fr [right];
    grid-template-rows: [top] 80px [center] 150px [bottom];
    gap: 10px;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
}

.item {
    background: steelblue;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 20px;
}

.a {
    grid-column: left / middle;
    grid-row: top / span 1;
}

.b {
    grid-column: middle / right;
    grid-row: center / bottom;
}

.c {
    grid-column: left / right;
    grid-row: bottom / span 1;
}
```

:::

<CodePreview :html="html_116" :css="css_116" :js="js_116" height="400px" />

## Положение элемента в сетке

- **`grid-column`** положение элемента в сетке по столбцам;
    - **`grid-column: 1 / 4;`** - элемент займёт пространство с 1 до 4 столбца;
    - **`grid-column: span 3;`** - элемент займёт пространство с 1 до 4 столбца;
- **`grid-row`** - положение элемента в сетке по строкам;
- **`grid-area`** - положение элемента по столбцам и строкам;
    - **`grid-area: 1 / 1 / 3 / 3;`** - с 1 строки, 1 столбца, до 3 строки, 3 столбца;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="grid-pos">
    <div class="box a">A</div>
    <div class="box b">B</div>
</div>
```

```css [styles.css] :line-numbers
.grid-pos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
}

.box {
    background: coral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.a {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
}

.b {
    grid-column: 2 / 5;
    grid-row: 2 / 4;
}
```

:::

<CodePreview :html="html_110" :css="css_110" :js="js_110" height="400px" />

## Отступы между ячейками

- **`column-gap`** - задает отступы между ячейками в столбцах;
- **`row-gap`** - задает отступы между ячейками в строках;
- **`gap`** - задает отступы между ячейками в столбцах и строках;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="grid gap-example">
    <div class="cell">1</div>
    <div class="cell">2</div>
    <div class="cell">3</div>
    <div class="cell">4</div>
    <div class="cell">5</div>
    <div class="cell">6</div>
</div>
```

```css [styles.css] :line-numbers
.grid {
    border: 1px dashed #888;
    padding: 10px;
}

.gap-example {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 80px 80px;
    column-gap: 10px;
    row-gap: 20px;
}

.cell {
    background: #74b9ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}
```

:::

<CodePreview :html="html_111" :css="css_111" :js="js_111" height="300px" />

## Выравнивание содержимого ячеек

- **`align-items`** - вертикальное выравнивание внутри ячеек;
- **`justify-items`** - горизонтальное выравнивание внутри ячеек;
- **`place-items`** - вертикальное и горизонтальное выравнивание;

Доступные значения:

- **`stretch`** - растягивание по размеру ячеек (_по умолчанию_);
- **`start`** - выравнивание по началу;
- **`center`** - по центру;
- **`end`** - по концу;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>align-items: center</h3>
<div class="grid align-grid">
    <div class="cell">A</div>
    <div class="cell">B</div>
    <div class="cell">C</div>
</div>

<h3>justify-items: end</h3>
<div class="grid justify-grid">
    <div class="cell">A</div>
    <div class="cell">B</div>
    <div class="cell">C</div>
</div>

<h3>place-items: center</h3>
<div class="grid place-grid">
    <div class="cell">A</div>
    <div class="cell">B</div>
    <div class="cell">C</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    padding: 20px;
    background: #f8f8f8;
}

.grid {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 120px;
    gap: 10px;
    background: #eee;
    margin-bottom: 30px;
    border: 2px dashed #ccc;
}

.cell {
    background: #74b9ff;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 4px;
}

.align-grid {
    align-items: center;
}

.justify-grid {
    justify-items: end;
}

.place-grid {
    place-items: center;
}
```

:::

<CodePreview :html="html_112" :css="css_112" :js="js_112" height="700px" />

## Выравнивание сетки

- **`align-content`** - выравнивание сетки по вертикали внутри контейнера;
- **`justify-content`** - выравнивание сетки по горизонтали;
- **`place-content`** - выравнивание по вертикали и горизонтали;

Доступные значения:

- **`flex-start`** или **`start`** - элементы прижаты к началу;
- **`flex-end`** или **`end`** - элементы прижаты к концу;
- **`center`** - выровнены по центру;
- **`space-between`** - первый - у начала, последний - у конца, остальные - между;
- **`space-around`** - равные отступы вокруг каждого элемента;
- **`space-evenly`** - равные отступы вокруг каждого элемента и краями;
- **`stretch`** - растягивает элементы;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>align-content: center</h3>
<div class="wrapper">
    <div class="grid align-content">
        <div class="cell">1</div>
        <div class="cell">2</div>
        <div class="cell">3</div>
        <div class="cell">4</div>
        <div class="cell">5</div>
        <div class="cell">6</div>
    </div>
</div>

<h3>justify-content: space-evenly</h3>
<div class="wrapper">
    <div class="grid justify-content">
        <div class="cell">A</div>
        <div class="cell">B</div>
        <div class="cell">C</div>
        <div class="cell">D</div>
        <div class="cell">E</div>
        <div class="cell">F</div>
    </div>
</div>

<h3>place-content: center</h3>
<div class="wrapper">
    <div class="grid place-content">
        <div class="cell">Я</div>
        <div class="cell">в</div>
        <div class="cell">центре</div>
        <div class="cell">по</div>
        <div class="cell">всем</div>
        <div class="cell">осям</div>
    </div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    padding: 20px;
    background: #f0f0f0;
}

.wrapper {
    height: 200px;
    border: 2px dashed #ccc;
    background: #fff;
}

.grid {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 40px 40px;
    gap: 10px;
    height: 100%;
}

.cell {
    background: #0984e3;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 6px;
}

.align-content {
    align-content: center;
}

.justify-content {
    justify-content: space-evenly;
}

.place-content {
    place-content: center;
}
```

:::

<CodePreview :html="html_113" :css="css_113" :js="js_113" height="900px" />

## Направление и порядок элементов

- **`grid-auto-flow`** - управление направлением элементов;
    - **`row`** - размещает элементы по строкам (_по умолчанию_);
    - **`column`** - размещает элементы по столбцам;
    - **`row dense`** - "уплотнение" элементов по строкам;
    - **`column dense`** - "уплотнение" элементов по столбцам;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="example">
    <h3>grid-auto-flow: row (по умолчанию)</h3>
    <div class="grid row">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>

<div class="example">
    <h3>grid-auto-flow: column</h3>
    <div class="grid column">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>

<div class="example">
    <h3>grid-auto-flow: row dense</h3>
    <div class="grid row-dense">
        <div>1</div>
        <div>2</div>
        <div class="wide">3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>

<div class="example">
    <h3>grid-auto-flow: column dense</h3>
    <div class="grid column-dense">
        <div>1</div>
        <div>2</div>
        <div class="wide">3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
}

.example {
    border: 2px dashed #ccc;
    padding: 10px;
}

h3 {
    margin: 10px 0;
    font-size: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-template-rows: repeat(3, 60px);
    gap: 5px;
    background: #eee;
}

.grid div {
    background: steelblue;
    color: white;
    font-weight: bold;
}

.row {
    grid-auto-flow: row;
}

.column {
    grid-auto-flow: column;
}

.row-dense {
    grid-auto-flow: row dense;
}

.column-dense {
    grid-auto-flow: column dense;
}

.wide {
    grid-column: span 2;
}
```

:::

<CodePreview :html="html_115" :css="css_115" :js="js_115" height="700px" />
