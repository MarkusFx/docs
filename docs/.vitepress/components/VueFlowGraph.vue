<template>
    <ClientOnly>
        <div
            ref="container"
            :style="{
                width: '100%',
                height: 'calc(100vh - 150px)',

                opacity: isReady ? 1 : 0,
                transition: 'opacity 0.2s ease',
            }"
        >
            <VueFlow
                ref="vueFlowRef"
                :nodes="nodes"
                :edges="edges"
                :default-viewport="{ zoom: 0.5 }"
                :min-zoom="0.1"
                :max-zoom="2"
                :nodeTypes="nodeTypes"
                :edgeTypes="edgeTypes"
                :nodesDraggable="false"
                :connectable="false"
                :nodesConnectable="false"
                :elevateEdgesOnSelect="false"
                :deleteKeyCode="null"
                :onlyRenderVisibleNodes="true"
                @init="onInit"
                @viewport-change="onViewportChange"
            >
                <Background class="flowBG" pattern-color="#aaa" :gap="20" />
                <Controls :showInteractive="false">
                    <button
                        @click="resetViewport"
                        class="vue-flow__controls-button"
                        title="Сбросить вид"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                            />
                            <path d="M3 3v5h5" />
                        </svg>
                    </button>
                </Controls>
            </VueFlow>


        </div>
    </ClientOnly>
</template>

<script setup>
import { h, markRaw, ref, shallowRef } from 'vue'
import { VueFlow, Handle, Position, StepEdge } from '@vue-flow/core'
import '@vue-flow/core/dist/style.css'
import { Controls } from '@vue-flow/controls'
import { Background } from '@vue-flow/background'
import TileGrid from './TileGridForGraph.vue'
import {
    htmxCard,
    gsapCard,
    cssCard,
    htmlCard,
    javascriptCard,
    typescriptCard,
    reactCard,
    socketioCard,
    nextjsCard,
    reactNativeCard,
    jestCard,
    vitestCard,
    cypressCard,
    sassCard,
    scssCard,
    lessCard,
    nodejsCard,
    expressCard,
    nestjsCard,
    threejsCard,
    vuejsCard,
    nuxtjsCard,
    electronCard,
    angularjsCard,
    webrtcCard,
    mediaSoupCard,
    pythonCard,
    djangoCard,
    flaskCard,
    linuxCard,
    nginxCard,
    dockerCard,
    kubernetesCard,
    gitCard,
    githubCard,
    githubActionsCard,
    catCard,
    sqlCard,
    postgresqlCard,
    mongodbCard,
    pyQtCard,
    phpCard,
    laravelCard,
    rustCard,
    goCard,
    javaCard,
    kotlinCard,
    cSharpCard,
    n8nCard,
    figmaCard,
    excelVbaCard,
    oneCCard,
    blenderCard,
    godotCard,
    unityCard,
    r3fCard,
    osCard,
    aiCard,
} from './TilesForGraph.js'

const vueFlowRef = ref(null)
const container = ref(null)

const viewport = shallowRef({ zoom: 1, x: 0, y: 0 })

function onViewportChange(viewportData) {
    viewport.value = {
        zoom: viewportData.zoom,
        x: viewportData.x,
        y: viewportData.y,
    }
}

const CELL_WIDTH = 300
const CELL_HEIGHT = 160

// === Custom Edges ===

const CustomEdgeUp = markRaw((props) => {
    const { sourceX, sourceY, targetX, targetY } = props
    const d = `M${sourceX - 120},${sourceY} L${sourceX - 120},${sourceY - 80} L${targetX - 20},${sourceY - 80} L${targetX - 20},${targetY} L${targetX},${targetY}`
    return h('path', {
        class: 'custom-edge-up',
        d,
        stroke: 'var(--vp-c-border)',
        'stroke-width': 2,
        fill: 'none',
        'marker-end': 'url(#arrowhead)',
    })
})

