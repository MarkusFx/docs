/* empty css                                                                           */import{_ as l,h as p,c as t,o as h,j as k,N as e,ag as r,G as d,k as n}from"./chunks/framework.BgId8OS5.js";const E={class:"code-preview"},g=["srcdoc"],o={__name:"CodePreview",props:{html:{type:String,default:""},css:{type:String,default:""},js:{type:String,default:""},height:{type:String,default:"300px"}},setup(a){const s=a,i=p(()=>`
        <!DOCTYPE html>
        <html>
            <head>
                <style>${s.css}</style>
            </head>
            <body>
                ${s.html}
                <script>${s.js}<\/script>
            </body>
        </html>
`);return(m,b)=>(h(),t("div",E,[k("iframe",{srcdoc:i.value,class:"preview-frame",style:e({height:a.height}),sandbox:"allow-scripts"},null,12,g)]))}},c=l(o,[["__scopeId","data-v-21a63fd7"]]),y=`<h1>Hello World!</h1>
<button
    style="padding: 8px 16px; border-radius: 4px"
    onclick="console.log('Hello!')"
>
    Чпоньк
</button>
`,F=`body {
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
`,C=`console.log('Preview loaded!')
`,v=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"html/page_1.md","filePath":"html/page_1.md"}'),u={name:"html/page_1.md"},x=Object.assign(u,{setup(a){return(s,i)=>(h(),t("div",null,[i[0]||(i[0]=r("",9)),d(c,{html:n(y),css:n(F),js:n(C),height:"170px"},null,8,["html","css","js"])]))}});export{v as __pageData,x as default};
