<template>
    <div>
        <h3>Python</h3>
        <textarea
            v-model="code"
            style="width: 100%; height: 120px; font-family: monospace"
        ></textarea>
        <br />
        <button @click="runCode" :disabled="!pyodide">Выполнить</button>
        <pre>{{ output }}</pre>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const code = ref('print("Привет, VitePress!")')
const output = ref('')
let pyodide = null

onMounted(async () => {
    output.value = 'Загрузка интерпретатора Python...'
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js'
    script.onload = async () => {
        pyodide = await window.loadPyodide()
        output.value = 'Готово. Введите код и нажмите "Выполнить".'
    }
    script.onerror = () => {
        output.value = 'Ошибка: не удалось загрузить Pyodide.'
    }
    document.body.appendChild(script)
})

async function runCode() {
    if (!pyodide) return
    output.value = ''

    let stdout = ''
    const oldPrint = pyodide.globals.get('print')
    pyodide.globals.set('print', (...args) => {
        stdout += args.join(' ') + '\n'
    })

    try {
        await pyodide.runPythonAsync(code.value)
        output.value = stdout || '(нет вывода)'
    } catch (err) {
        output.value = 'Ошибка: ' + err
    } finally {
        pyodide.globals.set('print', oldPrint)
    }
}
</script>
