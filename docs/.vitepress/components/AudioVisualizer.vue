<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const modules = import.meta.glob(
    '../../../src/audio/visualizer/*.{mp3,ogg,wav}',
    { eager: true },
)
const trackList = Object.keys(modules)
const tracks = Object.values(modules).map((mod) => mod.default)

const audio = new Audio()
const currentTrackIndex = ref(0)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)

const canvasRef = ref(null)
const tooltipRef = ref(null)

const audioContext = new (window.AudioContext || window.webkitAudioContext)()
let source, analyser

const freqBins = 64
const maxDepth = 50
const baseSpacingX = 10
const baseSpacingZ = 0

const colorLow = { r: 50, g: 200, b: 255 }
const colorHigh = { r: 150, g: 0, b: 255 }

let animationFrameId

const historyLines = new Array(maxDepth)
    .fill(null)
    .map(() => new Array(freqBins).fill(0))

function lerp(a, b, t) {
    return a + (b - a) * t
}

function interpolateColor(low, high, t) {
    const r = Math.round(lerp(low.r, high.r, t))
    const g = Math.round(lerp(low.g, high.g, t))
    const b = Math.round(lerp(low.b, high.b, t))
    return `rgb(${r},${g},${b})`
}

function setupAudioNodes() {
    if (source) return
    source = audioContext.createMediaElementSource(audio)
    analyser = audioContext.createAnalyser()
    analyser.fftSize = freqBins * 2
    source.connect(analyser)
    analyser.connect(audioContext.destination)
}

function formatTime(sec) {
    if (!sec || isNaN(sec)) return '0:00'
    const m = Math.floor(sec / 60)
    const s = Math.floor(sec % 60)
    return `${m}:${s < 10 ? '0' : ''}${s}`
}

function getTrackName(index) {
    return trackList[index]
        .split('/')
        .pop()
        .replace(/\.[^/.]+$/, '')
        .replace(/[_-]/g, ' ')
}

function playTrack(index) {
    audioContext.resume()
    currentTrackIndex.value = index
    audio.src = tracks[index]
    audio.crossOrigin = 'anonymous'
    audio.load()
    audio.play()
    isPlaying.value = true
}

function playNext() {
    const nextIndex = (currentTrackIndex.value + 1) % tracks.length
    playTrack(nextIndex)
}

function playPrev() {
    const prevIndex =
        (currentTrackIndex.value - 1 + tracks.length) % tracks.length
    playTrack(prevIndex)
}

function togglePlayPause() {
    if (isPlaying.value) {
        audio.pause()
        isPlaying.value = false
    } else {
        audioContext.resume()
        // если трек ещё не выбран — запускаем первый
        if (!audio.src) {
            playTrack(currentTrackIndex.value)
        } else {
            audio.play()
        }
        isPlaying.value = true
    }
}

function playRandom() {
    const randomIndex = Math.floor(Math.random() * tracks.length)
    playTrack(randomIndex)
}

function seek(event) {
    const progress = event.offsetX / event.target.clientWidth
    audio.currentTime = progress * duration.value
}

function drawVisualizer() {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const width = canvas.width / devicePixelRatio
    const height = canvas.height / devicePixelRatio

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#111'
    ctx.fillRect(0, 0, width, height)

    if (!analyser) return

    const dataArray = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(dataArray)

    const time = performance.now() * 0.001

    // Сдвигаем историю с затуханием
    for (let z = maxDepth - 1; z > 0; z--) {
        for (let x = 0; x < freqBins; x++) {
            historyLines[z][x] = historyLines[z - 1][x] * 0.97
        }
    }

    // Обновляем амплитуды
    for (let x = 0; x < freqBins; x++) {
        // const baseVal = (dataArray[x] / 255) * 140 + 3
        const baseVal = (dataArray[x] / 255) * 180 + 30
        const pulse = 0.25 * Math.sin(time * 3 + x) + 1
        historyLines[0][x] = baseVal * pulse
    }

    const centerX = width / 2
    const baseY = height / 2

    for (let z = 0; z < maxDepth; z++) {
        const depthFactor = z / maxDepth
        const scale = lerp(1, 1.7, depthFactor)
        const yOffset = baseY + z * baseSpacingZ * scale

        // Интерполяция цвета
        const baseColor = interpolateColor(colorLow, colorHigh, depthFactor)

        // Добавляем прозрачность alpha от 1 до 0 (с увеличением z)
        const alpha = lerp(1, 0, depthFactor)

        // Цвет с alpha (rgba)
        ctx.strokeStyle = baseColor
            .replace('rgb', 'rgba')
            .replace(')', `, ${alpha.toFixed(3)})`)

        ctx.lineWidth = 1.4 * scale
        ctx.lineCap = 'round'

        ctx.beginPath()

        for (let x = 0; x < freqBins - 1; x++) {
            const xPos = centerX + (x - freqBins / 2) * baseSpacingX * scale
            const xNext =
                centerX + (x + 1 - freqBins / 2) * baseSpacingX * scale

            const amp = historyLines[z][x] * scale
            const ampNext = historyLines[z][x + 1] * scale

            const y =
                yOffset -
                amp * Math.sin((x / freqBins) * Math.PI * 4 + time * 3 + z)
            const yNext =
                yOffset -
                ampNext *
                    Math.sin(((x + 1) / freqBins) * Math.PI * 4 + time * 3 + z)

            const midX = (xPos + xNext) / 2
            const midY = (y + yNext) / 2

            if (x === 0) ctx.moveTo(xPos, y)
            ctx.quadraticCurveTo(xPos, y, midX, midY)
        }
        ctx.stroke()
    }
}

