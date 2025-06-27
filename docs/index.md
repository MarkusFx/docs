---
layout: home
---

# Главная

## Меню

<script setup>
import TileGrid from './.vitepress/components/TileGrid.vue';
import CodePreview from './.vitepress/components/CodePreview.vue';

import {
    menu_tiles,
    new_menu_tiles,
    rutube_tiles,
    telegram_tiles,
    vk_tiles,
    donats_tiles
} from './index.js';
</script>

<TileGrid :tiles="menu_tiles" />

[//]: # '<TileGrid :tiles="new_menu_tiles" />'

## Дорожная карта

![road_map](/images/other/roadmap-001.png){data-zoomable class="img-radius"}

## RuTube

<TileGrid :tiles="rutube_tiles" />

## Телеграм

<TileGrid :tiles="telegram_tiles" />

## VK

<TileGrid :tiles="vk_tiles" />

## Поддержать проект

<TileGrid :tiles="donats_tiles" />
