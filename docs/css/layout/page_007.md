---
outline: [2, 3]
---

<script setup>
import CodePreview from '../../.vitepress/components/CodePreview.vue';

import html_093 from '../../.vitepress/examples/css/demo_093/index.html?raw';
import css_093 from '../../.vitepress/examples/css/demo_093/style.css?raw';
import js_093 from '../../.vitepress/examples/css/demo_093/script.js?raw';

import html_094 from '../../.vitepress/examples/css/demo_094/index.html?raw';
import css_094 from '../../.vitepress/examples/css/demo_094/style.css?raw';
import js_094 from '../../.vitepress/examples/css/demo_094/script.js?raw';

import html_095 from '../../.vitepress/examples/css/demo_095/index.html?raw';
import css_095 from '../../.vitepress/examples/css/demo_095/style.css?raw';
import js_095 from '../../.vitepress/examples/css/demo_095/script.js?raw';

import html_096 from '../../.vitepress/examples/css/demo_096/index.html?raw';
import css_096 from '../../.vitepress/examples/css/demo_096/style.css?raw';
import js_096 from '../../.vitepress/examples/css/demo_096/script.js?raw';

import html_097 from '../../.vitepress/examples/css/demo_097/index.html?raw';
import css_097 from '../../.vitepress/examples/css/demo_097/style.css?raw';
import js_097 from '../../.vitepress/examples/css/demo_097/script.js?raw';

import html_098 from '../../.vitepress/examples/css/demo_098/index.html?raw';
import css_098 from '../../.vitepress/examples/css/demo_098/style.css?raw';
import js_098 from '../../.vitepress/examples/css/demo_098/script.js?raw';

import html_099 from '../../.vitepress/examples/css/demo_099/index.html?raw';
import css_099 from '../../.vitepress/examples/css/demo_099/style.css?raw';
import js_099 from '../../.vitepress/examples/css/demo_099/script.js?raw';

import html_100 from '../../.vitepress/examples/css/demo_100/index.html?raw';
import css_100 from '../../.vitepress/examples/css/demo_100/style.css?raw';
import js_100 from '../../.vitepress/examples/css/demo_100/script.js?raw';

import html_101 from '../../.vitepress/examples/css/demo_101/index.html?raw';
import css_101 from '../../.vitepress/examples/css/demo_101/style.css?raw';
import js_101 from '../../.vitepress/examples/css/demo_101/script.js?raw';

import html_102 from '../../.vitepress/examples/css/demo_102/index.html?raw';
import css_102 from '../../.vitepress/examples/css/demo_102/style.css?raw';
import js_102 from '../../.vitepress/examples/css/demo_102/script.js?raw';

import html_103 from '../../.vitepress/examples/css/demo_103/index.html?raw';
import css_103 from '../../.vitepress/examples/css/demo_103/style.css?raw';
import js_103 from '../../.vitepress/examples/css/demo_103/script.js?raw';

import html_104 from '../../.vitepress/examples/css/demo_104/index.html?raw';
import css_104 from '../../.vitepress/examples/css/demo_104/style.css?raw';
import js_104 from '../../.vitepress/examples/css/demo_104/script.js?raw';

import html_105 from '../../.vitepress/examples/css/demo_105/index.html?raw';
import css_105 from '../../.vitepress/examples/css/demo_105/style.css?raw';
import js_105 from '../../.vitepress/examples/css/demo_105/script.js?raw';

import html_106 from '../../.vitepress/examples/css/demo_106/index.html?raw';
import css_106 from '../../.vitepress/examples/css/demo_106/style.css?raw';
import js_106 from '../../.vitepress/examples/css/demo_106/script.js?raw';
</script>

# Flexbox

## Что такое Flexbox?

**Flexbox (_Flexible Box Layout_)** - это способ расположить элементы внутри контейнера с гибкой адаптацией под размеры экрана и содержимого.

## Создание flex-контейнера

- `display: flex;` - flex-контейнер;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 10px;
}

.container {
    background: white;
    border: 1px dashed #ccc;
    display: flex;
}

