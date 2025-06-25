---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_002 from '../.././.vitepress/examples/html/demo_002/index.html?raw';
import css_002 from '../.././.vitepress/examples/html/demo_002/style.css?raw';
import js_002 from '../.././.vitepress/examples/html/demo_002/script.js?raw';

import html_003 from '../.././.vitepress/examples/html/demo_003/index.html?raw';
import css_003 from '../.././.vitepress/examples/html/demo_003/style.css?raw';
import js_003 from '../.././.vitepress/examples/html/demo_003/script.js?raw';

import html_004 from '../.././.vitepress/examples/html/demo_004/index.html?raw';
import css_004 from '../.././.vitepress/examples/html/demo_004/style.css?raw';
import js_004 from '../.././.vitepress/examples/html/demo_004/script.js?raw';

import html_005 from '../.././.vitepress/examples/html/demo_005/index.html?raw';
import css_005 from '../.././.vitepress/examples/html/demo_005/style.css?raw';
import js_005 from '../.././.vitepress/examples/html/demo_005/script.js?raw';

import html_006 from '../.././.vitepress/examples/html/demo_006/index.html?raw';
import css_006 from '../.././.vitepress/examples/html/demo_006/style.css?raw';
import js_006 from '../.././.vitepress/examples/html/demo_006/script.js?raw';
</script>

# Элементы группировки

## Элемент div

- **`<div>`** - это контейнер (_блок_), который используется для группировки других элементов.

Например:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Моя первая страница</title>
    </head>
    <body>
        <div>
            <div>Первый блок</div>
            <div>Второй блок</div>
        </div>
    </body>
</html>
```

<CodePreview :html="html_002" :css="css_002" :js="js_002" height="100px" />

## Элемент p

- **`<p>`** - используется для создания абзаца текста. Автоматически отображается с отступами сверху и снизу. Текст внутри **`<p>`** считается блочным элементом и занимает всю ширину.

Например:

```html [index.html] :line-numbers
<p>Абзац</p>
```

<CodePreview :html="html_003" :css="css_003" :js="js_003" height="100px" />

Нельзя вкладывать один **`<p>`** внутрь другого.

## Элемент br

- **`<br>`** - используется для принудительного переноса строки.

Например:

```html [index.html] :line-numbers
<div>
    Моя супер <br />
    длинная строка
</div>
```

<CodePreview :html="html_004" :css="css_004" :js="js_004" height="100px" />

## Элемент pre

- **`<pre>`** - предварительно форматированный текст. Он сохраняет все пробелы, табуляции и переносы строк.

Например:

```html [index.html] :line-numbers
<pre>
    Первая строка
    Вторая строка
        Третья     строка
</pre>
```

<CodePreview :html="html_005" :css="css_005" :js="js_005" height="100px" />

## Элемент span

- **`<span>`** - это встроенный (_inline_) контейнер, предназначенный для выделения части текста внутри других элементов, чтобы применять к этой части стили или взаимодействие через **JavaScript**. Он ничего сам по себе не делает визуально.

Например:

```html [index.html] :line-numbers
<div>
    Это обычный текст, а
    <span style="color: red">это красный</span>
</div>
```

<CodePreview :html="html_006" :css="css_006" :js="js_006" height="100px" />
