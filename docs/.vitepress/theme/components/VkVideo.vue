<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
    src: string
    title?: string
    open?: boolean
}>()

const isOpen = ref(!!props.open)
const loaded = ref(false)

function onToggle(e: Event) {
    const el = e.target as HTMLDetailsElement
    isOpen.value = el.open
    if (el.open) loaded.value = true
}
</script>

<template>
    <details class="vk-details" :open="open" @toggle="onToggle">
        <summary class="vk-summary">
            {{ title ?? 'Видео' }}
        </summary>

        <div class="vk-wrap">
            <iframe
                v-if="loaded"
                class="vk-iframe"
                :src="src"
                loading="lazy"
                allow="
                    autoplay;
                    encrypted-media;
                    fullscreen;
                    picture-in-picture;
                "
                allowfullscreen
                frameborder="0"
                referrerpolicy="no-referrer"
            />
        </div>
    </details>
</template>

<style scoped>
.vk-details {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    border-radius: 8px;
    background-color: var(--vp-custom-block-details-bg);
}
.vk-summary {
    margin: 8px;
    padding: 10px 12px;
    cursor: pointer;
    font-weight: 700;
    font-size: var(--vp-custom-block-font-size);
}
.vk-wrap {
    margin-top: 10px;
    width: 100%;
    aspect-ratio: 16 / 9;
}
.vk-iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 8px;
}
</style>
