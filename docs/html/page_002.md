---
outline: [2, 3]
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

import html_010 from '.././.vitepress/examples/html/demo_010/index.html?raw';
import css_010 from '.././.vitepress/examples/html/demo_010/style.css?raw';
import js_010 from '.././.vitepress/examples/html/demo_010/script.js?raw';

import html_011 from '.././.vitepress/examples/html/demo_011/index.html?raw';
import css_011 from '.././.vitepress/examples/html/demo_011/style.css?raw';
import js_011 from '.././.vitepress/examples/html/demo_011/script.js?raw';

import html_012 from '.././.vitepress/examples/html/demo_012/index.html?raw';
import css_012 from '.././.vitepress/examples/html/demo_012/style.css?raw';
import js_012 from '.././.vitepress/examples/html/demo_012/script.js?raw';

import html_013 from '.././.vitepress/examples/html/demo_013/index.html?raw';
import css_013 from '.././.vitepress/examples/html/demo_013/style.css?raw';
import js_013 from '.././.vitepress/examples/html/demo_013/script.js?raw';

import html_014 from '.././.vitepress/examples/html/demo_014/index.html?raw';
import css_014 from '.././.vitepress/examples/html/demo_014/style.css?raw';
import js_014 from '.././.vitepress/examples/html/demo_014/script.js?raw';

import html_015 from '.././.vitepress/examples/html/demo_015/index.html?raw';
import css_015 from '.././.vitepress/examples/html/demo_015/style.css?raw';
import js_015 from '.././.vitepress/examples/html/demo_015/script.js?raw';

import html_016 from '.././.vitepress/examples/html/demo_016/index.html?raw';
import css_016 from '.././.vitepress/examples/html/demo_016/style.css?raw';
import js_016 from '.././.vitepress/examples/html/demo_016/script.js?raw';

import html_017 from '.././.vitepress/examples/html/demo_017/index.html?raw';
import css_017 from '.././.vitepress/examples/html/demo_017/style.css?raw';
import js_017 from '.././.vitepress/examples/html/demo_017/script.js?raw';

import html_018 from '.././.vitepress/examples/html/demo_018/index.html?raw';
import css_018 from '.././.vitepress/examples/html/demo_018/style.css?raw';
import js_018 from '.././.vitepress/examples/html/demo_018/script.js?raw';

import html_019 from '.././.vitepress/examples/html/demo_019/index.html?raw';
import css_019 from '.././.vitepress/examples/html/demo_019/style.css?raw';
import js_019 from '.././.vitepress/examples/html/demo_019/script.js?raw';

import html_020 from '.././.vitepress/examples/html/demo_020/index.html?raw';
import css_020 from '.././.vitepress/examples/html/demo_020/style.css?raw';
import js_020 from '.././.vitepress/examples/html/demo_020/script.js?raw';

import html_021 from '.././.vitepress/examples/html/demo_021/index.html?raw';
import css_021 from '.././.vitepress/examples/html/demo_021/style.css?raw';
import js_021 from '.././.vitepress/examples/html/demo_021/script.js?raw';

import html_022 from '.././.vitepress/examples/html/demo_022/index.html?raw';
import css_022 from '.././.vitepress/examples/html/demo_022/style.css?raw';
import js_022 from '.././.vitepress/examples/html/demo_022/script.js?raw';

import html_024 from '.././.vitepress/examples/html/demo_024/index.html?raw';
import css_024 from '.././.vitepress/examples/html/demo_024/style.css?raw';
import js_024 from '.././.vitepress/examples/html/demo_024/script.js?raw';
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

<CodePreview :html="html_7" :css="css_7" :js="js_7" height="350px" />

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

<CodePreview :html="html_8" :css="css_8" :js="js_8" height="150px" />

## Изображения

**`<img>`** - это самозакрывающийся тег, который добавляет изображение.

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

<CodePreview :html="html_9" :css="css_9" :js="js_9" height="250px" />

## Списки

### Упорядоченный, неупорядоченный список

- `<ul>` - неупорядоченный список;
- `<ol>` - упорядоченный список;
- `<li>` - элементы списка;

Например:

```html:line-numbers
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

Можно вкладывать один список в другой.

Например:

```html:line-numbers
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

В неупорядоченном списке можно настраивать маркеры с помощью CSS.

Например:

