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

const progressBars = [
    {
        label: 'JavaScript',
        hours: 51,
        minutes: 58,
        done: 0,
        total: 479,
        color: '#ffd200',
    },
    {
        label: 'Socket.IO',
        hours: 14,
        minutes: 0,
        done: 14,
        total: 83,
        color: '#ffd200',
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
        label: 'Python',
        hours: 30,
        minutes: 0,
        done: 162,
        total: 245,
        color: '#4593e5',
    },
    {
        label: 'React Three Fiber',
        hours: 9,
        minutes: 17,
        done: 0,
        total: 34,
        color: '#4593e5',
    },
    {
        label: 'C#',
        hours: 44,
        minutes: 42,
        done: 14,
        total: 431,
        color: '#985de0',
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
