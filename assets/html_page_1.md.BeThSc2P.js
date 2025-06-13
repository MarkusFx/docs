/* empty css                                                                           */import{_ as p,h as r,c as d,o,j as i,N as c,G as e,ag as k,a as l,k as n}from"./chunks/framework.BgId8OS5.js";const g={class:"code-preview"},E=["srcdoc"],y={__name:"CodePreview",props:{html:{type:String,default:""},css:{type:String,default:""},js:{type:String,default:""},height:{type:String,default:"300px"}},setup(a){const t=a,s=r(()=>`
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
`);return(S,_)=>(o(),d("div",g,[i("iframe",{srcdoc:s.value,class:"preview-frame",style:c({height:a.height}),sandbox:"allow-scripts"},null,12,E)]))}},h=p(y,[["__scopeId","data-v-21a63fd7"]]),m=`<h1>Hello World!</h1>
<button
    style="padding: 8px 16px; border-radius: 4px"
    onclick="console.log('Hello!')"
>
    Чпоньк
</button>
`,f=`body {
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
`,v=`console.log('Preview loaded!')
`,u=`<canvas id="menuCanvas" width="600" height="400"></canvas>
`,C=`body {
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
`,x=`const canvas = document.getElementById('menuCanvas')
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
`,F=`<div class="grid-container" id="grid">
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

    <svg class="lines">
        <polyline id="html-css" stroke="#555" stroke-width="2" fill="none" />
        <polyline
            id="css-javascript"
            stroke="#555"
            stroke-width="2"
            fill="none"
        />
        <polyline
            id="javascript-typescript"
            stroke="#555"
            stroke-width="2"
            fill="none"
        />
        <polyline
            id="javascript-react"
            stroke="#555"
            stroke-width="2"
            fill="none"
        />
        <polyline
            id="javascript-jest"
            stroke="#555"
            stroke-width="2"
            fill="none"
        />
        <polyline
            id="javascript-vitest"
            stroke="#555"
            stroke-width="2"
            fill="none"
        />
        <polyline id="css-sass" stroke="#555" stroke-width="2" fill="none" />
        <polyline id="css-scss" stroke="#555" stroke-width="2" fill="none" />
        <polyline id="css-less" stroke="#555" stroke-width="2" fill="none" />
    </svg>
</div>
`,b=`/*@font-face {*/
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
    grid-template-columns: repeat(5, 100px);
    grid-template-rows: repeat(9, 40px);
    gap: 50px;
    position: relative;
    padding: 20px;
}

.node {
    background: #272b2d;
    border: 1px solid #808080;
    color: white;
    padding: 12px;
    text-align: center;
    border-radius: 8px;
    position: relative;
    z-index: 1;
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
`,B=`function connectLShape(fromId, toId, lineId) {
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

function connectZigZag(fromId, toId, lineId, offset = 20) {
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

function redrawLines() {
    connectLShape('html', 'css', 'html-css')
    connectLShape('css', 'javascript', 'css-javascript')
    connectLShape('javascript', 'typescript', 'javascript-typescript')
    connectLShape('javascript', 'react', 'javascript-react')
    connectZigZag('javascript', 'jest', 'javascript-jest')
    connectZigZag('javascript', 'vitest', 'javascript-vitest')
    connectZigZag('css', 'sass', 'css-sass')
    connectZigZag('css', 'scss', 'css-scss')
    connectZigZag('css', 'less', 'css-less')
}

window.addEventListener('load', redrawLines)
window.addEventListener('resize', redrawLines)
`,T=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"html/page_1.md","filePath":"html/page_1.md"}'),w={name:"html/page_1.md"},I=Object.assign(w,{setup(a){return(t,s)=>(o(),d("div",null,[s[0]||(s[0]=i("h1",{id:"html",tabindex:"-1"},[l("HTML "),i("a",{class:"header-anchor",href:"#html","aria-label":'Permalink to "HTML"'},"​")],-1)),s[1]||(s[1]=i("h2",{id:"test-grid",tabindex:"-1"},[l("Test Grid "),i("a",{class:"header-anchor",href:"#test-grid","aria-label":'Permalink to "Test Grid"'},"​")],-1)),e(h,{html:n(F),css:n(b),js:n(B),height:"900px"},null,8,["html","css","js"]),s[2]||(s[2]=i("h2",{id:"test-canvas",tabindex:"-1"},[l("Test Canvas "),i("a",{class:"header-anchor",href:"#test-canvas","aria-label":'Permalink to "Test Canvas"'},"​")],-1)),e(h,{html:n(u),css:n(C),js:n(x),height:"470px"},null,8,["html","css","js"]),s[3]||(s[3]=k(`<h2 id="тест-iframe-c-html-css-javascript" tabindex="-1">Тест iframe c HTML, CSS, JavaScript <a class="header-anchor" href="#тест-iframe-c-html-css-javascript" aria-label="Permalink to &quot;Тест iframe c HTML, CSS, JavaScript&quot;">​</a></h2><p><strong><code>index.html</code></strong>:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello World!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;padding: 8px 16px; border-radius: 4px&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onclick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(&#39;Hello!&#39;)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Чпоньк</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong><code>style.css</code></strong>:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linear-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">135</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">deg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#667eea</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#764ba2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Arial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sans-serif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    text-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rgba</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">white</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#764ba2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cursor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pointer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong><code>script.js</code></strong>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Preview loaded!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Результат:</p>`,8)),e(h,{html:n(m),css:n(f),js:n(v),height:"170px"},null,8,["html","css","js"])]))}});export{T as __pageData,I as default};
