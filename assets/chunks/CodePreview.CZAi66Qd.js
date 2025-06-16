/* empty css                                                                    */import{_ as o,h as c,c as a,o as r,j as l,N as d}from"./framework.BgId8OS5.js";const i={class:"code-preview"},p=["srcdoc"],n={__name:"CodePreview",props:{html:{type:String,default:""},css:{type:String,default:""},js:{type:String,default:""},height:{type:String,default:"300px"}},setup(t){const e=t,s=c(()=>`
        <!DOCTYPE html>
        <html>
            <head>
                <style>${e.css}</style>
            </head>
            <body>
                ${e.html}
                <script>${e.js}<\/script>
            </body>
        </html>
`);return(h,m)=>(r(),a("div",i,[l("iframe",{srcdoc:s.value,class:"preview-frame",style:d({height:t.height}),sandbox:"allow-scripts"},null,12,p)]))}},u=o(n,[["__scopeId","data-v-21a63fd7"]]);export{u as C};
