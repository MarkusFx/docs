---
outline: [2, 3]
---

<script setup>
    import CodePreview from '.././.vitepress/components/CodePreview.vue';

    import html_001 from '.././.vitepress/examples/css/demo_001/index.html?raw';
    import css_001 from '.././.vitepress/examples/css/demo_001/style.css?raw';
    import js_001 from '.././.vitepress/examples/css/demo_001/script.js?raw';

    import html_002 from '.././.vitepress/examples/css/demo_002/index.html?raw';
    import css_002 from '.././.vitepress/examples/css/demo_002/style.css?raw';
    import js_002 from '.././.vitepress/examples/css/demo_002/script.js?raw';

    import html_003 from '.././.vitepress/examples/css/demo_003/index.html?raw';
    import css_003 from '.././.vitepress/examples/css/demo_003/style.css?raw';
    import js_003 from '.././.vitepress/examples/css/demo_003/script.js?raw';

    import html_004 from '.././.vitepress/examples/css/demo_004/index.html?raw';
    import css_004 from '.././.vitepress/examples/css/demo_004/style.css?raw';
    import js_004 from '.././.vitepress/examples/css/demo_004/script.js?raw';
</script>

# Введение

## Что такое CSS?

**CSS (Cascading Style Sheets - каскадные таблицы стилей)** - это язык, который используется для оформления внешнего вида HTML-документов. С его помощью можно задавать стили: цвета, шрифты, отступы, размеры, расположение элементов на странице и многое другое.

**HTML** отвечает за структуру контента, а **CSS** - за его внешний вид.

Например, создадим и изменим файл **`index.html`**:

```html:line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример CSS</title>
        <style>
            body {
                background-color: #333333;
                font-family: Arial, sans-serif;
            }

            h1 {
                color: #00e5a4;
                text-align: center;
            }

            p {
                color: #eeeeee;
                font-size: 18px;
                line-height: 1.5;
                max-width: 600px;
                margin: 0 auto;
            }

            .highlight {
                color: #00e5a4;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>Привет, мир!</h1>
        <p>
            Это простой пример использования
            <span class="highlight">CSS</span> в HTML-документе.
        </p>
    </body>
</html>
```

- **`<style>`** - таблица стилей;
- **`body`** - задаёт фон и шрифт всей странице;
- **`h1`** - стилизует заголовок (_цвет и выравнивание_);
- **`p`** - задаёт стили для абзацев (_цвет текста, размер, межстрочный интервал, отступы_);
- **`.highlight`** - класс для выделения текста цветом и жирным;

<CodePreview :html="html_001" :css="css_001" :js="js_001" height="200px" />

## Селектор и блок деклараций

Определение стиля состоит из двух основных частей:

- **Селектор** - часть до фигурных скобок (_**`{...}`**_);
- **Блок деклараций** - всё, что находится внутри фигурных скобок;
    - **_свойство: значение;_** - структура одной декларации;

Например:

```css:line-numbers
p {
    color: red;
    font-size: 16px;
}
```

- **`p`** - селектор;
- **`{...}`** - блок деклараций;
- **`color`, `font-size`** - свойства;
- **`red`, `16px`** - значения;

## Подключение стилей в HTML

В HTML есть три основных способа подключения CSS-стилей:

1. Встроенные стили (_inline styles_);
2. Внутренние стили (_внутри тега **`<style>`**_);
3. Внешние стили (_подключение отдельного CSS-файла_).

### Встроенные стили

CSS пишется прямо внутри тега с помощью атрибута **`style`**.

Например:

```html:line-numbers
<p style="color: red; font-size: 18px">Привет, мир!</p>
```

<CodePreview :html="html_002" :css="css_002" :js="js_002" height="100px" />

### Внутренние стили

CSS пишется в секции **`<style>`** внутри HTML-документа (_чаще всего в **`<head>`**_).

Например:

```html:line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <style>
            p {
                color: blue;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <p>Привет, мир!</p>
    </body>
</html>
```

<CodePreview :html="html_003" :css="css_003" :js="js_003" height="100px" />

### Внешние стили

CSS хранится в отдельном **`.css`**-файле, который подключается с помощью тега **`<link>`** в **`<head>`**.

Например, создадим и изменим файл **`index.html`**:

```html:line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <p>Привет, мир!</p>
    </body>
</html>
```

Создадим и изменим файл **`styles.css`**:

```css:line-numbers
p {
    color: green;
    font-size: 20px;
}
```

<CodePreview :html="html_004" :css="css_004" :js="js_004" height="100px" />

## Приоритеты стилей

- **Стили браузера по умолчанию** - самый низкий приоритет;
- **Внешние** - низкий;
- **Внутренние** - средний;
- **Селекторы с `class` и `id`** - высокий;
- **Встроенные** - очень высокий;
- **`!important`** - максимальный.