const CustomEdgeDown = markRaw((props) => {
    const { sourceX, sourceY, targetX, targetY } = props
    const d = `M${sourceX - 120},${sourceY} L${sourceX - 120},${sourceY + 80} L${targetX - 20},${sourceY + 80} L${targetX - 20},${targetY} L${targetX},${targetY}`
    return h('path', {
        class: 'custom-edge-down',
        d,
        stroke: 'var(--vp-c-border)',
        'stroke-width': 2,
        fill: 'none',
        'marker-end': 'url(#arrowhead)',
    })
})

function resetViewport() {
    if (vueFlowRef.value) {
        vueFlowRef.value.fitView({
            padding: 0.05,
            duration: 800,
            includeHiddenNodes: true,
        })
    }
}

// === Node Components ===

const TileNode = markRaw((props) => {
    const io = props.data.io || {}
    const nodeId = props.id

    const activeSides = ['Left', 'Right', 'Top', 'Bottom'].filter(
        (side) => io[side],
    )

    const handles = activeSides.map((side) =>
        h(Handle, {
            id: `${nodeId}-${side}-${io[side]}`,
            type: io[side],
            position: Position[side],
            style: {
                background: io[side] === 'source' ? '#00c853' : '#2962ff',
                width: '8px',
                height: '8px',
                zIndex: 3,
                opacity: 0,
            },
            isConnectable: false,
        }),
    )

    return h(
        'div',
        {
            class: 'tile-node-wrapper',
            style: { width: '240px', contain: 'layout paint' },
        },
        [...handles, h(TileGrid, { tiles: props.data.tiles })],
    )
})

const nodeTypes = markRaw({ tileNode: TileNode })

const edgeTypes = markRaw({
    smoothstep: StepEdge,
    customUp: CustomEdgeUp,
    customDown: CustomEdgeDown,
})

// === Nodes ===

function createTileNode(
    id,
    tiles,
    col,
    row,
    io = { Left: 'target', Right: 'source' },
) {
    return {
        id: id.toString(),
        type: 'tileNode',
        data: { tiles, io },
        position: { x: col * CELL_WIDTH, y: row * CELL_HEIGHT },
    }
}

