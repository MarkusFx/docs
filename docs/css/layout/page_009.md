---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_117 from '../.././.vitepress/examples/css/demo_117/index.html?raw';
import css_117 from '../.././.vitepress/examples/css/demo_117/style.css?raw';
import js_117 from '../.././.vitepress/examples/css/demo_117/script.js?raw';
</script>

# Адаптивная верстка

## Что такое адаптивная вёрстка?

**Адаптивная вёрстка** - это подход к разработке сайтов, при котором интерфейс автоматически подстраивается под размер экрана пользователя, обеспечивая удобство на телефонах, планшетах, ноутбуках, мониторах и пр.

## Медиа-запросы

- `@media () {}` - позволяет применить CSS-правила при определённых условиях;

Например:

::: code-group

```html [index.html] :line-numbers
<div class="card-grid">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
    <div class="card">Карточка 4</div>
</div>
```

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    margin: 0;
    padding: 20px;
    background: #f9f9f9;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    border: 2px dashed #ccc;
    padding: 20px;
}

.card {
    background: #4dabf7;
    color: white;
    padding: 20px;
    flex: 1 1 calc(25% - 20px);
    box-sizing: border-box;
    text-align: center;
    font-weight: bold;
}

@media (max-width: 500px) {
    .card {
        flex: 1 1 100%;
    }
}

@media (max-width: 600px) and (min-width: 501px) {
    .card {
        flex: 1 1 calc(50% - 20px);
    }
}
```

:::

<CodePreview :html="html_117" :css="css_117" :js="js_117" height="400px" />

## Что такое calc?

- `calc()` - это функция в CSS, которая позволяет выполнять вычисления прямо в значениях свойств.

Например:

```css :line-numbers
.box {
    width: calc(100% - 40px);
}
```

## Viewport

**Viewport** - это область экрана, в которой отображается веб-страница (_обычно подразумевается размер видимой части браузера, без прокрутки_).

Чтобы управлять масштабом и адаптацией, в **`<head>`** HTML-документа добавляют:

```html :line-numbers
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- **`width=device-width`** - ширина вьюпорта равна ширине экрана устройства;
- **`initial-scale=1.0`** - начальный масштаб 100%.

Без этого тега сайт на телефоне будет выглядеть как уменьшенная десктопная версия.
