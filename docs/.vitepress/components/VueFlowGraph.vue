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
                :nodes-connectable="false"
                @init="onInit"
            >
                <Background class="flowBG" />
                <Controls>
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
import { h, markRaw, ref, onMounted, nextTick } from 'vue'
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
} from './TilesForGraph.js'

const vueFlowRef = ref(null)
const container = ref(null)

// Размер ячейки (положение нод)
const CELL_WIDTH = 300
const CELL_HEIGHT = 160

function pathUpLeftVertical(sX, sY, tX, tY) {
    return `M${sX - 120},${sY}
        L${sX - 120},${sY - 80}
        L${tX - 20},${sY - 80}
        L${tX - 20},${tY}
        L${tX},${tY}`
}

function pathDownLeftVertical(sX, sY, tX, tY) {
    return `M${sX - 120},${sY}
        L${sX - 120},${sY + 80}
        L${tX - 20},${sY + 80}
        L${tX - 20},${tY}
        L${tX},${tY}`
}

const CustomEdgeUp = markRaw((props) => {
    const { sourceX, sourceY, targetX, targetY } = props
    const d = pathUpLeftVertical(sourceX, sourceY, targetX, targetY)
    return h('path', {
        class: 'custom-edge-up',
        d,
        stroke: 'var(--vp-c-border)',
        'stroke-width': 2,
        opacity: 1,
        fill: 'none',
        'marker-end': 'url(#arrowhead)',
    })
})

