---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_066 from '../.././.vitepress/examples/css/demo_066/index.html?raw';
import css_066 from '../.././.vitepress/examples/css/demo_066/style.css?raw';
import js_066 from '../.././.vitepress/examples/css/demo_066/script.js?raw';

import html_067 from '../.././.vitepress/examples/css/demo_067/index.html?raw';
import css_067 from '../.././.vitepress/examples/css/demo_067/style.css?raw';
import js_067 from '../.././.vitepress/examples/css/demo_067/script.js?raw';
</script>

# Градиент

## Линейный градиент

- **`background-image: linear-gradient(направление, цвет1, цвет2, ...)`** - определение линейного градиента;

Например:

- **`background-image: linear-gradient(to right, red, yellow);`** - слева направо, с указанием двух цветов;
- **`background-image: linear-gradient(to right, red 0%, yellow 50%, green 100%);`** - с указанием точек перехода;

Направления:

- **`to right`** - слева направо;
- **`to left`** - справа налево;
- **`to bottom`** - сверху вниз;
- **`to top`** - снизу вверх;
- **`45deg`** - по диагонали под углом;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="grad">Линейный градиент под углом -30°</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.grad {
    width: 300px;
    height: 150px;
    background-image: linear-gradient(-30deg, #9e63dd, #9c27b0 10%, #00e5a4);
    border: 1px solid #333;
}
```

<CodePreview :html="html_066" :css="css_066" :js="js_066" height="250px" />

## Радиальный градиент

- **`background-image: radial-gradient(форма размер, цвет1, цвет2, ...)`** - определение радиального градиента;

Формы:

- **`ellipse`** - эллиптический (_по умолчанию_);
- **`circle`** - круглый;
- **`closest-side`** - градиент до ближней стороны;
- **`farthest-corner`** - градиент до дальнего угла;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="rad-grad">Радиальный градиент</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.rad-grad {
    width: 300px;
    height: 150px;
    background-image: radial-gradient(
        circle at center,
        #00e5a4,
        #3e63dd,
        #9c27b0
    );
    border: 1px solid #333;
}
```

<CodePreview :html="html_067" :css="css_067" :js="js_067" height="250px" />
