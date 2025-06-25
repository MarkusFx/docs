---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_025 from '../.././.vitepress/examples/css/demo_025/index.html?raw';
import css_025 from '../.././.vitepress/examples/css/demo_025/style.css?raw';
import js_025 from '../.././.vitepress/examples/css/demo_025/script.js?raw';

import html_026 from '../.././.vitepress/examples/css/demo_026/index.html?raw';
import css_026 from '../.././.vitepress/examples/css/demo_026/style.css?raw';
import js_026 from '../.././.vitepress/examples/css/demo_026/script.js?raw';

import html_027 from '../.././.vitepress/examples/css/demo_027/index.html?raw';
import css_027 from '../.././.vitepress/examples/css/demo_027/style.css?raw';
import js_027 from '../.././.vitepress/examples/css/demo_027/script.js?raw';

import html_028 from '../.././.vitepress/examples/css/demo_028/index.html?raw';
import css_028 from '../.././.vitepress/examples/css/demo_028/style.css?raw';
import js_028 from '../.././.vitepress/examples/css/demo_028/script.js?raw';
</script>

# Псевдоэлементы

## ::before

- **`::before`** - контент перед элементом.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<p class="note">Это важная заметка.</p>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.note::before {
    content: 'Внимание! ';
    color: red;
}
```

<CodePreview :html="html_025" :css="css_025" :js="js_025" height="100px" />

## ::after

- **`::after`** - контент после элемента.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<p class="note">Это важная заметка.</p>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.note::after {
    content: ' Спасибо за внимание!';
    color: green;
}
```

<CodePreview :html="html_026" :css="css_026" :js="js_026" height="100px" />

## ::first-letter

- **`::first-letter`** - первая буква.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<p>Заголовок параграфа начинается с большой буквы.</p>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
p::first-letter {
    font-size: 2em;
    color: red;
    font-weight: bold;
}
```

<CodePreview :html="html_027" :css="css_027" :js="js_027" height="100px" />

## ::first-line

- **`::first-line`** - первая строка.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<p>
    Это текст с несколькими строками. При уменьшении ширины окна можно увидеть,
    как стилизуется только первая строка текста, а остальные - нет.
</p>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
p::first-line {
    background: #a8b1ff;
    text-transform: uppercase;
}
```

<CodePreview :html="html_028" :css="css_028" :js="js_028" height="150px" />
