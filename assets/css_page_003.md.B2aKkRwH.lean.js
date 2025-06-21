import{C as n}from"./chunks/theme.CSD8G9hb.js";import{c as t,o as p,ag as a,G as l,k as s}from"./chunks/framework.BgId8OS5.js";const e=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <p class="example_1">Параграф 1</p>
        <p class="example_2">Параграф 2</p>
        <p class="example_3">Параграф 3</p>
        <p class="example_4">Параграф 4</p>
    </body>
</html>
`,h=`.example_1 {
    color: red;
}

.example_2 {
    color: #ff0000;
}

.example_3 {
    color: rgb(255, 0, 0);
}

.example_4 {
    color: hsl(0, 100%, 50%);
}
`,k="",r=`<div class="box">Текст с фоном</div>
`,E=`.box {
    background-color: lightblue;
}
`,d="",g=`<p class="highlight">Текст с рамкой</p>
`,c=`.highlight {
    border: 2px solid; /* задаём толщину и стиль рамки */
    border-color: orange; /* задаём цвет рамки */
}
`,o="",y=`<div class="box_1">Блок</div>
<div class="box_2">Полупрозрачный блок</div>
`,b=`.box_1,
.box_2 {
    background: blue;
    color: white;
}

.box_2 {
    opacity: 1;
}

.box_2 {
    opacity: 0.5;
}
`,u="",m=`<p class="example-font-family">Пример текста с другим шрифтом</p>
`,F=`.example-font-family {
    font-family: Arial, sans-serif;
}
`,C="",v=`<p class="example-font-size">Текст увеличенного размера.</p>
`,B=`.example-font-size {
    font-size: 24px;
}
`,_="",x=`<p class="example-font-weight-1">Текст 1</p>
<p class="example-font-weight-2">Текст 2</p>
<p class="example-font-weight-3">Текст 3</p>
`,A=`.example-font-weight-1 {
    font-weight: bold;
}

.example-font-weight-2 {
    font-weight: 100;
}

.example-font-weight-3 {
    font-weight: 900;
}
`,D="",f=`<p class="example-font-style">Курсивный текст.</p>
`,q=`.example-font-style {
    font-style: italic;
}
`,T="",w=`<p class="example-line-height">
    Строка 1<br />
    Строка 2<br />
    Строка 3
</p>
`,P=`.example-line-height {
    line-height: 2;
}
`,j="",S=`<p class="example-letter-spacing">Растянутый текст</p>
`,I=`.example-letter-spacing {
    letter-spacing: 3px;
}
`,V="",R=`<p class="example-text-transform">Некоторый текст</p>
`,N=`.example-text-transform {
    text-transform: uppercase;
}
`,z="",O=`<p class="example-text-decoration">Подчёркнутый текст</p>
`,M=`.example-text-decoration {
    text-decoration: underline;
}
`,G="",K=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <p class="example_1">Параграф 1</p>
        <p class="example_2">Параграф 2</p>
        <p class="example_3">Параграф 3</p>
    </body>
</html>
`,L=`body {
    font-family: 'Oswald', sans-serif;
}
`,U="",J=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div>BLOCK 1</div>
        <div>BLOCK 2</div>
        <div>BLOCK 3</div>
    </body>
</html>
`,H=`body {
    font-family: 'Michroma', sans-serif;
}
`,Q="",W=`<div class="left">Выравнивание по левому краю</div>
<div class="right">Выравнивание по правому краю</div>
<div class="center">Центрированный текст</div>
<div class="justify">
    Выравнивание текста по ширине блока. Текст занимает всю ширину строки,
    пробелы между словами растягиваются.
</div>
`,X=`.left {
    text-align: left;
}

.right {
    text-align: right;
}

.center {
    text-align: center;
}

.justify {
    text-align: justify;
}
`,Y="",Z=`<ul class="custom-list-ul">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>

<ol class="custom-list-ol">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ol>
`,$=`.custom-list-ul {
    list-style-type: square;
}

