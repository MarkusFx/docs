<template>
    <!--    <div class="header">-->
    <!--        <div class="header-item">Перевод</div>-->
    <!--        <div class="header-item">Озвучка</div>-->
    <!--        <div class="header-item">Монтаж</div>-->
    <!--    </div>-->
    <div class="progress-list">
        <div v-for="(bar, index) in progressBars" :key="index" class="course">
            <div class="course-title">
                {{ bar.label }}
                <span class="total-time"
                    >({{ bar.hours }}ч {{ bar.minutes }}м)</span
                >
            </div>
            <div class="progress-columns">
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
                        :borderRadius="step.borderRadius"
                        :progressTextColor="step.progressTextColor"
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
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 27,
                total: 83,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 16,
                total: 83,
                color: '#3bccb3cc',
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
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 90,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 90,
                color: '#3bccb3cc',
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
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 49,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 49,
                color: '#3bccb3cc',
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
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 164,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 164,
                color: '#3bccb3cc',
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
                done: 50,
                total: 50,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 50,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 50,
                color: '#3bccb3cc',
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
                done: 45,
                total: 45,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 45,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 45,
                color: '#3bccb3cc',
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
                done: 113,
                total: 113,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 113,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 113,
                color: '#3bccb3cc',
            },
        ],
    },
    {
        label: 'NestJS',
        hours: 25,
        minutes: 18,
        steps: [
            {
                label: 'Перевод',
                done: 235,
                total: 235,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 235,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 235,
                color: '#3bccb3cc',
            },
        ],
    },
    {
        label: 'Cypress',
        hours: 6,
        minutes: 13,
        steps: [
            {
                label: 'Перевод',
                done: 92,
                total: 92,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 92,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 92,
                color: '#3bccb3cc',
            },
        ],
    },
    {
        label: 'HTMX',
        hours: 4,
        minutes: 8,
        steps: [
            {
                label: 'Перевод',
                done: 31,
                total: 61,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 61,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 61,
                color: '#3bccb3cc',
            },
        ],
    },
]
</script>

<style scoped>
.header {
    display: flex;
    gap: 16px;
}

.header-item {
    flex: 1;
    border-radius: 6px;
    height: 30px;
    background-color: var(--vp-c-bg-alt);
    overflow: hidden;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
}

.course {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
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

@media (max-width: 768px) {
    .course-title {
        font-size: 1.2rem;
    }

    .progress-columns {
        gap: 10px;
    }
}

@media (max-width: 480px) {
    .course-title {
        font-size: 1.2rem;
    }

    .progress-columns {
        gap: 6px;
    }
}

.progress-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}
</style>
