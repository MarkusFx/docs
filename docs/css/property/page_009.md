---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_059 from '../.././.vitepress/examples/css/demo_059/index.html?raw';
import css_059 from '../.././.vitepress/examples/css/demo_059/style.css?raw';
import js_059 from '../.././.vitepress/examples/css/demo_059/script.js?raw';

import html_060 from '../.././.vitepress/examples/css/demo_060/index.html?raw';
import css_060 from '../.././.vitepress/examples/css/demo_060/style.css?raw';
import js_060 from '../.././.vitepress/examples/css/demo_060/script.js?raw';
</script>

# Единицы измерения

## Абсолютные

- **`px`** - пиксели;
- **`pt`** - пункты (_**`1pt`** = 1/72 дюйма (для печати)_);
- **`cm`** - сантиметры;
- **`mm`** - миллиметры;
- **`in`** - дюймы;
- **`pc`** - пики (_**`1pc`** = **`12pt`**_);

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="px-box">100px × 50px</div>
<div class="pt-box">72pt × 36pt</div>
<div class="cm-box">5cm × 2cm</div>
<div class="mm-box">50mm × 20mm</div>
<div class="in-box">2in × 1in</div>
<div class="pc-box">6pc × 3pc</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.px-box {
    width: 100px;
    height: 50px;
    background: #4caf50;
    margin: 5px;
}

.pt-box {
    width: 72pt; /* 1 дюйм */
    height: 36pt;
    background: #e91e63;
    margin: 5px;
}

.cm-box {
    width: 5cm;
    height: 2cm;
    background: #2196f3;
    margin: 5px;
}

.mm-box {
    width: 50mm;
    height: 20mm;
    background: #ff9800;
    margin: 5px;
}

.in-box {
    width: 2in;
    height: 1in;
    background: #9c27b0;
    margin: 5px;
}

.pc-box {
    width: 6pc; /* 72pt = 6pc = 1 дюйм */
    height: 3pc;
    background: #607d8b;
    margin: 5px;
}
```

<CodePreview :html="html_059" :css="css_059" :js="js_059" height="500px" />

## Относительные

- **`em`** - размер шрифта родителя (_**`1.5em`** - в 1.5 раза больше_);
- **`rem`** - размер шрифта корня (_**`html`**_);
- **`%`** - процент от родителя;
- **`vw`** - процент ширины окна браузера;
- **`vh`** - процент высоты окна браузера;
- **`vmin`** - процент меньшей из сторон окна;
- **`vmax`** - процент большей из сторон окна;
- **`ch`** - ширина символа "**0**" текущего шрифта;
- **`ex`** - высота строчной буквы "**x**" текущего шрифта;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="em-box">Шрифт 2em</div>
<div class="rem-box">Шрифт 2rem</div>
<div class="percent-box">50% ширины родителя</div>
<div class="vwvh-box">30vw × 10vh</div>
<div class="vmin-box">10vmin квадрат</div>
<div class="vmax-box">10vmax квадрат</div>
<div class="ch-box">20ch ширины</div>
<div class="ex-box">5ex высоты</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
body {
    font-size: 16px;
}

.em-box {
    font-size: 2em;
    background: #2196f3;
    margin: 5px;
    padding: 10px;
}

.rem-box {
    font-size: 2rem;
    background: #ff9800;
    margin: 5px;
    padding: 10px;
}

.percent-box {
    width: 50%;
    height: 50px;
    background: #4caf50;
    margin: 5px;
}

.vwvh-box {
    width: 30vw;
    height: 10vh;
    background: #9c27b0;
    margin: 5px;
}

.vmin-box {
    width: 10vmin;
    height: 10vmin;
    background: #e91e63;
    margin: 5px;
}

.vmax-box {
    width: 10vmax;
    height: 10vmax;
    background: #607d8b;
    margin: 5px;
}

.ch-box {
    width: 20ch;
    background: #795548;
    margin: 5px;
    padding: 10px;
}

.ex-box {
    font-size: 20px;
    height: 5ex;
    background: #3f51b5;
    margin: 5px;
    padding: 10px;
}
```

<CodePreview :html="html_060" :css="css_060" :js="js_060" height="550px" />