const CustomEdgeDown = markRaw((props) => {
    const { sourceX, sourceY, targetX, targetY } = props
    const d = pathDownLeftVertical(sourceX, sourceY, targetX, targetY)
    return h('path', {
        class: 'custom-edge-down',
        d,
        stroke: 'var(--vp-c-border)',
        'stroke-width': 2,
        opacity: 1,
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

const BlockNode = markRaw((props) =>
    h('div', { class: 'block-node' }, [
        h(Handle, {
            type: 'target',
            position: Position.Left,
            style: { background: '#646cff' },
            isConnectable: false,
        }),
        h('div', { class: 'block-title' }, props.data.label),
        h(Handle, {
            type: 'source',
            position: Position.Right,
            style: { background: '#646cff' },
            isConnectable: false,
        }),
    ]),
)

const TileNode = markRaw((props) => {
    const io = props.data.io || {}
    const nodeId = props.id // чтобы формировать уникальные id

    const sides = ['Left', 'Right', 'Top', 'Bottom']
    const handles = sides
        .filter((side) => io[side])
        .map((side) =>
            h(Handle, {
                id: `${nodeId}-${side}-${io[side]}`, // уникальный ID
                type: io[side], // target | source
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

    return h('div', { class: 'tile-node-wrapper', style: { width: '240px' } }, [
        ...handles,
        h(TileGrid, { tiles: props.data.tiles }),
    ])
})

const nodeTypes = markRaw({
    blockNode: BlockNode,
    tileNode: TileNode,
})

const edgeTypes = markRaw({
    smoothstep: StepEdge,
    customUp: CustomEdgeUp,
    customDown: CustomEdgeDown,
})

function createNode(id, label, col, row) {
    return {
        id: id.toString(),
        type: 'blockNode',
        data: { label },
        position: { x: col * CELL_WIDTH, y: row * CELL_HEIGHT },
    }
}

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
    createTileNode(0, catCard, -1, 0, {
        Left: 'source',
        Right: 'source',
    }),
    createTileNode(2, cssCard, 1, 0),
    createTileNode(3, javascriptCard, 2, 0),
    createTileNode(4, typescriptCard, 3, 0),
    createTileNode(5, reactCard, 3, 1),
    createTileNode(8, gsapCard, 1, -1),
    createTileNode(9, htmxCard, 1, -2),
    createTileNode(18, socketioCard, 2, -1),
    createTileNode(6, nextjsCard, 4, 1),
    createTileNode(7, reactNativeCard, 4, 2),
    createTileNode(24, jestCard, 2, 1),
    createTileNode(25, vitestCard, 2, 2),
    createTileNode(26, cypressCard, 2, 3),
    createTileNode(21, sassCard, 1, 1),
    createTileNode(22, scssCard, 1, 2),
    createTileNode(23, lessCard, 1, 3),
    createTileNode(10, nodejsCard, 3, -2),
    createTileNode(11, expressCard, 4, -2),
    createTileNode(12, nestjsCard, 4, -1),
    createTileNode(13, threejsCard, 3, -3),
    createTileNode(14, vuejsCard, 3, 3),
    createTileNode(16, nuxtjsCard, 4, 3),
    createTileNode(17, electronCard, 3, 5),
    createTileNode(15, angularjsCard, 3, 4),
    createTileNode(19, webrtcCard, 2, -2),
    createTileNode(20, mediaSoupCard, 2, -3),
    createTileNode(27, pythonCard, 0, 6),
    createTileNode(28, djangoCard, 1, 6),
    createTileNode(29, flaskCard, 1, 7),
    createTileNode(30, linuxCard, 0, -7, { Left: 'target', Right: 'source' }),
    createTileNode(31, nginxCard, 1, -7),
    createTileNode(1, htmlCard, 0, 0, { Left: 'target', Right: 'source' }),
    createTileNode(32, dockerCard, 0, -6, { Left: 'target', Right: 'source' }),
    createTileNode(33, kubernetesCard, 1, -6),
    createTileNode(34, gitCard, 0, -5, { Left: 'target', Right: 'source' }),
    createTileNode(35, githubCard, 1, -5),
    createTileNode(36, githubActionsCard, 2, -5),
    createTileNode(37, sqlCard, -3, 0, { Right: 'target', Left: 'source' }),
    createTileNode(38, postgresqlCard, -4, 0, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(39, mongodbCard, -3, 1, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(40, pyQtCard, 1, 8),
    createTileNode(41, phpCard, -3, -1, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(42, laravelCard, -4, -1, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(43, rustCard, -3, -2, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(44, goCard, -3, -3, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(45, javaCard, -3, -4, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(46, kotlinCard, -4, -4, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(47, cSharpCard, -3, -5, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(48, n8nCard, -2, -6, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(49, figmaCard, -2, 3, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(50, excelVbaCard, -2, 4, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(51, oneCCard, -2, 5, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(52, blenderCard, -2, 6, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(53, godotCard, -2, 7, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(54, unityCard, -2, 8, {
        Right: 'target',
        Left: 'source',
    }),
    createTileNode(55, r3fCard, 4, -3),
    createTileNode(56, osCard, -2, -7, {
        Right: 'target',
        Left: 'source',
    }),
]

const edges = [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
    { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
    { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
    { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
    { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
    { id: 'e5-7', source: '5', target: '7', type: 'smoothstep' },
    { id: 'e3-10', source: '3', target: '10', type: 'smoothstep' },
    { id: 'e10-11', source: '10', target: '11', type: 'smoothstep' },
    { id: 'e10-12', source: '10', target: '12', type: 'smoothstep' },
    { id: 'e3-13', source: '3', target: '13', type: 'smoothstep' },
    { id: 'e3-14', source: '3', target: '14', type: 'smoothstep' },
    { id: 'e14-16', source: '14', target: '16', type: 'smoothstep' },
    { id: 'e3-15', source: '3', target: '15', type: 'smoothstep' },
    { id: 'e3-17', source: '3', target: '17', type: 'smoothstep' },
    { id: 'e3-8', source: '3', target: '8', type: 'customUp' },
    { id: 'e3-9', source: '3', target: '9', type: 'customUp' },
    { id: 'e3-18', source: '3', target: '18', type: 'customUp' },
    { id: 'e3-19', source: '3', target: '19', type: 'customUp' },
    { id: 'e3-20', source: '3', target: '20', type: 'customUp' },
    { id: 'e2-21', source: '2', target: '21', type: 'customDown' },
    { id: 'e2-22', source: '2', target: '22', type: 'customDown' },
    { id: 'e2-23', source: '2', target: '23', type: 'customDown' },
    { id: 'e3-24', source: '3', target: '24', type: 'customDown' },
    { id: 'e3-25', source: '3', target: '25', type: 'customDown' },
    { id: 'e3-26', source: '3', target: '26', type: 'customDown' },
    { id: 'e27-28', source: '27', target: '28', type: 'smoothstep' },
    { id: 'e27-29', source: '27', target: '29', type: 'smoothstep' },
    { id: 'e30-31', source: '30', target: '31', type: 'smoothstep' },
    { id: 'e32-33', source: '32', target: '33', type: 'smoothstep' },
    { id: 'e34-35', source: '34', target: '35', type: 'smoothstep' },
    { id: 'e35-36', source: '35', target: '36', type: 'smoothstep' },
    {
        id: 'e0-1',
        source: '0',
        target: '1',
        type: 'smoothstep',
        sourceHandle: '0-Right-source',
        targetHandle: '1-Left-target',
    },
    {
        id: 'e0-34',
        source: '0',
        target: '34',
        type: 'smoothstep',
        sourceHandle: '0-Right-source',
        targetHandle: '34-Left-target',
    },
    {
        id: 'e0-32',
        source: '0',
        target: '32',
        type: 'smoothstep',
        sourceHandle: '0-Right-source',
        targetHandle: '32-Left-target',
    },
    {
        id: 'e0-30',
        source: '0',
        target: '30',
        type: 'smoothstep',
        sourceHandle: '0-Right-source',
        targetHandle: '30-Left-target',
    },
    {
        id: 'e0-27',
        source: '0',
        target: '27',
        type: 'smoothstep',
        sourceHandle: '0-Right-source',
        targetHandle: '27-Left-target',
    },
    {
        id: 'e0-37',
        source: '0',
        target: '37',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '37-Right-target',
    },
    {
        id: 'e37-38',
        source: '37',
        target: '38',
        type: 'smoothstep',
        sourceHandle: '37-Left-source',
        targetHandle: '38-Right-target',
    },
    {
        id: 'e0-39',
        source: '0',
        target: '39',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '39-Right-target',
    },
    { id: 'e27-40', source: '27', target: '40', type: 'smoothstep' },
    {
        id: 'e0-41',
        source: '0',
        target: '41',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '41-Right-target',
    },
    {
        id: 'e41-42',
        source: '41',
        target: '42',
        type: 'smoothstep',
        sourceHandle: '41-Left-source',
        targetHandle: '42-Right-target',
    },
    {
        id: 'e0-43',
        source: '0',
        target: '43',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '43-Right-target',
    },
    {
        id: 'e0-44',
        source: '0',
        target: '44',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '44-Right-target',
    },
    {
        id: 'e0-45',
        source: '0',
        target: '45',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '45-Right-target',
    },
    {
        id: 'e45-46',
        source: '45',
        target: '46',
        type: 'smoothstep',
        sourceHandle: '45-Left-source',
        targetHandle: '46-Right-target',
    },
    {
        id: 'e0-47',
        source: '0',
        target: '47',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '47-Right-target',
    },
    {
        id: 'e0-48',
        source: '0',
        target: '48',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '48-Right-target',
    },
    {
        id: 'e0-49',
        source: '0',
        target: '49',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '49-Right-target',
    },
    {
        id: 'e0-50',
        source: '0',
        target: '50',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '50-Right-target',
    },
    {
        id: 'e0-51',
        source: '0',
        target: '51',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '51-Right-target',
    },
    {
        id: 'e0-52',
        source: '0',
        target: '52',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '52-Right-target',
    },
    {
        id: 'e0-53',
        source: '0',
        target: '53',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '53-Right-target',
    },
    {
        id: 'e0-54',
        source: '0',
        target: '54',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '54-Right-target',
    },
    { id: 'e13-55', source: '13', target: '55', type: 'smoothstep' },
    {
        id: 'e0-56',
        source: '0',
        target: '56',
        type: 'smoothstep',
        sourceHandle: '0-Left-source',
        targetHandle: '56-Right-target',
    },
]

// Первичная отрисовка - центрирование
const isReady = ref(false)

function onInit(instance) {
    instance.fitView({
        padding: 0.05,
        includeHiddenNodes: true,
        duration: 0,
    })
    isReady.value = true
}
</script>

<style>
.vue-flow__edge,
.vue-flow__edge-path,
.custom-edge-up,
.custom-edge-down {
    pointer-events: none !important;
    cursor: default !important;
}

.vue-flow__edge-path,
.custom-edge-up,
.custom-edge-down {
    stroke: var(--vp-c-text-3);
    stroke-width: 1;
    opacity: 1;
    fill: none;
    stroke-dasharray: 10;
    animation: dashmove 2s linear infinite;
}

@keyframes dashmove {
    to {
        stroke-dashoffset: -20;
    }
}

/* Стили для стрелок */
.vue-flow__edge .vue-flow__edge-path marker path {
    fill: var(--vp-c-border) !important;
}

/* Стили для выделенных edges */
.vue-flow__edge.selected .vue-flow__edge-path {
    stroke: var(--vp-c-border) !important;
    stroke-width: 2 !important;
}
</style>
