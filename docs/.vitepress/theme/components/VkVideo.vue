<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps<{
    src: string
    title?: string
    open?: boolean
}>()

const hasVideo = computed(() => !!props.src?.trim())
const mounted = ref(false)
const iframeLoaded = ref(false)
const showModal = ref(false)

const allowAttrs = 'autoplay; encrypted-media; fullscreen; picture-in-picture'

function onToggle(e: Event) {
    if (!hasVideo.value) {
        e.preventDefault()
        return
    }

    const el = e.target as HTMLDetailsElement
    mounted.value = el.open

    if (!el.open) {
        iframeLoaded.value = false
        showModal.value = false
        document.body.style.overflow = ''
    }
}

function openModal() {
    if (!hasVideo.value) return
    showModal.value = true
    document.body.style.overflow = 'hidden'
}

function closeModal() {
    showModal.value = false
    document.body.style.overflow = ''
}

function onEsc(e: KeyboardEvent) {
    if (e.key === 'Escape' && showModal.value) closeModal()
}

onMounted(() => window.addEventListener('keydown', onEsc))
onBeforeUnmount(() => window.removeEventListener('keydown', onEsc))
</script>

<template>
    <details
        class="vk-details"
        :class="{ 'vk-details--no-video': !hasVideo }"
        :open="open"
        @toggle="onToggle"
    >
        <summary
            class="vk-summary"
            :class="{ 'vk-summary--disabled': !hasVideo }"
        >
            <span class="vk-summary-title">{{ title ?? 'Видео' }}</span>

            <!--
              Кнопка теперь всегда в потоке (не v-show).
              Она просто прозрачна и неактивна, пока не загрузится iframe.
              Это гарантирует, что высота summary не изменится.
            -->
            <button
                v-if="hasVideo && mounted"
                class="vk-expand"
                :class="{ 'vk-expand--ready': iframeLoaded }"
                title="Развернуть на весь экран"
                @click.stop.prevent="openModal"
            >
                <svg
                    class="vk-expand-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
            </button>
        </summary>

        <div class="vk-wrap">
            <div
                v-if="mounted && !iframeLoaded && hasVideo"
                class="vk-spinner"
                aria-label="Загрузка видео"
            >
                <span />
            </div>
            <div v-if="!hasVideo" class="vk-placeholder">
                <span>Видео недоступно</span>
            </div>

            <iframe
                v-if="mounted && hasVideo && !showModal"
                class="vk-iframe"
                :class="{ visible: iframeLoaded }"
                :src="src"
                loading="lazy"
                :allow="allowAttrs"
                allowfullscreen
                frameborder="0"
                referrerpolicy="no-referrer"
                @load="iframeLoaded = true"
            />
        </div>
    </details>

    <teleport to="body">
        <transition name="fade">
            <div
                v-if="showModal && hasVideo"
                class="vk-modal"
                @click.self="closeModal"
            >
                <div class="vk-modal-content">
                    <header class="vk-modal-header">
                        <span class="vk-modal-title">{{
                            title ?? 'Видео'
                        }}</span>
                        <button
                            class="vk-close"
                            @click="closeModal"
                            title="Закрыть (Esc)"
                        >
                            <svg
                                class="vk-close-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </header>
                    <div class="vk-modal-video">
                        <iframe
                            class="vk-iframe-modal"
                            :src="src"
                            :allow="allowAttrs"
                            allowfullscreen
                            frameborder="0"
                            referrerpolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>
        </transition>
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

.vk-details--no-video {
    opacity: 0.6;
}

.vk-summary {
    margin: 4px;
    padding: 10px 12px;
    cursor: pointer;
    font-weight: 700;
    font-size: var(--vp-custom-block-font-size);
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* Фиксируем высоту, чтобы не прыгала */
    min-height: 44px;
    /* Важно для корректного отображения summary в разных браузерах */
    list-style: none;
}
/* Убираем стандартный треугольник summary */
.vk-summary::-webkit-details-marker {
    display: none;
}

.vk-summary-title {
    padding-right: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.vk-summary--disabled {
    cursor: not-allowed;
    opacity: 0.7;
}

.vk-summary--disabled:hover {
    background: transparent;
}

/* Кнопка разворачивания */
.vk-expand {
    background: rgba(128, 128, 128, 0.15);
    border: 0;
    border-radius: 4px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;

    /*
       Ключевое изменение:
       Кнопка всегда занимает место (width/height заданы),
       но невидима и не кликабельна по умолчанию.
    */
    opacity: 0;
    pointer-events: none;
    transition:
        opacity 0.3s ease,
        background-color 0.2s;
}

/* Когда iframeLoaded = true, добавляем класс vk-expand--ready */
.vk-expand--ready {
    opacity: 0.8;
    pointer-events: auto;
}

.vk-expand:hover {
    opacity: 1;
    background: rgba(128, 128, 128, 0.25);
}

.vk-expand:active {
    transform: scale(0.95);
}

.vk-expand-icon {
    width: 18px;
    height: 18px;
    color: currentColor;
}

.vk-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-top: 10px;
    background: #000;
    border-radius: 8px;
    overflow: hidden;
}

.vk-placeholder {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 14px;
    z-index: 2;
}

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

/* Modal */
.vk-modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    display: grid;
    place-items: center;
    padding: 10px;
    box-sizing: border-box;
}

.vk-modal-content {
    width: calc(100vw - 20px);
    height: calc(100vh - 20px);
    max-width: 98vw;
    max-height: 98vh;
    background: #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.vk-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    font-weight: 700;
    color: #fff;
    background: #111;
    flex-shrink: 0;
}

.vk-modal-title {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.vk-close {
    background: rgba(255, 100, 100, 0.2);
    border: 0;
    border-radius: 6px;
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #ff6b6b;
    transition: all 0.2s;
    flex-shrink: 0;
    margin-left: 12px;
}

.vk-close:hover {
    background: rgba(255, 100, 100, 0.4);
    color: #fff;
}

.vk-close-icon {
    width: 20px;
    height: 20px;
}

.vk-modal-video {
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
}

.vk-iframe-modal {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Адаптив */
@media (max-width: 768px) {
    .vk-modal-content {
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
        border-radius: 0;
    }

    .vk-modal {
        padding: 0;
    }
}
</style>
