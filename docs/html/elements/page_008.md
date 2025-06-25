---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_021 from '../.././.vitepress/examples/html/demo_021/index.html?raw';
import css_021 from '../.././.vitepress/examples/html/demo_021/style.css?raw';
import js_021 from '../.././.vitepress/examples/html/demo_021/script.js?raw';

import html_022 from '../.././.vitepress/examples/html/demo_022/index.html?raw';
import css_022 from '../.././.vitepress/examples/html/demo_022/style.css?raw';
import js_022 from '../.././.vitepress/examples/html/demo_022/script.js?raw';
</script>

# Ссылки

- **`<a>`** - создание ссылки;
- **`href`** - адрес, куда ведёт ссылка;

Например:

```html [index.html] :line-numbers
<a href="https://markusfx.ru">Перейти на сайт</a>
```

<CodePreview :html="html_021" :css="css_021" :js="js_021" height="100px" />

С помощью атрибута **`target`** можно указать, чтобы ссылка открывалась в новой вкладке. Например:

```html [index.html] :line-numbers
<a href="https://markusfx.ru" target="_blank">Перейти на сайт</a>
```

Значения **`target`**:

- **`_self`** - открывает ссылку в текущем окне/вкладке (_по умолчанию_);
- **`_blank`** - открывает в новой вкладке или окне;

Можно создавать ссылки-якоря (_на место внутри страницы_). Например:

```html [index.html] :line-numbers
<a href="#контакты">К разделу Контакты</a>

<h2 id="контакты">Контакты</h2>
```

Можно создавать ссылки на email. Например:

```html [index.html] :line-numbers
<a href="mailto:markusfx@mail.com">Написать нам</a>
```

Можно создавать ссылки на телефон. Например:

```html [index.html] :line-numbers
<a href="tel:+79999999999">Позвонить нам</a>
```

Можно создавать ссылки-изображения. Например:

```html [index.html] :line-numbers
<a href="https://markusfx.ru" target="_blank">
    <img src="/images/html/cat-001.png" alt="Кот-ссылка" height="150px" />
</a>
```

- **`width`** (_ширина_), **`height`** (_высота_) - размер изображения;
- **`px`** - размер в пикселях;

<CodePreview :html="html_022" :css="css_022" :js="js_022" height="200px" />
