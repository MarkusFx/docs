<!--v1-->
<!--<script setup>-->
<!--import { ref, watchEffect } from 'vue'-->

<!--const props = defineProps({-->
<!--    path: { type: String, required: true }, // например, "html/demo_025"-->
<!--    height: { type: String, default: '300px' },-->
<!--})-->

<!--const html = ref('')-->
<!--const css = ref('')-->
<!--const js = ref('')-->

<!--watchEffect(async () => {-->
<!--    const [htmlText, cssText, jsText] = await Promise.all([-->
<!--        fetch(`/demos/${props.path}/index.html`).then((r) => r.text()),-->
<!--        fetch(`/demos/${props.path}/style.css`).then((r) => r.text()),-->
<!--        fetch(`/demos/${props.path}/script.js`).then((r) => r.text()),-->
<!--    ])-->
<!--    html.value = htmlText-->
<!--    css.value = cssText-->
<!--    js.value = jsText-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--    <div class="code-preview">-->
<!--        <iframe-->
<!--            v-if="html"-->
<!--            :srcdoc="`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`"-->
<!--            class="preview-frame"-->
<!--            :style="{ height }"-->
<!--            sandbox="allow-scripts"-->
<!--        ></iframe>-->
<!--    </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.preview-frame {-->
<!--    width: 100%;-->
<!--    min-height: 100px;-->
<!--    border: 1px solid var(&#45;&#45;vp-c-divider);-->
<!--    border-radius: 12px;-->
<!--    margin: 1rem 0;-->
<!--}-->
<!--</style>-->

<!--v2-->
<!--<script setup>-->
<!--import { ref, watchEffect } from 'vue'-->

<!--const props = defineProps({-->
<!--    demo: { type: String, required: true }, // например, 'html/demo_025'-->
<!--    height: { type: String, default: '300px' },-->
<!--})-->

<!--// Глобальный импорт всех демо-файлов (обновлённый синтаксис Vite)-->
<!--const files = import.meta.glob('../examples/**/*.@(html|css|js)', {-->
<!--    query: '?raw',-->
<!--    import: 'default',-->
<!--    eager: true,-->
<!--})-->

<!--const html = ref('')-->
<!--const css = ref('')-->
<!--const js = ref('')-->

<!--watchEffect(() => {-->
<!--    html.value = files[`../examples/${props.demo}/index.html`] || ''-->
<!--    css.value = files[`../examples/${props.demo}/style.css`] || ''-->
<!--    js.value = files[`../examples/${props.demo}/script.js`] || ''-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--    <div class="code-preview">-->
<!--        <iframe-->
<!--            v-if="html"-->
<!--            :srcdoc="`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`"-->
<!--            class="preview-frame"-->
<!--            :style="{ height }"-->
<!--            sandbox="allow-scripts"-->
<!--        ></iframe>-->
<!--    </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.preview-frame {-->
<!--    width: 100%;-->
<!--    min-height: 100px;-->
<!--    border: 1px solid var(&#45;&#45;vp-c-divider);-->
<!--    border-radius: 12px;-->
<!--    margin: 1rem 0;-->
<!--}-->
<!--</style>-->

<!--v3-->
<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
    path: { type: String, required: true }, // Пример: 'html/demo_025'
    height: { type: String, default: '300px' },
})

const html = ref('')
const css = ref('')
const js = ref('')

watchEffect(async () => {
    try {
        const [htmlText, cssText, jsText] = await Promise.all([
            fetch(`/demos/${props.path}/index.html`).then((r) => r.text()),
            fetch(`/demos/${props.path}/style.css`).then((r) => r.text()),
            fetch(`/demos/${props.path}/script.js`).then((r) => r.text()),
        ])
        html.value = htmlText
        css.value = cssText
        js.value = jsText
    } catch (err) {
        console.error(`Ошибка загрузки демо-файлов:`, err)
    }
})
</script>

<template>
    <div class="code-preview">
        <iframe
            v-if="html"
            :srcdoc="`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`"
            class="preview-frame"
            :style="{ height }"
            sandbox="allow-scripts"
        ></iframe>
    </div>
</template>

<style scoped>
.preview-frame {
    width: 100%;
    min-height: 100px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    margin: 1rem 0;
}
</style>
