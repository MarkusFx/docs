import{C as a}from"./chunks/theme.DFy9G_q7.js";import{c as p,o as t,ag as n,G as l,k as s}from"./chunks/framework.BgId8OS5.js";const h=`<!doctype html>
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
`,e=`.example_1 {
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
`,F="",u=`<p class="example-font-family">Пример текста с другим шрифтом</p>
`,m=`.example-font-family {
    font-family: Arial, sans-serif;
}
`,C="",B=`<p class="example-font-size">Текст увеличенного размера.</p>
`,v=`.example-font-size {
    font-size: 24px;
}
`,x="",A=`<p class="example-font-weight-1">Текст 1</p>
<p class="example-font-weight-2">Текст 2</p>
<p class="example-font-weight-3">Текст 3</p>
`,_=`.example-font-weight-1 {
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
`,L="",G=`<!doctype html>
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
`,K=`body {
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
`,ps=`.custom-list {
    list-style-position: inside;
}
`,ts="",hs=`<ul class="custom-list">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>
`,es=`.custom-list {
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
`,Fs="",us=`<table class="spacing-table">
    <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
    </tr>
    <tr>
        <td>Ячейка 3</td>
        <td>Ячейка 4</td>
    </tr>
</table>
`,ms=`.spacing-table {
    border: 1px solid #333;
    border-spacing: 10px 20px;
    border-collapse: separate;
}

.spacing-table td {
    border: 1px solid #666;
}
`,Cs="",Bs=`<table>
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
`,vs=`table {
    border: 1px solid silver;
}

td {
    border: 1px solid black;
}

.empty-cells-table {
    empty-cells: hide;
}
`,xs="",As=`<div class="content-box-example">content-box</div>

<div class="border-box-example">border-box</div>
`,_s=`.content-box-example,
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
`,js="",Ss=`<div class="border-box">Пример с рамкой</div>
`,Is=`.border-box {
    padding: 20px;
    margin: 10px;
    border-top: 2px solid red;
    border-right: 4px dotted green;
    border-bottom: 3px double black;
    border-left: 5px groove orange;
    border-radius: 12px;
}
`,Vs="",Rs=`<div class="px-box">100px × 50px</div>
<div class="pt-box">72pt × 36pt</div>
<div class="cm-box">5cm × 2cm</div>
<div class="mm-box">50mm × 20mm</div>
<div class="in-box">2in × 1in</div>
<div class="pc-box">6pc × 3pc</div>
`,Ns=`.px-box {
    width: 100px;
    height: 50px;
    background: #4caf50;
    margin: 5px;
}

.cm-box {
    width: 5cm;
    height: 2cm;
    background: #2196f3;
    margin: 5px;
}

.mm-box {
    width: 50mm;
    height: 20mm;
    background: #ff9800;
    margin: 5px;
}

.in-box {
    width: 2in;
    height: 1in;
    background: #9c27b0;
    margin: 5px;
}

.pt-box {
    width: 72pt; /* 1 дюйм */
    height: 36pt;
    background: #e91e63;
    margin: 5px;
}

.pc-box {
    width: 6pc; /* 72pt = 6pc = 1 дюйм */
    height: 3pc;
    background: #607d8b;
    margin: 5px;
}
`,zs="",Os=`<div class="em-box">Шрифт 2em</div>
<div class="rem-box">Шрифт 2rem</div>
<div class="percent-box">50% ширины родителя</div>
<div class="vwvh-box">30vw × 10vh</div>
<div class="vmin-box">10vmin квадрат</div>
<div class="vmax-box">10vmax квадрат</div>
<div class="ch-box">20ch ширины</div>
<div class="ex-box">5ex высоты</div>
`,Ms=`body {
    font-size: 16px;
}

.em-box {
    font-size: 2em;
    background: #2196f3;
    margin: 5px;
    padding: 10px;
}

.rem-box {
    font-size: 2rem;
    background: #ff9800;
    margin: 5px;
    padding: 10px;
}

.percent-box {
    width: 50%;
    height: 50px;
    background: #4caf50;
    margin: 5px;
}

.vwvh-box {
    width: 30vw;
    height: 10vh;
    background: #9c27b0;
    margin: 5px;
}

.vmin-box {
    width: 10vmin;
    height: 10vmin;
    background: #e91e63;
    margin: 5px;
}

.vmax-box {
    width: 10vmax;
    height: 10vmax;
    background: #607d8b;
    margin: 5px;
}

.ch-box {
    width: 20ch;
    background: #795548;
    margin: 5px;
    padding: 10px;
}

.ex-box {
    font-size: 20px;
    height: 5ex;
    background: #3f51b5;
    margin: 5px;
    padding: 10px;
}
`,Ls="",Gs=`<div class="background-box">
    <p>Примерный пример...</p>
</div>
`,Ks=`body {
    background-image: url('/images/css/pepe-002.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 100px auto;
}

.background-box {
    width: 350px;
    height: 200px;
    border: 2px solid #333;
    padding: 20px;
    color: #fff;

    background-color: #5c73e7;
    background-image:
        url('/images/css/pepe-001.png'),
        linear-gradient(to right, #5c73e7, #00e5a4);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 150px auto;
}
`,Us="",Js=`<div class="box">Блок с тенью</div>
<div class="text">Текст с тенью</div>

<div class="animated-shadow"></div>
`,Hs=`.box {
    width: 200px;
    height: 100px;
    background: #fff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
}

.text {
    font-size: 32px;
    text-shadow: 3px 3px 5px #000;
    padding: 10px;
}
`,Qs="",Ws=`<div class="outlined-box">Блок с контуром</div>
<button class="button">Кнопка с контуром при наведении</button>
`,Xs=`.outlined-box {
    margin: 20px;
    width: 200px;
    height: 100px;
    background: #00e5a4;
    outline: 3px dashed #5c73e7;
    outline-offset: 5px;
}

.button:hover {
    outline: 3px solid #3e63dd;
    outline-offset: 2px;
}
`,Ys="",Zs=`<img src="/images/css/pepe-002.png" alt="Пример" />

<p>
    Это пример текста, который обтекает картинку. Картинка выровнена по левому
    краю, а текст располагается справа от неё и под ней, пока не закончится
    место. Float позволяет создавать обтекание без сложной верстки.
</p>

<p class="clearfix">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
    consequatur corporis cupiditate explicabo laboriosam velit. Aliquid aperiam
    architecto atque aut, esse illum magnam quae veniam voluptatem! Ab ducimus
    impedit nihil!
</p>
`,$s=`img {
    float: left;
    margin: 0 15px 15px 0;
    width: 150px;
    height: auto;
}

.clearfix {
    clear: both;
}
`,si="",ii=`<div class="scroll-box">
    <div class="content">
        Здесь содержимое, которое выходит за рамки контейнера, поэтому
        появляется прокрутка по вертикали и горизонтали.
    </div>
</div>
`,ai=`.scroll-box {
    width: 300px;
    height: 150px;
    border: 2px solid #333;
    overflow: auto;
    scroll-behavior: smooth;
    white-space: nowrap; /* без переноса слов на новую строку */
    padding: 10px;
}

.content {
    width: 600px;
    height: 300px;
    background: linear-gradient(45deg, #00e5a4, transparent);
}
`,ni="",li=`<div class="grad">Линейный градиент под углом -30°</div>
`,pi=`.grad {
    width: 300px;
    height: 150px;
    background-image: linear-gradient(-30deg, #9e63dd, #9c27b0 10%, #00e5a4);
    border: 1px solid #333;
}
`,ti="",hi=`<div class="rad-grad">Радиальный градиент</div>
`,ei=`.rad-grad {
    width: 300px;
    height: 150px;
    background-image: radial-gradient(
        circle at center,
        #00e5a4,
        #3e63dd,
        #9c27b0
    );
    border: 1px solid #333;
}
`,ki="",oi=JSON.parse('{"title":"Свойства","description":"","frontmatter":{"outline":[2,2]},"headers":[],"relativePath":"css/page_003.md","filePath":"css/page_003.md"}'),ri={name:"css/page_003.md"},yi=Object.assign(ri,{setup(Ei){return(di,i)=>(t(),p("div",null,[i[0]||(i[0]=n("",10)),l(a,{html:s(h),css:s(e),js:s(k),height:"200px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",6)),l(a,{html:s(r),css:s(E),js:s(d),height:"100px"},null,8,["html","css","js"]),i[2]||(i[2]=n("",6)),l(a,{html:s(g),css:s(c),js:s(o),height:"100px"},null,8,["html","css","js"]),i[3]||(i[3]=n("",6)),l(a,{html:s(y),css:s(b),js:s(F),height:"100px"},null,8,["html","css","js"]),i[4]||(i[4]=n("",7)),l(a,{html:s(u),css:s(m),js:s(C),height:"100px"},null,8,["html","css","js"]),i[5]||(i[5]=n("",6)),l(a,{html:s(G),css:s(K),js:s(U),height:"160px"},null,8,["html","css","js"]),i[6]||(i[6]=n("",5)),l(a,{html:s(J),css:s(H),js:s(Q),height:"160px"},null,8,["html","css","js"]),i[7]||(i[7]=n("",6)),l(a,{html:s(B),css:s(v),js:s(x),height:"120px"},null,8,["html","css","js"]),i[8]||(i[8]=n("",6)),l(a,{html:s(A),css:s(_),js:s(D),height:"150px"},null,8,["html","css","js"]),i[9]||(i[9]=n("",6)),l(a,{html:s(f),css:s(q),js:s(T),height:"100px"},null,8,["html","css","js"]),i[10]||(i[10]=n("",6)),l(a,{html:s(w),css:s(P),js:s(j),height:"150px"},null,8,["html","css","js"]),i[11]||(i[11]=n("",6)),l(a,{html:s(S),css:s(I),js:s(V),height:"100px"},null,8,["html","css","js"]),i[12]||(i[12]=n("",6)),l(a,{html:s(R),css:s(N),js:s(z),height:"100px"},null,8,["html","css","js"]),i[13]||(i[13]=n("",6)),l(a,{html:s(O),css:s(M),js:s(L),height:"100px"},null,8,["html","css","js"]),i[14]||(i[14]=n("",6)),l(a,{html:s(W),css:s(X),js:s(Y),height:"160px"},null,8,["html","css","js"]),i[15]||(i[15]=n("",9)),l(a,{html:s(Z),css:s($),js:s(ss),height:"200px"},null,8,["html","css","js"]),i[16]||(i[16]=n("",6)),l(a,{html:s(is),css:s(as),js:s(ns),height:"300px"},null,8,["html","css","js"]),i[17]||(i[17]=n("",6)),l(a,{html:s(ls),css:s(ps),js:s(ts),height:"200px"},null,8,["html","css","js"]),i[18]||(i[18]=n("",6)),l(a,{html:s(hs),css:s(es),js:s(ks),height:"160px"},null,8,["html","css","js"]),i[19]||(i[19]=n("",7)),l(a,{html:s(rs),css:s(Es),js:s(ds),height:"120px"},null,8,["html","css","js"]),i[20]||(i[20]=n("",6)),l(a,{html:s(gs),css:s(cs),js:s(os),height:"120px"},null,8,["html","css","js"]),i[21]||(i[21]=n("",6)),l(a,{html:s(us),css:s(ms),js:s(Cs),height:"180px"},null,8,["html","css","js"]),i[22]||(i[22]=n("",6)),l(a,{html:s(ys),css:s(bs),js:s(Fs),height:"180px"},null,8,["html","css","js"]),i[23]||(i[23]=n("",6)),l(a,{html:s(Bs),css:s(vs),js:s(xs),height:"180px"},null,8,["html","css","js"]),i[24]||(i[24]=n("",7)),l(a,{html:s(fs),css:s(qs),js:s(Ts),height:"180px"},null,8,["html","css","js"]),i[25]||(i[25]=n("",8)),l(a,{html:s(ws),css:s(Ps),js:s(js),height:"180px"},null,8,["html","css","js"]),i[26]||(i[26]=n("",13)),l(a,{html:s(As),css:s(_s),js:s(Ds),height:"400px"},null,8,["html","css","js"]),i[27]||(i[27]=n("",10)),l(a,{html:s(Ss),css:s(Is),js:s(Vs),height:"150px"},null,8,["html","css","js"]),i[28]||(i[28]=n("",6)),l(a,{html:s(Ws),css:s(Xs),js:s(Ys),height:"250px"},null,8,["html","css","js"]),i[29]||(i[29]=n("",7)),l(a,{html:s(Rs),css:s(Ns),js:s(zs),height:"500px"},null,8,["html","css","js"]),i[30]||(i[30]=n("",6)),l(a,{html:s(Os),css:s(Ms),js:s(Ls),height:"550px"},null,8,["html","css","js"]),i[31]||(i[31]=n("",6)),l(a,{html:s(Gs),css:s(Ks),js:s(Us),height:"350px"},null,8,["html","css","js"]),i[32]||(i[32]=n("",6)),l(a,{html:s(Js),css:s(Hs),js:s(Qs),height:"250px"},null,8,["html","css","js"]),i[33]||(i[33]=n("",6)),l(a,{html:s(Zs),css:s($s),js:s(si),height:"300px"},null,8,["html","css","js"]),i[34]||(i[34]=n("",6)),l(a,{html:s(ii),css:s(ai),js:s(ni),height:"250px"},null,8,["html","css","js"]),i[35]||(i[35]=n("",9)),l(a,{html:s(li),css:s(pi),js:s(ti),height:"250px"},null,8,["html","css","js"]),i[36]||(i[36]=n("",8)),l(a,{html:s(hi),css:s(ei),js:s(ki),height:"250px"},null,8,["html","css","js"])]))}});export{oi as __pageData,yi as default};