.custom-list-ol {
    list-style-type: decimal-leading-zero;
}
`,ss="",is=`<ol class="pepe-img">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
    <li>Пункт 4</li>
</ol>
`,as=`.pepe-img {
    list-style-image: url('/images/css/pepe-002-icon.png');
}
`,ns="",ls=`<ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>

<ul class="custom-list">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
`,ts=`.custom-list {
    list-style-position: inside;
}
`,ps="",es=`<ul class="custom-list">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
`,hs=`.custom-list {
    list-style: square inside none;
}
`,ks="",rs=`<table class="border-table">
    <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
    </tr>
</table>
`,Es=`.border-table {
    border: 1px solid #333;
}

.border-table td {
    border: 1px solid #999;
}
`,ds="",gs=`<table class="collapse-table">
    <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
    </tr>
</table>
`,cs=`.collapse-table {
    border: 1px solid #333;
    border-collapse: collapse;
}

.collapse-table td {
    border: 1px solid #999;
}
`,os="",ys=`<table>
    <tr>
        <td class="align-top">Сверху</td>
        <td class="align-center">По центру</td>
        <td class="align-bottom">Снизу</td>
    </tr>
</table>
`,bs=`table {
    height: 100px;
    width: 300px;
    border-collapse: collapse;
}

td {
    border: 1px solid black;
}

.align-top {
    text-align: left;
    vertical-align: top;
}

.align-center {
    text-align: center;
    vertical-align: middle;
}

.align-bottom {
    text-align: right;
    vertical-align: bottom;
}
`,us="",ms=`<table class="spacing-table">
    <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
    </tr>
    <tr>
        <td>Ячейка 3</td>
        <td>Ячейка 4</td>
    </tr>
</table>
`,Fs=`.spacing-table {
    border: 1px solid #333;
    border-spacing: 10px 20px;
    border-collapse: separate;
}

.spacing-table td {
    border: 1px solid #666;
}
`,Cs="",vs=`<table>
    <tr>
        <td>Заполнено</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Заполнено</td>
    </tr>
</table>

<br />

<table class="empty-cells-table">
    <tr>
        <td>Заполнено</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Заполнено</td>
    </tr>
</table>
`,Bs=`table {
    border: 1px solid silver;
}

td {
    border: 1px solid black;
}

.empty-cells-table {
    empty-cells: hide;
}
`,_s="",xs=`<div class="content-box-example">content-box</div>

<div class="border-box-example">border-box</div>
`,As=`.content-box-example,
.border-box-example {
    width: 350px;
    height: 100px;
    padding: 20px;
    margin: 20px;
}

.content-box-example {
    border: 6px solid blue;
    background: lightblue;
    box-sizing: content-box;
}

