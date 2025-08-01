<!--<template>-->
<!--    <div class="rutube-player">-->
<!--        <div-->
<!--            ref="videoContainer"-->
<!--            class="video-container"-->
<!--            :class="{ fullscreen: isFullscreen }"-->
<!--            v-if="currentVideo"-->
<!--            @dblclick="toggleFullscreen"-->
<!--            @mousemove="onMouseMove"-->
<!--        >-->
<!--            <iframe :src="currentVideo" allow="autoplay"></iframe>-->

<!--            &lt;!&ndash; UI элементы &ndash;&gt;-->
<!--            <button-->
<!--                v-show="isUiVisible"-->
<!--                class="fullscreen-btn"-->
<!--                @click="toggleFullscreen"-->
<!--                :title="-->
<!--                    isFullscreen-->
<!--                        ? 'Выйти из полноэкранного режима'-->
<!--                        : 'Полноэкранный режим'-->
<!--                "-->
<!--            >-->
<!--                {{ isFullscreen ? '⨉' : '⛶' }}-->
<!--            </button>-->

<!--            <div v-show="isUiVisible" class="overlay-controls">-->
<!--                <button-->
<!--                    @click="prevVideo"-->
<!--                    :disabled="!hasPrev"-->
<!--                    :title="-->
<!--                        hasPrev ? 'Предыдущее: ' + titles[currentIndex - 1] : ''-->
<!--                    "-->
<!--                >-->
<!--                    ◀ {{ hasPrev ? titles[currentIndex - 1] : '' }}-->
<!--                </button>-->
<!--                <button-->
<!--                    @click="nextVideo"-->
<!--                    :disabled="!hasNext"-->
<!--                    :title="-->
<!--                        hasNext ? 'Следующее: ' + titles[currentIndex + 1] : ''-->
<!--                    "-->
<!--                >-->
<!--                    {{ hasNext ? titles[currentIndex + 1] : '' }} ▶-->
<!--                </button>-->
<!--            </div>-->

<!--            <ul v-show="isUiVisible" class="overlay-playlist">-->
<!--                <li-->
<!--                    v-for="(title, index) in titles"-->
<!--                    :key="index"-->
<!--                    :class="{ active: index === currentIndex }"-->
<!--                    @click="selectVideo(index)"-->
<!--                    :title="title"-->
<!--                >-->
<!--                    {{ title }}-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'-->

<!--const props = defineProps({-->
<!--    videos: {-->
<!--        type: Array,-->
<!--        required: true,-->
<!--        validator: (arr) =>-->
<!--            Array.isArray(arr) &&-->
<!--            arr.every(-->
<!--                (v) =>-->
<!--                    v &&-->
<!--                    typeof v.title === 'string' &&-->
<!--                    typeof v.url === 'string' &&-->
<!--                    v.url.includes('rutube.ru'),-->
<!--            ),-->
<!--    },-->
<!--})-->

<!--const playlist = ref(props.videos.map((v) => v.url))-->
<!--const titles = ref(props.videos.map((v) => v.title))-->

<!--const currentIndex = ref(0)-->
<!--const currentVideo = computed(() => playlist.value[currentIndex.value])-->

<!--const videoContainer = ref(null)-->
<!--const isFullscreen = ref(false)-->
<!--const isUiVisible = ref(true)-->
<!--let hideUiTimeout = null-->

<!--function resetUiTimer() {-->
<!--    clearTimeout(hideUiTimeout)-->
<!--    isUiVisible.value = true-->
<!--    hideUiTimeout = setTimeout(() => {-->
<!--        isUiVisible.value = false-->
<!--    }, 3000)-->
<!--}-->

<!--function onMouseMove() {-->
<!--    resetUiTimer()-->
<!--}-->

<!--function toggleFullscreen() {-->
<!--    const container = videoContainer.value-->
<!--    if (!document.fullscreenElement) {-->
<!--        container.requestFullscreen()-->
<!--    } else {-->
<!--        document.exitFullscreen()-->
<!--    }-->
<!--}-->

