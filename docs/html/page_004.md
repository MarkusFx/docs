---
outline: [2, 3]
---

<script setup>
    import CodePreview from '.././.vitepress/components/CodePreview.vue';

    import html_023 from '.././.vitepress/examples/html/demo_023/index.html?raw';
    import css_023 from '.././.vitepress/examples/html/demo_023/style.css?raw';
    import js_023 from '.././.vitepress/examples/html/demo_023/script.js?raw';

    import html_034 from '.././.vitepress/examples/html/demo_034/index.html?raw';
    import css_034 from '.././.vitepress/examples/html/demo_034/style.css?raw';
    import js_034 from '.././.vitepress/examples/html/demo_034/script.js?raw';

    import html_035 from '.././.vitepress/examples/html/demo_035/index.html?raw';
    import css_035 from '.././.vitepress/examples/html/demo_035/style.css?raw';
    import js_035 from '.././.vitepress/examples/html/demo_035/script.js?raw';

    import html_036 from '.././.vitepress/examples/html/demo_036/index.html?raw';
    import css_036 from '.././.vitepress/examples/html/demo_036/style.css?raw';
    import js_036 from '.././.vitepress/examples/html/demo_036/script.js?raw';

    import html_037 from '.././.vitepress/examples/html/demo_037/index.html?raw';
    import css_037 from '.././.vitepress/examples/html/demo_037/style.css?raw';
    import js_037 from '.././.vitepress/examples/html/demo_037/script.js?raw';

    import html_038 from '.././.vitepress/examples/html/demo_038/index.html?raw';
    import css_038 from '.././.vitepress/examples/html/demo_038/style.css?raw';
    import js_038 from '.././.vitepress/examples/html/demo_038/script.js?raw';

    import html_039 from '.././.vitepress/examples/html/demo_039/index.html?raw';
    import css_039 from '.././.vitepress/examples/html/demo_039/style.css?raw';
    import js_039 from '.././.vitepress/examples/html/demo_039/script.js?raw';

    import html_040 from '.././.vitepress/examples/html/demo_040/index.html?raw';
    import css_040 from '.././.vitepress/examples/html/demo_040/style.css?raw';
    import js_040 from '.././.vitepress/examples/html/demo_040/script.js?raw';

    import html_041 from '.././.vitepress/examples/html/demo_041/index.html?raw';
    import css_041 from '.././.vitepress/examples/html/demo_041/style.css?raw';
    import js_041 from '.././.vitepress/examples/html/demo_041/script.js?raw';

    import html_042 from '.././.vitepress/examples/html/demo_042/index.html?raw';
    import css_042 from '.././.vitepress/examples/html/demo_042/style.css?raw';
    import js_042 from '.././.vitepress/examples/html/demo_042/script.js?raw';
</script>

# Семантические структуры

## Что такое семантические структуры?

**Семантические структуры** - это теги, которые описывают смысл (_значение_) контента, а не просто его внешний вид. Такие теги делают HTML-код понятнее как для разработчиков, так и для поисковиков, технических средств (_экранных читалок_) и других инструментов.

## Базовая семантическая структура

Например:

```html:line-numbers
<body>
    <header>
        <h1>Мой блог</h1>
        <nav>
            <a href="/">Главная</a>
            <a href="/about">О сайте</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Первая статья</h2>
            <p>Содержимое статьи...</p>
        </article>

        <section>
            <h3>Комментарии</h3>
            <p>Комментарий 1</p>
            <p>Комментарий 2</p>
        </section>
    </main>

    <aside>
        <h3>Категории</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2025 Мой блог</p>
    </footer>
</body>
```

- **`<header>`** - шапка страницы или раздела;
- **`<main>`** - основное содержимое страницы;
- **`<article>`** - независимая статья или запись;
- **`<section>`** - логически обособленный раздел;
- **`<aside>`** - дополнительная информация;
- **`<footer>`** - колонтитул (_подвал_) страницы;

