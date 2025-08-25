import{C as E}from"./chunks/theme.B1RnURt0.js";import{_ as T,p as r,h as b,v as N,$ as q,q as V,c as p,o as g,e as Z,n as L,j as s,ah as x,ai as j,t as m,F as z,B as H,ag as M,G as h,a as C,k as t}from"./chunks/framework.Drb80Ych.js";const J={class:"rutube-player"},U=["src"],G=["title"],X={class:"overlay-controls"},O=["disabled","title"],W=["disabled","title"],Y={class:"overlay-playlist"},K=["onClick","title"],Q={__name:"VideoPlayer",props:{videos:{type:Array,required:!0,validator:d=>Array.isArray(d)&&d.every(e=>e&&typeof e.title=="string"&&typeof e.url=="string"&&e.url.includes("rutube.ru"))}},setup(d){const e=d,a=r(e.videos.map(i=>i.url)),l=r(e.videos.map(i=>i.title)),n=r(0),w=b(()=>a.value[n.value]),F=r(null),c=r(!1),o=r(!0);let k=null;function B(){clearTimeout(k),o.value=!0,k=setTimeout(()=>{o.value=!1},3e3)}function $(){B()}function _(){const i=F.value;document.fullscreenElement?document.exitFullscreen():i.requestFullscreen()}function I(){c.value=!!document.fullscreenElement,c.value?B():(o.value=!0,clearTimeout(k))}N(()=>{document.addEventListener("fullscreenchange",I)}),q(()=>{document.removeEventListener("fullscreenchange",I),clearTimeout(k)});const u=b(()=>n.value>0),v=b(()=>n.value<a.value.length-1);function D(){u.value&&n.value--}function R(){v.value&&n.value++}function P(i){n.value=i}return V(()=>e.videos,i=>{a.value=i.map(y=>y.url),l.value=i.map(y=>y.title),n.value>=a.value.length&&(n.value=0)},{deep:!0,immediate:!0}),(i,y)=>(g(),p("div",J,[w.value?(g(),p("div",{key:0,ref_key:"videoContainer",ref:F,class:L(["video-container",{fullscreen:c.value}]),onDblclick:_},[s("iframe",{src:w.value,allow:"autoplay"},null,8,U),s("div",{class:"mouse-layer",onMousemove:$},null,32),x(s("button",{class:"fullscreen-btn",onClick:_,title:c.value?"Выйти из полноэкранного режима":"Полноэкранный режим"},m(c.value?"⨉":"⛶"),9,G),[[j,o.value]]),x(s("div",X,[s("button",{onClick:D,disabled:!u.value,title:u.value?"Предыдущее: "+l.value[n.value-1]:""}," ◀ "+m(u.value?l.value[n.value-1]:""),9,O),s("button",{onClick:R,disabled:!v.value,title:v.value?"Следующее: "+l.value[n.value+1]:""},m(v.value?l.value[n.value+1]:"")+" ▶ ",9,W)],512),[[j,o.value]]),x(s("ul",Y,[(g(!0),p(z,null,H(l.value,(S,f)=>(g(),p("li",{key:f,class:L({active:f===n.value}),onClick:hn=>P(f),title:S},m(S),11,K))),128))],512),[[j,o.value]])],34)):Z("",!0)]))}},A=T(Q,[["__scopeId","data-v-e1dd2021"]]),nn=`<h1>Hello World!</h1>
<button
    style="padding: 8px 16px; border-radius: 4px"
    onclick="console.log('Hello!')"
>
    Чпоньк
</button>
`,sn=`body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    font-family: Arial, sans-serif;
}
h1 {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
button {
    background: white;
    color: #764ba2;
    border: none;
    cursor: pointer;
}
`,en=`console.log('Preview loaded!')
`,tn=`<div class="grid-container" id="grid">
    <div class="node" id="html" style="grid-column: 1; grid-row: 4">HTML</div>
    <div class="node" id="css" style="grid-column: 2; grid-row: 4">CSS</div>
    <div class="node" id="javascript" style="grid-column: 3; grid-row: 4">
        JavaScript
    </div>
    <div class="node" id="typescript" style="grid-column: 4; grid-row: 4">
        TypeScript
    </div>
    <div class="node" id="react" style="grid-column: 4; grid-row: 5">React</div>
    <div class="node" id="jest" style="grid-column: 3; grid-row: 5">Jest</div>
    <div class="node" id="vitest" style="grid-column: 3; grid-row: 6">
        Vitest
    </div>
    <div class="node" id="sass" style="grid-column: 2; grid-row: 5">SASS</div>
    <div class="node" id="scss" style="grid-column: 2; grid-row: 6">SCSS</div>
    <div class="node" id="less" style="grid-column: 2; grid-row: 7">LESS</div>
    <div class="node" id="gsap" style="grid-column: 3; grid-row: 3">GSAP</div>
    <div class="node" id="socketio" style="grid-column: 3; grid-row: 2">
        Socket.io
    </div>
    <div class="node" id="nodejs" style="grid-column: 4; grid-row: 2">
        Node.js
    </div>
    <div class="node" id="threejs" style="grid-column: 4; grid-row: 1">
        Three.js
    </div>
    <div class="node" id="vuejs" style="grid-column: 4; grid-row: 7">
        Vue.js
    </div>
    <div class="node" id="angularjs" style="grid-column: 4; grid-row: 8">
        Angular JS
    </div>
    <div class="node" id="electron" style="grid-column: 4; grid-row: 9">
        Electron
    </div>
    <div class="node" id="express" style="grid-column: 5; grid-row: 2">
        Express
    </div>
    <div class="node" id="nestjs" style="grid-column: 5; grid-row: 3">
        Nest JS
    </div>
    <div class="node" id="nestjs" style="grid-column: 5; grid-row: 3">
        Nest JS
    </div>
    <div class="node" id="nextjs" style="grid-column: 5; grid-row: 5">
        Next.JS
    </div>
    <div class="node" id="reactnative" style="grid-column: 5; grid-row: 6">
        React Native
    </div>
    <div class="node" id="nuxtjs" style="grid-column: 5; grid-row: 7">
        Nuxt.js
    </div>

    <svg class="lines">
        <polyline id="html-css" stroke="#555" stroke-width="1" fill="none" />
        <polyline
            id="css-javascript"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-typescript"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-react"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-jest"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-vitest"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline id="css-sass" stroke="#555" stroke-width="1" fill="none" />
        <polyline id="css-scss" stroke="#555" stroke-width="1" fill="none" />
        <polyline id="css-less" stroke="#555" stroke-width="1" fill="none" />
        <polyline
            id="javascript-gsap"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-socketio"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-nodejs"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-threejs"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="nodejs-express"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="nodejs-nestjs"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-vuejs"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-angularjs"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="javascript-electron"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="react-nextjs"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="react-reactnative"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
        <polyline
            id="vuejs-nuxtjs"
            stroke="#555"
            stroke-width="1"
            fill="none"
        />
    </svg>
</div>
`,ln=`/*@font-face {*/
/*    font-family: 'Bebas Neue Cyrillic';*/
/*    src: url('/fonts/BebasNeueCyrillic.woff2') format('woff2');*/
/*    font-weight: normal;*/
/*    font-style: normal;*/
/*}*/

body {
    background: #202324;
    /*font-family: Arial, sans-serif;*/
    font-family: 'Bebas Neue Cyrillic', sans-serif;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(5, 80px);
    grid-template-rows: repeat(9, 50px);
    gap: 50px;
    position: relative;
    padding: 20px;
}

.node {
    user-select: none;

    background: #272b2d;
    border: 1px solid #808080;
    color: white;
    text-align: center;
    border-radius: 8px;
    position: relative;
    z-index: 1;

    /* Центрирование текста */
    display: flex;
    justify-content: center; /* по горизонтали */
    align-items: center; /* по вертикали */
    height: 100%; /* важно: позволяет занять всю ячейку грида */

    transition:
        background 0.3s,
        border-color 0.3s,
        box-shadow 0.3s;
}

.node:hover {
    background: #3a3f41;
    border-color: #ffffff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
    cursor: pointer;
}

.node:active {
    background-color: #00e5a4; /* Цвет подсветки */
    color: white;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
}

/* свой узел */
.highlight-self {
    background-color: #00e5a4;
}

/* связь с tests — зеленый */
.highlight-prev {
    background-color: #00e5a4;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
    border-color: #ffffff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

/* остальные связи — синий */
.highlight-next {
    background-color: #ebd005;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.8);
    border-color: #ffffff;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

.highlight-line {
    stroke: #ffffff;
    stroke-width: 1px;
    transition: stroke 0.3s;
}

svg.lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}
`,an=`document.addEventListener('DOMContentLoaded', () => {
    // connections с цветом для каждой связи
    const connections = {
        html: [{ id: 'css', color: 'highlight-next', lineId: 'tests-css' }],
        css: [
            { id: 'html', color: 'highlight-prev', lineId: 'tests-css' },
            { id: 'sass', color: 'highlight-next', lineId: 'css-sass' },
            { id: 'scss', color: 'highlight-next', lineId: 'css-scss' },
            { id: 'less', color: 'highlight-next', lineId: 'css-less' },
            {
                id: 'javascript',
                color: 'highlight-next',
                lineId: 'css-javascript',
            },
        ],
        javascript: [
            { id: 'css', color: 'highlight-prev', lineId: 'css-javascript' },
            {
                id: 'typescript',
                color: 'highlight-next',
                lineId: 'javascript-typescript',
            },
            {
                id: 'react',
                color: 'highlight-next',
                lineId: 'javascript-react',
            },
            { id: 'jest', color: 'highlight-other', lineId: 'javascript-jest' },
            {
                id: 'vitest',
                color: 'highlight-next',
                lineId: 'javascript-vitest',
            },
            { id: 'gsap', color: 'highlight-other', lineId: 'javascript-gsap' },
            {
                id: 'socketio',
                color: 'highlight-next',
                lineId: 'javascript-socketio',
            },
            {
                id: 'nodejs',
                color: 'highlight-next',
                lineId: 'javascript-nodejs',
            },
            {
                id: 'threejs',
                color: 'highlight-next',
                lineId: 'javascript-threejs',
            },
            {
                id: 'vuejs',
                color: 'highlight-next',
                lineId: 'javascript-vuejs',
            },
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
            {
                id: 'gsap',
                color: 'highlight-next',
                lineId: 'javascript-gsap',
            },
            {
                id: 'jest',
                color: 'highlight-next',
                lineId: 'javascript-jest',
            },
        ],
    }

    document.querySelectorAll('.node').forEach((node) => {
        node.addEventListener('mouseenter', () => {
            const id = node.id
            node.classList.add('highlight-self')
            ;(connections[id] || []).forEach(({ id: cid, color, lineId }) => {
                const cn = document.getElementById(cid)
                if (cn) cn.classList.add(color)

                if (lineId) {
                    const line = document.getElementById(lineId)
                    if (line) line.classList.add('highlight-line')
                }
            })
        })

        node.addEventListener('mouseleave', () => {
            const id = node.id
            node.classList.remove('highlight-self')
            ;(connections[id] || []).forEach(({ id: cid, color, lineId }) => {
                const cn = document.getElementById(cid)
                if (cn) cn.classList.remove(color)

                if (lineId) {
                    const line = document.getElementById(lineId)
                    if (line) line.classList.remove('highlight-line')
                }
            })
        })
    })
})

function connectLShape(fromId, toId, lineId) {
    const fromEl = document.getElementById(fromId).getBoundingClientRect()
    const toEl = document.getElementById(toId).getBoundingClientRect()
    const svg = document.querySelector('svg.lines')
    const svgRect = svg.getBoundingClientRect()

    const x1 = fromEl.right - svgRect.left
    const y1 = fromEl.top + fromEl.height / 2 - svgRect.top

    const x2 = toEl.left - svgRect.left
    const y2 = toEl.top + toEl.height / 2 - svgRect.top

    const midX = (x1 + x2) / 2

    const polyline = document.getElementById(lineId)
    polyline.setAttribute(
        'points',
        \`\${x1},\${y1} \${midX},\${y1} \${midX},\${y2} \${x2},\${y2}\`,
    )
}

function connectZigZagDown(fromId, toId, lineId, offset = 25) {
    const fromEl = document.getElementById(fromId).getBoundingClientRect()
    const toEl = document.getElementById(toId).getBoundingClientRect()
    const svg = document.querySelector('svg.lines')
    const svgRect = svg.getBoundingClientRect()

    // Стартовая точка: нижний центр from
    const x1 = fromEl.left + fromEl.width / 2 - svgRect.left
    const y1 = fromEl.bottom - svgRect.top

    // Конечная точка: левый центр to
    const x2 = toEl.left - svgRect.left
    const y2 = toEl.top + toEl.height - svgRect.top

    // Первая точка ниже from
    const yMid1 = y1 + offset

    // Горизонтальный отрезок влево
    const xMid = Math.min(x1, x2) - offset

    // Следующий вертикальный отрезок (ниже to)
    const yMid2 = y2 - offset

    // Точки маршрута
    const points = [
        \`\${x1},\${y1}\`, // низ from
        \`\${x1},\${yMid1}\`, // вниз
        \`\${xMid},\${yMid1}\`, // влево
        \`\${xMid},\${yMid2}\`, // вниз
        \`\${x2},\${yMid2}\`, // вправо
    ].join(' ')

    const polyline = document.getElementById(lineId)
    polyline.setAttribute('points', points)
}

function connectZigZagUp(fromId, toId, lineId, offset = 25) {
    const fromEl = document.getElementById(fromId).getBoundingClientRect()
    const toEl = document.getElementById(toId).getBoundingClientRect()
    const svg = document.querySelector('svg.lines')
    const svgRect = svg.getBoundingClientRect()

    // Точка старта: центр-верх блока from
    const x1 = fromEl.left + fromEl.width / 2 - svgRect.left
    const y1 = fromEl.top - svgRect.top

    // Целевая точка: центр-левая сторона блока to
    const x2 = toEl.left - svgRect.left
    const y2 = toEl.top + toEl.height / 2 - svgRect.top

    // 1. вверх от from
    const yMid1 = y1 - offset

    // 2. влево
    const xMid = Math.min(x1, x2) - offset

    // 3. вверх до уровня центра to
    const yMid2 = y2

    // Рисуем маршрут
    const points = [
        \`\${x1},\${y1}\`, // из центра-верха from
        \`\${x1},\${yMid1}\`, // вверх
        \`\${xMid},\${yMid1}\`, // влево
        \`\${xMid},\${yMid2}\`, // вверх до уровня центра to
        \`\${x2},\${yMid2}\`, // вправо в центр-лево блока to
    ].join(' ')

    const polyline = document.getElementById(lineId)
    polyline.setAttribute('points', points)
}

function redrawLines() {
    connectLShape('html', 'css', 'tests-css')
    connectLShape('css', 'javascript', 'css-javascript')
    connectLShape('javascript', 'typescript', 'javascript-typescript')
    connectLShape('javascript', 'react', 'javascript-react')
    connectLShape('javascript', 'nodejs', 'javascript-nodejs')
    connectLShape('javascript', 'threejs', 'javascript-threejs')
    connectLShape('nodejs', 'express', 'nodejs-express')
    connectLShape('nodejs', 'nestjs', 'nodejs-nestjs')
    connectLShape('javascript', 'vuejs', 'javascript-vuejs')
    connectLShape('javascript', 'angularjs', 'javascript-angularjs')
    connectLShape('javascript', 'electron', 'javascript-electron')
    connectLShape('react', 'nextjs', 'react-nextjs')
    connectLShape('react', 'reactnative', 'react-reactnative')
    connectLShape('vuejs', 'nuxtjs', 'vuejs-nuxtjs')
    connectZigZagDown('javascript', 'jest', 'javascript-jest')
    connectZigZagDown('javascript', 'vitest', 'javascript-vitest')
    connectZigZagDown('css', 'sass', 'css-sass')
    connectZigZagDown('css', 'scss', 'css-scss')
    connectZigZagDown('css', 'less', 'css-less')
    connectZigZagUp('javascript', 'gsap', 'javascript-gsap')
    connectZigZagUp('javascript', 'socketio', 'javascript-socketio')
}

window.addEventListener('load', redrawLines)
window.addEventListener('resize', redrawLines)
`,on=`<div class="tile-grid">
    <div class="tile-item" style="grid-column: 4; grid-row: 2">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/1c-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">HTML</div>
        </a>
    </div>
    <div class="tile-item" style="grid-column: 3; grid-row: 2">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/1c-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">1С</div>
        </a>
    </div>

    <div class="tile-item" style="grid-column: 2; grid-row: 1">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/html5-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">HTML</div>
        </a>
    </div>
    <div class="tile-item" style="grid-column: 2; grid-row: 2">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/vite-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">VitePress</div>
        </a>
    </div>
    <div class="tile-item" style="grid-column: 2; grid-row: 3">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/1c-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">1С</div>
        </a>
    </div>

    <div class="tile-item" style="grid-column: 1; grid-row: 1">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/html5-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">HTML</div>
        </a>
    </div>
    <div class="tile-item" style="grid-column: 1; grid-row: 2">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/vite-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">VitePress</div>
        </a>
    </div>
    <div class="tile-item" style="grid-column: 1; grid-row: 3">
        <a class="list-item" href="">
            <div class="tile-icon">
                <img src="/logos/1c-logo.svg" alt="" />
            </div>
            <div class="tile-hover-text">1С</div>
        </a>
    </div>
</div>
`,rn=`/* ========== Базовые стили и сброс ========== */
*,
*:before,
*:after {
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Bebas Neue Cyrillic', sans-serif;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1f2324;
    transform: translate3d(0, 0, 0);
}

/* ========== Сетка плиток ========== */
.tile-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 колонки */
    grid-auto-rows: auto;
    gap: 1rem;
    transform: rotate(-35deg) skew(20deg, 5deg);
}

.tile-item {
    list-style: none;
}

/* ========== Плитка ========== */
.list-item {
    background: #272b2d;
    color: #575757;
    text-align: center;
    height: 2.5em;
    width: 4em;
    line-height: 2.5em;
    position: relative;
    display: block;
    text-decoration: none;
    transition: all 0.25s linear;
}

.list-item:hover {
    background: #272b2d;
    color: #fffcfb;
    transform: translate(0.9em, -0.9em);
    box-shadow: -2em 2em 0 #00e5a4;
}

/* ========== Псевдоэлементы плитки (грани) ========== */
.list-item:before,
.list-item:after {
    content: '';
    position: absolute;
    transition: all 0.25s linear;
    width: 0.5em;
}

.list-item:before {
    height: 2.5em;
    background: #272b2d;
    top: 0.25em;
    left: -0.5em;
    transform: skewY(-45deg);
    border: 1px solid #00e5a4;
}

.list-item:after {
    height: 4em;
    background: #272b2d;
    bottom: -2.25em;
    left: 1.5em;
    transform: rotate(90deg) skew(0, 45deg);
    border: 1px solid #00e5a4;
}

.list-item:hover:before {
    background: #272b2d;
    width: 1em;
    top: 0.5em;
    left: -1em;
}

.list-item:hover:after {
    background: #272b2d;
    width: 1em;
    bottom: -2.5em;
    left: 1em;
    height: 4em;
}

/* ========== Обёртка для иконки и текста ========== */
.tile-icon-text-wrapper {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
}

/* ========== Иконка ========== */
.tile-icon,
.tile-hover-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
}

.tile-icon {
    font-size: 2rem;
    flex-shrink: 0;
    filter: brightness(0%) saturate(100%) invert(27%) sepia(85%) saturate(7470%)
        hue-rotate(160deg) brightness(150%) contrast(107%);
    opacity: 1;
    z-index: 1;
}

.tile-icon img {
    width: 50%;
    height: 50%;
    object-fit: contain;
}

.list-item:hover .tile-icon {
    opacity: 0;
}

/* ========== Текст при наведении (вместо иконки) ========== */
.tile-hover-text {
    opacity: 0;
    z-index: 2;
    color: #00e5a4;
    font-weight: bold;
    font-size: 0.8rem;
}

.list-item:hover .tile-hover-text {
    opacity: 1;
}

/* ========== Подпись под плиткой (если нужна отдельно) ========== */
.tile-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
}

.tile-title {
    font-weight: 600;
    font-size: 1.1rem;
    color: white;
}
`,dn="",kn=JSON.parse('{"title":"Тесты","description":"","frontmatter":{},"headers":[],"relativePath":"tests/page_001.md","filePath":"tests/page_001.md"}'),cn={name:"tests/page_001.md"},un=Object.assign(cn,{setup(d){const e=[{title:"001. Введение в курс",url:"https://rutube.ru/play/embed/e2398aad0e4c42a9ab4889bd2efd35ba"},{title:"002. Python3 vs. Python2",url:"https://rutube.ru/play/embed/cdc3e5bd2218bb30dc83ff4fcb193ed8"},{title:"003. Упражнения",url:"https://rutube.ru/play/embed/ab65a293ab9e9e31df65979a17a543c2"},{title:"004. С чего начать",url:"https://rutube.ru/play/embed/89c8553872844f21a7ef5444aecf3227"},{title:"005. Структура курса",url:"https://rutube.ru/play/embed/4b258a4229e95ab70510d18c3a97f314"}],a=[{title:"006. Зачем использовать командную строку",url:"https://rutube.ru/play/embed/ee26cc540b318f3b1686cdc9d089758f"},{title:"007. Командная строка на MAC",url:"https://rutube.ru/play/embed/ac6982e509a4d2d9c8af9618f1f68e23"},{title:"008. Абсолютные пути и PWD",url:"https://rutube.ru/play/embed/c01d7b7786e2225db61a8be91c55883f"},{title:"009. Использование CD",url:"https://rutube.ru/play/embed/e159ffb3a7497f1e7437bad7f0ee1279"},{title:"010. Использование LS",url:"https://rutube.ru/play/embed/bea9b0679d937754a951df2d0e33239a"}];return(l,n)=>(g(),p("div",null,[n[0]||(n[0]=M("",3)),h(A,{videos:e}),n[1]||(n[1]=s("h3",{id:"mac-linux-основы-команднои-строки",tabindex:"-1"},[C("MAC, LINUX - Основы командной строки "),s("a",{class:"header-anchor",href:"#mac-linux-основы-команднои-строки","aria-label":'Permalink to "MAC, LINUX - Основы командной строки"'},"​")],-1)),h(A,{videos:a}),n[2]||(n[2]=s("h2",{id:"menu-grid",tabindex:"-1"},[C("Menu Grid "),s("a",{class:"header-anchor",href:"#menu-grid","aria-label":'Permalink to "Menu Grid"'},"​")],-1)),h(E,{html:t(on),css:t(rn),js:t(dn),height:"900px"},null,8,["html","css","js"]),n[3]||(n[3]=s("h2",{id:"menu-grid-1",tabindex:"-1"},[C("Menu Grid "),s("a",{class:"header-anchor",href:"#menu-grid-1","aria-label":'Permalink to "Menu Grid"'},"​")],-1)),h(E,{html:t(tn),css:t(ln),js:t(an),height:"910px"},null,8,["html","css","js"]),n[4]||(n[4]=M("",8)),h(E,{html:t(nn),css:t(sn),js:t(en),height:"170px"},null,8,["html","css","js"])]))}});export{kn as __pageData,un as default};
