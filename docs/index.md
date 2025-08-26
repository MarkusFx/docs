---
layout: home
---

<script setup>
import TileGrid from './.vitepress/components/TileGrid.vue';
import CourseProgress from './.vitepress/components/CourseProgress.vue';
import CodePreview from './.vitepress/components/CodePreview.vue';
import GridMenu from './.vitepress/components/GridMenu.vue';

import {
    courses,
    notes,
    rutube_tiles,
    telegram_tiles,
    vk_tiles,
    donats_tiles
} from './index.js';
</script>

# Главная

## Заметки

<TileGrid :tiles="notes" />

[//]: # '## Курсы'
[//]: # '<TileGrid :tiles="courses" />'

## Предстоящие курсы

<CourseProgress />

## RuTube

<TileGrid :tiles="rutube_tiles" />

## Телеграм

<TileGrid :tiles="telegram_tiles" />

## VK

<TileGrid :tiles="vk_tiles" />

## Поддержать проект

<TileGrid :tiles="donats_tiles" />