.container div {
    width: 100px;
    height: 100px;
    margin: 20px;
    background: teal;
    color: white;
    border-radius: 5px;
}
```

:::

<CodePreview :html="html_093" :css="css_093" :js="js_093" height="200px" />

## Свойства flex-контейнера

### flex-direction

- **`flex-direction`** - направление оси;
    - **`row`** - строка (_по умолчанию_);
    - **`row-reverse`** - строка, но наоборот;
    - **`column`** - столбец;
    - **`column-reverse`** - столбец, но наоборот;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>row (по умолчанию)</h3>
<div class="demo row">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>row-reverse</h3>
<div class="demo row-reverse">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>column</h3>
<div class="demo column">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>column-reverse</h3>
<div class="demo column-reverse">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    gap: 10px;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
}

.box {
    background: steelblue;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 4px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.row {
    flex-direction: row;
}

.row-reverse {
    flex-direction: row-reverse;
}

.column {
    flex-direction: column;
    height: 200px;
}

.column-reverse {
    flex-direction: column-reverse;
    height: 200px;
}
```

:::

<CodePreview :html="html_096" :css="css_096" :js="js_096" height="950px" />

### flex-wrap

- **`flex-wrap`** - перенос строк;
    - **`wrap`** - разрешить перенос;
    - **`nowrap`** - не переносить;
    - **`wrap-reverse`** - перенос с началом внизу;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>nowrap (по умолчанию)</h3>
<div class="demo nowrap">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
</div>

<h3>wrap (разрешить перенос)</h3>
<div class="demo wrap">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
</div>

<h3>wrap-reverse (перенос снизу вверх)</h3>
<div class="demo wrap-reverse">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
    margin-bottom: 30px;
}

.box {
    background: tomato;
    color: white;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nowrap {
    flex-wrap: nowrap;
    overflow-x: auto;
}

.wrap {
    flex-wrap: wrap;
}

.wrap-reverse {
    flex-wrap: wrap-reverse;
}
```

:::

<CodePreview :html="html_097" :css="css_097" :js="js_097" height="750px" />

### justify-content

- **`justify-content`** - выравнивание по основной оси;
    - **`flex-start`** - выравнивание по левому краю;
    - **`center`** - выравнивание по центру;
    - **`flex-end`** - выравнивание по правому краю;
    - **`space-between`** - равномерное выравнивание по краям;
    - **`space-around`** - равномерное выравнивание с отступами по бокам;
    - **`space-evenly`** - равномерное выравнивание с равными отступами везде;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>flex-start (по умолчанию)</h3>
<div class="demo flex-start">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>center</h3>
<div class="demo center">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>flex-end</h3>
<div class="demo flex-end">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>space-between</h3>
<div class="demo space-between">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>space-around</h3>
<div class="demo space-around">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>space-evenly</h3>
<div class="demo space-evenly">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    flex-wrap: nowrap;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
    margin-bottom: 10px;
    align-items: center;
    gap: 10px;
}

.box {
    background: seagreen;
    color: white;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex-start {
    justify-content: flex-start;
}

.center {
    justify-content: center;
}

.flex-end {
    justify-content: flex-end;
}

.space-between {
    justify-content: space-between;
}

.space-around {
    justify-content: space-around;
}

.space-evenly {
    justify-content: space-evenly;
}
```

:::

<CodePreview :html="html_098" :css="css_098" :js="js_098" height="950px" />

### align-items

- **`align-items`** - выровнять по поперечной оси;
    - **`stretch`** - растянуть (_по умолчанию_);
    - **`flex-start`** - выровнять по верху;
    - **`center`** - по центру;
    - **`flex-end`** - выровнять по низу;
    - **`baseline`** - выровнять по базовой линии;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>stretch (по умолчанию)</h3>
<div class="demo stretch">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>flex-start (по верху)</h3>
<div class="demo flex-start">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>center (по центру)</h3>
<div class="demo center">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>flex-end (по низу)</h3>
<div class="demo flex-end">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>baseline (по базовой линии)</h3>
<div class="demo baseline">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    justify-content: center;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    height: 120px;
}

