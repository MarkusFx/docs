import{C as a}from"./chunks/theme.CXTrTyi-.js";import{c as t,o as p,ag as n,G as l,k as s}from"./chunks/framework.Drb80Ych.js";const e=`<div class="box">Box</div>
`,h=`body {
    font-family: sans-serif;
    padding: 30px;
}

.box {
    width: 100px;
    height: 100px;
    background: mediumseagreen;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    border-radius: 8px;

    animation-name: rotateMyBox;
    animation-duration: 3s;
    animation-delay: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-play-state: running;
}

@keyframes rotateMyBox {
    0% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
        background-color: mediumseagreen;
    }
    50% {
        transform: scale(1.3) rotate(180deg);
        opacity: 0.5;
        background-color: coral;
    }
    100% {
        transform: scale(1) rotate(360deg);
        opacity: 1;
        background-color: royalblue;
    }
}
`,k="",r=`<div class="box">Box</div>
`,E=`body {
    font-family: sans-serif;
    padding: 80px;
    color: white;
}

.box {
    width: 100px;
    height: 100px;
    background: teal;
    animation: rotateScale 3s infinite alternate ease-in-out;
}

@keyframes rotateScale {
    0% {
        transform: rotate(0deg) scale(1);
    }
    100% {
        transform: rotate(360deg) scale(1.5);
    }
}
`,d="",g=`<div class="box">Box</div>
`,c=`.box {
    width: 100px;
    height: 100px;
    background: tomato;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 30px auto;

    animation: bounce 2s ease-in-out 0.5s infinite alternate both;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(50px);
    }
}
`,o="",u=JSON.parse('{"title":"Анимации","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/animation/page_003.md","filePath":"css/animation/page_003.md"}'),y={name:"css/animation/page_003.md"},B=Object.assign(y,{setup(F){return(b,i)=>(p(),t("div",null,[i[0]||(i[0]=n("",9)),l(a,{html:s(r),css:s(E),js:s(d),height:"300px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",6)),l(a,{html:s(e),css:s(h),js:s(k),height:"300px"},null,8,["html","css","js"]),i[2]||(i[2]=n("",7)),l(a,{html:s(g),css:s(c),js:s(o),height:"300px"},null,8,["html","css","js"])]))}});export{u as __pageData,B as default};
