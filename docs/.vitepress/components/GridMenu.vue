<template>
    <div class="grid-container" ref="grid">
        <a
            v-for="node in nodes"
            :href="node.link"
            :key="node.id"
            class="node"
            :class="{ 'glitch-effect': node.glitch }"
            :id="node.id"
            :style="{
                gridColumn: node.col,
                gridRow:
                    `spanRows` in node
                        ? `${node.row} / span ${node.spanRows}`
                        : node.row,
            }"
            @mouseenter="highlight(node.id)"
            @mouseleave="clearHighlight(node.id)"
        >
            <div
                class="node-outer-box"
                :style="{
                    backgroundColor: node.color || undefined,
                }"
            >
                <div class="node-inner-box">
                    <div class="tile-icon" v-html="icons[node.icon]"></div>
                    <!--                <span class="label">{{ node.label }}</span>-->
                </div>
            </div>
            <div class="tile-text">
                <div class="tile-title">{{ node.label }}</div>
            </div>
        </a>

        <svg class="lines">
            <polyline
                v-for="line in lineIds"
                :key="line"
                :id="line"
                class="highlight-line"
                fill="none"
                stroke="#555"
                :stroke-width="lineThickness"
            />
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

import htmlLogo from '/logos/html5-logo.svg?raw'
import cssLogo from '/logos/css-logo.svg?raw'
import javascriptLogo from '/logos/javascript-logo.svg?raw'
import vitestLogo from '/logos/vitest-logo.svg?raw'
import jestLogo from '/logos/jest-logo-002.svg?raw'
import socketioLogo from '/logos/socketio-logo.svg?raw'
import gsapLogo from '/logos/gsap-logo-001.svg?raw'
import pythonLogo from '/logos/python-logo.svg?raw'
import djangoLogo from '/logos/django-logo.svg?raw'
import typescriptLogo from '/logos/typescript-logo.svg?raw'
import reactLogo from '/logos/react-logo.svg?raw'
import vuejsLogo from '/logos/vuejs-logo.svg?raw'
import nodejsLogo from '/logos/nodejs-logo.svg?raw'
import angularjsLogo from '/logos/angularjs-logo.svg?raw'
import sassLogo from '/logos/sass-logo.svg?raw'
import scssLogo from '/logos/scss-logo.svg?raw'
import lessLogo from '/logos/less-logo.svg?raw'
import flaskLogo from '/logos/flask-logo.svg?raw'
import pyqtLogo from '/logos/pyqt-logo.svg?raw'
import electronLogo from '/logos/electron-logo.svg?raw'
import threejsLogo from '/logos/threejs-logo.svg?raw'
import expressLogo from '/logos/express-logo.svg?raw'
import nestjsLogo from '/logos/nestjs-logo.svg?raw'
import nextjsLogo from '/logos/nextjs-logo.svg?raw'
import reactnativeLogo from '/logos/react-native-logo.svg?raw'
import nuxtjsLogo from '/logos/nuxtjs-logo.svg?raw'
import onecLogo from '/logos/1c-logo.svg?raw'
import swaggerLogo from '/logos/swagger-logo.svg?raw'

const icons = {
    html: htmlLogo,
    css: cssLogo,
    javascript: javascriptLogo,
    socketio: socketioLogo,
    jest: jestLogo,
    gsap: gsapLogo,
    python: pythonLogo,
    django: djangoLogo,
    vitest: vitestLogo,
    typescript: typescriptLogo,
    react: reactLogo,
    vuejs: vuejsLogo,
    nodejs: nodejsLogo,
    angularjs: angularjsLogo,
    sass: sassLogo,
    scss: scssLogo,
    less: lessLogo,
    flask: flaskLogo,
    pyqt: pyqtLogo,
    electron: electronLogo,
    threejs: threejsLogo,
    express: expressLogo,
    nestjs: nestjsLogo,
    nextjs: nextjsLogo,
    reactnative: reactnativeLogo,
    nuxtjs: nuxtjsLogo,
}

