---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_024 from '../.././.vitepress/examples/html/demo_024/index.html?raw';
import css_024 from '../.././.vitepress/examples/html/demo_024/style.css?raw';
import js_024 from '../.././.vitepress/examples/html/demo_024/script.js?raw';
</script>

# Фреймы

- **`<iframe>`** - позволяет встроить другой сайт или страницу внутрь текущей;
    - **`src`** - URL страницы;
    - **`width`** - ширина фрейма (_в пикселях или %_);
    - **`height`** - высота;

Например:

```html [index.html] :line-numbers
<iframe src="https://markusfx.ru" width="400px"></iframe>
```

<CodePreview :html="html_024" :css="css_024" :js="js_024" height="200px" />