function animate() {
    animationFrameId = requestAnimationFrame(animate)
    drawVisualizer()
}

function onResize() {
    if (!canvasRef.value) return
    const width = canvasRef.value.clientWidth
    const height = 600
    canvasRef.value.width = width * devicePixelRatio
    canvasRef.value.height = height * devicePixelRatio
    canvasRef.value.style.width = width + 'px'
    canvasRef.value.style.height = height + 'px'

    const ctx = canvasRef.value.getContext('2d')
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(devicePixelRatio, devicePixelRatio)
}

onMounted(() => {
    if (!tracks.length) {
        console.warn('❌ Нет треков в папке src/audio/visualizer/')
        return
    }
    setupAudioNodes()
    onResize()
    animate()

    audio.ontimeupdate = () => {
        currentTime.value = audio.currentTime
        duration.value = audio.duration || 0
    }

    audio.onended = () => playNext()
    window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId)
    if (source) source.disconnect()
    if (audio) {
        audio.pause()
        audio.src = ''
    }
    window.removeEventListener('resize', onResize)
})

function onProgressHover(e) {
    if (!duration.value) return
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = Math.min(Math.max(x / rect.width, 0), 1)
    const time = percent * duration.value
    if (tooltipRef.value) {
        tooltipRef.value.style.left = `${x}px`
        tooltipRef.value.textContent = formatTime(time)
        tooltipRef.value.style.opacity = '1'
    }
}

function onProgressLeave() {
    if (tooltipRef.value) {
        tooltipRef.value.style.opacity = '0'
    }
}
</script>

<template>
    <div style="text-align: center; margin-top: 20px; user-select: none">
        <canvas
            ref="canvasRef"
            style="
                width: 100%;
                height: 500px;
                margin: 0 auto;
                border-radius: 8px;
                background: #101010;
                box-shadow: 0 0 12px #222;
                display: block;
            "
        ></canvas>

        <div
            @click="seek"
            @mousemove="onProgressHover"
            @mouseleave="onProgressLeave"
            style="
                position: relative;
                height: 14px;
                background: #333;
                margin: 15px auto;
                width: 600px;
                cursor: pointer;
                border-radius: 6px;
            "
        >
            <div
                :style="{
                    width:
                        duration > 0
                            ? (currentTime / duration) * 100 + '%'
                            : '0%',
                }"
                style="height: 100%; background: #eee; border-radius: 6px"
            ></div>

            <div
                ref="tooltipRef"
                style="
                    position: absolute;
                    top: -28px;
                    padding: 3px 6px;
                    background: #222;
                    color: #eee;
                    font-size: 12px;
                    border-radius: 4px;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.15s ease;
                    user-select: none;
                    transform: translateX(-50%);
                    white-space: nowrap;
                    z-index: 10;
                "
            ></div>
        </div>

        <div
            style="
                width: 600px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                color: #eee;
                font-family: monospace;
                font-size: 14px;
            "
        >
            <div>{{ formatTime(currentTime) }}</div>
            <div>{{ formatTime(duration) }}</div>
        </div>

        <p
            v-if="tracks.length"
            style="
                color: #eee;
                font-size: 16px;
                margin-top: 12px;
                font-weight: 600;
            "
        >
            ▶ {{ getTrackName(currentTrackIndex) }}
        </p>

        <div style="margin-top: 15px">
            <button @click="playPrev">⏮</button>
            <button @click="togglePlayPause" style="min-width: 110px">
                {{ isPlaying ? '⏸ Пауза' : '▶ Воспроизвести' }}
            </button>
            <button @click="playNext">⏭</button>
            <button @click="playRandom" title="Случайное воспроизведение">
                Случайно
            </button>
        </div>

        <ul
            style="
                margin-top: 15px;
                text-align: left;
                display: inline-block;
                color: #eee;
                font-size: 14px;
                max-width: 700px;
            "
        >
            <li
                v-for="(track, index) in tracks"
                :key="track"
                :style="{
                    cursor: 'pointer',
                    fontWeight: index === currentTrackIndex ? 'bold' : 'normal',
                }"
                @click="playTrack(index)"
            >
                {{ getTrackName(index) }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
button {
    background: #555;
    color: #eee;
    border: none;
    padding: 8px 14px;
    margin: 0 8px;
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    user-select: none;
}
button:hover {
    background: #777;
}
li:hover {
    text-decoration: underline;
}
</style>