```html:line-numbers
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

В упорядоченном списке можно изменить тип нумерации с помощью атрибута **`type`**. Варианты **`type`**:

- **`1`** - по умолчанию (_1, 2, 3..._);
- **`A`** - заглавные буквы (_A, B, C..._);
- **`a`** - строчные буквы (_a, b, c..._);
- **`I`** - римские цифры (_I, II, III..._);
- **`i`** - строчные римские (_i, ii, iii..._);

Например:

```html:line-numbers
<ol type="A">
    <li>Первый</li>
    <li>Второй</li>
</ol>
```

<CodePreview :html="html_011" :css="css_011" :js="js_011" height="100px" />

В упорядоченном списке можно изменить начало нумерации с помощью атрибута **`start`**.

Например:

```html:line-numbers
<ol start="5">
    <li>Пятый</li>
    <li>Шестой</li>
</ol>
```

<CodePreview :html="html_015" :css="css_015" :js="js_015" height="100px" />

### Список определений

- **`<dl>`** - список определений (_контейнер_);
- **`<dt>`** - термин;
- **`<dd>`** - описание;

Например:

```html:line-numbers
<dl>
    <dt>HTML</dt>
    <dd>Язык разметки для веб-страниц</dd>

    <dt>CSS</dt>
    <dd>Стиль оформления веб-страниц</dd>
</dl>
```

<CodePreview :html="html_012" :css="css_012" :js="js_012" height="150px" />

## details

- **`<details>`** - используется для создания спойлеров или раскрывающихся блоков.

Например:

```html:line-numbers
<details>
    <summary>Подробнее</summary>
    <p>Здесь скрытый текст, который раскроется при клике.</p>
</details>
```

<CodePreview :html="html_016" :css="css_016" :js="js_016" height="150px" />

Можно добавить атрибут **`open`**, чтобы блок был изначально раскрыт.

Например:

```html:line-numbers
<details>
    <summary>Подробнее</summary>
    <p>Здесь скрытый текст, который раскроется при клике.</p>
</details>

<details open>
    <summary>Подробнее</summary>
    <p>Изначально открыт...</p>
</details>

<details>
    <summary>Подробнее</summary>
    <p>Здесь скрытый текст, который раскроется при клике.</p>
</details>
```

<CodePreview :html="html_017" :css="css_017" :js="js_017" height="200px" />

## Таблицы

Таблицы используются для отображения данных в виде строк и столбцов.

- **`<table>`** - контейнер таблицы;
- **`<tr>`** - строка;
- **`<th>`** - заголовочная ячейка (_жирный текст по умолчанию_);
- **`<td>`** - обычная ячейка;

Например:

```html:line-numbers
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

```html:line-numbers
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

```html:line-numbers
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

## Ссылки

- **`<a>`** - создание ссылки;
- **`href`** - адрес, куда ведёт ссылка;

Например:

```html:line-numbers
<a href="https://markusfx.ru">Перейти на сайт</a>
```

<CodePreview :html="html_021" :css="css_021" :js="js_021" height="100px" />

С помощью атрибута **`target`** можно указать, чтобы ссылка открывалась в новой вкладке.

```html:line-numbers
<a href="https://markusfx.ru" target="_blank">Перейти на сайт</a>
```

Значения **`target`**:

- **`_self`** - открывает ссылку в текущем окне/вкладке (_по умолчанию_);
- **`_blank`** - открывает в новой вкладке или окне;

Можно создавать ссылки-якоря (_на место внутри страницы_).

Например:

```html:line-numbers
<a href="#контакты">К разделу Контакты</a>

<h2 id="контакты">Контакты</h2>
```

Можно создавать ссылки на email.

Например:

```html:line-numbers
<a href="mailto:markusfx@mail.com">Написать нам</a>
```

Можно создавать ссылки на телефон.

```html:line-numbers
<a href="tel:+79999999999">Позвонить нам</a>
```

Можно создавать ссылки-изображения.

Например:

```html:line-numbers
<a href="https://markusfx.ru" target="_blank">
    <img src="/images/html/cat-001.png" alt="Кот-ссылка" height="150px" />
</a>
```

- **`width`** (_ширина_), **`height`** (_высота_) - размер изображения;
- **`px`** - размер в пикселях;

<CodePreview :html="html_022" :css="css_022" :js="js_022" height="200px" />

## Фреймы

Тег **`<iframe>`** позволяет встроить другой сайт или страницу внутрь текущей.

Например:

```html:line-numbers
<iframe src="https://markusfx.ru" width="400px"></iframe>
```

- **`src`** - URL страницы;
- **`width`** - ширина фрейма (_в пикселях или %_);
- **`height`** - высота;

<CodePreview :html="html_024" :css="css_024" :js="js_024" height="200px" />
