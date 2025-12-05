---
layout: home
---

<script setup>
import TileGrid from './.vitepress/components/TileGrid.vue';
import CourseProgress from './.vitepress/components/CourseProgress.vue';
import CodePreview from './.vitepress/components/CodePreview.vue';
import GridMenu from './.vitepress/components/GridMenu.vue';
import {
    courses_1,
    courses_2,
    courses_3,
    courses_4,
    notes,
    rutube_tiles,
    telegram_tiles,
    vk_tiles,
    donats_tiles
} from './index.js'; 
</script>

# Главная

## Курсы

<TileGrid :tiles="courses_3" />
<TileGrid :tiles="courses_1" />
<TileGrid :tiles="courses_2" />
<TileGrid :tiles="courses_4" />

## Заметки

<TileGrid :tiles="notes" />

## RuTube

<TileGrid :tiles="rutube_tiles" />

## Телеграм

<TileGrid :tiles="telegram_tiles" />

## VK

<TileGrid :tiles="vk_tiles" />

## Поддержать проект

<TileGrid :tiles="donats_tiles" />
