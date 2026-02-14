<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

// модальное окно
const showModal = ref(false)

function onToggle(e: Event) {
    const el = e.target as HTMLDetailsElement
    isOpen.value = el.open

    if (el.open) {
        mounted.value = true
    } else {
        mounted.value = false
        iframeLoaded.value = false
        showModal.value = false
        document.body.style.overflow = ''
    }
}

function openModal() {
    showModal.value = true
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    showModal.value = false
    document.body.style.overflow = ''
}

function onEsc(e: KeyboardEvent) {
    if (e.key === 'Escape' && showModal.value) {
        closeModal()
    }
}

onMounted(() => {
    window.addEventListener('keydown', onEsc)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onEsc)
})
</script>

<template>
    <details class="vk-details" :open="open" @toggle="onToggle">
        <summary class="vk-summary">
            <span>{{ title ?? 'Видео' }}</span>

            <!-- кнопка развернуть -->
            <button
                v-if="isOpen && iframeLoaded"
                class="vk-expand"
                title="Развернуть"
                @click.stop.prevent="openModal"
            >
                ⛶
            </button>
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

    <!-- МОДАЛКА -->
    <teleport to="body">
        <div v-if="showModal" class="vk-modal" @click.self="closeModal">
            <div class="vk-modal-content">
                <header class="vk-modal-header">
                    <span>{{ title ?? 'Видео' }}</span>
                    <button class="vk-close" @click="closeModal">✕</button>
                </header>

                <div class="vk-modal-video">
                    <iframe
                        class="vk-iframe visible"
                        :src="src"
                        allow="
                            autoplay;
                            encrypted-media;
                            fullscreen;
                            picture-in-picture;
                        "
                        allowfullscreen
                        frameborder="0"
                    />
                </div>
            </div>
        </div>
    </teleport>
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
    margin: 4px;
    padding: 10px 12px;
    cursor: pointer;
    font-weight: 700;
    font-size: var(--vp-custom-block-font-size);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* expand button */
.vk-expand {
    background: transparent;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.7;
}

.vk-expand:hover {
    opacity: 1;
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

/* modal */
.vk-modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 9999;
    display: grid;
    place-items: center;
}

.vk-modal-content {
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    background: #000;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
}

.vk-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    font-weight: 700;
    background: #111;
}

.vk-close {
    background: transparent;
    border: 0;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
}

.vk-modal-video {
    flex: 1;
    position: relative;
}

.vk-modal-video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}
</style>
