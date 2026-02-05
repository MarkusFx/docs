<script setup>
import VkVideo from './VkVideo.vue'

defineProps({
    sections: {
        type: Array,
        required: true,
    },
})

let counter = 1
function nextNumber() {
    return String(counter++).padStart(3, '0')
}
</script>

<template>
    <div class="course">
        <section
            v-for="(group, groupIndex) in sections"
            :key="groupIndex"
            class="section"
        >
            <h2>
                {{ String(groupIndex + 1).padStart(2, '0') }}.
                {{ group.title }}
            </h2>

            <VkVideo
                v-for="video in group.videos"
                :key="video.src"
                :title="`${nextNumber()} - ${video.title}`"
                :src="video.src"
            />
        </section>
    </div>
</template>

<style scoped>
.section {
    margin-bottom: 48px;
}
</style>
