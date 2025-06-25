---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_009 from '../.././.vitepress/examples/html/demo_009/index.html?raw';
import css_009 from '../.././.vitepress/examples/html/demo_009/style.css?raw';
import js_009 from '../.././.vitepress/examples/html/demo_009/script.js?raw';
</script>

# Изображения

- **`<img>`** - это самозакрывающийся тег, который добавляет изображение.

Атрибуты:

- **`src`** - путь к изображению (_обязательный_);
- **`alt`** - альтернативный текст. Показывается, если изображение не загрузилось (_рекомендуется_);
- **`width`** - ширина изображения;
- **`height`** - высота изображения;
- **`title`** - всплывающая подсказка при наведении курсора.

Например:

```html [index.html] :line-numbers
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

<CodePreview :html="html_009" :css="css_009" :js="js_009" height="250px" />