const nodes = [
    // Центральный ствол (MarkusFx)
    createTileNode(0, catCard, -1, 0, { Left: 'source', Right: 'source' }),

    // === Frontend: база ===
    createTileNode(1, htmlCard, 0, 0, { Left: 'target', Right: 'source' }),
    createTileNode(2, cssCard, 1, 0),
    createTileNode(3, javascriptCard, 2, 0),
    createTileNode(4, typescriptCard, 3, 0),

    // === Frontend: фреймворки ===
    createTileNode(5, reactCard, 3, 1),
    createTileNode(6, nextjsCard, 4, 1),
    createTileNode(7, reactNativeCard, 4, 2),
    createTileNode(14, vuejsCard, 3, 3),
    createTileNode(16, nuxtjsCard, 4, 3),
    createTileNode(15, angularjsCard, 3, 4),
    createTileNode(17, electronCard, 3, 5),

    // === Frontend: стили ===
    createTileNode(21, sassCard, 1, 1),
    createTileNode(22, scssCard, 1, 2),
    createTileNode(23, lessCard, 1, 3),

    // === Frontend: тестирование ===
    createTileNode(24, jestCard, 2, 1),
    createTileNode(25, vitestCard, 2, 2),
    createTileNode(26, cypressCard, 2, 3),

    // === Frontend: анимации / 3D / коммуникация ===
    createTileNode(8, gsapCard, 1, -1),
    createTileNode(9, htmxCard, 1, -2),
    createTileNode(18, socketioCard, 2, -1),
    createTileNode(19, webrtcCard, 2, -2),
    createTileNode(20, mediaSoupCard, 2, -3),

    // === Backend ===
    createTileNode(10, nodejsCard, 3, -2),
    createTileNode(11, expressCard, 4, -2),
    createTileNode(12, nestjsCard, 4, -1),
    createTileNode(13, threejsCard, 3, -3),
    createTileNode(55, r3fCard, 4, -3),

    // === Python ===
    createTileNode(27, pythonCard, 0, 6),
    createTileNode(28, djangoCard, 1, 6),
    createTileNode(29, flaskCard, 1, 7),
    createTileNode(40, pyQtCard, 1, 8),

    // === DevOps ===
    createTileNode(30, linuxCard, 0, -7, { Left: 'target', Right: 'source' }),
    createTileNode(31, nginxCard, 1, -7),
    createTileNode(32, dockerCard, 0, -6, { Left: 'target', Right: 'source' }),
    createTileNode(33, kubernetesCard, 1, -6),
    createTileNode(34, gitCard, 0, -5, { Left: 'target', Right: 'source' }),
    createTileNode(35, githubCard, 1, -5),
    createTileNode(36, githubActionsCard, 2, -5),

    // === Базы данных ===
    createTileNode(37, sqlCard, -3, 0, { Right: 'target', Left: 'source' }),
    createTileNode(38, postgresqlCard, -4, 0, { Right: 'target', Left: 'source' }),
    createTileNode(39, mongodbCard, -3, 1, { Right: 'target', Left: 'source' }),

    // === Языки (левая ветка) ===
    createTileNode(41, phpCard, -3, -1, { Right: 'target', Left: 'source' }),
    createTileNode(42, laravelCard, -4, -1, { Right: 'target', Left: 'source' }),
    createTileNode(43, rustCard, -3, -2, { Right: 'target', Left: 'source' }),
    createTileNode(44, goCard, -3, -3, { Right: 'target', Left: 'source' }),
    createTileNode(45, javaCard, -3, -4, { Right: 'target', Left: 'source' }),
    createTileNode(46, kotlinCard, -4, -4, { Right: 'target', Left: 'source' }),
    createTileNode(47, cSharpCard, -3, -5, { Right: 'target', Left: 'source' }),

    // === Прочее (левая ветка) ===
    createTileNode(48, n8nCard, -2, -6, { Right: 'target', Left: 'source' }),
    createTileNode(49, figmaCard, -2, 3, { Right: 'target', Left: 'source' }),
    createTileNode(50, excelVbaCard, -2, 4, { Right: 'target', Left: 'source' }),
    createTileNode(51, oneCCard, -2, 5, { Right: 'target', Left: 'source' }),
    createTileNode(52, blenderCard, -2, 6, { Right: 'target', Left: 'source' }),
    createTileNode(53, godotCard, -2, 7, { Right: 'target', Left: 'source' }),
    createTileNode(54, unityCard, -2, 8, { Right: 'target', Left: 'source' }),
    createTileNode(56, osCard, -2, -7, { Right: 'target', Left: 'source' }),
    createTileNode(57, aiCard, 0, -4, { Left: 'target', Right: 'source' }),
]

// === Edges: генерация из списков связей ===

// Стандартные рёбра (smoothstep, без хендлов)
// customDown рёбра (2->21..23, 3->24..26) определены ниже в customEdges
const simpleEdges = [
    ['1', '2'], ['2', '3'], ['3', '4'],
    ['3', '5'], ['5', '6'], ['5', '7'],
    ['3', '10'], ['10', '11'], ['10', '12'],
    ['3', '13'], ['3', '14'], ['14', '16'],
    ['3', '15'], ['3', '17'],
    ['27', '28'], ['27', '29'], ['27', '40'],
    ['30', '31'], ['32', '33'],
    ['34', '35'], ['35', '36'],
    ['37', '38'], ['41', '42'],
    ['45', '46'], ['13', '55'],
]

// Custom edges (customUp / customDown)
const customEdges = [
    { src: '3', tgt: '8', type: 'customUp' },
    { src: '3', tgt: '9', type: 'customUp' },
    { src: '3', tgt: '18', type: 'customUp' },
    { src: '3', tgt: '19', type: 'customUp' },
    { src: '3', tgt: '20', type: 'customUp' },
    { src: '2', tgt: '21', type: 'customDown' },
    { src: '2', tgt: '22', type: 'customDown' },
    { src: '2', tgt: '23', type: 'customDown' },
    { src: '3', tgt: '24', type: 'customDown' },
    { src: '3', tgt: '25', type: 'customDown' },
    { src: '3', tgt: '26', type: 'customDown' },
]

