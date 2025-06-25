---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_010 from '../.././.vitepress/examples/html/demo_010/index.html?raw';
import css_010 from '../.././.vitepress/examples/html/demo_010/style.css?raw';
import js_010 from '../.././.vitepress/examples/html/demo_010/script.js?raw';

import html_011 from '../.././.vitepress/examples/html/demo_011/index.html?raw';
import css_011 from '../.././.vitepress/examples/html/demo_011/style.css?raw';
import js_011 from '../.././.vitepress/examples/html/demo_011/script.js?raw';

import html_012 from '../.././.vitepress/examples/html/demo_012/index.html?raw';
import css_012 from '../.././.vitepress/examples/html/demo_012/style.css?raw';
import js_012 from '../.././.vitepress/examples/html/demo_012/script.js?raw';

import html_013 from '../.././.vitepress/examples/html/demo_013/index.html?raw';
import css_013 from '../.././.vitepress/examples/html/demo_013/style.css?raw';
import js_013 from '../.././.vitepress/examples/html/demo_013/script.js?raw';

import html_014 from '../.././.vitepress/examples/html/demo_014/index.html?raw';
import css_014 from '../.././.vitepress/examples/html/demo_014/style.css?raw';
import js_014 from '../.././.vitepress/examples/html/demo_014/script.js?raw';

import html_015 from '../.././.vitepress/examples/html/demo_015/index.html?raw';
import css_015 from '../.././.vitepress/examples/html/demo_015/style.css?raw';
import js_015 from '../.././.vitepress/examples/html/demo_015/script.js?raw';
</script>

# Списки

## Упорядоченный, неупорядоченный список

- **`<ul>`** - неупорядоченный список;
- **`<ol>`** - упорядоченный список;
- **`<li>`** - элементы списка;

Например:

```html [index.html] :line-numbers
<ul>
    <li>Яблоко</li>
    <li>Банан</li>
    <li>Вишня</li>
</ul>

<ol>
    <li>Первое</li>
    <li>Второе</li>
    <li>Третье</li>
</ol>
```

<CodePreview :html="html_010" :css="css_010" :js="js_010" height="200px" />

Можно вкладывать один список в другой. Например:

```html [index.html] :line-numbers
<ul>
    <li>
        Фрукты
        <ul>
            <li>Яблоко</li>
            <li>Апельсин</li>
        </ul>
    </li>
    <li>Овощи</li>
</ul>
```

<CodePreview :html="html_013" :css="css_013" :js="js_013" height="150px" />

В неупорядоченном списке можно настраивать маркеры с помощью CSS. Например:

```html [index.html] :line-numbers
<ul style="list-style-type: disc">
    <li>Элемент 1</li>
    <li>Элемент 2</li>
</ul>

<ul style="list-style-type: circle">
    <li>Элемент 1</li>
    <li>Элемент 2</li>
</ul>

<ul style="list-style-type: square">
    <li>Элемент 1</li>
    <li>Элемент 2</li>
</ul>

<ul style="list-style-type: none">
    <li>Элемент 1</li>
    <li>Элемент 2</li>
</ul>
```

<CodePreview :html="html_014" :css="css_014" :js="js_014" height="250px" />

В упорядоченном списке можно изменить тип нумерации с помощью атрибута **`type`**.

Варианты **`type`**:

- **`1`** - по умолчанию (_1, 2, 3..._);
- **`A`** - заглавные буквы (_A, B, C..._);
- **`a`** - строчные буквы (_a, b, c..._);
- **`I`** - римские цифры (_I, II, III..._);
- **`i`** - строчные римские (_i, ii, iii..._);

Например:

```html [index.html] :line-numbers
<ol type="A">
    <li>Первый</li>
    <li>Второй</li>
</ol>
```

<CodePreview :html="html_011" :css="css_011" :js="js_011" height="100px" />

В упорядоченном списке можно изменить начало нумерации с помощью атрибута **`start`**. Например:

```html [index.html] :line-numbers
<ol start="5">
    <li>Пятый</li>
    <li>Шестой</li>
</ol>
```

<CodePreview :html="html_015" :css="css_015" :js="js_015" height="100px" />

## Список определений

- **`<dl>`** - список определений (_контейнер_);
- **`<dt>`** - термин;
- **`<dd>`** - описание;

Например:

```html [index.html] :line-numbers
<dl>
    <dt>HTML</dt>
    <dd>Язык разметки для веб-страниц</dd>

    <dt>CSS</dt>
    <dd>Стиль оформления веб-страниц</dd>
</dl>
```

<CodePreview :html="html_012" :css="css_012" :js="js_012" height="150px" />
