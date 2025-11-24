---
layout: home
---

<script setup>
import TileGrid from './.vitepress/components/TileGrid.vue';
import CourseProgress from './.vitepress/components/CourseProgress.vue';
import CodePreview from './.vitepress/components/CodePreview.vue';
import GridMenu from './.vitepress/components/GridMenu.vue';
import {
    upcoming_courses,
    courses,
    notes,
    rutube_tiles,
    telegram_tiles,
    vk_tiles,
    donats_tiles
} from './index.js'; 
</script>

# Главная

## Курсы

[//]: # '<TileGrid :tiles="upcoming_courses" />'

<TileGrid :tiles="courses" />

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
