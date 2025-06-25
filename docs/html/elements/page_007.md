---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_018 from '../.././.vitepress/examples/html/demo_018/index.html?raw';
import css_018 from '../.././.vitepress/examples/html/demo_018/style.css?raw';
import js_018 from '../.././.vitepress/examples/html/demo_018/script.js?raw';

import html_019 from '../.././.vitepress/examples/html/demo_019/index.html?raw';
import css_019 from '../.././.vitepress/examples/html/demo_019/style.css?raw';
import js_019 from '../.././.vitepress/examples/html/demo_019/script.js?raw';

import html_020 from '../.././.vitepress/examples/html/demo_020/index.html?raw';
import css_020 from '../.././.vitepress/examples/html/demo_020/style.css?raw';
import js_020 from '../.././.vitepress/examples/html/demo_020/script.js?raw';
</script>

# Таблицы

Таблицы используются для отображения данных в виде строк и столбцов.

- **`<table>`** - контейнер таблицы;
- **`<tr>`** - строка;
- **`<th>`** - заголовочная ячейка (_жирный текст по умолчанию_);
- **`<td>`** - обычная ячейка;

Например:

```html [index.html] :line-numbers
<table>
    <tr>
        <th>Наименование</th>
        <th>Кол-во</th>
    </tr>
    <tr>
        <td>Стол</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Стул</td>
        <td>4</td>
    </tr>
</table>
```

<CodePreview :html="html_018" :css="css_018" :js="js_018" height="200px" />

Атрибуты:

- **`border`** - добавляет рамки;
- **`colspan`** - ячейка на несколько столбцов;
- **`rowspan`** - ячейка на несколько строк;

Например:

```html [index.html] :line-numbers
<table border="1">
    <tr>
        <th rowspan="2">Имя</th>
        <th colspan="2">Контакты</th>
    </tr>
    <tr>
        <th>Телефон</th>
        <th>Email</th>
    </tr>
    <tr>
        <td>MarkusFx</td>
        <td>+7-999-999-9999</td>
        <td>markusfx@mail.com</td>
    </tr>
</table>
```

<CodePreview :html="html_019" :css="css_019" :js="js_019" height="200px" />

Семантические (_описывающие смысл_) элементы:

- **`<tbody>`** - тело таблицы;
- **`<thead>`** - шапка таблицы;
- **`<tfoot>`** - подвал таблицы;

Например:

```html [index.html] :line-numbers
<table>
    <thead>
        <tr>
            <th>Товар</th>
            <th>Цена</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Молоко</td>
            <td>50 ₽</td>
        </tr>
        <tr>
            <td>Рыба</td>
            <td>250 ₽</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Итого</td>
            <td>300 ₽</td>
        </tr>
    </tfoot>
</table>
```

<CodePreview :html="html_020" :css="css_020" :js="js_020" height="200px" />
