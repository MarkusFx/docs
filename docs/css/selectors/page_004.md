---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_019 from '../.././.vitepress/examples/css/demo_019/index.html?raw';
import css_019 from '../.././.vitepress/examples/css/demo_019/style.css?raw';
import js_019 from '../.././.vitepress/examples/css/demo_019/script.js?raw';

import html_020 from '../.././.vitepress/examples/css/demo_020/index.html?raw';
import css_020 from '../.././.vitepress/examples/css/demo_020/style.css?raw';
import js_020 from '../.././.vitepress/examples/css/demo_020/script.js?raw';

import html_021 from '../.././.vitepress/examples/css/demo_021/index.html?raw';
import css_021 from '../.././.vitepress/examples/css/demo_021/style.css?raw';
import js_021 from '../.././.vitepress/examples/css/demo_021/script.js?raw';

import html_022 from '../.././.vitepress/examples/css/demo_022/index.html?raw';
import css_022 from '../.././.vitepress/examples/css/demo_022/style.css?raw';
import js_022 from '../.././.vitepress/examples/css/demo_022/script.js?raw';

import html_023 from '../.././.vitepress/examples/css/demo_023/index.html?raw';
import css_023 from '../.././.vitepress/examples/css/demo_023/style.css?raw';
import js_023 from '../.././.vitepress/examples/css/demo_023/script.js?raw';

import html_024 from '../.././.vitepress/examples/css/demo_024/index.html?raw';
import css_024 from '../.././.vitepress/examples/css/demo_024/style.css?raw';
import js_024 from '../.././.vitepress/examples/css/demo_024/script.js?raw';
</script>

# Псевдоклассы

## :hover

- **`:hover`** - при наведении.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <button class="btn">Нажми меня</button>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.btn:hover {
    background: orange;
    cursor: pointer;
}
```

<CodePreview :html="html_019" :css="css_019" :js="js_019" height="150px" />

## :focus

- **`:focus`** - при фокусе (_наведении мыши_).

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <input type="text" placeholder="Введите текст" />
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
input:focus {
    border: 2px solid blue;
    outline: none;
}
```

<CodePreview :html="html_020" :css="css_020" :js="js_020" height="150px" />

## :active

- **`:active`** - при нажатии.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <button class="btn">Нажми меня</button>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.btn:active {
    background: red;
}
```

<CodePreview :html="html_021" :css="css_021" :js="js_021" height="150px" />

## :disabled

- **`:disabled`** - для недоступных элементов.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <button disabled>Недоступная кнопка</button>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

<CodePreview :html="html_022" :css="css_022" :js="js_022" height="150px" />

## :first-child

- **`:first-child`** - первый дочерний элемент.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
    </ul>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
li:first-child {
    font-weight: bold;
}
```

<CodePreview :html="html_023" :css="css_023" :js="js_023" height="150px" />

## :nth-child(n)

- **`:nth-child(n)`** - дочерний элемент за номером **`n`**.

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<body>
    <table>
        <tr>
            <td>Строка 1</td>
        </tr>
        <tr>
            <td>Строка 2</td>
        </tr>
        <tr>
            <td>Строка 3</td>
        </tr>
    </table>
</body>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
tr:nth-child(2) {
    background: lightgray;
}
```

<CodePreview :html="html_024" :css="css_024" :js="js_024" height="150px" />
