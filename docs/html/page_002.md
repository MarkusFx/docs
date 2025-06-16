---
outline: [2]
---

<script setup>
import CodePreview from '.././.vitepress/components/CodePreview.vue';

import html_2 from '.././.vitepress/examples/html/demo_002/index.html?raw';
import css_2 from '.././.vitepress/examples/html/demo_002/style.css?raw';
import js_2 from '.././.vitepress/examples/html/demo_002/script.js?raw';

import html_3 from '.././.vitepress/examples/html/demo_003/index.html?raw';
import css_3 from '.././.vitepress/examples/html/demo_003/style.css?raw';
import js_3 from '.././.vitepress/examples/html/demo_003/script.js?raw';

import html_4 from '.././.vitepress/examples/html/demo_004/index.html?raw';
import css_4 from '.././.vitepress/examples/html/demo_004/style.css?raw';
import js_4 from '.././.vitepress/examples/html/demo_004/script.js?raw';

import html_5 from '.././.vitepress/examples/html/demo_005/index.html?raw';
import css_5 from '.././.vitepress/examples/html/demo_005/style.css?raw';
import js_5 from '.././.vitepress/examples/html/demo_005/script.js?raw';

import html_6 from '.././.vitepress/examples/html/demo_006/index.html?raw';
import css_6 from '.././.vitepress/examples/html/demo_006/style.css?raw';
import js_6 from '.././.vitepress/examples/html/demo_006/script.js?raw';

import html_7 from '.././.vitepress/examples/html/demo_007/index.html?raw';
import css_7 from '.././.vitepress/examples/html/demo_007/style.css?raw';
import js_7 from '.././.vitepress/examples/html/demo_007/script.js?raw';

import html_8 from '.././.vitepress/examples/html/demo_008/index.html?raw';
import css_8 from '.././.vitepress/examples/html/demo_008/style.css?raw';
import js_8 from '.././.vitepress/examples/html/demo_008/script.js?raw';

import html_9 from '.././.vitepress/examples/html/demo_009/index.html?raw';
import css_9 from '.././.vitepress/examples/html/demo_009/style.css?raw';
import js_9 from '.././.vitepress/examples/html/demo_009/script.js?raw';
</script>

# Элементы

## Элементы группировки

### Элемент div

**`<div>`** - это контейнер (_блок_), который используется для группировки других элементов.

Например:

```html:line-numbers
<div>
    <div>Первый блок</div>
    <div>Второй блок</div>
</div>
```

<CodePreview :html="html_2" :css="css_2" :js="js_2" height="100px" />

### Элемент p

**`<p>`** - используется для создания абзаца текста. Автоматически отображается с отступами сверху и снизу. Текст внутри **`<p>`** считается блочным элементом и занимает всю ширину.

Например:

```html:line-numbers
<p>Абзац</p>
```

<CodePreview :html="html_3" :css="css_3" :js="js_3" height="100px" />

Нельзя вкладывать один **`<p>`** внутрь другого.

### Элемент br

**`<br>`** - используется для принудительного переноса строки.

Например:

```html:line-numbers
<div>Моя супер <br> длинная строка</div>
```

<CodePreview :html="html_4" :css="css_4" :js="js_4" height="100px" />

### Элемент pre

**`<pre>`** - предварительно форматированный текст. Он сохраняет все пробелы, табуляции и переносы строк.

Например:

```html:line-numbers
<pre>
    Первая строка
    Вторая строка
        Третья     строка
</pre>
```

<CodePreview :html="html_5" :css="css_5" :js="js_5" height="100px" />

### Элемент span

**`<span>`** - это встроенный (_inline_) контейнер, предназначенный для выделения части текста внутри других элементов, чтобы применять к этой части стили или взаимодействие через **JavaScript**. Он ничего сам по себе не делает визуально.

Например:

```html:line-numbers
<div>
    Это обычный текст, а
    <span style="color: red">это красный</span>
</div>
```

<CodePreview :html="html_6" :css="css_6" :js="js_6" height="100px" />

## Заголовки

Элементы **`<h1>`**, **`<h2>`**, **`<h3>`**, **`<h4>`**, **`<h5>`** и **`<h6>`** служат для создания заголовков.

Например:

```html:line-numbers
<div>
    <h1>Заголовок 1-го уровня</h1>
    <h2>Заголовок 2-го уровня</h2>
    <h3>Заголовок 3-го уровня</h3>
    <h4>Заголовок 4-го уровня</h4>
    <h5>Заголовок 5-го уровня</h5>
    <h6>Заголовок 6-го уровня</h6>
</div>
```

<CodePreview :html="html_7" :css="css_7" :js="js_7" height="320px" />

## Форматирование текста

- **`<b>`** - делает текст жирным (_без логического смысла_);
- **`<strong>`** - делает текст жирным (_с логическим смыслом - указывает на важность содержания_);
- **`<i>`** - курсивный текст;
- **`<em>`** - курсивный текст (_с логическим смыслом_);
- **`<s>`** - зачеркивает текст;
- **`<del>`** - зачеркивает текст (_с логическим смыслом_);
- **`<u>`** - подчеркивает текст;
- **`<ins>`** - подчёркивает текст (_с логическим смыслом_);
- **`<mark>`** - выделяет текст цветом (_обычно жёлтым_);
- **`<small>`** - делает текст меньше по размеру;
- **`<sub>`** - делает текст подстрочным;
- **`<sup>`** - делает текст надстрочным.

Например:

```html:line-numbers
<div>
    <b>Жирный текст</b>
    <strong>Жирный текст (логический)</strong>
    <i>Курсивный текст</i>
    <em>Курсивный текст (логический)</em>
    <s>Зачеркнутый текст</s>
    <del>Зачеркнутый текст (логический)</del>
    <u>Подчеркнутый текст</u>
    <ins>Подчеркнутый текст (логический)</ins>
    <mark>Выделенный текст</mark>
    <small>Текст меньший по размеру</small>
    <sub>Подстрочный текст</sub>
    <sup>Надстрочный текст</sup>
</div>
```

<CodePreview :html="html_8" :css="css_8" :js="js_8" height="100px" />

## Изображения

**`<img>`** - это самозакрывающийся тег, который вставляет изображение.

Атрибуты:

- **`src`** - путь к изображению (_обязательный_);
- **`alt`** - альтернативный текст. Показывается, если изображение не загрузилось (_рекомендуется_);
- **`width`** - ширина изображения;
- **`height`** - высота изображения;
- **`title`** - всплывающая подсказка при наведении курсора.

Например:

```html:line-numbers
<div>
    <img src="/images/html/cat-001.png" alt="Кот" height="150px" title="Котэ" />
</div>
<div>
    <img
        src="/images/html/not_found.png"
        alt="Это изображение не было найдено"
    />
</div>
```

<CodePreview :html="html_9" :css="css_9" :js="js_9" height="200px" />
