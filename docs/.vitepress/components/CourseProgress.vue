<template>
    <div class="progress-list">
        <ProgressBar
            v-for="(bar, index) in progressBars"
            :key="index"
            :label="bar.label"
            :hours="bar.hours"
            :minutes="bar.minutes"
            :done="bar.done"
            :total="bar.total"
            :color="bar.color"
        />
    </div>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'

const colors = [
    {
        1: '#bd504d',
        2: '#ffa600',
        3: '#ffd200',
        4: '#3bccb3',
        5: '#4593e5',
        6: '#985de0',
    },
]

const progressBars = [
    {
        label: 'Socket.IO',
        hours: 14,
        minutes: 0,
        done: 16,
        total: 83,
        color: '#ffd200',
    },
    {
        label: 'WebRTC',
        hours: 14,
        minutes: 0,
        done: 0,
        total: 90,
        color: '#ffa600',
    },
    {
        label: 'MediaSoup',
        hours: 8,
        minutes: 27,
        done: 0,
        total: 49,
        color: '#4593e5',
    },
    {
        label: 'Linux',
        hours: 15,
        minutes: 45,
        done: 0,
        total: 164,
        color: '#ffd200',
    },
    {
        label: 'OS',
        hours: 21,
        minutes: 40,
        done: 0,
        total: 50,
        color: '#ffd200',
    },
    {
        label: 'NGINX',
        hours: 7,
        minutes: 27,
        done: 0,
        total: 45,
        color: '#3bccb3',
    },
    {
        label: 'Nuxt.js',
        hours: 15,
        minutes: 30,
        done: 0,
        total: 113,
        color: '#3bccb3',
    },
    {
        label: 'NestJS',
        hours: 13,
        minutes: 33,
        done: 0,
        total: 125,
        color: '#bd504d',
    },
]
</script>

<style scoped>
.progress-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 auto;
}
</style>
