---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_076 from '../.././.vitepress/examples/css/demo_076/index.html?raw';
import css_076 from '../.././.vitepress/examples/css/demo_076/style.css?raw';
import js_076 from '../.././.vitepress/examples/css/demo_076/script.js?raw';

import html_077 from '../.././.vitepress/examples/css/demo_077/index.html?raw';
import css_077 from '../.././.vitepress/examples/css/demo_077/style.css?raw';
import js_077 from '../.././.vitepress/examples/css/demo_077/script.js?raw';

import html_078 from '../.././.vitepress/examples/css/demo_078/index.html?raw';
import css_078 from '../.././.vitepress/examples/css/demo_078/style.css?raw';
import js_078 from '../.././.vitepress/examples/css/demo_078/script.js?raw';

import html_079 from '../.././.vitepress/examples/css/demo_079/index.html?raw';
import css_079 from '../.././.vitepress/examples/css/demo_079/style.css?raw';
import js_079 from '../.././.vitepress/examples/css/demo_079/script.js?raw';

import html_080 from '../.././.vitepress/examples/css/demo_080/index.html?raw';
import css_080 from '../.././.vitepress/examples/css/demo_080/style.css?raw';
import js_080 from '../.././.vitepress/examples/css/demo_080/script.js?raw';

import html_081 from '../.././.vitepress/examples/css/demo_081/index.html?raw';
import css_081 from '../.././.vitepress/examples/css/demo_081/style.css?raw';
import js_081 from '../.././.vitepress/examples/css/demo_081/script.js?raw';
</script>

# Позиционирование

## Что такое position?

- **`position`** - определяет, как элемент позиционируется на странице (_будет ли он на своём месте в потоке, сдвинут, зафиксирован или абсолютно размещён_).

## Свойства position

### static

- **`static`** - элемент в обычном потоке, не смешается (_по умолчанию_);

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Static</title>
    </head>
    <body>
        <div class="box">Я static. Нахожусь в обычном потоке.</div>
    </body>
</html>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.box {
    position: static;
    background: lightblue;
    padding: 20px;
    border: 2px solid #000;
}
```

<CodePreview :html="html_076" :css="css_076" :js="js_076" height="200px" />

### relative

- **`relative`** - относительное позиционирование - элемент в потоке, но сдвигается;

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="box">
    Я relative. Сдвинут от исходного положения, но занимаю то же место.
</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.box {
    position: relative;
    top: 30px;
    left: 40px;
    background: lightgreen;
    padding: 20px;
    border: 2px solid #000;
}
```

<CodePreview :html="html_077" :css="css_077" :js="js_077" height="200px" />

### absolute

- **`absolute`** - абсолютное позиционирование - элемент не в потоке, позиционируется относительно ближайшего родителя с **`position: relative / absolute / fixed`**;

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="parent">
    Родитель с `position: relative`
    <div class="child">Я absolute. Смещён от родителя.</div>
</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.parent {
    position: relative;
    height: 200px;
    top: 30px;
    border: 2px dashed #999;
}

.child {
    position: absolute;
    top: 60px;
    right: 20px;
    width: 150px;
    background: salmon;
    padding: 10px;
}
```

<CodePreview :html="html_078" :css="css_078" :js="js_078" height="300px" />

### fixed

- **`fixed`** - фиксированное позиционирование - относительно окна браузера;

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="fixed">Я fixed. Я всегда прикреплён к верху окна.</div>

<div class="content">
    <p>Прокрути страницу — элемент останется на месте.</p>
    <p style="height: 1000px"></p>
</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: lightblue;
    color: black;
    padding: 10px;
    z-index: 999;
}

.content {
    margin-top: 60px;
}
```

<CodePreview :html="html_079" :css="css_079" :js="js_079" height="250px" />

### sticky

- **`sticky`** - "липкое" позиционирование - ведёт себя как **`relative`**, но при прокручивании "прилипает" к краю;

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="sticky">Я sticky. Прилипну к верху при прокрутке.</div>

<div class="content">Много контента... Прокручивай вниз!</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.sticky {
    position: sticky;
    top: 0;
    background: lightgreen;
    padding: 20px;
    border: 2px solid #333;
}

.content {
    height: 1500px;
    padding: 20px;
}
```

<CodePreview :html="html_080" :css="css_080" :js="js_080" height="250px" />

## Свойство z-index

- **`z-index`** - это целое число, определяющее, кто находится выше в визуальном слое (_чем больше значение, тем выше слой_).

Работает только на позиционированных элементах со свойствами **`relative`**, **`absolute`**, **`fixed`** и **`sticky`**.

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="box1">z-index: 1</div>
<div class="box2">z-index: 2</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.box1 {
    position: absolute;
    left: 40px;
    top: 40px;
    width: 150px;
    height: 150px;
    background: lightblue;
    z-index: 1;
}

.box2 {
    position: absolute;
    left: 80px;
    top: 80px;
    width: 150px;
    height: 150px;
    background: coral;
    z-index: 2;
}
```

<CodePreview :html="html_081" :css="css_081" :js="js_081" height="300px" />
