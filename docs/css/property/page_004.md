---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_050 from '../.././.vitepress/examples/css/demo_050/index.html?raw';
import css_050 from '../.././.vitepress/examples/css/demo_050/style.css?raw';
import js_050 from '../.././.vitepress/examples/css/demo_050/script.js?raw';

import html_051 from '../.././.vitepress/examples/css/demo_051/index.html?raw';
import css_051 from '../.././.vitepress/examples/css/demo_051/style.css?raw';
import js_051 from '../.././.vitepress/examples/css/demo_051/script.js?raw';

import html_052 from '../.././.vitepress/examples/css/demo_052/index.html?raw';
import css_052 from '../.././.vitepress/examples/css/demo_052/style.css?raw';
import js_052 from '../.././.vitepress/examples/css/demo_052/script.js?raw';

import html_053 from '../.././.vitepress/examples/css/demo_053/index.html?raw';
import css_053 from '../.././.vitepress/examples/css/demo_053/style.css?raw';
import js_053 from '../.././.vitepress/examples/css/demo_053/script.js?raw';

import html_054 from '../.././.vitepress/examples/css/demo_054/index.html?raw';
import css_054 from '../.././.vitepress/examples/css/demo_054/style.css?raw';
import js_054 from '../.././.vitepress/examples/css/demo_054/script.js?raw';
</script>

# Таблицы

## border

**`border`** - граница (_рамка_) ячеек или таблицы.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<table class="border-table">
    <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
    </tr>
</table>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.border-table {
    border: 1px solid #333; /* толщина границы, стиль, цвет */
}

.border-table td {
    border: 1px solid #999;
}
```

<CodePreview :html="html_050" :css="css_050" :js="js_050" height="120px" />

## border-collapse

**`border-collapse`** - настройка наложения границ.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<table class="collapse-table">
    <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
    </tr>
</table>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.collapse-table {
    border: 1px solid #333;
    border-collapse: collapse;
}

.collapse-table td {
    border: 1px solid #999;
}
```

<CodePreview :html="html_051" :css="css_051" :js="js_051" height="120px" />

## border-spacing

**`border-spacing`** - задаёт расстояние между ячейками таблицы.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<table class="spacing-table">
    <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
    </tr>
    <tr>
        <td>Ячейка 3</td>
        <td>Ячейка 4</td>
    </tr>
</table>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.spacing-table {
    border: 1px solid #333;
    border-spacing: 10px 20px;
    border-collapse: separate;
}

.spacing-table td {
    border: 1px solid #666;
}
```

<CodePreview :html="html_053" :css="css_053" :js="js_053" height="180px" />

## vertical-align

**`vertical-align`** - вертикальное выравнивание текста в ячейке.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<table>
    <tr>
        <td class="align-top">Сверху</td>
        <td class="align-center">По центру</td>
        <td class="align-bottom">Снизу</td>
    </tr>
</table>
```

Изменим файл **`styles.css`**:

```css:line-numbers
table {
    height: 100px;
    width: 300px;
    border-collapse: collapse;
}

td {
    border: 1px solid black;
}

.align-top {
    text-align: left;
    vertical-align: top;
}

.align-center {
    text-align: center;
    vertical-align: middle;
}

.align-bottom {
    text-align: right;
    vertical-align: bottom;
}
```

<CodePreview :html="html_052" :css="css_052" :js="js_052" height="180px" />

## empty-cells

**`empty-cells`** - отображение пустых ячеек.

Например. Изменим файл **`index.html`**:

```html:line-numbers
<table>
    <tr>
        <td>Заполнено</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Заполнено</td>
    </tr>
</table>

<br />

<table class="empty-cells-table">
    <tr>
        <td>Заполнено</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Заполнено</td>
    </tr>
</table>
```

Изменим файл **`styles.css`**:

```css:line-numbers
table {
    border: 1px solid silver;
}

td {
    border: 1px solid black;
}

.empty-cells-table {
    empty-cells: hide;
}
```

<CodePreview :html="html_054" :css="css_054" :js="js_054" height="180px" />
