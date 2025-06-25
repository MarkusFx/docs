---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_016 from '../.././.vitepress/examples/html/demo_016/index.html?raw';
import css_016 from '../.././.vitepress/examples/html/demo_016/style.css?raw';
import js_016 from '../.././.vitepress/examples/html/demo_016/script.js?raw';

import html_017 from '../.././.vitepress/examples/html/demo_017/index.html?raw';
import css_017 from '../.././.vitepress/examples/html/demo_017/style.css?raw';
import js_017 from '../.././.vitepress/examples/html/demo_017/script.js?raw';
</script>

# details

- **`<details>`** - используется для создания спойлеров или раскрывающихся блоков.

Например:

```html [index.html] :line-numbers
<details>
    <summary>Подробнее</summary>
    <p>Здесь скрытый текст, который раскроется при клике.</p>
</details>
```

<CodePreview :html="html_016" :css="css_016" :js="js_016" height="150px" />

Можно добавить атрибут **`open`**, чтобы блок был изначально раскрыт. Например:

```html [index.html] :line-numbers
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
