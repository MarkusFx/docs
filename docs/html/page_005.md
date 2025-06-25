---
outline: [2, 3]
---

<script setup>
import CodePreview from '.././.vitepress/components/CodePreview.vue';

import html_043 from '.././.vitepress/examples/html/demo_043/index.html?raw';
import css_043 from '.././.vitepress/examples/html/demo_043/style.css?raw';
import js_043 from '.././.vitepress/examples/html/demo_043/script.js?raw';

import html_044 from '.././.vitepress/examples/html/demo_044/index.html?raw';
import css_044 from '.././.vitepress/examples/html/demo_044/style.css?raw';
import js_044 from '.././.vitepress/examples/html/demo_044/script.js?raw';

import html_045 from '.././.vitepress/examples/html/demo_045/index.html?raw';
import css_045 from '.././.vitepress/examples/html/demo_045/style.css?raw';
import js_045 from '.././.vitepress/examples/html/demo_045/script.js?raw';

import html_024 from '.././.vitepress/examples/html/demo_024/index.html?raw';
import css_024 from '.././.vitepress/examples/html/demo_024/style.css?raw';
import js_024 from '.././.vitepress/examples/html/demo_024/script.js?raw';
</script>

# Мультимедиа

## Что такое мультимедиа?

**Мультимедиа** - это любые "не текстовые" элементы, такие как видео, аудио, изображения, анимации, которые можно встраивать прямо в веб-страницу.

## Элемент img

- **`<img>`** - изображение;
    - **`src`** - путь к изображению (_обязательный_);
    - **`alt`** - альтернативный текст. Показывается, если изображение не загрузилось (_рекомендуется_);
    - **`width`** - ширина изображения;
    - **`height`** - высота изображения;
    - **`title`** - всплывающая подсказка при наведении курсора.

Например:

```html [index.html] :line-numbers
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Моя первая страница</title>
    </head>
    <body>
        <img src="/images/html/img_001.jpg" alt="И так сойдёт" width="300" />
    </body>
</html>
```

<CodePreview :html="html_045" :css="css_045" :js="js_045" height="200px" />

## Элемент audio

- **`<audio>`** - звук;
    - **`src`** - источник;
    - **`controls`** - элементы воспроизведения;
    - **`autoplay`** - автовоспроизведение;
    - **`loop`** - воспроизведение по кругу;
    - **`muted`** - отключить звук;
    - **`preload`** - режим загрузки;

Например:

```html [index.html] :line-numbers
<audio src="/audios/audio_001.mp3" controls></audio>
```

<CodePreview :html="html_044" :css="css_044" :js="js_044" height="200px" />

## Элемент video

- **`<video>`** - видео;
    - **`src`** - источник;
    - **`height`** - ширина;
    - **`width`** - высота;
    - **`controls`** - элементы воспроизведения;
    - **`autoplay`** - автовоспроизведение;
    - **`muted`** - отключить звук;
    - **`loop`** - воспроизведение по кругу;
    - **`preload`** - режим загрузки;
        - **`auto`** - видео и метаданные загружаются до воспроизведения видео;
        - **`none`** - видео не загружается;
        - **`metadata`** - загружаются только метаданные;
    - **`poster`** - обложка видео;
    - **`<track>`** - субтитры к видео;

Например:

```html [index.html] :line-numbers
<video src="/videos/video_001.mp4" height="300" controls></video>
```

<CodePreview :html="html_043" :css="css_043" :js="js_043" height="400px" />

## Элемент iframe

- **`<iframe>`** - вставка внешнего контента;
    - **`src`** - источник;
    - **`width`** - ширина;
    - **`height`** - высота;

Например:

```html [index.html] :line-numbers
<iframe src="https://markusfx.ru" width="400px"></iframe>
```

<CodePreview :html="html_024" :css="css_024" :js="js_024" height="200px" />
