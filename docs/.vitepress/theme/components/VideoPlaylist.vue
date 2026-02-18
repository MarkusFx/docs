<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import VkVideo from './VkVideo.vue'

const props = defineProps<{
    videos: Array<{ title: string; src: string }>
}>()

const VIDEO_NAV_EVENT = 'vk-video:navigate'

function handleNav(e: Event) {
    const detail = (e as CustomEvent).detail
    const { direction, fromIndex } = detail

    let targetIndex: number | undefined
    if (
        direction === 'next' &&
        fromIndex != null &&
        fromIndex < props.videos.length - 1
    ) {
        targetIndex = fromIndex + 1
    } else if (direction === 'prev' && fromIndex != null && fromIndex > 0) {
        targetIndex = fromIndex - 1
    }

    if (targetIndex != null) {
        window.dispatchEvent(
            new CustomEvent(VIDEO_NAV_EVENT, {
                detail: { direction, fromIndex, targetIndex },
            }),
        )
    }
}

onMounted(() => {
    window.addEventListener(VIDEO_NAV_EVENT, handleNav as EventListener)
})

onBeforeUnmount(() => {
    window.removeEventListener(VIDEO_NAV_EVENT, handleNav as EventListener)
})
</script>

<template>
    <div class="video-playlist">
        <VkVideo
            v-for="(video, i) in videos"
            :key="video.src + i"
            :title="video.title"
            :src="video.src"
            :video-index="i"
        />
    </div>
</template>

<style scoped>
.video-playlist {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>
