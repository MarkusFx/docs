---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_014 from '../.././.vitepress/examples/css/demo_014/index.html?raw';
import css_014 from '../.././.vitepress/examples/css/demo_014/style.css?raw';
import js_014 from '../.././.vitepress/examples/css/demo_014/script.js?raw';

import html_015 from '../.././.vitepress/examples/css/demo_015/index.html?raw';
import css_015 from '../.././.vitepress/examples/css/demo_015/style.css?raw';
import js_015 from '../.././.vitepress/examples/css/demo_015/script.js?raw';

import html_016 from '../.././.vitepress/examples/css/demo_016/index.html?raw';
import css_016 from '../.././.vitepress/examples/css/demo_016/style.css?raw';
import js_016 from '../.././.vitepress/examples/css/demo_016/script.js?raw';

import html_017 from '../.././.vitepress/examples/css/demo_017/index.html?raw';
import css_017 from '../.././.vitepress/examples/css/demo_017/style.css?raw';
import js_017 from '../.././.vitepress/examples/css/demo_017/script.js?raw';

import html_018 from '../.././.vitepress/examples/css/demo_018/index.html?raw';
import css_018 from '../.././.vitepress/examples/css/demo_018/style.css?raw';
import js_018 from '../.././.vitepress/examples/css/demo_018/script.js?raw';
</script>

# Селекторы по атрибутам

## [attr]

- **`[attr]`** - селектор наличия атрибута **`attr`**.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <input type="text" placeholder="Имя" />
    <input type="text" />
    <input type="text" placeholder="Возраст" />
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
input[placeholder] {
    border: 2px solid green;
}
```

<CodePreview :html="html_014" :css="css_014" :js="js_014" height="150px" />

## [attr="value"]

- **`[attr="value"]`** - селектор по точному значению.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <span data-type="error">Ошибка</span>
    <span data-type="success">Успешно</span>
    <span data-type="error">Ещё одна ошибка</span>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
span[data-type='error'] {
    color: red;
    font-weight: bold;
}
```

<CodePreview :html="html_015" :css="css_015" :js="js_015" height="150px" />

## [attr^="val"]

- **`[attr^="val"]`** - значение начинается с **`val`**.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <div class="card-primary">Карточка 1</div>
    <div class="card-secondary">Карточка 2</div>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
div[class^='card-'] {
    padding: 10px;
    border: 1px solid #ccc;
}
```

<CodePreview :html="html_016" :css="css_016" :js="js_016" height="150px" />

## [attr$="val"]

- **`[attr$="val"]`** - значение оканчивается на **`val`**.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <p data-id="post-123">Пост</p>
    <p data-id="user-456">Пользователь</p>
    <p data-id="123456">Дата</p>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
p[data-id$='456'] {
    color: blue;
}
```

<CodePreview :html="html_017" :css="css_017" :js="js_017" height="150px" />

## [attr*="val"]

- **`[attr*="val"]`** - значение содержит **`val`**.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <span title="important-message">Важное</span>
    <span title="regular-message">Обычное</span>
    <span title="nt-important">Не важное</span>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
span[title*='mess'] {
    font-weight: bold;
}
```

<CodePreview :html="html_018" :css="css_018" :js="js_018" height="150px" />
