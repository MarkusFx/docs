---
layout: home
---

# Главная

## Меню

<script setup>
import TileGrid from './.vitepress/components/TileGrid.vue'
import CodePreview from './.vitepress/components/CodePreview.vue'

const menu_tiles = [
  {
    title: 'HTML',
    icon: '/logos/html5-logo.svg',
    // description: 'Генератор статических сайтов, используемый для создания документации',
    link: '/html/page_001',
  },  
  {
    title: 'VitePress',
    icon: '/logos/vite-logo.svg',
    // description: 'Генератор статических сайтов, используемый для создания документации',
    link: '/vitepress/page_001',
  },  
  {
    title: 'Jest',
    icon: '/logos/jest-logo-002.svg',
    // description: 'Фреймворк для тестирования JavaScript',
    link: '/jest/page_001',
  },
  {
    title: '1С',
    icon: '/logos/1c-logo.svg',
    // description: 'Создание и настройка конфигураций',
    link: '/1c/page_001',
  },  
  // {
  //   title: 'Rust',
  //   icon: '/logos/rust-logo.svg',
  //   // description: 'Создание и настройка конфигураций',
  //   // link: '/rust/page_001',
  // },
  // {
  //   title: 'GSAP',
  //   icon: '/logos/gsap-logo.svg',
  //   description: 'Библиотека JavaScript для высокопроизводительной анимации',
  //   link: '/gsap/page_1',
  // },
  // {
  //   title: 'Socket.io',
  //   icon: '/logos/socketio-logo.svg',
  //   description: 'Библиотека JavaScript для веб-приложений и обмена данными в реальном времени',
  //   link: '/socketio/page_1',
  // },
]

const rutube_tiles = [
  {
    title: 'RuTube',
    icon: '/logos/rutube-logo-002.svg',
    // description: 'Основной канал',
    link: 'https://rutube.ru/channel/24742327/',
    target: '_blank',
  },  
]

const telegram_tiles = [
  {
    title: 'Telegram',
    icon: '/logos/telegram-logo-002.svg',
    description: 'Основной канал',
    link: 'https://t.me/markusfx_itpit',
    target: '_blank',
  },  
  {
    title: 'Telegram',
    icon: '/logos/telegram-logo-002.svg',
    description: 'Life-канал',
    link: 'https://t.me/markusfx_itpit_any',
    target: '_blank',
  },
]

const vk_tiles = [
  {
    title: 'VK',
    icon: '/logos/vk-logo.svg',
    description: 'Основная группа',
    link: 'https://vk.com/markusfx_itpit',
    target: '_blank',
  },  
]

const donats_tiles = [
  {
    title: 'Donation Alerts',
    icon: '/logos/da-logo.svg',
    // description: '-',
    link: 'https://www.donationalerts.com/r/markusfx',
    target: '_blank',
  },
  {
    title: 'Boosty',
    icon: '/logos/boosty-logo.svg',
    // description: '-',
    link: 'https://boosty.to/markusfx',
    target: '_blank',
  },  
]

</script>

<TileGrid :tiles="menu_tiles" />

## Дорожная карта

![road_map](/images/road_map.png){data-zoomable class="img-radius"}

## RuTube

<TileGrid :tiles="rutube_tiles" />

## Телеграм

<TileGrid :tiles="telegram_tiles" />

## VK

<TileGrid :tiles="vk_tiles" />

## Поддержать проект

<TileGrid :tiles="donats_tiles" />