<!--function onFullscreenChange() {-->
<!--    isFullscreen.value = !!document.fullscreenElement-->
<!--    if (isFullscreen.value) {-->
<!--        resetUiTimer()-->
<!--    } else {-->
<!--        isUiVisible.value = true-->
<!--        clearTimeout(hideUiTimeout)-->
<!--    }-->
<!--}-->

<!--onMounted(() => {-->
<!--    document.addEventListener('fullscreenchange', onFullscreenChange)-->
<!--})-->

<!--onBeforeUnmount(() => {-->
<!--    document.removeEventListener('fullscreenchange', onFullscreenChange)-->
<!--    clearTimeout(hideUiTimeout)-->
<!--})-->

<!--const hasPrev = computed(() => currentIndex.value > 0)-->
<!--const hasNext = computed(() => currentIndex.value < playlist.value.length - 1)-->

<!--function prevVideo() {-->
<!--    if (hasPrev.value) currentIndex.value&#45;&#45;-->
<!--}-->

<!--function nextVideo() {-->
<!--    if (hasNext.value) currentIndex.value++-->
<!--}-->

<!--function selectVideo(index) {-->
<!--    currentIndex.value = index-->
<!--}-->

<!--watch(-->
<!--    () => props.videos,-->
<!--    (newVideos) => {-->
<!--        playlist.value = newVideos.map((v) => v.url)-->
<!--        titles.value = newVideos.map((v) => v.title)-->
<!--        if (currentIndex.value >= playlist.value.length) {-->
<!--            currentIndex.value = 0-->
<!--        }-->
<!--    },-->
<!--    { deep: true, immediate: true },-->
<!--)-->
<!--</script>-->

<!--<style scoped>-->
<!--.rutube-player {-->
<!--    max-width: 960px;-->
<!--    margin: 2em auto;-->
<!--    font-family: sans-serif;-->
<!--}-->

<!--.video-container {-->
<!--    position: relative;-->
<!--    width: 100%;-->
<!--    aspect-ratio: 16 / 9;-->
<!--    background: #000;-->
<!--    border-radius: 10px;-->
<!--    overflow: hidden;-->
<!--    user-select: none;-->
<!--    -webkit-user-select: none;-->
<!--}-->

<!--.video-container.fullscreen {-->
<!--    width: 100vw;-->
<!--    height: 100vh;-->
<!--    aspect-ratio: auto;-->
<!--    border-radius: 0;-->
<!--}-->

<!--.video-container iframe {-->
<!--    position: absolute;-->
<!--    inset: 0;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    border: none;-->
<!--    pointer-events: auto;-->
<!--}-->

<!--/* Прозрачный слой для мыши */-->
<!--.mouse-layer {-->
<!--    position: absolute;-->
<!--    inset: 0;-->
<!--    z-index: 30;-->
<!--    background: transparent;-->
<!--    pointer-events: auto;-->
<!--}-->

<!--/* Smooth UI fade */-->
<!--.overlay-controls,-->
<!--.overlay-playlist,-->
<!--.fullscreen-btn {-->
<!--    transition: opacity 0.3s ease;-->
<!--}-->

<!--[v-cloak],-->
<!--[v-show='false'] {-->
<!--    opacity: 0;-->
<!--    pointer-events: none;-->
<!--}-->

<!--/* Fullscreen button */-->
<!--.fullscreen-btn {-->
<!--    position: absolute;-->
<!--    top: 10px;-->
<!--    left: 10px;-->
<!--    z-index: 20;-->
<!--    font-size: 18px;-->
<!--    background: rgba(0, 0, 0, 0.6);-->
<!--    color: white;-->
<!--    border: none;-->
<!--    border-radius: 6px;-->
<!--    padding: 6px 10px;-->
<!--    cursor: pointer;-->
<!--}-->

