<template>
    <div class="spider-overlay">
        <!-- Речевой пузырь - теперь без поворота -->
        <div
            v-if="currentSpeech"
            class="speech-bubble"
            :style="speechBubbleStyle"
        >
            {{ currentSpeech }}
        </div>

        <svg class="spider-svg">
            <!-- Паутина (след) -->
            <path
                v-if="webTrail.length > 1"
                :d="webTrailPath"
                fill="none"
                stroke="rgba(100, 100, 100, 0.2)"
                stroke-width="1"
                stroke-dasharray="3,5"
            />

            <!-- Группа паука с трансформацией поворота -->
            <g :transform="spiderTransform">
                <!-- Ноги паука с "костями" -->
                <g v-for="(leg, index) in legs" :key="'leg-' + index">
                    <!-- Бедро -->
                    <line
                        :x1="0"
                        :y1="0"
                        :x2="leg.hip.x"
                        :y2="leg.hip.y"
                        stroke="#333"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <!-- Колено -->
                    <line
                        :x1="leg.hip.x"
                        :y1="leg.hip.y"
                        :x2="leg.knee.x"
                        :y2="leg.knee.y"
                        stroke="#444"
                        stroke-width="2.5"
                        stroke-linecap="round"
                    />
                    <!-- Голень -->
                    <line
                        :x1="leg.knee.x"
                        :y1="leg.knee.y"
                        :x2="leg.foot.x"
                        :y2="leg.foot.y"
                        stroke="#555"
                        stroke-width="2"
                        stroke-linecap="round"
                    />

                    <!-- Суставы (костяные утолщения) -->
                    <circle :cx="leg.hip.x" :cy="leg.hip.y" r="2" fill="#666" />
                    <circle
                        :cx="leg.knee.x"
                        :cy="leg.knee.y"
                        r="1.5"
                        fill="#777"
                    />
                    <circle
                        :cx="leg.foot.x"
                        :cy="leg.foot.y"
                        r="1"
                        fill="#888"
                    />
                </g>

                <!-- Тело паука -->
                <ellipse
                    cx="0"
                    cy="0"
                    :rx="10"
                    :ry="6"
                    fill="#222"
                    stroke="#333"
                    stroke-width="1.5"
                />

                <!-- Голова - теперь спереди! -->
                <circle
                    cx="13"
                    cy="0"
                    r="5"
                    fill="#111"
                    stroke="#222"
                    stroke-width="1"
                />

                <!-- Глаза -->
                <circle
                    cx="15"
                    cy="-2"
                    r="1.2"
                    fill="var(--vp-c-warning-1)"
                    opacity="0.8"
                />
                <circle
                    cx="15"
                    cy="2"
                    r="1.2"
                    fill="var(--vp-c-warning-1)"
                    opacity="0.8"
                />

                <!-- Блеск в глазах -->
                <circle cx="15.3" cy="-2.2" r="0.4" fill="white" />
                <circle cx="15.3" cy="1.8" r="0.4" fill="white" />

                <!-- Анимация рта когда говорит -->
                <path
                    v-if="isSpeaking"
                    d="M 11,0 Q 13,2 15,0 Q 13,-2 11,0"
                    fill="none"
                    stroke="#666"
                    stroke-width="0.8"
                    class="mouth"
                />
            </g>
        </svg>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// Props для настройки
const props = defineProps({
    speed: {
        type: Number,
        default: 1.5,
    },
    trailLength: {
        type: Number,
        default: 40,
    },
    legLength: {
        type: Number,
        default: 35,
    },
    talkative: {
        type: Boolean,
        default: true,
    },
})

// Состояние паука
const position = reactive({
    x: typeof window !== 'undefined' ? window.innerWidth * 0.3 : 100,
    y: typeof window !== 'undefined' ? window.innerHeight * 0.4 : 100,
})
const velocity = reactive({ x: 0.8, y: 0.6 })
const legs = ref([])
const webTrail = ref([])
const gaitCycle = ref(0)

// Система речи
const currentSpeech = ref('')
const isSpeaking = ref(false)
const speechTimer = ref(null)
const lastSpeechTime = ref(0)

// Фразы паука
const spiderPhrases = [
    'Кота не видели?...',
    'Прувет...',
    'Я Павук Грёгорий!...',
    'Жертва процедурной анимации...',
    'Мои ноги живут своей жизнью...',
    'Я вижу твой курсор...',
    'Кто-то сказал "рефакторинг"? — *шипит*...',
    'Я паук, а не фича!...',
    'Где мои ноги, Карл?!...',
    'Поставь мне GSAP, я хочу жить красиво...',
    'Я паук, а не NPC!...',
    'Я знаю, что вы сделали прошлым летом...',
    'Кек...',
    '>.<...',
    '^-^...',
    '( 0_0)...',
    '(0_0 )...',
    '(0_0)...',
    '(-_0)...',
    '(0_-)...',
    '(-_-)...',
    '(-.-)...',
    'Пвук...',
    'Крутануть сальтуху?...',
]

