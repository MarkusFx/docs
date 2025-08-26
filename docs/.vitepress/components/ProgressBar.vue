<template>
    <div class="progress-row">
        <div class="bar-wrapper">
            <div class="top-line">
                <div class="label-line">
                    <!--                    <div class="label">{{ label }}</div>-->
                </div>
            </div>
            <div class="bar-container">
                <div
                    class="bar-fill"
                    :style="{ width: percent + '%', backgroundColor: color }"
                />
                <div class="progress-text">
                    <div>{{ done }} / {{ total }} ({{ percent }}%)</div>
                    <div class="label">{{ label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    done: Number,
    total: Number,
    color: {
        type: String,
        default: 'var(--vp-c-brand-1)',
    },
})

const percent = Math.round((props.done / props.total) * 100)
</script>

<style scoped>
.progress-row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.top-line {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
}

.label-line {
    display: flex;
    align-items: baseline;
    gap: 6px;
}

.bar-container {
    position: relative;
    height: 50px;
    background-color: var(--vp-c-bg-alt);
    border-radius: 6px;
    overflow: hidden;
}

.bar-fill {
    position: relative;
    height: 50%;
    top: 50%;
    transition: width 0.4s ease;
    filter: contrast(90%);
}

.progress-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    color: var(--vp-c-text-1);
    padding: 0 4px;
    text-transform: uppercase;
}

.label {
    text-align: center;
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--vp-c-text-1);
    text-transform: capitalize;
}

.text {
    font-size: 0.9rem;
    white-space: nowrap;
    text-align: right;
    min-width: 120px;
    max-width: 130px;
}

@media (max-width: 768px) {
    .progress-row {
        flex-direction: column;
        gap: 8px;
    }

    .top-line {
        flex-direction: column;
        align-items: flex-start;
    }

    .label-line {
        flex-direction: column;
        gap: 4px;
    }

    .label {
        font-size: 0.75rem;
    }

    .progress-text {
        font-size: 0.8rem;
    }

    .label {
        font-size: 0.75rem;
    }
}

@media (max-width: 480px) {
    .label {
        font-size: 0.7rem;
    }

    .progress-text {
        font-size: 0.6em;
    }

    .label {
        font-size: 0.55rem;
    }

    .bar-fill {
        transition: width 0.6s ease;
    }

    .bar-wrapper {
        gap: 0;
    }
}
</style>
