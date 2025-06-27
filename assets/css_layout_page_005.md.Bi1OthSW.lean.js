import{C as a}from"./chunks/theme.zoDd2WLD.js";import{c as p,o as h,ag as n,G as l,k as s}from"./chunks/framework.BgId8OS5.js";const k=`<div class="block-example">
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

<div class="section-title">display: <code>grid</code></div>
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

<div class="section-title">display: <code>flow-root</code></div>
<div class="flow-root-box">
    <div class="float-box"></div>
    <p class="item">
        Я блок с <code>display: flow-root</code>. Благодаря этому мой
        float-элемент (слева) не "выпадает" из потока — обтекание сбрасывается
        автоматически.
    </p>
</div>
`,r=`body {
    font-family: sans-serif;
    padding: 20px;
}

.section-title {
    margin-top: 40px;
    font-weight: bold;
}

.container {
    margin-top: 10px;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    padding: 10px;
}

/* FLEX */
.flex-box {
    display: flex;
    gap: 10px;
}

.inline-flex-box {
    display: inline-flex;
    gap: 10px;
    border: 2px dashed #999;
}

/* GRID */
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

/* FLOW-ROOT */
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
`,d="",o=JSON.parse('{"title":"Свойство display","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/layout/page_005.md","filePath":"css/layout/page_005.md"}'),g={name:"css/layout/page_005.md"},C=Object.assign(g,{setup(y){return(c,i)=>(h(),p("div",null,[i[0]||(i[0]=n("",9)),l(a,{html:s(k),css:s(t),js:s(e),height:"300px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",6)),l(a,{html:s(E),css:s(r),js:s(d),height:"800px"},null,8,["html","css","js"])]))}});export{o as __pageData,C as default};
