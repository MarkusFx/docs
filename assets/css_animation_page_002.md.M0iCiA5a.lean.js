import{C as a}from"./chunks/theme.8yC4W3nC.js";import{c as p,o as t,ag as n,G as l,k as s}from"./chunks/framework.Drb80Ych.js";const h=`<div class="box">Наведи</div>
`,k=`.box {
    background: lightblue;
    padding: 20px;
    transition: background-color 0.3s ease;
}

.box:hover {
    background-color: coral;
}
`,e="",E=`<div class="container">
    <div>
        <div class="label">ease (по умолчанию)</div>
        <div class="block ease">ease</div>
    </div>

    <div>
        <div class="label">linear (равномерно)</div>
        <div class="block linear">linear</div>
    </div>

    <div>
        <div class="label">ease-in (медленный старт)</div>
        <div class="block ease-in">ease-in</div>
    </div>

    <div>
        <div class="label">ease-out (медленный финиш)</div>
        <div class="block ease-out">ease-out</div>
    </div>

    <div>
        <div class="label">ease-in-out (медленный старт и финиш)</div>
        <div class="block ease-in-out">ease-in-out</div>
    </div>

    <div>
        <div class="label">custom bezier</div>
        <div class="block custom">bezier</div>
    </div>
</div>
`,r=`body {
    font-family: sans-serif;
    padding: 40px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.block {
    width: 100px;
    height: 40px;
    background: steelblue;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    transition: transform 1.5s;
    cursor: pointer;
}

.ease {
    transition-timing-function: ease;
}
.linear {
    transition-timing-function: linear;
}
.ease-in {
    transition-timing-function: ease-in;
}
.ease-out {
    transition-timing-function: ease-out;
}
.ease-in-out {
    transition-timing-function: ease-in-out;
}
.custom {
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.block:hover {
    transform: translateX(300px);
}

.label {
    margin-bottom: 5px;
    font-weight: bold;
}
`,d="",u=JSON.parse('{"title":"Переходы","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/animation/page_002.md","filePath":"css/animation/page_002.md"}'),g={name:"css/animation/page_002.md"},F=Object.assign(g,{setup(c){return(y,i)=>(t(),p("div",null,[i[0]||(i[0]=n("",9)),l(a,{html:s(h),css:s(k),js:s(e),height:"200px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",6)),l(a,{html:s(E),css:s(r),js:s(d),height:"600px"},null,8,["html","css","js"])]))}});export{u as __pageData,F as default};
