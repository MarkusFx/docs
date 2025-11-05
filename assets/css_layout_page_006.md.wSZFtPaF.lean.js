import{C as a}from"./chunks/theme.DHtrfY_z.js";import{c as t,o as p,ag as n,G as l,k as s}from"./chunks/framework.ZCaT2mdU.js";const h=`<div class="box">Я static. Нахожусь в обычном потоке.</div>
`,e=`.box {
    position: static;
    background: lightblue;
    padding: 20px;
    border: 2px solid #000;
}
`,k="",d=`<div class="box">
    Я relative. Сдвинут от исходного положения, но занимаю то же место.
</div>
`,r=`.box {
    position: relative;
    top: 30px;
    left: 40px;
    background: lightgreen;
    padding: 20px;
    border: 2px solid #000;
}
`,E="",c=`<div class="parent">
    Родитель с \`position: relative\`
    <div class="child">Я absolute. Смещён от родителя.</div>
</div>
`,g=`.parent {
    position: relative;
    height: 200px;
    top: 30px;
    border: 2px dashed #999;
}

.child {
    position: absolute;
    top: 60px;
    right: 20px;
    width: 150px;
    background: salmon;
    padding: 10px;
}
`,o="",y=`<div class="fixed">Я fixed. Я всегда прикреплён к верху окна.</div>

<div class="content">
    <p>Прокрути страницу — элемент останется на месте.</p>
    <p style="height: 1000px"></p>
</div>
`,b=`.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: lightblue;
    color: black;
    padding: 10px;
    z-index: 999;
}

.content {
    margin-top: 60px;
}
`,F="",u=`<div class="sticky">Я sticky. Прилипну к верху при прокрутке.</div>

<div class="content">Много контента... Прокручивай вниз!</div>
`,C=`.sticky {
    position: sticky;
    top: 0;
    background: lightgreen;
    padding: 20px;
    border: 2px solid #333;
}

.content {
    height: 1500px;
    padding: 20px;
}
`,m="",v=`<div class="box1">z-index: 1</div>
<div class="box2">z-index: 2</div>
`,x=`.box1 {
    position: absolute;
    left: 40px;
    top: 40px;
    width: 150px;
    height: 150px;
    background: lightblue;
    z-index: 1;
}

.box2 {
    position: absolute;
    left: 80px;
    top: 80px;
    width: 150px;
    height: 150px;
    background: coral;
    z-index: 2;
}
`,B="",T=JSON.parse('{"title":"Позиционирование","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/layout/page_006.md","filePath":"css/layout/page_006.md"}'),_={name:"css/layout/page_006.md"},P=Object.assign(_,{setup(A){return(D,i)=>(p(),t("div",null,[i[0]||(i[0]=n("",10)),l(a,{html:s(h),css:s(e),js:s(k),height:"200px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",6)),l(a,{html:s(d),css:s(r),js:s(E),height:"200px"},null,8,["html","css","js"]),i[2]||(i[2]=n("",6)),l(a,{html:s(c),css:s(g),js:s(o),height:"300px"},null,8,["html","css","js"]),i[3]||(i[3]=n("",6)),l(a,{html:s(y),css:s(b),js:s(F),height:"250px"},null,8,["html","css","js"]),i[4]||(i[4]=n("",6)),l(a,{html:s(u),css:s(C),js:s(m),height:"250px"},null,8,["html","css","js"]),i[5]||(i[5]=n("",7)),l(a,{html:s(v),css:s(x),js:s(B),height:"300px"},null,8,["html","css","js"])]))}});export{T as __pageData,P as default};
