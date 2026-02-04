<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    src: string
    title?: string
    open?: boolean
}>()

// открыт ли details
const isOpen = ref(!!props.open)

// iframe смонтирован
const mounted = ref(false)

// iframe реально загрузился
const iframeLoaded = ref(false)

function onToggle(e: Event) {
    const el = e.target as HTMLDetailsElement
    isOpen.value = el.open

    if (el.open) {
        // при открытии создаём iframe
        mounted.value = true
    } else {
        // при закрытии — удаляем iframe
        mounted.value = false
        iframeLoaded.value = false
    }
}
</script>

<template>
    <details class="vk-details" :open="open" @toggle="onToggle">
        <summary class="vk-summary">
            {{ title ?? 'Видео' }}
        </summary>

        <div class="vk-wrap">
            <!-- Spinner -->
            <div
                v-if="mounted && !iframeLoaded"
                class="vk-spinner"
                aria-label="Загрузка видео"
            >
                <span />
            </div>

            <!-- iframe -->
            <iframe
                v-if="mounted"
                class="vk-iframe"
                :class="{ visible: iframeLoaded }"
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
                @load="iframeLoaded = true"
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

/* summary */
.vk-summary {
    margin: 8px;
    padding: 10px 12px;
    cursor: pointer;
    font-weight: 700;
    font-size: var(--vp-custom-block-font-size);
}

/* video container */
.vk-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-top: 10px;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
}

/* iframe */
.vk-iframe {
    width: 100%;
    height: 100%;
    border: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.vk-iframe.visible {
    opacity: 1;
}

/* spinner */
.vk-spinner {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;
}

.vk-spinner span {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: vk-spin 0.8s linear infinite;
}

@keyframes vk-spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
