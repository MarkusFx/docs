---
outline: [2, 3]
---

<script setup>
import CodePreview from '../.././.vitepress/components/CodePreview.vue';

import html_090 from '../.././.vitepress/examples/css/demo_090/index.html?raw';
import css_090 from '../.././.vitepress/examples/css/demo_090/style.css?raw';
import js_090 from '../.././.vitepress/examples/css/demo_090/script.js?raw';

import html_091 from '../.././.vitepress/examples/css/demo_091/index.html?raw';
import css_091 from '../.././.vitepress/examples/css/demo_091/style.css?raw';
import js_091 from '../.././.vitepress/examples/css/demo_091/script.js?raw';

import html_092 from '../.././.vitepress/examples/css/demo_092/index.html?raw';
import css_092 from '../.././.vitepress/examples/css/demo_092/style.css?raw';
import js_092 from '../.././.vitepress/examples/css/demo_092/script.js?raw';
</script>

# Анимации

## Что такое анимации?

**Анимация** - это способ создавать движение, изменения или визуальные эффекты во времени (_можно изменять стили элемента по ключевым кадрам_).

## animation и @keyframes

- **`animation`** - применяет анимацию к элементу
- **`@keyframes`** - определяет какие изменения происходят и на каких этапах времени;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="box">Box</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    padding: 80px;
    color: white;
}

.box {
    width: 100px;
    height: 100px;
    background: teal;

    animation: rotateScale 3s infinite alternate ease-in-out;
}

@keyframes rotateScale {
    0% {
        transform: rotate(0deg) scale(1);
    }
    100% {
        transform: rotate(360deg) scale(1.5);
    }
}
```

<CodePreview :html="html_091" :css="css_091" :js="js_091" height="300px" />

## Свойства

- **`animation-name`** - указывает название анимации;
- **`animation-duration`** - время выполнения одного цикла анимации;
- **`animation-timing-function`** - определяет скорость изменения значений во времени;
    - **`ease`** - медленно в начале и в конце (_по умолчанию_);
    - **`linear`** - равномерно;
    - **`ease-in`** - медленное начало;
    - **`ease-out`** - медленно в начале и в конце;
    - **`ease-in-out`** - медленное окончание;
    - **`cubic-bezier`** - своя функция времени;
- **`animation-delay`** - задержка перед стартом анимации;
- **`animation-iteration-count`** - кол-во повторений анимации;
    - **`1`** - 1 раз (_по умолчанию_);
    - **`infinite`** - бесконечно;
- **`animation-direction`** - направление;
    - **`normal`** - с начала до конца;
    - **`reverse`** - с конца до начала;
    - **`alternate`** - вперед-назад;
    - **`alternate-reverse`** - назад-вперед;
- **`animation-fill-mode`** - определяет, будут ли стили из ключевых кадров применены до или после анимации;
- **`animation-play-state`** - управление воспроизведением анимации;
    - **`running`** - проигрывается (_по умолчанию_);
    - **`paused`** - приостановлена;

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="box">Box</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
body {
    font-family: sans-serif;
    padding: 30px;
}

.box {
    width: 100px;
    height: 100px;
    background: mediumseagreen;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    border-radius: 8px;

    animation-name: rotateMyBox;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-play-state: running;
}

@keyframes rotateMyBox {
    0% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
        background-color: mediumseagreen;
    }
    50% {
        transform: scale(1.3) rotate(180deg);
        opacity: 0.5;
        background-color: coral;
    }
    100% {
        transform: scale(1) rotate(360deg);
        opacity: 1;
        background-color: royalblue;
    }
}
```

<CodePreview :html="html_090" :css="css_090" :js="js_090" height="300px" />

## Сокращенная запись animate

Порядок значений в **`animate`**:

```css :line-numbers
animation: [animation-name] [animation-duration] [animation-timing-function]
    [animation-delay] [animation-iteration-count] [animation-direction]
    [animation-fill-mode] [animation-play-state];
```

Например. Изменим файл **`index.html`**:

```html [index.html] :line-numbers
<div class="box">Box</div>
```

Изменим файл **`styles.css`**:

```css [styles.css] :line-numbers
.box {
    width: 100px;
    height: 100px;
    background: tomato;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 30px auto;

    animation: bounce 2s ease-in-out 0.5s infinite alternate both;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(50px);
    }
}
```

<CodePreview :html="html_092" :css="css_092" :js="js_092" height="300px" />
