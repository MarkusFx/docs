---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_082 from '../.././.vitepress/examples/css/demo_082/index.html?raw';
import css_082 from '../.././.vitepress/examples/css/demo_082/style.css?raw';
import js_082 from '../.././.vitepress/examples/css/demo_082/script.js?raw';

import html_083 from '../.././.vitepress/examples/css/demo_083/index.html?raw';
import css_083 from '../.././.vitepress/examples/css/demo_083/style.css?raw';
import js_083 from '../.././.vitepress/examples/css/demo_083/script.js?raw';

import html_084 from '../.././.vitepress/examples/css/demo_084/index.html?raw';
import css_084 from '../.././.vitepress/examples/css/demo_084/style.css?raw';
import js_084 from '../.././.vitepress/examples/css/demo_084/script.js?raw';

import html_085 from '../.././.vitepress/examples/css/demo_085/index.html?raw';
import css_085 from '../.././.vitepress/examples/css/demo_085/style.css?raw';
import js_085 from '../.././.vitepress/examples/css/demo_085/script.js?raw';

import html_086 from '../.././.vitepress/examples/css/demo_086/index.html?raw';
import css_086 from '../.././.vitepress/examples/css/demo_086/style.css?raw';
import js_086 from '../.././.vitepress/examples/css/demo_086/script.js?raw';

import html_087 from '../.././.vitepress/examples/css/demo_087/index.html?raw';
import css_087 from '../.././.vitepress/examples/css/demo_087/style.css?raw';
import js_087 from '../.././.vitepress/examples/css/demo_087/script.js?raw';
</script>

# Трансформации

## Что такое трансформации?

- **`transform`** - позволяет визуально изменять элементы (_вращать, перемещать, масштабировать и искажать их_).

## Функции transform

### translate

- **`translate(x, y)`** - смещает элемент по осям **`x`** и **`y`**;
- **`translate(x)`** - смещает элемент по оси **`x`**;
- **`translate(y)`** - смещает элемент по оси **`y`**;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="translate">translate(50px, 20px)</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.translate {
    border: 1px solid grey;
    width: 300px;
    padding: 20px;
    background: lightblue;
    transform: translate(50px, 20px);
}
```

<CodePreview :html="html_082" :css="css_082" :js="js_082" height="200px" />

### rotate

- **`rotate(a)	`** - вращение элемента (_в градусах_);

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="rotate">rotate(30deg)</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.rotate {
    border: 1px solid grey;
    width: 200px;
    margin: 80px 0 0 30px;
    padding: 20px;
    background: lightblue;
    transform: rotate(25deg);
}
```

<CodePreview :html="html_083" :css="css_083" :js="js_083" height="250px" />

### scale

- **`scale(x, y)`** - масштабирует элемент по осям **`x`** и **`y`**;
- **`scale(x)`** - масштабирует элемент по оси **`x`**;
- **`scale(y)`** - масштабирует элемент по оси **`y`**;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="scale">scale(1.5)</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.scale {
    border: 1px solid grey;
    width: 200px;
    margin: 80px 0 0 100px;
    padding: 20px;
    background: lightblue;
    transform: scale(1.5);
}
```

<CodePreview :html="html_084" :css="css_084" :js="js_084" height="250px" />

### skew

- **`skew(x, y)`** - искажает (_наклоняет_) элемент по осям **`x`** и **`y`**;
- **`skew(x)`** - искажает элемент по оси **`x`**;
- **`skew(y)`** - искажает элемент по оси **`y`**;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="skew">skew(20deg, 10deg)</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.skew {
    border: 1px solid grey;
    width: 200px;
    margin: 80px 0 0 100px;
    padding: 20px;
    background: lightblue;
    transform: skew(20deg, 10deg);
}
```

<CodePreview :html="html_085" :css="css_085" :js="js_085" height="250px" />

### transform-origin

- **`transform-origin`** - определяет точку начала трансформации (_по умолчанию центр элемента_);

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="box">Я вращаюсь от левого края</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.box {
    width: 100px;
    height: 100px;
    background: lightblue;
    border: 1px solid grey;
    margin: 20px 0 0 60px;
    padding: 20px;
    transform-origin: left center;
    transform: rotate(30deg);
}
```

<CodePreview :html="html_086" :css="css_086" :js="js_086" height="300px" />

### perspective

- **`perspective`** - добавляет перспективу для 3D-трансформаций;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="scene">
    <div class="cube1">1</div>
    <div class="cube2">2</div>
    <div class="cube3">3</div>
    <div class="cube4">4</div>
</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.scene {
    border: 1px solid #888;
    padding: 40px;
    display: flex;
    perspective: 800px;
}

.cube1,
.cube2,
.cube3,
.cube4 {
    width: 150px;
    height: 150px;
    background: lightseagreen;
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 800px;
    transform: rotateY(45deg);
}
```

<CodePreview :html="html_087" :css="css_087" :js="js_087" height="300px" />
