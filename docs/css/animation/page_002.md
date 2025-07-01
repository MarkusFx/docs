---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_088 from '../.././.vitepress/examples/css/demo_088/index.html?raw';
import css_088 from '../.././.vitepress/examples/css/demo_088/style.css?raw';
import js_088 from '../.././.vitepress/examples/css/demo_088/script.js?raw';

import html_089 from '../.././.vitepress/examples/css/demo_089/index.html?raw';
import css_089 from '../.././.vitepress/examples/css/demo_089/style.css?raw';
import js_089 from '../.././.vitepress/examples/css/demo_089/script.js?raw';
</script>

# Переходы

## Что такое переходы?

- **`transition`** - позволяет создавать плавные анимации изменений стилей (_при наведении, фокусе или других событиях_).

## Синтаксис

- **`transition: [свойство] [длительность] [функция времени] [задержка];`**:
    - **`свойство`** - что анимировать;
    - **`длительность`** - за сколько времени;
    - **`функция времени`** - с какой скоростью;
    - **`задержка`** - через сколько начать;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="box">Наведи</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.box {
    background: lightblue;
    padding: 20px;
    transition: background-color 0.3s ease;
}

.box:hover {
    background-color: coral;
}
```

<CodePreview :html="html_088" :css="css_088" :js="js_088" height="200px" />

## Функции времени

- **`ease`** - быстро, медленно, плавно (_по умолчанию_);
- **`linear`** - равномерно, без ускорений;
- **`ease-in`** - медленно начинается, ускоряется;
- **`ease-out`** - быстро начинается, замедляется;
- **`ease-in-out`** - медленно начинается и заканчивается;
- **`cubic-bezier`** - "кастомная" кривая;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="container">
    <div>
        <div class="label">ease (по умолчанию)</div>
        <div class="block ease">ease</div>
    </div>

    <div>
        <div class="label">linear (равномерно)</div>
        <div class="block linear">linear</div>
    </div>

    <div>
        <div class="label">ease-in (медленный старт)</div>
        <div class="block ease-in">ease-in</div>
    </div>

    <div>
        <div class="label">ease-out (медленный финиш)</div>
        <div class="block ease-out">ease-out</div>
    </div>

    <div>
        <div class="label">ease-in-out (медленный старт и финиш)</div>
        <div class="block ease-in-out">ease-in-out</div>
    </div>

    <div>
        <div class="label">custom bezier</div>
        <div class="block custom">bezier</div>
    </div>
</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    padding: 40px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.block {
    width: 100px;
    height: 40px;
    background: steelblue;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    transition: transform 1.5s;
    cursor: pointer;
}

.ease {
    transition-timing-function: ease;
}
.linear {
    transition-timing-function: linear;
}
.ease-in {
    transition-timing-function: ease-in;
}
.ease-out {
    transition-timing-function: ease-out;
}
.ease-in-out {
    transition-timing-function: ease-in-out;
}
.custom {
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.block:hover {
    transform: translateX(300px);
}

.label {
    margin-bottom: 5px;
    font-weight: bold;
}
```

<CodePreview :html="html_089" :css="css_089" :js="js_089" height="600px" />