// Новые состояния
const mouse = reactive({ x: 0, y: 0 })

if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
    })
}

// Вычисляем угол направления движения
const movementAngle = computed(() => {
    return Math.atan2(velocity.y, velocity.x)
})

// Трансформация для поворота паука
const spiderTransform = computed(() => {
    const bob = Math.sin(gaitCycle.value * Math.PI * 2) * 1.5
    const tilt = Math.sin(gaitCycle.value * Math.PI * 2) * 4 // качание корпуса
    return `translate(${position.x}, ${position.y + bob}) rotate(${(movementAngle.value * 180) / Math.PI + tilt})`
})

// Позиция речевого пузыря — теперь всегда сверху головы
// Позиция речевого пузыря — над всем пауком (над телом, не над головой)
const speechBubbleStyle = computed(() => {
    const bob = Math.sin(gaitCycle.value * Math.PI * 2) * 1.5

    //  Высота паука (тело + ноги + немного запаса)
    const spiderHeight = props.legLength * 2 + 30 // можно подстроить

    return {
        left: `${position.x - 40}px`,
        top: `${position.y - 100}px`,
        // transform: 'translate(-50%, -100%)',
    }
})

// Путь для паутины-следа
const webTrailPath = computed(() => {
    if (webTrail.value.length < 2) return ''
    return `M ${webTrail.value.map((point) => `${point.x},${point.y}`).join(' L ')}`
})

// Плавное изменение скорости
const smoothVelocity = reactive({ x: 0.8, y: 0.6 })

// Случайная фраза
const getRandomPhrase = () => {
    return spiderPhrases[Math.floor(Math.random() * spiderPhrases.length)]
}

// Начать говорить
const startSpeaking = () => {
    if (!props.talkative || isSpeaking.value) return

    const now = Date.now()
    // Не говорить чаще чем раз в 8 секунд
    if (now - lastSpeechTime.value < 8000) return

    currentSpeech.value = getRandomPhrase()
    isSpeaking.value = true
    lastSpeechTime.value = now

    // Случайная длительность речи 2-4 секунды
    const speechDuration = 2000 + Math.random() * 2000

    speechTimer.value = setTimeout(() => {
        currentSpeech.value = ''
        isSpeaking.value = false
    }, speechDuration)
}

// Процедурная генерация движения
const moveSpider = () => {
    if (typeof window === 'undefined') return

    const targetOffset = 100 // расстояние от курсора в пикселях
    const sideAngle = Math.PI / 6 // угол "в сторону" от курсора (30°)

    // Направление от паука к курсору
    const dx = mouse.x - position.x
    const dy = mouse.y - position.y
    const distance = Math.hypot(dx, dy)

    // Цель — точка сбоку от курсора
    const targetAngle = Math.atan2(dy, dx) + sideAngle
    const targetX = mouse.x - Math.cos(targetAngle) * targetOffset
    const targetY = mouse.y - Math.sin(targetAngle) * targetOffset

    // Движение к цели с плавностью
    const followSpeed = 0.002 * props.speed
    position.x += (targetX - position.x) * followSpeed
    position.y += (targetY - position.y) * followSpeed

    // Обновляем направление (куда "смотрит" паук)
    velocity.x = targetX - position.x
    velocity.y = targetY - position.y

    // Обновляем походку
    const speed = Math.hypot(velocity.x, velocity.y)
    gaitCycle.value += speed * 0.02

    // След паутины
    const lastPoint = webTrail.value[webTrail.value.length - 1]
    if (
        !lastPoint ||
        Math.hypot(position.x - lastPoint.x, position.y - lastPoint.y) > 15
    ) {
        webTrail.value.push({ x: position.x, y: position.y })
        if (webTrail.value.length > props.trailLength) webTrail.value.shift()
    }

    // Иногда болтает
    if (!isSpeaking.value && Math.random() < 0.002) startSpeaking()

    updateSpiderLegs(Date.now() * 0.0001)
}

const legPhaseOffsets = Array.from({ length: 8 }, () => Math.random()) // индивидуальный оффсет фаз