const iconIds = Object.keys(icons)

const iconMap = iconIds.reduce((acc, key) => {
    acc[key] = key
    return acc
}, {})

const rawNodes = [
    ['html', 'HTML', 1, 4, undefined, '#e89820', false, '/html/page_001'],
    ['css', 'CSS', 2, 4, undefined, '#4593e5'],
    ['javascript', 'Java Script', 3, 4, undefined, '#ffd200'],
    ['typescript', 'Type Script', 4, 4, undefined, '#666', true],
    ['react', 'React', 4, 5, undefined, '#666', true],
    ['jest', 'Jest', 3, 5, undefined, '#bd504d'],
    ['vitest', 'Vitest', 3, 6, undefined, '#666'],
    ['sass', 'SASS', 2, 5, undefined, '#666'],
    ['scss', 'SCSS', 2, 6, undefined, '#666'],
    ['less', 'LESS', 2, 7, undefined, '#666'],
    ['gsap', 'GSAP', 3, 3, undefined, '#666'],
    ['socketio', 'Socket.io', 3, 2, undefined, '#666'],
    ['nodejs', 'Node.js', 4, 2, undefined, '#666'],
    ['threejs', 'Three.js', 4, 1, undefined, '#666'],
    ['vuejs', 'Vue.js', 4, 7, undefined, '#666'],
    ['angularjs', 'Angular JS', 4, 8, undefined, '#666'],
    ['electron', 'Electron', 4, 9, undefined, '#666'],
    ['express', 'Express', 5, 2, undefined, '#666'],
    ['nestjs', 'NestJS', 5, 3, undefined, '#666'],
    ['nextjs', 'Next.JS', 5, 5, undefined, '#666'],
    ['reactnative', 'React Native', 5, 6, undefined, '#666'],
    ['nuxtjs', 'Nuxt.js', 5, 7, undefined, '#666'],
    ['python', 'Python', 1, 10, undefined, '#666'],
    ['django', 'Django', 2, 10, undefined, '#666'],
    ['flask', 'Flask', 2, 11, undefined, '#666'],
    ['pyqt', 'PyQt', 2, 12, undefined, '#666'],
]

const nodes = rawNodes.map(
    ([id, label, col, row, spanRows, color, glitch, link]) => ({
        id,
        label,
        col,
        row,
        ...(spanRows ? { spanRows } : {}),
        ...(iconMap[id] ? { icon: iconMap[id] } : {}),
        ...(color ? { color } : {}),
        ...(glitch ? { glitch: true } : {}),
        ...(link ? { link } : {}),
    }),
)

const connections = {
    html: [{ id: 'css', color: 'highlight-next', lineId: 'html-css' }],
    css: [
        { id: 'html', color: 'highlight-prev', lineId: 'html-css' },
        { id: 'sass', color: 'highlight-next', lineId: 'css-sass' },
        { id: 'scss', color: 'highlight-next', lineId: 'css-scss' },
        { id: 'less', color: 'highlight-next', lineId: 'css-less' },
        { id: 'javascript', color: 'highlight-next', lineId: 'css-javascript' },
    ],
    javascript: [
        { id: 'css', color: 'highlight-prev', lineId: 'css-javascript' },
        {
            id: 'typescript',
            color: 'highlight-next',
            lineId: 'javascript-typescript',
        },
        { id: 'react', color: 'highlight-next', lineId: 'javascript-react' },
        { id: 'jest', color: 'highlight-other', lineId: 'javascript-jest' },
        { id: 'vitest', color: 'highlight-next', lineId: 'javascript-vitest' },
        { id: 'gsap', color: 'highlight-next', lineId: 'javascript-gsap' },
        {
            id: 'socketio',
            color: 'highlight-next',
            lineId: 'javascript-socketio',
        },
        { id: 'nodejs', color: 'highlight-next', lineId: 'javascript-nodejs' },
        {
            id: 'threejs',
            color: 'highlight-next',
            lineId: 'javascript-threejs',
        },
        { id: 'vuejs', color: 'highlight-next', lineId: 'javascript-vuejs' },
        {
            id: 'angularjs',
            color: 'highlight-next',
            lineId: 'javascript-angularjs',
        },
        {
            id: 'electron',
            color: 'highlight-next',
            lineId: 'javascript-electron',
        },
    ],
}

