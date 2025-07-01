import{C as a}from"./chunks/theme.Bt_EpUHM.js";import{c as p,o as h,ag as n,G as l,k as s}from"./chunks/framework.BgId8OS5.js";const k=`<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
`,t=`body {
    padding: 20px;
}

.container {
    display: grid;
    grid-template-columns: 100px 1fr 2fr;
    gap: 10px;
}

.item {
    background: lightblue;
    padding: 20px;
}
`,e="",E=`<div class="grid-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
`,r=`.grid-container {
    display: grid;
    grid-template-columns: 100px 1fr 2fr;
    grid-template-rows: 100px auto;
    gap: 10px;
    padding: 20px;
    background: #eee;
}

.item {
    background: #3498db;
    color: white;
    padding: 10px;
    font-size: 1.2rem;
    text-align: center;
}
`,d="",g=`<div class="grid-areas">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
</div>
`,y=`* {
    margin: 0;
    padding: 0;
    text-align: center;
}

.grid-areas {
    display: grid;
    grid-template-areas:
        'header header'
        'sidebar main'
        'footer footer';
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    height: 100vh;
}

.header {
    grid-area: header;
    background: #6c5ce7;
    color: #fff;
    height: 50px;
}
.sidebar {
    grid-area: sidebar;
    background: #00cec9;
    color: #fff;
}
.main {
    grid-area: main;
    background: #0984e3;
    color: #fff;
}
.footer {
    grid-area: footer;
    background: #2d3436;
    color: #fff;
    height: 50px;
}
`,c="",F=`<div class="grid-pos">
    <div class="box a">A</div>
    <div class="box b">B</div>
</div>
`,b=`.grid-pos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px;
    gap: 10px;
}

.box {
    background: coral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.a {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
}

.b {
    grid-column: 2 / 5;
    grid-row: 2 / 4;
}
`,o="",u=`<div class="grid gap-example">
    <div class="cell">1</div>
    <div class="cell">2</div>
    <div class="cell">3</div>
    <div class="cell">4</div>
    <div class="cell">5</div>
    <div class="cell">6</div>
</div>
`,C=`body {
    background: #eee;
}

.grid {
    border: 1px dashed #888;
    padding: 10px;
    background: white;
}

.gap-example {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 80px 80px;
    column-gap: 10px;
    row-gap: 20px;
}

.cell {
    background: #74b9ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}
`,m="",v=`<h3>align-items: center</h3>
<div class="grid align-grid">
    <div class="cell">A</div>
    <div class="cell">B</div>
    <div class="cell">C</div>
</div>

<h3>justify-items: end</h3>
<div class="grid justify-grid">
    <div class="cell">A</div>
    <div class="cell">B</div>
    <div class="cell">C</div>
</div>

<h3>place-items: center</h3>
<div class="grid place-grid">
    <div class="cell">A</div>
    <div class="cell">B</div>
    <div class="cell">C</div>
</div>
`,B=`body {
    font-family: sans-serif;
    padding: 20px;
    background: #f8f8f8;
}

.grid {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 120px;
    gap: 10px;
    background: #eee;
    margin-bottom: 30px;
    border: 2px dashed #ccc;
}

.cell {
    background: #74b9ff;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 4px;
}

.align-grid {
    align-items: center;
}

.justify-grid {
    justify-items: end;
}

.place-grid {
    place-items: center;
}
`,A="",D=`<h3>align-content: center</h3>
<div class="wrapper">
    <div class="grid align-content">
        <div class="cell">1</div>
        <div class="cell">2</div>
        <div class="cell">3</div>
        <div class="cell">4</div>
        <div class="cell">5</div>
        <div class="cell">6</div>
    </div>
</div>

<h3>justify-content: space-evenly</h3>
<div class="wrapper">
    <div class="grid justify-content">
        <div class="cell">A</div>
        <div class="cell">B</div>
        <div class="cell">C</div>
        <div class="cell">D</div>
        <div class="cell">E</div>
        <div class="cell">F</div>
    </div>
</div>

<h3>place-content: center</h3>
<div class="wrapper">
    <div class="grid place-content">
        <div class="cell">Я</div>
        <div class="cell">в</div>
        <div class="cell">центре</div>
        <div class="cell">по</div>
        <div class="cell">всем</div>
        <div class="cell">осям</div>
    </div>
</div>
`,f=`body {
    font-family: sans-serif;
    padding: 20px;
    background: #f0f0f0;
}

.wrapper {
    height: 200px;
    border: 2px dashed #ccc;
    background: #fff;
}

.grid {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 40px 40px;
    gap: 10px;
    height: 100%;
}

.cell {
    background: #0984e3;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 6px;
}

.align-content {
    align-content: center;
}

.justify-content {
    justify-content: space-evenly;
}

.place-content {
    place-content: center;
}
`,x="",q=`<div class="grid-1">
    <div class="cell">1</div>
    <div class="cell">2</div>
    <div class="cell">3</div>
    <div class="cell">4</div>
</div>

<div class="grid-2">
    <div class="cell">1</div>
    <div class="cell">2</div>
    <div class="cell">3</div>
    <div class="cell">4</div>
</div>
`,_=`body {
    padding: 10px;
    background: #eee;
}

.grid-1 {
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr 2fr 100px;
    gap: 10px;
    background: white;
}

.grid-2 {
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr) 50px 2fr;
    gap: 20px;
    background: white;
}

.cell {
    background: steelblue;
    color: white;
    padding: 20px;
    text-align: center;
}
`,w="",T=`<div class="example">
    <h3>grid-auto-flow: row (по умолчанию)</h3>
    <div class="grid row">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>

<div class="example">
    <h3>grid-auto-flow: column</h3>
    <div class="grid column">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>

<div class="example">
    <h3>grid-auto-flow: row dense</h3>
    <div class="grid row-dense">
        <div>1</div>
        <div>2</div>
        <div class="wide">3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>

<div class="example">
    <h3>grid-auto-flow: column dense</h3>
    <div class="grid column-dense">
        <div>1</div>
        <div>2</div>
        <div class="wide">3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</div>
`,j=`body {
    font-family: sans-serif;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
}

.example {
    border: 2px dashed #ccc;
    padding: 10px;
}

h3 {
    margin: 10px 0;
    font-size: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 60px);
    grid-template-rows: repeat(3, 60px);
    gap: 5px;
    background: #eee;
}

.grid div {
    background: steelblue;
    color: white;
    font-weight: bold;
}

.row {
    grid-auto-flow: row;
}

.column {
    grid-auto-flow: column;
}

.row-dense {
    grid-auto-flow: row dense;
}

.column-dense {
    grid-auto-flow: column dense;
}

.wide {
    grid-column: span 2;
}
`,S="",P=`<div class="grid">
    <div class="item a">A</div>
    <div class="item b">B</div>
    <div class="item c">C</div>
</div>
`,V=`body {
    font-family: sans-serif;
    background: #ddd;
    padding: 10px;
}

.grid {
    display: grid;
    grid-template-columns: [left] 1fr [middle] 2fr [right];
    grid-template-rows: [top] 80px [center] 150px [bottom];
    gap: 10px;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
}

.item {
    background: steelblue;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 20px;
}

.a {
    grid-column: left / middle;
    grid-row: top / span 1;
}

.b {
    grid-column: middle / right;
    grid-row: center / bottom;
}

.c {
    grid-column: left / right;
    grid-row: bottom / span 1;
}
`,I="",H=JSON.parse('{"title":"Grid Layout","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/layout/page_008.md","filePath":"css/layout/page_008.md"}'),R={name:"css/layout/page_008.md"},Y=Object.assign(R,{setup(N){return(z,i)=>(h(),p("div",null,[i[0]||(i[0]=n("",8)),l(a,{html:s(k),css:s(t),js:s(e),height:"200px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",4)),l(a,{html:s(E),css:s(r),js:s(d),height:"250px"},null,8,["html","css","js"]),i[2]||(i[2]=n("",4)),l(a,{html:s(q),css:s(_),js:s(w),height:"350px"},null,8,["html","css","js"]),i[3]||(i[3]=n("",4)),l(a,{html:s(g),css:s(y),js:s(c),height:"350px"},null,8,["html","css","js"]),i[4]||(i[4]=n("",4)),l(a,{html:s(P),css:s(V),js:s(I),height:"400px"},null,8,["html","css","js"]),i[5]||(i[5]=n("",4)),l(a,{html:s(F),css:s(b),js:s(o),height:"400px"},null,8,["html","css","js"]),i[6]||(i[6]=n("",4)),l(a,{html:s(u),css:s(C),js:s(m),height:"300px"},null,8,["html","css","js"]),i[7]||(i[7]=n("",6)),l(a,{html:s(v),css:s(B),js:s(A),height:"700px"},null,8,["html","css","js"]),i[8]||(i[8]=n("",6)),l(a,{html:s(D),css:s(f),js:s(x),height:"900px"},null,8,["html","css","js"]),i[9]||(i[9]=n("",4)),l(a,{html:s(T),css:s(j),js:s(S),height:"700px"},null,8,["html","css","js"])]))}});export{H as __pageData,Y as default};
