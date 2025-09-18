import{C as a}from"./chunks/theme.DEcJ_TQO.js";import{c as p,o as h,ag as n,G as l,k as s}from"./chunks/framework.Drb80Ych.js";const k=`<div class="block-example">
    Я блочный элемент. Занимаю всю ширину и начинаю с новой строки.
</div>

<span class="inline-example">Я строчный элемент.</span>
<span class="inline-example-second">Я продолжаю на той же строке.</span>

<span class="inline-block-example">Я inline-block</span>
<span class="inline-block-example-second">И я inline-block</span>

<div class="none-example">
    Этот текст не виден и не занимает места на странице.
</div>

<div>Этот текст виден.</div>
`,t=`* {
    font-family: sans-serif;
}

.block-example {
    display: block;
    background: lightblue;
    padding: 10px;
}

.inline-example {
    display: inline;
    background: lightgreen;
}

.inline-example-second {
    display: inline;
    background: gold;
}

.inline-block-example {
    display: inline-block;
    width: 120px;
    height: 50px;
    background: salmon;
    text-align: center;
    margin-right: 10px;
}

.inline-block-example-second {
    display: inline-block;
    width: 120px;
    height: 50px;
    background: orange;
    text-align: center;
}

.none-example {
    display: none;
}
`,e="",E=`<div class="section-title">display: <code>flex</code></div>
<div class="container flex-box">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

<div class="section-title">display: <code>inline-flex</code></div>
<div class="inline-flex-box">
    <div class="item">A</div>
    <div class="item">B</div>
</div>
`,r=`body {
    font-family: sans-serif;
    padding: 20px;
}

.section-title {
    margin-bottom: 20px;
    font-weight: bold;
}

.container {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    padding: 10px;
}

.flex-box {
    display: flex;
    gap: 10px;
}

.inline-flex-box {
    display: inline-flex;
    gap: 10px;
    border: 2px dashed #999;
}

.item {
    background: lightblue;
    padding: 10px;
    text-align: center;
    border: 1px solid #666;
}
`,d="",g=`<div class="section-title">display: <code>table</code></div>
<div class="container table-box">
    <div class="table-row">
        <div class="table-cell">Ячейка 1</div>
        <div class="table-cell">Ячейка 2</div>
        <div class="table-cell">Ячейка 3</div>
    </div>
    <div class="table-row">
        <div class="table-cell">Ячейка 4</div>
        <div class="table-cell">Ячейка 5</div>
        <div class="table-cell">Ячейка 6</div>
    </div>
</div>

<div class="section-title">display: <code>inline-table</code></div>
<div class="inline-table-box">
    <div class="table-row">
        <div class="table-cell">A</div>
        <div class="table-cell">B</div>
    </div>
</div>
`,y=`body {
    font-family: sans-serif;
    padding: 20px;
}

.section-title {
    font-weight: bold;
}

.container {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    padding: 10px;
}

.table-box {
    display: table;
    border: 2px solid darkblue;
    width: 90%;
}

.inline-table-box {
    display: inline-table;
    border: 2px dashed darkgreen;
    margin-top: 10px;
}

.table-row {
    display: table-row;
}

.table-cell {
    display: table-cell;
    padding: 10px;
    border: 1px solid #333;
    background: lightblue;
    text-align: center;
}
`,c="",b=`<div class="section-title">display: <code>grid</code></div>
<div class="container grid-box">
    <div class="item">Ячейка 1</div>
    <div class="item">Ячейка 2</div>
    <div class="item">Ячейка 3</div>
    <div class="item">Ячейка 4</div>
</div>

<div class="section-title">display: <code>inline-grid</code></div>
<div class="inline-grid-box">
    <div class="item">X</div>
    <div class="item">Y</div>
</div>
`,o=`body {
    font-family: sans-serif;
    padding: 20px;
}

.section-title {
    margin-bottom: 10px;
    font-weight: bold;
}

.container {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    padding: 10px;
}

.grid-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.inline-grid-box {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    border: 2px dashed #999;
}

.item {
    background: lightblue;
    padding: 10px;
    text-align: center;
    border: 1px solid #666;
}
`,F="",C=`<div class="section-title">display: <code>flow-root</code></div>
<div class="flow-root-box">
    <div class="float-box"></div>
    <p class="item">
        Я блок с <code>display: flow-root</code>. Благодаря этому мой
        float-элемент (слева) не "выпадает" из потока — обтекание сбрасывается
        автоматически.
    </p>
</div>
`,u=`body {
    font-family: sans-serif;
    padding: 20px;
}

.section-title {
    margin-bottom: 20px;
    font-weight: bold;
}

.container {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    padding: 10px;
}

.flow-root-box {
    display: flow-root;
    border: 2px solid tomato;
    padding: 10px;
}

.float-box {
    float: left;
    width: 100px;
    height: 100px;
    background: lightcoral;
    margin-right: 10px;
}

.item {
    background: lightblue;
    padding: 10px;
    text-align: center;
    border: 1px solid #666;
}
`,m="",q=JSON.parse('{"title":"Свойство display","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/layout/page_005.md","filePath":"css/layout/page_005.md"}'),B={name:"css/layout/page_005.md"},f=Object.assign(B,{setup(v){return(x,i)=>(h(),p("div",null,[i[0]||(i[0]=n("",10)),l(a,{html:s(k),css:s(t),js:s(e),height:"300px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",6)),l(a,{html:s(E),css:s(r),js:s(d),height:"350px"},null,8,["html","css","js"]),i[2]||(i[2]=n("",6)),l(a,{html:s(b),css:s(o),js:s(F),height:"350px"},null,8,["html","css","js"]),i[3]||(i[3]=n("",6)),l(a,{html:s(C),css:s(u),js:s(m),height:"350px"},null,8,["html","css","js"]),i[4]||(i[4]=n("",6)),l(a,{html:s(g),css:s(y),js:s(c),height:"350px"},null,8,["html","css","js"])]))}});export{q as __pageData,f as default};
