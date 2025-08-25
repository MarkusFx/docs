<template>
    <div class="progress-list">
        <!-- Перебираем все курсы -->
        <div v-for="(bar, index) in progressBars" :key="index" class="course">
            <div class="course-title">
                {{ bar.label }}
                <span class="total-time"
                    >({{ bar.hours }}ч {{ bar.minutes }}м)</span
                >
            </div>
            <div class="progress-columns">
                <!-- Перебираем этапы внутри курса и размещаем их в колонках -->
                <div
                    v-for="(step, stepIndex) in bar.steps"
                    :key="stepIndex"
                    class="progress-column"
                >
                    <ProgressBar
                        :label="step.label"
                        :done="step.done"
                        :total="step.total"
                        :color="step.color"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'

const progressBars = [
    {
        label: 'Socket.IO',
        hours: 14,
        minutes: 0,
        steps: [
            {
                label: 'Перевод',
                done: 83,
                total: 83,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 27,
                total: 83,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 16,
                total: 83,
                color: '#3bccb3',
            },
        ],
    },
    {
        label: 'WebRTC',
        hours: 14,
        minutes: 0,
        steps: [
            {
                label: 'Перевод',
                done: 90,
                total: 90,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 90,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 90,
                color: '#3bccb3',
            },
        ],
    },
    {
        label: 'MediaSoup',
        hours: 8,
        minutes: 27,
        steps: [
            {
                label: 'Перевод',
                done: 49,
                total: 49,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 49,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 49,
                color: '#3bccb3',
            },
        ],
    },
    {
        label: 'Linux',
        hours: 15,
        minutes: 45,
        steps: [
            {
                label: 'Перевод',
                done: 164,
                total: 164,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 164,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 164,
                color: '#3bccb3',
            },
        ],
    },
    {
        label: 'OS',
        hours: 21,
        minutes: 40,
        steps: [
            {
                label: 'Перевод',
                done: 0,
                total: 50,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 50,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 50,
                color: '#3bccb3',
            },
        ],
    },
    {
        label: 'NGINX',
        hours: 7,
        minutes: 27,
        steps: [
            {
                label: 'Перевод',
                done: 0,
                total: 45,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 45,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 45,
                color: '#3bccb3',
            },
        ],
    },
    {
        label: 'Nuxt.js',
        hours: 15,
        minutes: 30,
        steps: [
            {
                label: 'Перевод',
                done: 0,
                total: 113,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 113,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 113,
                color: '#3bccb3',
            },
        ],
    },
    {
        label: 'NestJS',
        hours: 13,
        minutes: 33,
        steps: [
            {
                label: 'Перевод',
                done: 0,
                total: 125,
                color: '#bd504d',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 125,
                color: '#ffd200',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 125,
                color: '#3bccb3',
            },
        ],
    },
]
</script>

<style scoped>
.progress-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
}

.course {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 6px;
}

.course-title {
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.total-time {
    font-size: 0.85rem;
    color: var(--vp-c-text-2);
    margin-left: 2px;
}

.progress-columns {
    display: flex;
    gap: 20px;
}

.progress-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}
</style>
