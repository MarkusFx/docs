<script setup>
import CodePreview from '.././.vitepress/components/CodePreview.vue';
import VideoPlayer from '.././.vitepress/components/VideoPlayer.vue';

import html_1 from '../.vitepress/examples/different/demo_1/index.html?raw';
import css_1 from '../.vitepress/examples/different/demo_1/style.css?raw';
import js_1 from '../.vitepress/examples/different/demo_1/script.js?raw';

import html_3 from '../.vitepress/examples/different/demo_3/index.html?raw';
import css_3 from '../.vitepress/examples/different/demo_3/style.css?raw';
import js_3 from '../.vitepress/examples/different/demo_3/script.js?raw';

import html_004 from '../.vitepress/examples/different/demo_004/index.html?raw';
import css_004 from '../.vitepress/examples/different/demo_004/style.css?raw';
import js_004 from '../.vitepress/examples/different/demo_004/script.js?raw';

const videos_001 = [
  {
    title: '001. Введение в курс',
    url: 'https://rutube.ru/play/embed/e2398aad0e4c42a9ab4889bd2efd35ba',
  },
  {
    title: '002. Python3 vs. Python2',
    url: 'https://rutube.ru/play/embed/cdc3e5bd2218bb30dc83ff4fcb193ed8',
  },   
  {
    title: '003. Упражнения',
    url: 'https://rutube.ru/play/embed/ab65a293ab9e9e31df65979a17a543c2',
  },   
  {
    title: '004. С чего начать',
    url: 'https://rutube.ru/play/embed/89c8553872844f21a7ef5444aecf3227',
  },   
  {
    title: '005. Структура курса',
    url: 'https://rutube.ru/play/embed/4b258a4229e95ab70510d18c3a97f314',
  }, 
];

const videos_002 = [
  {
    title: '006. Зачем использовать командную строку',
    url: 'https://rutube.ru/play/embed/ee26cc540b318f3b1686cdc9d089758f',
  },  
  {
    title: '007. Командная строка на MAC',
    url: 'https://rutube.ru/play/embed/ac6982e509a4d2d9c8af9618f1f68e23',
  },  
  {
    title: '008. Абсолютные пути и PWD',
    url: 'https://rutube.ru/play/embed/c01d7b7786e2225db61a8be91c55883f',
  },  
  {
    title: '009. Использование CD',
    url: 'https://rutube.ru/play/embed/e159ffb3a7497f1e7437bad7f0ee1279',
  },  
  {
    title: '010. Использование LS',
    url: 'https://rutube.ru/play/embed/bea9b0679d937754a951df2d0e33239a',
  },
]
</script>

# Тесты

## Player

### Введение в курс

<VideoPlayer :videos="videos_001" />

### MAC, LINUX - Основы командной строки

<VideoPlayer :videos="videos_002" />

## Menu Grid

<CodePreview :html="html_004" :css="css_004" :js="js_004" height="900px" />

## Menu Grid

<CodePreview :html="html_3" :css="css_3" :js="js_3" height="910px" />

## iframe c HTML, CSS, JavaScript

**`index.html`**:

```html
<h1>Hello World!</h1>
<button
    style="padding: 8px 16px; border-radius: 4px"
    onclick="console.log('Hello!')"
>
    Чпоньк
</button>
```

**`style.css`**:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    font-family: Arial, sans-serif;
}
h1 {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
button {
    background: white;
    color: #764ba2;
    border: none;
    cursor: pointer;
}
```

**`script.js`**:

```js
console.log('Preview loaded!')
```

Результат:

<CodePreview :html="html_1" :css="css_1" :js="js_1" height="170px" />
