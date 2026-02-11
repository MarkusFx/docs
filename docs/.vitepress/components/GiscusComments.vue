<!--<template>-->
<!--    <div ref="giscusContainer"></div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { onMounted, ref, onBeforeUnmount } from 'vue'-->
<!--import { createGiscus } from 'giscus'-->

<!--const giscusContainer = ref(null)-->
<!--let giscusInstance = null-->

<!--onMounted(() => {-->
<!--    if (giscusContainer.value) {-->
<!--        giscusInstance = createGiscus({-->
<!--            container: giscusContainer.value,-->
<!--            repo: 'username/repo', // замените на ваш репозиторий-->
<!--            repoId: 'MDEwOlJlcG9zaXRvcnkxMjM0NTY3OA==', // замените на ваш repoId-->
<!--            category: 'General', // категория обсуждений-->
<!--            categoryId: 'DIC_kwDOA1ABC4B4', // id категории-->
<!--            mapping: 'pathname', // 'pathname' = URL страницы-->
<!--            reactionsEnabled: true, // лайки 👍-->
<!--            emitMetadata: false,-->
<!--            inputPosition: 'bottom', // поле для комментария снизу-->
<!--            theme: 'light', // можно 'dark', 'preferred_color_scheme', 'transparent_dark' и т.д.-->
<!--            lang: 'en', // язык интерфейса-->
<!--        })-->
<!--    }-->
<!--})-->

<!--onBeforeUnmount(() => {-->
<!--    // удаляем компонент при переходе на другую страницу-->
<!--    if (giscusContainer.value) {-->
<!--        giscusContainer.value.innerHTML = ''-->
<!--    }-->
<!--})-->
<!--</script>-->

<!--<style scoped>-->
<!--/* немного отступа сверху */-->
<!--div[ref='giscusContainer'] {-->
<!--    margin-top: 2rem;-->
<!--}-->
<!--</style>-->

<template>
    <div ref="giscusContainer"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const giscusContainer = ref(null)
let scriptEl = null

// Параметры Giscus — замените на свои
const GISCUS_CONFIG = {
    repo: 'MarkusFx/docs', // ваш репозиторий
    repoId: 'R_kgDOO4Wdjg', // ваш repoId
    category: 'General', // категория обсуждений
    categoryId: 'DIC_kwDOO4Wdjs4C2HJq', // ID категории
    mapping: 'pathname', // привязка к URL
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'ru',
}

onMounted(() => {
    if (!giscusContainer.value) return

    // создаем скрипт Giscus
    scriptEl = document.createElement('script')
    scriptEl.src = 'https://giscus.app/client.js'
    Object.entries(GISCUS_CONFIG).forEach(([key, value]) => {
        scriptEl.setAttribute(
            `data-${key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}`,
            value,
        )
    })
    scriptEl.async = true
    scriptEl.crossOrigin = 'anonymous'

    giscusContainer.value.appendChild(scriptEl)
})

onBeforeUnmount(() => {
    // чистим контейнер при переходе
    if (giscusContainer.value) {
        giscusContainer.value.innerHTML = ''
    }
})
</script>

<style scoped>
div[ref='giscusContainer'] {
    margin-top: 2rem;
}
</style>
