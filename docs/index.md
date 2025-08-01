---
layout: home
---

<script setup>
import TileGrid from './.vitepress/components/TileGrid.vue';
import CodePreview from './.vitepress/components/CodePreview.vue';
import GridMenu from './.vitepress/components/GridMenu.vue';
import CourseProgress from './.vitepress/components/CourseProgress.vue';
import AudioVisualizer from './.vitepress/components/AudioVisualizer.vue';

import {
    menu_tiles,
    rutube_tiles,
    telegram_tiles,
    vk_tiles,
    donats_tiles
} from './index.js';
</script>

# Главная

## Меню

<TileGrid :tiles="menu_tiles" />

[//]: # '<AudioVisualizer />'

## Текущие переводы

<CourseProgress />

[//]: # '## Дорожная карта'
[//]: # '<GridMenu />'
[//]: # '![road_map](/images/other/roadmap-001.png){data-zoomable class="img-radius"}'

## RuTube

<TileGrid :tiles="rutube_tiles" />

## Телеграм

<TileGrid :tiles="telegram_tiles" />

## VK

<TileGrid :tiles="vk_tiles" />

## Поддержать проект

<TileGrid :tiles="donats_tiles" />