const lineIds = [
    'html-css',
    'css-javascript',
    'javascript-typescript',
    'javascript-react',
    'javascript-nodejs',
    'javascript-threejs',
    'nodejs-express',
    'nodejs-nestjs',
    'javascript-vuejs',
    'javascript-angularjs',
    'javascript-electron',
    'react-nextjs',
    'react-reactnative',
    'vuejs-nuxtjs',
    'javascript-jest',
    'javascript-vitest',
    'css-sass',
    'css-scss',
    'css-less',
    'javascript-gsap',
    'javascript-socketio',
    'python-django',
    'python-flask',
    'python-pyqt',
]

function highlight(id) {
    const node = document.getElementById(id)
    node?.classList.add('highlight-self')
    ;(connections[id] || []).forEach(({ id: cid, color, lineId }) => {
        document.getElementById(cid)?.classList.add(color)
        document.getElementById(lineId)?.classList.add('highlight-line')
    })
}

function clearHighlight(id) {
    const node = document.getElementById(id)
    node?.classList.remove('highlight-self')
    ;(connections[id] || []).forEach(({ id: cid, color, lineId }) => {
        document.getElementById(cid)?.classList.remove(color)
        document.getElementById(lineId)?.classList.remove('highlight-line')
    })
}

onMounted(async () => {
    await nextTick()
    window.addEventListener('resize', drawAllLines)
    drawAllLines()
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', drawAllLines)
})

function drawAllLines() {
    const svg = document.querySelector('svg.lines')
    const svgRect = svg.getBoundingClientRect()

    const coords = (id) => document.getElementById(id).getBoundingClientRect()

    const connectL = (from, to, id) => {
        const r1 = coords(from)
        const r2 = coords(to)

        const x1 = r1.left + r1.width / 2 - svgRect.left
        const y1 = r1.top + r1.height / 2 - svgRect.top
        const x2 = r2.left + r2.width / 2 - svgRect.left
        const y2 = r2.top + r2.height / 2 - svgRect.top

        const midX = (x1 + x2) / 2

        setLine(id, `${x1},${y1} ${midX},${y1} ${midX},${y2} ${x2},${y2}`)
    }

    function getColumnGap() {
        const grid = document.querySelector('.grid-container')
        if (!grid) return 0

        const cells = [...grid.children].filter((el) =>
            el.classList.contains('node'),
        )

        const col1 = cells.find((el) => parseInt(el.style.gridColumn) === 1)
        const col2 = cells.find((el) => parseInt(el.style.gridColumn) === 2)

        if (col1 && col2) {
            const r1 = col1.getBoundingClientRect()
            const r2 = col2.getBoundingClientRect()
            return Math.abs((r2.left - r1.right) / 4)
        }

        return 0
    }

    const connectZigZag = (from, to, id, shift) => {
        const r1 = coords(from)
        const r2 = coords(to)

        // Центры блоков
        const x1 = r1.left + r1.width / 2 - svgRect.left
        const y1 = r1.top + r1.height / 2 - svgRect.top

        const x2 = r2.left + r2.width / 2 - svgRect.left
        const y2 = r2.top + r2.height / 2 - svgRect.top

        if (shift === undefined) {
            const colGap = getColumnGap()
            shift = colGap
        }

        const xShift = r1.left + r1.width - svgRect.left + shift

        const points = [
            [x1, y1],
            [xShift, y1],
            [xShift, y2],
            [x2, y2],
        ]

        setLine(id, points.map(([x, y]) => `${x},${y}`).join(' '))
    }

    const setLine = (id, points) => {
        const polyline = document.getElementById(id)
        if (polyline) polyline.setAttribute('points', points)

        // Обновим также скрытый <path>
        const path = document.getElementById('path-' + id)
        if (path) {
            const pointList = points
                .trim()
                .split(' ')
                .map((p) => p.split(',').map(Number))

            const d = pointList.reduce((acc, [x, y], i) => {
                return acc + `${i === 0 ? 'M' : 'L'} ${x} ${y} `
            }, '')
            path.setAttribute('d', d)
        }
    }

    connectL('html', 'css', 'html-css')
    connectL('css', 'javascript', 'css-javascript')
    connectL('javascript', 'typescript', 'javascript-typescript')
    connectL('javascript', 'react', 'javascript-react')
    connectL('javascript', 'nodejs', 'javascript-nodejs')
    connectL('javascript', 'threejs', 'javascript-threejs')
    connectL('nodejs', 'express', 'nodejs-express')
    connectL('nodejs', 'nestjs', 'nodejs-nestjs')
    connectL('javascript', 'vuejs', 'javascript-vuejs')
    connectL('javascript', 'angularjs', 'javascript-angularjs')
    connectL('javascript', 'electron', 'javascript-electron')
    connectL('react', 'nextjs', 'react-nextjs')
    connectL('react', 'reactnative', 'react-reactnative')
    connectL('vuejs', 'nuxtjs', 'vuejs-nuxtjs')
    connectL('python', 'django', 'python-django')
    connectL('python', 'flask', 'python-flask')
    connectL('python', 'pyqt', 'python-pyqt')
    connectZigZag('javascript', 'jest', 'javascript-jest')
    connectZigZag('javascript', 'vitest', 'javascript-vitest')
    connectZigZag('css', 'sass', 'css-sass')
    connectZigZag('css', 'scss', 'css-scss')
    connectZigZag('css', 'less', 'css-less')
    connectZigZag('javascript', 'gsap', 'javascript-gsap')
    connectZigZag('javascript', 'socketio', 'javascript-socketio')
}

