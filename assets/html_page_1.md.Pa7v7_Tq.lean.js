/* empty css                                                                           */import{_ as p,h,c as d,o as r,j as i,N as c,G as a,ag as k,a as l,k as s}from"./chunks/framework.BgId8OS5.js";const g={class:"code-preview"},y=["srcdoc"],E={__name:"CodePreview",props:{html:{type:String,default:""},css:{type:String,default:""},js:{type:String,default:""},height:{type:String,default:"300px"}},setup(e){const t=e,n=h(()=>`
        <!DOCTYPE html>
        <html>
            <head>
                <style>${t.css}</style>
            </head>
            <body>
                ${t.html}
                <script>${t.js}<\/script>
            </body>
        </html>
`);return(B,S)=>(r(),d("div",g,[i("iframe",{srcdoc:n.value,class:"preview-frame",style:c({height:e.height}),sandbox:"allow-scripts"},null,12,y)]))}},o=p(E,[["__scopeId","data-v-21a63fd7"]]),v=`<h1>Hello World!</h1>
<button
    style="padding: 8px 16px; border-radius: 4px"
    onclick="console.log('Hello!')"
>
    Чпоньк
</button>
`,m=`body {
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
`,u=`console.log('Preview loaded!')
`,f=`<canvas id="menuCanvas" width="600" height="400"></canvas>
`,x=`body {
    background: #667eea;
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

#menuCanvas {
    border: 1px solid #ccc;
}
`,C=`const canvas = document.getElementById('menuCanvas')
const ctx = canvas.getContext('2d')

const nodeWidth = 120
const nodeHeight = 40

const nodes = [
    { id: 1, label: 'HTML', x: 0, y: 100, children: [2] },
    { id: 2, label: 'CSS', x: 150, y: 100, children: [3] },
    { id: 3, label: 'JavaScript', x: 300, y: 100, children: [4, 5, 6, 7] },
    { id: 4, label: 'TypeScript', x: 450, y: 100, children: [] },
    { id: 5, label: 'React', x: 450, y: 200, children: [] },
    { id: 6, label: 'Jest', x: 300, y: 200, children: [] },
    { id: 7, label: 'Vitest', x: 300, y: 300, children: [] },
]

function drawNode(node) {
    ctx.fillStyle = '#4CAF50'
    ctx.fillRect(node.x, node.y, nodeWidth, nodeHeight)
    ctx.fillStyle = 'white'
    ctx.font = '16px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(node.label, node.x + nodeWidth / 2, node.y + nodeHeight / 2)
}

function drawLine(from, to) {
    ctx.beginPath()
    ctx.moveTo(from.x + nodeWidth, from.y + nodeHeight / 2)
    ctx.lineTo(to.x, to.y + nodeHeight / 2)
    ctx.strokeStyle = '#555'
    ctx.lineWidth = 2
    ctx.stroke()
}

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const node of nodes) {
        drawNode(node)
    }

    for (const node of nodes) {
        for (const childId of node.children) {
            const child = nodes.find((n) => n.id === childId)
            drawLine(node, child)
        }
    }
}

drawTree()
`,j=`<div class="grid-container" id="grid">
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
`,F=`/*@font-face {*/
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
`,w=`function connectLShape(fromId, toId, lineId) {
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
    connectLShape('html', 'css', 'html-css')
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
`,$=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"html/page_1.md","filePath":"html/page_1.md"}'),b={name:"html/page_1.md"},L=Object.assign(b,{setup(e){return(t,n)=>(r(),d("div",null,[n[0]||(n[0]=i("h1",{id:"html",tabindex:"-1"},[l("HTML "),i("a",{class:"header-anchor",href:"#html","aria-label":'Permalink to "HTML"'},"​")],-1)),n[1]||(n[1]=i("h2",{id:"test-grid",tabindex:"-1"},[l("Test Grid "),i("a",{class:"header-anchor",href:"#test-grid","aria-label":'Permalink to "Test Grid"'},"​")],-1)),a(o,{html:s(j),css:s(F),js:s(w),height:"910px"},null,8,["html","css","js"]),n[2]||(n[2]=i("h2",{id:"test-canvas",tabindex:"-1"},[l("Test Canvas "),i("a",{class:"header-anchor",href:"#test-canvas","aria-label":'Permalink to "Test Canvas"'},"​")],-1)),a(o,{html:s(f),css:s(x),js:s(C),height:"470px"},null,8,["html","css","js"]),n[3]||(n[3]=k("",8)),a(o,{html:s(v),css:s(m),js:s(u),height:"170px"},null,8,["html","css","js"])]))}});export{$ as __pageData,L as default};
