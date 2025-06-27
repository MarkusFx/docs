---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_071 from '../.././.vitepress/examples/css/demo_071/index.html?raw';
import css_071 from '../.././.vitepress/examples/css/demo_071/style.css?raw';
import js_071 from '../.././.vitepress/examples/css/demo_071/script.js?raw';

import html_072 from '../.././.vitepress/examples/css/demo_072/index.html?raw';
import css_072 from '../.././.vitepress/examples/css/demo_072/style.css?raw';
import js_072 from '../.././.vitepress/examples/css/demo_072/script.js?raw';
</script>

# Свойство display

## Что такое display?

- **`display`** - определяет, как элемент отображается на странице, т.е. его тип поведения в потоке документа: будет ли он блочным, строчным, сеткой, гибким и т.д.;

## Основные типы display

- **`block`** - блочный элемент (_занимает всю ширину, начинается с новой строки_);
- **`inline`** - строчный элемент (_не задаются ширина и высота, не переносится на новую строку_);
- **`inline-block`** - строчный элемент, но можно задавать ширину и высоту;
- **`none`** - скрытый элемент;

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>display</title>
    </head>
    <body>
        <div class="block-example">
            Я блочный элемент. Занимаю всю ширину и начинаю с новой строки.
        </div>

        <span class="inline-example">Я строчный элемент.</span>
        <span class="inline-example-second">Я продолжаю на той же строке.</span>

        <span class="inline-block-example">Я inline-block</span>
        <span class="inline-block-example-second">И я inline-block</span>

        <div class="none-example">
            Этот текст не виден и не занимает места на странице.
        </div>

        <div>Этот текст виден.</div>
    </body>
</html>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.block-example {
    display: block;
    background: lightblue;
    padding: 10px;
}

.inline-example {
    display: inline;
    background: lightgreen;
}

.inline-example-second {
    display: inline;
    background: gold;
}

.inline-block-example {
    display: inline-block;
    width: 120px;
    height: 50px;
    background: salmon;
    text-align: center;
    margin-right: 10px;
}

.inline-block-example-second {
    display: inline-block;
    width: 120px;
    height: 50px;
    background: orange;
    text-align: center;
}

.none-example {
    display: none;
}
```

<CodePreview :html="html_071" :css="css_071" :js="js_071" height="300px" />

## Продвинутые типы

- **`flex`** - делает элемент контейнером flex-блока;
- **`inline-flex`** - то же, что **`flex`**, но ведёт себя как строчный элемент;
- **`grid`** - делает элемент grid-контейнером;
- **`inline-grid`** - то же, что **`grid`**, но ведёт себя как строчный элемент;
- **`flow-root`** - блок с самостоятельным потоком;

Например, изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="section-title">display: <code>flex</code></div>
<div class="container flex-box">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

<div class="section-title">display: <code>inline-flex</code></div>
<div class="inline-flex-box">
    <div class="item">A</div>
    <div class="item">B</div>
</div>

<div class="section-title">display: <code>grid</code></div>
<div class="container grid-box">
    <div class="item">Ячейка 1</div>
    <div class="item">Ячейка 2</div>
    <div class="item">Ячейка 3</div>
    <div class="item">Ячейка 4</div>
</div>

<div class="section-title">display: <code>inline-grid</code></div>
<div class="inline-grid-box">
    <div class="item">X</div>
    <div class="item">Y</div>
</div>

<div class="section-title">display: <code>flow-root</code></div>
<div class="flow-root-box">
    <div class="float-box"></div>
    <p class="item">
        Я блок с <code>display: flow-root</code>. Благодаря этому мой
        float-элемент (слева) не "выпадает" из потока — обтекание сбрасывается
        автоматически.
    </p>
</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    padding: 20px;
}

.section-title {
    margin-top: 40px;
    font-weight: bold;
}

.container {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    padding: 10px;
}

/* FLEX */
.flex-box {
    display: flex;
    gap: 10px;
}

.inline-flex-box {
    display: inline-flex;
    gap: 10px;
    border: 2px dashed #999;
}

/* GRID */
.grid-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.inline-grid-box {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    border: 2px dashed #999;
}

/* FLOW-ROOT */
.flow-root-box {
    display: flow-root;
    border: 2px solid tomato;
    padding: 10px;
}

.float-box {
    float: left;
    width: 100px;
    height: 100px;
    background: lightcoral;
    margin-right: 10px;
}

.item {
    background: lightblue;
    padding: 10px;
    text-align: center;
    border: 1px solid #666;
}
```

<CodePreview :html="html_072" :css="css_072" :js="js_072" height="800px" />