// Стандартные рёбра с кастомными хендлами
const handleEdges = [
    { src: '0', tgt: '1', sh: '0-Right-source', th: '1-Left-target' },
    { src: '0', tgt: '34', sh: '0-Right-source', th: '34-Left-target' },
    { src: '0', tgt: '32', sh: '0-Right-source', th: '32-Left-target' },
    { src: '0', tgt: '30', sh: '0-Right-source', th: '30-Left-target' },
    { src: '0', tgt: '27', sh: '0-Right-source', th: '27-Left-target' },
    { src: '0', tgt: '57', sh: '0-Right-source', th: '57-Left-target' },
    { src: '0', tgt: '37', sh: '0-Left-source', th: '37-Right-target' },
    { src: '0', tgt: '39', sh: '0-Left-source', th: '39-Right-target' },
    { src: '0', tgt: '41', sh: '0-Left-source', th: '41-Right-target' },
    { src: '0', tgt: '43', sh: '0-Left-source', th: '43-Right-target' },
    { src: '0', tgt: '44', sh: '0-Left-source', th: '44-Right-target' },
    { src: '0', tgt: '45', sh: '0-Left-source', th: '45-Right-target' },
    { src: '0', tgt: '47', sh: '0-Left-source', th: '47-Right-target' },
    { src: '0', tgt: '48', sh: '0-Left-source', th: '48-Right-target' },
    { src: '0', tgt: '49', sh: '0-Left-source', th: '49-Right-target' },
    { src: '0', tgt: '50', sh: '0-Left-source', th: '50-Right-target' },
    { src: '0', tgt: '51', sh: '0-Left-source', th: '51-Right-target' },
    { src: '0', tgt: '52', sh: '0-Left-source', th: '52-Right-target' },
    { src: '0', tgt: '53', sh: '0-Left-source', th: '53-Right-target' },
    { src: '0', tgt: '54', sh: '0-Left-source', th: '54-Right-target' },
    { src: '0', tgt: '56', sh: '0-Left-source', th: '56-Right-target' },
]

const edges = [
    ...simpleEdges.map(([src, tgt]) => ({
        id: `e${src}-${tgt}`,
        source: src,
        target: tgt,
        type: 'smoothstep',
    })),
    ...customEdges.map(({ src, tgt, type }) => ({
        id: `e${src}-${tgt}`,
        source: src,
        target: tgt,
        type,
    })),
    ...handleEdges.map(({ src, tgt, sh, th }) => ({
        id: `e${src}-${tgt}`,
        source: src,
        target: tgt,
        type: 'smoothstep',
        sourceHandle: sh,
        targetHandle: th,
    })),
]

// === Lifecycle ===

const isReady = ref(false)

function onInit(instance) {
    setTimeout(() => {
        instance.fitView({
            padding: 0.05,
            includeHiddenNodes: true,
            duration: 0,
        })
        isReady.value = true
    }, 50)
}
</script>

<style>
/* Рёбра — анимация только при ховере */
.vue-flow__edge-path,
.custom-edge-up,
.custom-edge-down {
    stroke: var(--vp-c-text-3);
    stroke-width: 1;
    opacity: 1;
    fill: none;
    stroke-dasharray: 10;
}

.vue-flow__edge:hover .vue-flow__edge-path,
.vue-flow__edge:hover .custom-edge-up,
.vue-flow__edge:hover .custom-edge-down {
    animation: dashmove 2s linear infinite;
}

@keyframes dashmove {
    to {
        stroke-dashoffset: -20;
    }
}

.vue-flow__edge .vue-flow__edge-path marker path {
    fill: var(--vp-c-border) !important;
}

.vue-flow__edge.selected .vue-flow__edge-path {
    stroke: var(--vp-c-border) !important;
    stroke-width: 2 !important;
}

/* Изолируем ноды для производительности */
.tile-node-wrapper {
    contain: layout paint;
}


</style>
