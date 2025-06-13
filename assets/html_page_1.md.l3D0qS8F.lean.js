/* empty css                                                                           */import{_ as h,h as c,c as d,o as r,j as i,N as p,G as a,ag as g,a as l,k as s}from"./chunks/framework.BgId8OS5.js";const k={class:"code-preview"},E=["srcdoc"],y={__name:"CodePreview",props:{html:{type:String,default:""},css:{type:String,default:""},js:{type:String,default:""},height:{type:String,default:"300px"}},setup(e){const t=e,n=c(()=>`
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
`);return(F,w)=>(r(),d("div",k,[i("iframe",{srcdoc:n.value,class:"preview-frame",style:p({height:e.height}),sandbox:"allow-scripts"},null,12,E)]))}},o=h(y,[["__scopeId","data-v-21a63fd7"]]),v=`<h1>Hello World!</h1>
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
`,f=`console.log('Preview loaded!')
`,u=`<div class="grid-container" id="grid">
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
`,j=`/*@font-face {*/
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

/* связь с html — зеленый */
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
`,x=`document.addEventListener('DOMContentLoaded', () => {
    // connections с цветом для каждой связи
    const connections = {
        html: [{ id: 'css', color: 'highlight-next', lineId: 'html-css' }],
        css: [
            { id: 'html', color: 'highlight-prev', lineId: 'html-css' },
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
`,I=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"html/page_1.md","filePath":"html/page_1.md"}'),C={name:"html/page_1.md"},S=Object.assign(C,{setup(e){return(t,n)=>(r(),d("div",null,[n[0]||(n[0]=i("h1",{id:"html",tabindex:"-1"},[l("HTML "),i("a",{class:"header-anchor",href:"#html","aria-label":'Permalink to "HTML"'},"​")],-1)),n[1]||(n[1]=i("h2",{id:"menu-grid",tabindex:"-1"},[l("Menu Grid "),i("a",{class:"header-anchor",href:"#menu-grid","aria-label":'Permalink to "Menu Grid"'},"​")],-1)),a(o,{html:s(u),css:s(j),js:s(x),height:"910px"},null,8,["html","css","js"]),n[2]||(n[2]=g("",8)),a(o,{html:s(v),css:s(m),js:s(f),height:"170px"},null,8,["html","css","js"])]))}});export{I as __pageData,S as default};