.border-box-example {
    border: 5px solid green;
    background: lightgreen;
    box-sizing: border-box;
}
`,Ds="",fs=`<div class="box-padding">Я внутри с отступом!</div>
`,qs=`.box-padding {
    background: lightblue;
    padding: 20px;
    border: 2px solid blue;
}
.box-margin {
    background: lightgreen;
    margin: 20px;
    border: 2px solid green;
}
`,Ts="",ws=`<div class="box-margin">Я с внешним отступом!</div>
`,Ps=`.box-margin {
    background: lightgreen;
    margin: 20px;
    border: 2px solid green;
}
`,js="",zs=JSON.parse('{"title":"Свойства","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/page_003.md","filePath":"css/page_003.md"}'),Ss={name:"css/page_003.md"},Os=Object.assign(Ss,{setup(Is){return(Vs,i)=>(p(),t("div",null,[i[0]||(i[0]=a("",10)),l(n,{html:s(e),css:s(h),js:s(k),height:"200px"},null,8,["html","css","js"]),i[1]||(i[1]=a("",6)),l(n,{html:s(r),css:s(E),js:s(d),height:"100px"},null,8,["html","css","js"]),i[2]||(i[2]=a("",6)),l(n,{html:s(g),css:s(c),js:s(o),height:"100px"},null,8,["html","css","js"]),i[3]||(i[3]=a("",6)),l(n,{html:s(y),css:s(b),js:s(u),height:"100px"},null,8,["html","css","js"]),i[4]||(i[4]=a("",7)),l(n,{html:s(m),css:s(F),js:s(C),height:"100px"},null,8,["html","css","js"]),i[5]||(i[5]=a("",6)),l(n,{html:s(K),css:s(L),js:s(U),height:"160px"},null,8,["html","css","js"]),i[6]||(i[6]=a("",5)),l(n,{html:s(J),css:s(H),js:s(Q),height:"160px"},null,8,["html","css","js"]),i[7]||(i[7]=a("",6)),l(n,{html:s(v),css:s(B),js:s(_),height:"120px"},null,8,["html","css","js"]),i[8]||(i[8]=a("",6)),l(n,{html:s(x),css:s(A),js:s(D),height:"150px"},null,8,["html","css","js"]),i[9]||(i[9]=a("",6)),l(n,{html:s(f),css:s(q),js:s(T),height:"100px"},null,8,["html","css","js"]),i[10]||(i[10]=a("",6)),l(n,{html:s(w),css:s(P),js:s(j),height:"150px"},null,8,["html","css","js"]),i[11]||(i[11]=a("",6)),l(n,{html:s(S),css:s(I),js:s(V),height:"100px"},null,8,["html","css","js"]),i[12]||(i[12]=a("",6)),l(n,{html:s(R),css:s(N),js:s(z),height:"100px"},null,8,["html","css","js"]),i[13]||(i[13]=a("",6)),l(n,{html:s(O),css:s(M),js:s(G),height:"100px"},null,8,["html","css","js"]),i[14]||(i[14]=a("",6)),l(n,{html:s(W),css:s(X),js:s(Y),height:"160px"},null,8,["html","css","js"]),i[15]||(i[15]=a("",9)),l(n,{html:s(Z),css:s($),js:s(ss),height:"200px"},null,8,["html","css","js"]),i[16]||(i[16]=a("",6)),l(n,{html:s(is),css:s(as),js:s(ns),height:"300px"},null,8,["html","css","js"]),i[17]||(i[17]=a("",6)),l(n,{html:s(ls),css:s(ts),js:s(ps),height:"200px"},null,8,["html","css","js"]),i[18]||(i[18]=a("",6)),l(n,{html:s(es),css:s(hs),js:s(ks),height:"160px"},null,8,["html","css","js"]),i[19]||(i[19]=a("",7)),l(n,{html:s(rs),css:s(Es),js:s(ds),height:"120px"},null,8,["html","css","js"]),i[20]||(i[20]=a("",6)),l(n,{html:s(gs),css:s(cs),js:s(os),height:"120px"},null,8,["html","css","js"]),i[21]||(i[21]=a("",6)),l(n,{html:s(ms),css:s(Fs),js:s(Cs),height:"180px"},null,8,["html","css","js"]),i[22]||(i[22]=a("",6)),l(n,{html:s(ys),css:s(bs),js:s(us),height:"180px"},null,8,["html","css","js"]),i[23]||(i[23]=a("",6)),l(n,{html:s(vs),css:s(Bs),js:s(_s),height:"180px"},null,8,["html","css","js"]),i[24]||(i[24]=a("",7)),l(n,{html:s(fs),css:s(qs),js:s(Ts),height:"180px"},null,8,["html","css","js"]),i[25]||(i[25]=a("",8)),l(n,{html:s(ws),css:s(Ps),js:s(js),height:"180px"},null,8,["html","css","js"]),i[26]||(i[26]=a("",13)),l(n,{html:s(xs),css:s(As),js:s(Ds),height:"400px"},null,8,["html","css","js"]),i[27]||(i[27]=a("",4))]))}});export{zs as __pageData,Os as default};
