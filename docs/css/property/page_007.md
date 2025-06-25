---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_058 from '../.././.vitepress/examples/css/demo_058/index.html?raw';
import css_058 from '../.././.vitepress/examples/css/demo_058/style.css?raw';
import js_058 from '../.././.vitepress/examples/css/demo_058/script.js?raw';
</script>

# Границы

- **`border-width`** - ширина границы;
    - **`thin`** - тонкая (_**`1px`**_);
    - **`medium`** - средняя (_**`3px`**_);
    - **`thick`** - толстая (_**`5px`**_);
    - **`px`**, **`em`**, **`cm`** - значение в единицах измерения;
        - **`border-width: 2px 4px 6px 8px;`** - можно задавать индивидуально для каждой стороны (_верх, право, низ, лево_);
- **`border-style`** - стиль линии границы;
    - **`none`** - без границы;
    - **`solid`** - сплошная линия;
    - **`dashed`** - пунктирная линия;
    - **`dotted`** - точечная линия;
    - **`double`** - двойная линия;
    - **`groove`** - рамка с эффектом выреза;
    - **`ridge`** - рамка с эффектом выступа;
    - **`inset`** - вдавленная рамка;
    - **`outset`** - выпуклая рамка;
- **`border-color`** - цвет границы;
    - **`border-color: red green blue yellow;`** - можно задавать индивидуально для каждой стороны (_верх, право, низ, лево_);
- **`border: 3px dashed blue;`** - совмещает 3 параметра (_ширина, стиль линии, цвет_);
    - **`border-top: 2px solid red;`** - верхняя граница;
    - **`border-right: 2px solid red;`** - правая;
    - **`border-bottom: 2px solid red;`** - нижняя;
    - **`border-left: 2px solid red;`** - левая;
- **`border-radius`** - скругление углов;
    - **`border-radius: 10px 20px 30px 40px;`** - можно задавать индивидуально для каждого угла (_верх-лево, верх-право, низ-право, низ-лево_);

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="border-box">Пример с рамкой</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.border-box {
    padding: 20px;
    margin: 10px;
    border-top: 2px solid red;
    border-right: 4px dotted green;
    border-bottom: 3px double black;
    border-left: 5px groove orange;
    border-radius: 12px;
}
```

<CodePreview :html="html_058" :css="css_058" :js="js_058" height="150px" />