.box {
    background: darkorange;
    color: white;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 80px;
    margin: 5px;
}

.stretch {
    align-items: stretch;
}

.flex-start {
    align-items: flex-start;
}

.center {
    align-items: center;
}

.flex-end {
    align-items: flex-end;
}

.baseline {
    align-items: baseline;
}

.baseline .box:nth-child(1) {
    font-size: 1rem;
}

.baseline .box:nth-child(2) {
    font-size: 1.5rem;
}

.baseline .box:nth-child(3) {
    font-size: 2rem;
}
```

:::

<CodePreview :html="html_099" :css="css_099" :js="js_099" height="1100px" />

### align-content

- **`align-content`** - многострочное выравнивание (_если разрешен перенос строк - **`wrap`**_);
    - **`stretch`** - заполнение всей высоты контейнера (_по умолчанию_);
    - **`flex-start`** - выравнивание по верху;
    - **`center`** - по центру;
    - **`flex-end`** - выравнивание по низу;
    - **`space-between`** - равномерное выравнивание по краям;
    - **`space-around`** - равномерное выравнивание с отступами по краям;
    - **`space-evenly`** - равномерное выравнивание с равными отступами везде;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>stretch (по умолчанию)</h3>
<div class="demo stretch">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>flex-start (по верху)</h3>
<div class="demo flex-start">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>center (по центру)</h3>
<div class="demo center">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>flex-end (по низу)</h3>
<div class="demo flex-end">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>space-between</h3>
<div class="demo space-between">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>space-around</h3>
<div class="demo space-around">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>space-evenly</h3>
<div class="demo space-evenly">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    flex-wrap: wrap;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
    height: 240px;
    align-content: stretch;
}

.box {
    background: slateblue;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.stretch {
    align-content: stretch;
}

.flex-start {
    align-content: flex-start;
}

.center {
    align-content: center;
}

.flex-end {
    align-content: flex-end;
}

.space-between {
    align-content: space-between;
}

.space-around {
    align-content: space-around;
}

.space-evenly {
    align-content: space-evenly;
}
```

:::

<CodePreview :html="html_100" :css="css_100" :js="js_100" height="800px" />

### Интерактивный пример

<CodePreview :html="html_094" :css="css_094" :js="js_094" height="600px" />

## Свойства flex-элементов

### order

- **`order`** - изменяет порядок отображения;
    - **`0`** - по умолчанию;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>По умолчанию (order: 0)</h3>
<div class="demo">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>С заданным порядком</h3>
<div class="demo order-demo">
    <div class="box a">A (order: 3)</div>
    <div class="box b">B (order: 1)</div>
    <div class="box c">C (order: 2)</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    gap: 10px;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
    margin-bottom: 30px;
    height: auto;
}

.box {
    background: mediumseagreen;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.order-demo .a {
    order: 3;
}

.order-demo .b {
    order: 1;
}

.order-demo .c {
    order: 2;
}
```

:::

<CodePreview :html="html_101" :css="css_101" :js="js_101" height="450px" />

### flex-grow

- **`flex-grow`** - растяжение элементов относительно остальных;
    - **`0`** - не растягивается (_по умолчанию_);

Например:

::: code-group

```html [index.html] :line-numbers
<h3>По умолчанию (flex-grow: 0)</h3>
<div class="demo">
    <div class="box fixed-width">A</div>
    <div class="box fixed-width">B</div>
    <div class="box fixed-width">C</div>
</div>

<h3>С ростом: A(1), B(2), C(3)</h3>
<div class="demo grow-demo">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
}

.box {
    background: #ff8c00;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.grow-demo .a {
    flex-grow: 1;
}

.grow-demo .b {
    flex-grow: 2;
}

.grow-demo .c {
    flex-grow: 3;
}

