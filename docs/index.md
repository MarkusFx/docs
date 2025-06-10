# Главная

## Меню

<script setup>
import TileGrid from './.vitepress/components/TileGrid.vue'

const tiles = [
  {
    title: 'VitePress',
    icon: '/logos/vitepress-logo.svg',
    description: 'Генератор статических сайтов, используемый для создания документации',
    link: '/vitepress/page_1',
  },  {
    title: 'Jest',
    icon: '/logos/jest-logo.svg',
    description: 'Фреймворк для тестирования JavaScript',
    link: '/jest/page_1',
  },
  {
    title: 'GSAP',
    icon: '/logos/gsap-logo.svg',
    description: 'Библиотека JavaScript для высокопроизводительной анимации',
    link: '/gsap/page_1',
  },
  {
    title: 'Socket.io',
    icon: '/logos/socketio-logo.svg',
    description: 'Библиотека JavaScript для веб-приложений и обмена данными в реальном времени',
    link: '/socketio/page_1',
  },
]
</script>

<TileGrid :tiles="tiles" />

## Дорожная карта

![road_map](/images/road_map.png){data-zoomable class="img-radius"}
