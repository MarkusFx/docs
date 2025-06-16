---
outline: [2]
---

<script setup>
import CodePreview from '.././.vitepress/components/CodePreview.vue';

import html_1 from '.././.vitepress/examples/html/demo_001/index.html?raw';
import css_1 from '.././.vitepress/examples/html/demo_001/style.css?raw';
import js_1 from '.././.vitepress/examples/html/demo_001/script.js?raw';
</script>

# Введение

## Что такое HTML?

**HTML (HyperText Markup Language)** - это язык разметки, используемый для создания и структурирования содержимого веб-страниц в интернете. Он не является языком программирования, а служит для описания структуры информации на веб-странице.

## Пример простейшей HTML-страницы

Создадим и изменим файл **`index.html`**:

```html:line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Моя первая страница</title>
    </head>
    <body>
        <h1>Привет, мир!</h1>
        <p>Это мой первый HTML-документ.</p>
        <a href="https://markusfx.ru">Перейти по ссылке</a>
    </body>
</html>
```

- **`<html>`** - корневой элемент HTML-документа;
- **`<head>`** - метаданные (_заголовок страницы, кодировка и т.д._);
- **`<body>`** - основное содержимое страницы;
- **`<h1>`** - заголовок первого уровня;
- **`<p>`** - абзац текста;
- **`<a>`** - гиперссылка;

Откроем файл **`index.html`** в браузере:

<CodePreview :html="html_1" :css="css_1" :js="js_1" height="300px" />

## Элементы и теги

Вся HTML-страница состоит из **тегов** - ключевых слов в угловых скобках **`< >`**, которые обозначают **элементы** (_заголовки, абзацы, изображения и т.д._).

Элементы могут иметь открывающий и закрывающий **тег**. Например:

```html:line-numbers
<div>Привет</div>
```

Элементы также могут состоять из одного **тега**. Например:

```html:line-numbers
<br/>
```

## Атрибуты

Каждый элемент внутри открывающего **тега** может иметь **атрибуты**. Например:

```html:line-numbers
<div style="color:red;">Привет</div>
```

- **`style="color:red;"`** - это атрибут.

Также существуют булевые (_логические_) атрибуты. Например:

```html:line-numbers
<input type="button" value="Нажать" disabled />
```

- **`disabled`** - булевый атрибут.