const updateSpiderLegs = (time) => {
    const newLegs = []
    const legCount = 8
    const stepRadius = props.legLength * 1.15
    const liftHeight = props.legLength * 0.25
    const stepSpeed = 0.5

    const walkCycle = (gaitCycle.value * stepSpeed) % 1

    for (let i = 0; i < legCount; i++) {
        // немного уникальной “жизни” для каждой ноги
        const offset = legPhaseOffsets[i] * 0.25
        const baseAngle = (i / legCount) * Math.PI * 2 + movementAngle.value
        const phaseShift = (i % 2 === 0 ? 0.5 : 0) + offset
        const phase = (walkCycle + phaseShift) % 1

        // Плавная смена фазы и асимметричное движение
        const swing = Math.sin(phase * Math.PI * 2)
        const lift = Math.max(0, Math.sin(phase * Math.PI)) * liftHeight

        // Добавляем небольшое хаотичное дрожание (чтобы не были идентичные траектории)
        const jitterX = Math.sin(time * 3 + i) * 0.5
        const jitterY = Math.cos(time * 2.7 + i) * 0.5

        // Точки сегментов ноги
        const hipLen = props.legLength * 0.4
        const kneeLen = props.legLength * 0.2
        const footLen = props.legLength * 0.1

        const hip = {
            x: Math.cos(baseAngle) * hipLen + jitterX,
            y: Math.sin(baseAngle) * hipLen + jitterY,
        }

        const knee = {
            x: hip.x + Math.cos(baseAngle + swing * 0.1) * kneeLen,
            y: hip.y + Math.sin(baseAngle + swing * 0.1) * kneeLen - lift * 0.6,
        }

        const foot = {
            x: knee.x + Math.cos(baseAngle + swing * 0.2) * footLen,
            y: knee.y + Math.sin(baseAngle + swing * 0.2) * footLen - lift,
        }

        newLegs.push({ hip, knee, foot })
    }

    legs.value = newLegs
}

// Анимационный цикл
let animationFrame

const startAnimation = () => {
    const animate = () => {
        moveSpider()
        animationFrame = requestAnimationFrame(animate)
    }
    animate()
}

const stopAnimation = () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
    }
    if (speechTimer.value) {
        clearTimeout(speechTimer.value)
    }
}

// Хуки жизненного цикла
onMounted(() => {
    if (typeof window !== 'undefined') {
        position.x = Math.random() * window.innerWidth * 0.6 + 100
        position.y = Math.random() * window.innerHeight * 0.6 + 100

        const startAngle = Math.random() * Math.PI * 2
        velocity.x = Math.cos(startAngle) * 0.8
        velocity.y = Math.sin(startAngle) * 0.8
        smoothVelocity.x = velocity.x
        smoothVelocity.y = velocity.y
    }

    // Первая фраза через 3 секунды
    setTimeout(() => {
        if (props.talkative) startSpeaking()
    }, 3000)

    startAnimation()
})

onUnmounted(() => {
    stopAnimation()
})

// Обработка изменения размера окна
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        position.x = Math.min(position.x, window.innerWidth - 50)
        position.y = Math.min(position.y, window.innerHeight - 50)
    })
}

defineExpose({
    startAnimation,
    stopAnimation,
    say: (phrase) => {
        currentSpeech.value = phrase
        isSpeaking.value = true
        setTimeout(() => {
            currentSpeech.value = ''
            isSpeaking.value = false
        }, 3000)
    },
})
</script>

<style scoped>
.spider-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
}

.spider-svg {
    width: 100%;
    height: 100%;
    pointer-events: none;
}

/* Более плавные анимации */
.spider-svg > * {
    transition: all 0.1s ease-out;
}

.spider-svg g {
    transition: transform 0.2s ease-out;
}

/* Анимация рта */
.mouth {
    animation: talk 0.3s ease-in-out infinite;
}

@keyframes talk {
    0%,
    100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(0.3);
    }
}

/* Речевой пузырь - теперь всегда горизонтальный */
.speech-bubble {
    position: absolute;
    background: var(--vp-c-gray-3);
    border: 2px solid var(--vp-c-text-3);
    border-radius: 20px;
    padding: 8px 12px;
    font-size: 16px;
    color: var(--vp-c-text-1);
    max-width: 300px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    pointer-events: none;
    animation: bubbleAppear 0.3s ease-out;
    /* Убираем любые трансформации поворота */
    transform: none !important;
}

.speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 20px;
    border-width: 20px 0px 0;
    border-style: solid;
    border-color: var(--vp-c-text-3) transparent transparent;
}

.speech-bubble::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 19px;
    border-width: 11px 11px 0;
    border-style: solid;
    border-color: var(--vp-c-text-3) transparent transparent;
}

@keyframes bubbleAppear {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    70% {
        transform: scale(1.1);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Плавное перемещение пузыря */
.speech-bubble {
    transition:
        left 0.1s ease-out,
        top 0.1s ease-out;
}
</style>
