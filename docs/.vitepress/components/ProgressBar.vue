<template>
    <div class="progress-row">
        <div class="bar-wrapper">
            <div class="top-line">
                <div class="label-line">
                    <div class="label">{{ label }}</div>
                    <div class="duration">({{ hours }}ч {{ minutes }}м)</div>
                </div>
                <div class="text">
                    {{ done }} из {{ total }} ({{ percent }}%)
                </div>
            </div>
            <div class="bar-container">
                <div
                    class="bar-fill"
                    :style="{ width: percent + '%', backgroundColor: color }"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String,
    hours: {
        type: Number,
        default: 0,
    },
    minutes: {
        type: Number,
        default: 0,
    },
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
    margin: 14px 0;
    flex-wrap: wrap;
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

.label {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--vp-c-text-1);
}

.duration {
    font-size: 0.85rem;
    color: var(--vp-c-text-2);
    align-items: baseline;
}

.bar-container {
    height: 10px;
    background-color: var(--vp-c-bg-alt);
    border-radius: 6px;
    overflow: hidden;
}

.bar-fill {
    height: 100%;
    transition: width 0.4s ease;
}

.text {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
    white-space: nowrap;
    text-align: right;
    min-width: 120px;
    max-width: 130px;
}
</style>
