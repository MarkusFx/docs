import{_ as f,p as u,h as v,v as h,c as o,o as _,j as l,t as X,N as m,F as d,B as p,b as x,k as b,G as y}from"./chunks/framework.IX_DpZgh.js";const w=[{name:"Val_1",amount:5},{name:"Val_2",amount:5},{name:"Val_3",amount:20},{name:"Val_4",amount:20},{name:"Val_3",amount:100},{name:"Val_5",amount:100},{name:"Val_6",amount:100},{name:"Val_7",amount:50},{name:"Val_8",amount:50}],V={class:"fish-name"},g=`
|\\   \\\\\\\\__     o
| \\_/    o \\    o
> _   (( <_  oo
| / \\__+___/
|/     |/
`,A=`
                                  ____
                               /\\|    ~~\\
                             /’  |   ,-. \`\\
                            |       | X |  |
                           _|________\`-‘   |X
                         /’          ~~~~~~~~~,
                       /’             ,_____,/_
                    ,/’        ___,’~~         ;
~~~~~~~~|~~~~~~~|—          /  X,~~~~~~~~~~~~,
        |       |            |  XX’____________’
        |       |           /’ XXX|            ;
        |       |        –x|  XXX,~~~~~~~~~~~~,
        |       |          X|     ‘____________’
        |   o   |—~~~~\\__XX\\             |XX
        |       |          XXX\`\\          /XXXX
~~~~~~~~’~~~~~~~’               \`\\xXXXXx/’ \\XXX
                                 /XXXXXX\\
                               /XXXXXXXXXX\\
                             /XXXXXX/^\\XDCAU\\
`,F=`
 ,-~~~       ~~~-,
(                 )
 \\_-, , , , , ,-_/
    / / | | \\ \\
    | | | | | |
    | | | | | |
   / / /   \\ \\ \\
   | | |   | | |
`,B={__name:"AsciiFish",props:{name:String,amount:Number},setup(r){const a=r,t=u(Math.random()*window.innerWidth),i=u(Math.random()*(window.innerHeight*.8)+60),n=u(Math.random()>.5?1:-1),s=.4+a.amount/300,e=v(()=>a.amount<10?g:a.amount<50?A:F);function c(){t.value+=s*n.value,t.value>window.innerWidth+400&&(n.value=-1),t.value<-400&&(n.value=1),requestAnimationFrame(c)}return h(()=>{c()}),(O,S)=>(_(),o("div",{class:"fish",style:m({transform:`translate(${t.value}px, ${i.value}px)`,textAlign:"center"})},[l("div",V,X(r.name),1),l("pre",{style:m({transform:n.value===-1?"scaleX(-1)":"scaleX(1)"})},X(e.value)+`
    `,5)],4))}},$=f(B,[["__scopeId","data-v-2d2d8725"]]),k={class:"ocean"},M={__name:"AsciiOcean",setup(r){const a=u([]);function t(){a.value.push({id:Date.now()+Math.random(),x:Math.random()*window.innerWidth,y:window.innerHeight})}function i(){a.value.forEach(n=>{n.y-=1}),a.value=a.value.filter(n=>n.y>-20),requestAnimationFrame(i)}return h(()=>{setInterval(t,700),i()}),(n,s)=>(_(),o("div",k,[s[0]||(s[0]=l("pre",{class:"surface"},null,-1)),(_(!0),o(d,null,p(b(w),e=>(_(),x($,{key:e.name,name:e.name,amount:e.amount},null,8,["name","amount"]))),128)),(_(!0),o(d,null,p(a.value,e=>(_(),o("div",{key:e.id,class:"bubble",style:m({transform:`translate(${e.x}px, ${e.y}px)`})}," o ",4))),128)),s[1]||(s[1]=l("pre",{class:"bottom"},`      _.-._
   _.-'       '-._
  /   ~  ~   ~    \\
 /___________________\\


    `,-1))]))}},N=f(M,[["__scopeId","data-v-db1380af"]]),W=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"donats.md","filePath":"donats.md"}'),D={name:"donats.md"},j=Object.assign(D,{setup(r){return(a,t)=>(_(),o("div",null,[y(N)]))}});export{W as __pageData,j as default};
