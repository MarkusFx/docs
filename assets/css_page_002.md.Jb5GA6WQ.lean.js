import{C as a}from"./chunks/theme.DIxRx61w.js";import{c as p,o as h,ag as n,G as l,k as s}from"./chunks/framework.Drb80Ych.js";const t=`<h1>Заголовок</h1>
<button class="btn">Кнопка</button>
`,k=`:root {
    --main-color: #3498db;
    --accent-color: #e74c3c;
    --font-size: 20px;
    --padding: 12px 24px;
    --border-radius: 8px;
}

body {
    font-family: sans-serif;
    background: #f2f2f2;
    color: var(--main-color);
    padding: 40px;
}

h1 {
    font-size: var(--font-size);
    color: var(--accent-color);
}

.btn {
    background-color: var(--main-color);
    color: white;
    padding: var(--padding);
    font-size: var(--font-size);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: var(--accent-color);
}
`,e=`const widthEl = document.getElementById('viewportWidth')

function updateWidth() {
    widthEl.textContent = window.innerWidth
}

window.addEventListener('resize', updateWidth)
updateWidth()
`,E=`<button id="toggleTheme">Переключить тему</button>
<h1>Заголовок</h1>
<p>Это пример переключения темы с помощью CSS переменных.</p>

<script>
    const toggleBtn = document.getElementById('toggleTheme')
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })
<\/script>
`,r=`:root {
    --bg-color: #ffffff;
    --text-color: #222222;
    --accent-color: #3498db;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: sans-serif;
    transition:
        background-color 0.3s,
        color 0.3s;
    padding: 2rem;
}

button {
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 1rem;
}

body.dark {
    --bg-color: #1e1e1e;
    --text-color: #f1f1f1;
    --accent-color: #e67e22;
}
`,d=`const widthEl = document.getElementById('viewportWidth')

function updateWidth() {
    widthEl.textContent = window.innerWidth
}

window.addEventListener('resize', updateWidth)
updateWidth()
`,F=JSON.parse('{"title":"Переменные","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/page_002.md","filePath":"css/page_002.md"}'),g={name:"css/page_002.md"},u=Object.assign(g,{setup(c){return(y,i)=>(h(),p("div",null,[i[0]||(i[0]=n("",6)),l(a,{html:s(t),css:s(k),js:s(e),height:"250px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",3)),l(a,{html:s(E),css:s(r),js:s(d),height:"250px"},null,8,["html","css","js"])]))}});export{F as __pageData,u as default};
