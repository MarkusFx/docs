import{C as n}from"./chunks/theme.D9CtuBiQ.js";import{c as l,o as p,ag as a,G as h,k as i}from"./chunks/framework.Drb80Ych.js";const t=`<div class="width-indicator">
    Ширина окна: <span id="viewportWidth"></span>px
</div>

<div class="card-grid">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
    <div class="card">Карточка 4</div>
</div>
`,k=`body {
    font-family: sans-serif;
    margin: 0;
    padding: 20px;
    background: #f9f9f9;
}

.width-indicator {
    background: #222;
    color: #fff;
    padding: 10px;
    font-size: 0.9rem;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    border: 2px dashed #ccc;
    padding: 20px;
}

.card {
    background: #4dabf7;
    color: white;
    padding: 20px;
    flex: 1 1 calc(25% - 20px);
    box-sizing: border-box;
    text-align: center;
    font-weight: bold;
}

@media (max-width: 500px) {
    .card {
        flex: 1 1 100%;
    }
}

@media (max-width: 600px) and (min-width: 501px) {
    .card {
        flex: 1 1 calc(50% - 20px);
    }
}
`,e=`const widthEl = document.getElementById('viewportWidth')

function updateWidth() {
    widthEl.textContent = window.innerWidth
}

window.addEventListener('resize', updateWidth)
updateWidth()
`,y=JSON.parse('{"title":"Адаптивная верстка","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/layout/page_009.md","filePath":"css/layout/page_009.md"}'),r={name:"css/layout/page_009.md"},F=Object.assign(r,{setup(d){return(E,s)=>(p(),l("div",null,[s[0]||(s[0]=a("",7)),h(n,{html:i(t),css:i(k),js:i(e),height:"400px"},null,8,["html","css","js"]),s[1]||(s[1]=a("",10))]))}});export{y as __pageData,F as default};