<CodePreview :html="html_034" :css="css_034" :js="js_034" height="500px" />

## Элемент article

- **`<article>`** - независимая статья или запись;

Например:

```html:line-numbers
<article>
    <h2>Как выучить HTML за неделю</h2>
    <p>Никак...</p>
    <footer>
        <p>Автор: Иван Петров • 18 июня 2025</p>
    </footer>
</article>
```

<CodePreview :html="html_035" :css="css_035" :js="js_035" height="200px" />

## Элемент section

- **`<section>`** - логически обособленный раздел;

Например:

```html:line-numbers
<section>
    <h2>Наши услуги</h2>
    <ul>
        <li>Разработка сайтов</li>
        <li>Продвижение в поиске</li>
        <li>Техническая поддержка</li>
    </ul>
</section>
```

<CodePreview :html="html_036" :css="css_036" :js="js_036" height="200px" />

## Элемент nav

- **`<nav>`** - блок с навигацией (_меню, ссылки_);

Например:

```html:line-numbers
<nav>
    <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/about">О нас</a></li>
        <li><a href="/contact">Контакты</a></li>
    </ul>
</nav>
```

<CodePreview :html="html_037" :css="css_037" :js="js_037" height="200px" />

## Элемент header

- **`<header>`** - шапка страницы или раздела;

Например:

```html:line-numbers
<header>
    <h1>Мой сайт</h1>
    <p>Добро пожаловать на мой блог о веб-разработке</p>
    <nav>
        <a href="/">Главная</a> |
        <a href="/blog">Блог</a>
    </nav>
</header>
```

<CodePreview :html="html_038" :css="css_038" :js="js_038" height="200px" />

## Элемент aside

- **`<aside>`** - дополнительная информация;

Например:

```html:line-numbers
<aside>
    <h3>Популярные статьи</h3>
    <ul>
        <li><a href="/html-basics">Основы HTML</a></li>
        <li><a href="/css-grid">CSS Grid</a></li>
    </ul>
</aside>
```

<CodePreview :html="html_039" :css="css_039" :js="js_039" height="200px" />

## Элемент main

- **`<main>`** - основное содержимое страницы;

Например:

```html:line-numbers
<main>
    <h2>Последние статьи</h2>

    <article>
        <h3>Что такое семантическая верстка?</h3>
        <p>Семантическая верстка - это способ структурировать HTML...</p>
    </article>

    <article>
        <h3>Изучаем Flexbox</h3>
        <p>Flexbox позволяет удобно выравнивать элементы...</p>
    </article>
</main>
```

<CodePreview :html="html_040" :css="css_040" :js="js_040" height="300px" />

## Элемент figure

- **`<aside>`** - иллюстрация с подписью;
- **`<figcaption>`** - подпись;

Например:

```html:line-numbers
<figure>
    <img src="/images/html/cat-001.png" alt="Кот" />
    <figcaption>Котэ</figcaption>
</figure>
```

<CodePreview :html="html_023" :css="css_023" :js="js_023" height="200px" />

## Элемент footer

- **`<footer>`** - колонтитул (_подвал_) страницы;

Например:

```html:line-numbers
<footer>
    <p>&copy; 2025 Моя компания</p>
    <nav>
        <a href="/privacy">Политика конфиденциальности</a> |
        <a href="/terms">Условия использования</a>
    </nav>
</footer>
```

<CodePreview :html="html_041" :css="css_041" :js="js_041" height="200px" />

## Элемент address

- **`<address>`** - контактные данные;

Например:

```html:line-numbers
<address>
    <p>Автор: Иван Петров</p>
    <p>
        Email: <a href="mailto:ivan@example.com">ivan@example.com</a><br />
        Телефон: <a href="tel:+79991234567">+7 (999) 123-45-67</a>
    </p>
</address>
```

<CodePreview :html="html_042" :css="css_042" :js="js_042" height="200px" />
