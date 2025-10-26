<template>
    <ClientOnly>
        <div ref="container" style="width: 100%; height: calc(100vh - 150px)">
            <VueFlow
                ref="vueFlowRef"
                :nodes="nodes"
                :edges="edges"
                :default-viewport="{ zoom: 1 }"
                :min-zoom="0.2"
                :max-zoom="2"
                :nodeTypes="nodeTypes"
                :edgeTypes="edgeTypes"
                :nodesDraggable="false"
                :connectable="false"
                :nodes-connectable="false"
            >
                <Background />
                <!--                <Controls />-->
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
import {
    VueFlow,
    Handle,
    Position,
    SmoothStepEdge,
    StraightEdge,
    StepEdge,
} from '@vue-flow/core'
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
} from './TilesForGraph.js'

const vueFlowRef = ref(null)
const container = ref(null)

// Размер ячейки (положение нод)
const CELL_WIDTH = 300
const CELL_HEIGHT = 160

function pathUpLeftVertical(sX, sY, tX, tY) {
    return `M${sX + 15},${sY}
        L${sX + 15},${sY - 80}
        L${tX - 15},${sY - 80}
        L${tX - 15},${tY}
        L${tX},${tY}`
}

function pathDownLeftVertical(sX, sY, tX, tY) {
    return `M${sX + 15},${sY}
        L${sX + 15},${sY + 80}
        L${tX - 15},${sY + 80}
        L${tX - 15},${tY}
        L${tX},${tY}`
}

const CustomEdgeUp = markRaw((props) => {
    const { sourceX, sourceY, targetX, targetY } = props
    const d = pathUpLeftVertical(sourceX, sourceY, targetX, targetY)
    return h('path', {
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
            padding: 0.2,
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

const TileNode = markRaw((props) =>
    h('div', { class: 'tile-node-wrapper', style: { width: '240px' } }, [
        h(Handle, {
            type: 'target',
            position: Position.Left,
            style: { background: '#646cff', zIndex: 2, opacity: 0 },
            isConnectable: false,
        }),
        // сам компонент TileGrid — пробрасываем массив tiles
        h(TileGrid, { tiles: props.data.tiles }),
        h(Handle, {
            type: 'source',
            position: Position.Right,
            style: { background: '#646cff', zIndex: 2, opacity: 0 },
            isConnectable: false,
        }),
    ]),
)

const nodeTypes = markRaw({ blockNode: BlockNode, tileNode: TileNode })
const edgeTypes = markRaw({
    smoothstep: StepEdge,
    customUp: CustomEdgeUp,
    customDown: CustomEdgeDown,
})

// --- helper creators
function createNode(id, label, col, row) {
    return {
        id: id.toString(),
        type: 'blockNode',
        data: { label },
        position: { x: col * CELL_WIDTH, y: row * CELL_HEIGHT },
    }
}

function createTileNode(id, tiles, col, row) {
    return {
        id: id.toString(),
        type: 'tileNode',
        data: { tiles },
        position: { x: col * CELL_WIDTH, y: row * CELL_HEIGHT },
    }
}

const nodes = [
    createTileNode(1, htmlCard, 0, 0),
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
]

onMounted(async () => {
    await nextTick()
    setTimeout(() => {
        vueFlowRef.value?.fitView({ padding: 0.05, includeHiddenNodes: true })
    }, 50)
})
</script>

<style>
.vue-flow__edge-path {
    stroke: var(--vp-c-border) !important;
    stroke-width: 2 !important;
    opacity: 1 !important;
    fill: none !important;
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
