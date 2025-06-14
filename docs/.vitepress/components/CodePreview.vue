<script setup>
import { computed } from 'vue'

const props = defineProps({
    html: { type: String, default: '' },
    css: { type: String, default: '' },
    js: { type: String, default: '' },
    height: { type: String, default: '300px' },
})

const code = computed(
    () => `
        <!DOCTYPE html>
        <html>
            <head>
                <style>${props.css}</style>
            </head>
            <body>
                ${props.html}
                <script>${props.js}<\/script>
            </body>
        </html>
`,
)
</script>

<template>
    <div class="code-preview">
        <iframe
            :srcdoc="code"
            class="preview-frame"
            :style="{ height: height }"
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
