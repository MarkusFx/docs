---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_064 from '../.././.vitepress/examples/css/demo_064/index.html?raw';
import css_064 from '../.././.vitepress/examples/css/demo_064/style.css?raw';
import js_064 from '../.././.vitepress/examples/css/demo_064/script.js?raw';
</script>

# Обтекание

- **`float`** - обтекание элемента другими элементами;
    - **`none`** - обтекание отключено (_по умолчанию_);
    - **`left`** - элемент прижимается к левому краю, а текст обтекает справа;
    - **`right`** - элемент прижимается к правому краю;
- **`clear`** - запрещает элементу располагаться рядом с **`float`** элементами;
    - **`none`** - обтекание разрешено с любой стороны (_по умолчанию_);
    - **`left`** - запретить обтекать справа (_т.е. **`float`** элемент будет слева_);
    - **`right`** - запретить обтекать слева (_т.е. **`float`** элемент будет справа_);
    - **`both`** - запретить обтекать со всех сторон;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<img src="/images/css/pepe-002.png" alt="Пример" />

<p>
    Это пример текста, который обтекает картинку. Картинка выровнена по левому
    краю, а текст располагается справа от неё и под ней, пока не закончится
    место. Float позволяет создавать обтекание без сложной верстки.
</p>

<p class="clearfix">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
    consequatur corporis cupiditate explicabo laboriosam velit. Aliquid aperiam
    architecto atque aut, esse illum magnam quae veniam voluptatem! Ab ducimus
    impedit nihil!
</p>
```

Изменим файл **`styles.css`**:

```css:line-numbers
img {
    float: left;
    margin: 0 15px 15px 0;
    width: 150px;
    height: auto;
}

.clearfix {
    clear: both;
}
```

<CodePreview :html="html_064" :css="css_064" :js="js_064" height="300px" />