// АДАПТИВНАЯ ТОЛЩИНА ЛИНИЙ
const lineThickness = ref(getLineThickness())

function getLineThickness() {
    // Пример адаптации по ширине экрана
    if (window.innerWidth < 768) return 1.5
    return 2
}

onMounted(() => {
    window.addEventListener('resize', updateLineThickness)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateLineThickness)
})

function updateLineThickness() {
    lineThickness.value = getLineThickness()
}
</script>

<style scoped>
:root {
    --line-thickness: 2;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(9, minmax(40px, auto));
    place-items: center;
    gap: 0.6rem;
    position: relative;
}

.node {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--vp-c-text-1);
    gap: 0.5rem;
    max-width: 5rem;
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    box-shadow: var(--vp-shadow-1);
    padding: 0.4rem;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

@keyframes rotateScale {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.node-outer-box {
    height: 5rem;
    width: 5rem;
    border-radius: 12px;
    display: grid;
    place-items: center;
}

.node-inner-box {
    min-height: calc(100% - 6px);
    min-width: calc(100% - 6px);
    border-radius: 10px;
    display: grid;
    place-items: center;

    background-color: #22222244;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.tile-icon {
    font-size: 2rem;
    flex-shrink: 0;
    width: 2.8rem;
    height: 2.8rem;
    color: rgba(255, 255, 255, 0.9);
}

.tile-icon :deep(svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

.tile-text {
    display: flex;
    flex-direction: column;
}

.tile-title {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.15rem;
    overflow-wrap: break-word;
    text-align: center;
}

@media (max-width: 768px) {
    .node {
        max-width: 4rem;
    }

    .node-outer-box {
        height: 4rem;
        width: 4rem;
    }

    .tile-icon {
        width: 2.2rem;
        height: 2.2rem;
    }
}

.tile-icon :deep(path) {
    fill: currentColor !important;
}

.tile-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.node:hover {
    cursor: pointer;
}

svg.lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}
</style>
