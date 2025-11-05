<template>
    <div class="header">
        <div class="header-item">Перевод</div>
        <div class="header-item">Озвучка</div>
        <div class="header-item">Монтаж</div>
    </div>
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
                done: 83,
                total: 83,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 40,
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
                done: 11,
                total: 90,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 10,
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
                done: 0,
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
                done: 26,
                total: 164,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 13,
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
        label: 'NGINX',
        hours: 7,
        minutes: 27,
        steps: [
            {
                label: 'Перевод',
                done: 0,
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
                done: 0,
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
                done: 0,
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
        label: 'n8n',
        hours: 19,
        minutes: 51,
        steps: [
            {
                label: 'Перевод',
                done: 0,
                total: 105,
                color: '#FA5F51bb',
            },
            {
                label: 'Озвучка',
                done: 0,
                total: 105,
                color: '#ffa600cc',
            },
            {
                label: 'Монтаж',
                done: 0,
                total: 105,
                color: '#3bccb3cc',
            },
        ],
    },
]
</script>

<style scoped>
.header {
    display: flex;
    gap: 20px;
    margin-top: 10px;
}

.header-item {
    flex: 1;
    height: 30px;
    overflow: hidden;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--vp-c-divider);
    border-top: 0;
    border-left: 0;
    border-right: 0;
    font-weight: 500;
    font-size: 1rem;
}

.progress-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
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

    .header {
        gap: 10px;
    }

    .header-item {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .course-title {
        font-size: 1.2rem;
    }

    .progress-columns {
        gap: 8px;
    }

    .header {
        gap: 8px;
    }

    .header-item {
        font-size: 0.8rem;
    }
}

.progress-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}
</style>
