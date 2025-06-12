/* empty css                                                                           */import{_ as d,h as r,c as p,o as k,j as a,N as o,G as l,ag as E,a as e,k as i}from"./chunks/framework.BgId8OS5.js";const c={class:"code-preview"},g=["srcdoc"],y={__name:"CodePreview",props:{html:{type:String,default:""},css:{type:String,default:""},js:{type:String,default:""},height:{type:String,default:"300px"}},setup(t){const n=t,s=r(()=>`
        <!DOCTYPE html>
        <html>
            <head>
                <style>${n.css}</style>
            </head>
            <body>
                ${n.html}
                <script>${n.js}<\/script>
            </body>
        </html>
`);return(v,B)=>(k(),p("div",c,[a("iframe",{srcdoc:s.value,class:"preview-frame",style:o({height:t.height}),sandbox:"allow-scripts"},null,12,g)]))}},h=d(y,[["__scopeId","data-v-21a63fd7"]]),F=`<h1>Hello World!</h1>
<button
    style="padding: 8px 16px; border-radius: 4px"
    onclick="console.log('Hello!')"
>
    Чпоньк
</button>
`,C=`body {
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
`,x=`console.log('Preview loaded!')
`,b=`<canvas id="menuCanvas" width="600" height="400"></canvas>
`,u=`body {
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

#menuCanvas {
    border: 1px solid #ccc;
}
`,m=`const canvas = document.getElementById('menuCanvas')
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
`,S=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"html/page_1.md","filePath":"html/page_1.md"}'),f={name:"html/page_1.md"},A=Object.assign(f,{setup(t){return(n,s)=>(k(),p("div",null,[s[0]||(s[0]=a("h1",{id:"html",tabindex:"-1"},[e("HTML "),a("a",{class:"header-anchor",href:"#html","aria-label":'Permalink to "HTML"'},"​")],-1)),s[1]||(s[1]=a("h2",{id:"canvas",tabindex:"-1"},[e("Canvas "),a("a",{class:"header-anchor",href:"#canvas","aria-label":'Permalink to "Canvas"'},"​")],-1)),l(h,{html:i(b),css:i(u),js:i(m),height:"450px"},null,8,["html","css","js"]),s[2]||(s[2]=E(`<h2 id="тест-iframe-c-html-css-javascript" tabindex="-1">Тест iframe c HTML, CSS, JavaScript <a class="header-anchor" href="#тест-iframe-c-html-css-javascript" aria-label="Permalink to &quot;Тест iframe c HTML, CSS, JavaScript&quot;">​</a></h2><p><strong><code>index.html</code></strong>:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello World!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong><code>script.js</code></strong>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Preview loaded!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Результат:</p>`,8)),l(h,{html:i(F),css:i(C),js:i(x),height:"170px"},null,8,["html","css","js"])]))}});export{S as __pageData,A as default};