<!--/* Prev/Next controls */-->
<!--.overlay-controls {-->
<!--    position: absolute;-->
<!--    bottom: 10px;-->
<!--    left: 50%;-->
<!--    transform: translateX(-50%);-->
<!--    z-index: 20;-->
<!--    display: flex;-->
<!--    gap: 12px;-->
<!--}-->

<!--.overlay-controls button {-->
<!--    padding: 8px 14px;-->
<!--    font-weight: bold;-->
<!--    font-size: 14px;-->
<!--    background: rgba(0, 0, 0, 0.7);-->
<!--    color: white;-->
<!--    border: none;-->
<!--    border-radius: 8px;-->
<!--    cursor: pointer;-->
<!--    max-width: 250px;-->
<!--    white-space: nowrap;-->
<!--    overflow: hidden;-->
<!--    text-overflow: ellipsis;-->
<!--}-->

<!--.overlay-controls button:disabled {-->
<!--    opacity: 0.5;-->
<!--    cursor: default;-->
<!--}-->

<!--/* Playlist */-->
<!--.overlay-playlist {-->
<!--    position: absolute;-->
<!--    top: 5px;-->
<!--    right: 5px;-->
<!--    width: 250px;-->
<!--    max-height: 85%;-->
<!--    overflow-y: auto;-->
<!--    list-style: none;-->
<!--    padding: 6px;-->
<!--    background: rgba(0, 0, 0, 0.6);-->
<!--    border-radius: 8px;-->
<!--    z-index: 20;-->
<!--}-->

<!--.overlay-playlist li {-->
<!--    color: white;-->
<!--    cursor: pointer;-->
<!--    font-size: 14px;-->
<!--    border-radius: 4px;-->
<!--    transition: background 0.2s;-->
<!--    white-space: nowrap;-->
<!--    overflow: hidden;-->
<!--    text-overflow: ellipsis;-->
<!--}-->

<!--.overlay-playlist li:hover {-->
<!--    background: rgba(255, 255, 255, 0.2);-->
<!--}-->

<!--.overlay-playlist li.active {-->
<!--    background: rgba(255, 255, 255, 0.4);-->
<!--    font-weight: bold;-->
<!--}-->
<!--</style>-->

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
    videos: {
        type: Array,
        required: true,
        validator: (arr) =>
            Array.isArray(arr) &&
            arr.every(
                (v) =>
                    v &&
                    typeof v.title === 'string' &&
                    typeof v.url === 'string' &&
                    v.url.includes('rutube.ru'),
            ),
    },
})

const playlist = ref(props.videos.map((v) => v.url))
const titles = ref(props.videos.map((v) => v.title))

const currentIndex = ref(0)
const currentVideo = computed(() => playlist.value[currentIndex.value])

const videoContainer = ref(null)
const isFullscreen = ref(false)
const isUiVisible = ref(true)
let hideUiTimeout = null

function resetUiTimer() {
    clearTimeout(hideUiTimeout)
    isUiVisible.value = true
    hideUiTimeout = setTimeout(() => {
        isUiVisible.value = false
    }, 3000)
}

// Обработчик движения мыши по прозрачной зоне
function onMouseMove() {
    resetUiTimer()
}

