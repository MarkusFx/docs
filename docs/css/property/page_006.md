---
outline: [2, 2]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_055 from '../.././.vitepress/examples/css/demo_055/index.html?raw';
import css_055 from '../.././.vitepress/examples/css/demo_055/style.css?raw';
import js_055 from '../.././.vitepress/examples/css/demo_055/script.js?raw';
</script>

# Блочная модель

## Что такое box model?

Каждый элемент на веб-странице можно представить как прямоугольную коробку (_box_), которая состоит из нескольких областей:

- **Content** - основная область, где отображается текст, изображение и т.д;
- **Padding** - внутренний отступ (_расстояние между **Content** и **Border**_);
- **Border** - рамка вокруг **Content** и **Padding**;
- **Margin** - внешний отступ (_пространство снаружи элемента_).

<div class="no-lang-label">

```sh
┌────────────────────────────────────────────┐
│                MARGIN                      │←---margin (внешний отступ)
│  ┌──────────────────────────────────────┐  │
│  │            BORDER                    │←------border (граница)
│  │  ┌──────────────────────────────┐    │  │
│  │  │          PADDING             │←-----------padding (внутренний отступ)
│  │  │  ┌──────────────────────┐    │    │  │
│  │  │  │      CONTENT         │    │    │  │
│  │  │  └──────────────────────┘    │    │  │
│  │  └──────────────────────────────┘    │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
```

</div>

## Типы блочных моделей

- **`box-sizing`** - блочная модель;
    - **`content-box`** - **`width`** и **`height`** прибавляются к **`padding`** и **`border`** (_используется по умолчанию_);
    - **`border-box`** - **`width`** и **`height`** задают размер всей коробки;

Например. Изменим файл **`index.html`**:

```html:line-numbers
<div class="content-box-example">content-box</div>

<div class="border-box-example">border-box</div>
```

Изменим файл **`styles.css`**:

```css:line-numbers
.content-box-example,
.border-box-example {
    width: 200px;
    height: 100px;
    padding: 20px;
    margin: 20px;
}

.content-box-example {
    border: 5px solid blue;
    background: lightblue;
    box-sizing: content-box;
}

.border-box-example {
    border: 5px solid green;
    background: lightgreen;
    box-sizing: border-box;
}
```

<CodePreview :html="html_055" :css="css_055" :js="js_055" height="400px" />

**Ширина синей области** = **`width`** + **`padding`** \* 2 + **`border`** \* 2 = 200 + 20 \* 2 + 5 \* 2 = **250px**;

**Высота синей области** = **`height`** + **`padding`** \* 2 + **`border`** \* 2 = 100 + 20 \* 2 + 5 \* 2 = **150px**;

**Ширина зелёной области** = **`width`** (_высчитывается автоматически_) + **`padding`** \* 2 + **`border`** \* 2 = 150 + 20 \* 2 + 5 \* 2 = **200px**;

**Высота зелёной области** = **`height`** (_высчитывается автоматически_) + **`padding`** \* 2 + **`border`** \* 2 = 50 + 20 \* 2 + 5 \* 2 = **100px**;