.fixed-width {
    width: 80px;
}
```

:::

<CodePreview :html="html_102" :css="css_102" :js="js_102" height="420px" />

### flex-shrink

- **`flex-shrink`** - сжатие элементов, если не хватает места;
    - **`0`** - не сжимается;
    - **`1`** - сжимается;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>Без сжатия (flex-shrink: 0)</h3>
<div class="demo no-shrink">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>С сжатием: A(1), B(2), C(3)</h3>
<div class="demo shrink-demo">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
    width: 400px;
}

.box {
    background: #007acc;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    width: 200px;
    flex-shrink: 1;
}

.no-shrink .box {
    flex-shrink: 0;
}

.shrink-demo .a {
    flex-shrink: 1;
}

.shrink-demo .b {
    flex-shrink: 2;
}

.shrink-demo .c {
    flex-shrink: 3;
}
```

:::

<CodePreview :html="html_103" :css="css_103" :js="js_103" height="420px" />

### flex-basis

- **`flex-basis`** - начальная ширина элемента;
    - **`auto`** - контент задает размер (_по умолчанию_);

Например:

::: code-group

```html [index.html] :line-numbers
<h3>По умолчанию (flex-basis: auto)</h3>
<div class="demo default-basis">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>С заданной базовой шириной</h3>
<div class="demo custom-basis">
    <div class="box a">A (100px)</div>
    <div class="box b">B (150px)</div>
    <div class="box c">C (200px)</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
}

.box {
    background: #8a2be2;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.default-basis .box {
    flex-basis: auto;
}

.custom-basis .a {
    flex-basis: 100px;
}

.custom-basis .b {
    flex-basis: 150px;
}

.custom-basis .c {
    flex-basis: 200px;
}
```

:::

<CodePreview :html="html_104" :css="css_104" :js="js_104" height="420px" />

### flex

- **`flex`** - сокращенное - **`flex-grow`** **`flex-shrink`** **`flex-basis`**;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>По умолчанию (flex: 0 1 auto)</h3>
<div class="demo default-flex">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>Сокращённая запись: grow, shrink, basis</h3>
<div class="demo custom-flex">
    <div class="box a">A (1 1 100px)</div>
    <div class="box b">B (2 1 150px)</div>
    <div class="box c">C (1 2 200px)</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
}

.box {
    background: #e91e63;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.default-flex .box {
    flex: 0 1 auto;
}

.custom-flex .a {
    flex: 1 1 100px;
}

.custom-flex .b {
    flex: 2 1 150px;
}

.custom-flex .c {
    flex: 1 2 200px;
}
```

:::

<CodePreview :html="html_105" :css="css_105" :js="js_105" height="420px" />

### align-self

- **`align-self`** - переопределение **`align-items`** для одного элемента;
    - **`stretch`** - растягивается (_по умолчанию_);
    - **`flex-start`** - выравнивание по верху;
    - **`flex-end`** - выравнивание по низу;
    - **`center`** - по центру;
    - **`auto`** - наследуется от **`align-items`**;
    - **`baseline`** - выравнивание по базовой линии текста;

Например:

::: code-group

```html [index.html] :line-numbers
<h3>Разные значения: stretch, flex-start, flex-end</h3>
<div class="demo">
    <div class="box a">stretch</div>
    <div class="box b">start</div>
    <div class="box c">end</div>
    <div class="box d">center</div>
    <div class="box e">auto</div>
</div>

<h3>baseline</h3>
<div class="demo">
    <div class="box small" style="align-self: baseline">A</div>
    <div class="box large" style="align-self: baseline">B</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
    height: 200px;
    align-items: stretch;
}

.box {
    background: #3f51b5;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 10px;
}

.a {
    align-self: stretch;
}

.b {
    align-self: flex-start;
}

.c {
    align-self: flex-end;
}

.d {
    align-self: center;
}

.e {
    align-self: auto;
}

.small {
    font-size: 1rem;
    height: auto;
}

.large {
    font-size: 4rem;
    height: auto;
}
```

:::

<CodePreview :html="html_106" :css="css_106" :js="js_106" height="680px" />

### Интерактивный пример

<CodePreview :html="html_095" :css="css_095" :js="js_095" height="750px" />