function toggleFullscreen() {
    const container = videoContainer.value
    if (!document.fullscreenElement) {
        container.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

function onFullscreenChange() {
    isFullscreen.value = !!document.fullscreenElement
    if (isFullscreen.value) {
        resetUiTimer()
    } else {
        isUiVisible.value = true
        clearTimeout(hideUiTimeout)
    }
}

onMounted(() => {
    document.addEventListener('fullscreenchange', onFullscreenChange)
})

onBeforeUnmount(() => {
    document.removeEventListener('fullscreenchange', onFullscreenChange)
    clearTimeout(hideUiTimeout)
})

const hasPrev = computed(() => currentIndex.value > 0)
const hasNext = computed(() => currentIndex.value < playlist.value.length - 1)

function prevVideo() {
    if (hasPrev.value) currentIndex.value--
}

function nextVideo() {
    if (hasNext.value) currentIndex.value++
}

function selectVideo(index) {
    currentIndex.value = index
}

watch(
    () => props.videos,
    (newVideos) => {
        playlist.value = newVideos.map((v) => v.url)
        titles.value = newVideos.map((v) => v.title)
        if (currentIndex.value >= playlist.value.length) {
            currentIndex.value = 0
        }
    },
    { deep: true, immediate: true },
)
</script>

<template>
    <div class="rutube-player">
        <div
            ref="videoContainer"
            class="video-container"
            :class="{ fullscreen: isFullscreen }"
            v-if="currentVideo"
            @dblclick="toggleFullscreen"
        >
            <iframe :src="currentVideo" allow="autoplay"></iframe>

            <!-- Прозрачная зона в верхней 1/3 для отслеживания движения мыши -->
            <div class="mouse-layer" @mousemove="onMouseMove"></div>

            <!-- UI элементы -->
            <button
                v-show="isUiVisible"
                class="fullscreen-btn"
                @click="toggleFullscreen"
                :title="
                    isFullscreen
                        ? 'Выйти из полноэкранного режима'
                        : 'Полноэкранный режим'
                "
            >
                {{ isFullscreen ? '⨉' : '⛶' }}
            </button>

            <div v-show="isUiVisible" class="overlay-controls">
                <button
                    @click="prevVideo"
                    :disabled="!hasPrev"
                    :title="
                        hasPrev ? 'Предыдущее: ' + titles[currentIndex - 1] : ''
                    "
                >
                    ◀ {{ hasPrev ? titles[currentIndex - 1] : '' }}
                </button>
                <button
                    @click="nextVideo"
                    :disabled="!hasNext"
                    :title="
                        hasNext ? 'Следующее: ' + titles[currentIndex + 1] : ''
                    "
                >
                    {{ hasNext ? titles[currentIndex + 1] : '' }} ▶
                </button>
            </div>

            <ul v-show="isUiVisible" class="overlay-playlist">
                <li
                    v-for="(title, index) in titles"
                    :key="index"
                    :class="{ active: index === currentIndex }"
                    @click="selectVideo(index)"
                    :title="title"
                >
                    {{ title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.rutube-player {
    max-width: 960px;
    margin: 2em auto;
    font-family: sans-serif;
}

.video-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 10px;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
}

.video-container.fullscreen {
    width: 100vw;
    height: 100vh;
    aspect-ratio: auto;
    border-radius: 0;
}

.video-container iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: auto;
}

/* Прозрачный слой для мыши - занимает верхнюю треть контейнера */
.mouse-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 33.3333%;
    z-index: 25;
    background: transparent;
    pointer-events: auto;
}

/* Smooth UI fade */
.overlay-controls,
.overlay-playlist,
.fullscreen-btn {
    transition: opacity 0.3s ease;
}

[v-cloak],
[v-show='false'] {
    opacity: 0;
    pointer-events: none;
}

/* Fullscreen button */
.fullscreen-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 30;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 6px;
    padding: 6px 10px;
    cursor: pointer;
}

/* Prev/Next controls */
.overlay-controls {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    display: flex;
    gap: 12px;
}

.overlay-controls button {
    padding: 8px 14px;
    font-weight: bold;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.overlay-controls button:disabled {
    opacity: 0.5;
    cursor: default;
}

/* Playlist */
.overlay-playlist {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 250px;
    max-height: 85%;
    overflow-y: auto;
    list-style: none;
    padding: 6px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    z-index: 30;
}

.overlay-playlist li {
    color: white;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    transition: background 0.2s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.overlay-playlist li:hover {
    background: rgba(255, 255, 255, 0.2);
}

.overlay-playlist li.active {
    background: rgba(255, 255, 255, 0.4);
    font-weight: bold;
}
</style>
