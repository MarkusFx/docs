import{C as n}from"./chunks/theme.D9K1gJ90.js";import{c as l,o as p,ag as a,G as t,k as s}from"./chunks/framework.BgId8OS5.js";const e=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>Заголовок</h1>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
        <p>Параграф 3</p>
    </body>
</html>
`,h=`p {
    color: blue;
}
`,k="",r=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1 class="orange-back">Заголовок</h1>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
        <p class="orange-back">Параграф 3</p>
    </body>
</html>
`,E=`.orange-back {
    background: orange;
}
`,d="",g=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>Заголовок</h1>
        <p id="green-text">Параграф 1</p>
        <p id="red-text">Параграф 2</p>
        <p>Параграф 3</p>
    </body>
</html>
`,c=`#green-text {
    color: green;
}

#red-text {
    color: red;
}
`,o="",y=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>Заголовок</h1>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
        <p>Параграф 3</p>
    </body>
</html>
`,b=`* {
    color: blueviolet;
}
`,u="",m=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>Заголовок 1</h1>
        <h2>Заголовок 2</h2>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
    </body>
</html>
`,v=`h1,
h2 {
    background: #a8b1ff;
}
`,F="",C=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div class="container">
            <p>Параграф 1</p>
            <div>Блок 1</div>
            <p>Параграф 2</p>
        </div>
        <div>
            <p>Параграф 3</p>
            <div>Блок 2</div>
            <p>Параграф 4</p>
        </div>
    </body>
</html>
`,_=`.container p {
    color: blue;
}
`,A="",D=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div class="card">
            <h3>Заголовок карточки</h3>
            <p>Описание карточки</p>
            <div>
                <p>Футер карточки</p>
            </div>
            <p>(дата)</p>
        </div>
    </body>
</html>
`,B=`.card > p {
    color: blue;
    font-weight: bold;
}
`,T="",q=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h2>Заголовок</h2>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
        <p>Параграф 3</p>
    </body>
</html>
`,x=`h2 + p {
    color: red;
}
`,f="",P=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h2>Заголовок</h2>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
        <p>Параграф 3</p>
        <div>
            <p>Параграф 4</p>
        </div>
    </body>
</html>
`,S=`h2 ~ p {
    color: green;
}
`,j="",w=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <input type="text" placeholder="Имя" />
        <input type="text" />
        <input type="text" placeholder="Возраст" />
    </body>
</html>
`,V=`input[placeholder] {
    border: 2px solid green;
}
`,I="",N=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <span data-type="error">Ошибка</span>
        <span data-type="success">Успешно</span>
        <span data-type="error">Ещё одна ошибка</span>
    </body>
</html>
`,R=`span[data-type='error'] {
    color: red;
    font-weight: bold;
}
`,U="",$=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <div class="card-primary">Карточка 1</div>
        <div class="card-secondary">Карточка 2</div>
    </body>
</html>
`,z=`div[class^='card-'] {
    padding: 10px;
    border: 1px solid #ccc;
}
`,O="",G=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <p data-id="post-123">Пост</p>
        <p data-id="user-456">Пользователь</p>
        <p data-id="123456">Дата</p>
    </body>
</html>
`,J=`p[data-id$='456'] {
    color: blue;
}
`,H="",K=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <span title="important-message">Важное</span>
        <span title="regular-message">Обычное</span>
        <span title="nt-important">Не важное</span>
    </body>
</html>
`,L=`span[title*='mess'] {
    font-weight: bold;
}
`,M="",Q=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <button class="btn">Нажми меня</button>
    </body>
</html>
`,W=`.btn:hover {
    background: orange;
    cursor: pointer;
}
`,X="",Y=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <input type="text" placeholder="Введите текст" />
    </body>
</html>
`,Z=`input:focus {
    border: 2px solid blue;
    outline: none;
}
`,ss="",is=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <button class="btn">Нажми меня</button>
    </body>
</html>
`,as=`.btn:active {
    background: red;
}
`,ns="",ts=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <button disabled>Недоступная кнопка</button>
    </body>
</html>
`,ls=`button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
`,ps="",es=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
        </ul>
    </body>
</html>
`,hs=`li:first-child {
    font-weight: bold;
}
`,ks="",rs=`<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <title>Пример</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <table>
            <tr>
                <td>Строка 1</td>
            </tr>
            <tr>
                <td>Строка 2</td>
            </tr>
            <tr>
                <td>Строка 3</td>
            </tr>
        </table>
    </body>
</html>
`,Es=`tr:nth-child(2) {
    background: lightgray;
}
`,ds="",gs=`<p class="note">Это важная заметка.</p>
`,cs=`.note::before {
    content: 'Внимание! ';
    color: red;
}
`,os="",ys=`<p class="note">Это важная заметка.</p>
`,bs=`.note::after {
    content: ' Спасибо за внимание!';
    color: green;
}
`,us="",ms=`<p>Заголовок параграфа начинается с большой буквы.</p>
`,vs=`p::first-letter {
    font-size: 2em;
    color: red;
    font-weight: bold;
}
`,Fs="",Cs=`<p>
    Это текст с несколькими строками. При уменьшении ширины окна можно увидеть,
    как стилизуется только первая строка текста, а остальные - нет.
</p>
`,_s=`p::first-line {
    background: #a8b1ff;
    text-transform: uppercase;
}
`,As="",Ds=`<p style="color: red">Некоторый текст</p>
`,Bs=`p {
    color: green;
}
`,Ts="",qs=`<p style="color: red">Некоторый текст</p>
`,xs=`p {
    color: green !important;
}
`,fs="",Is=JSON.parse('{"title":"Селекторы","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/page_002.md","filePath":"css/page_002.md"}'),Ps={name:"css/page_002.md"},Ns=Object.assign(Ps,{setup(Ss){return(js,i)=>(p(),l("div",null,[i[0]||(i[0]=a("",10)),t(n,{html:s(e),css:s(h),js:s(k),height:"250px"},null,8,["html","css","js"]),i[1]||(i[1]=a("",6)),t(n,{html:s(r),css:s(E),js:s(d),height:"250px"},null,8,["html","css","js"]),i[2]||(i[2]=a("",6)),t(n,{html:s(g),css:s(c),js:s(o),height:"250px"},null,8,["html","css","js"]),i[3]||(i[3]=a("",6)),t(n,{html:s(y),css:s(b),js:s(u),height:"250px"},null,8,["html","css","js"]),i[4]||(i[4]=a("",5)),t(n,{html:s(m),css:s(v),js:s(F),height:"250px"},null,8,["html","css","js"]),i[5]||(i[5]=a("",7)),t(n,{html:s(C),css:s(_),js:s(A),height:"250px"},null,8,["html","css","js"]),i[6]||(i[6]=a("",6)),t(n,{html:s(D),css:s(B),js:s(T),height:"200px"},null,8,["html","css","js"]),i[7]||(i[7]=a("",6)),t(n,{html:s(q),css:s(x),js:s(f),height:"250px"},null,8,["html","css","js"]),i[8]||(i[8]=a("",6)),t(n,{html:s(P),css:s(S),js:s(j),height:"250px"},null,8,["html","css","js"]),i[9]||(i[9]=a("",7)),t(n,{html:s(w),css:s(V),js:s(I),height:"150px"},null,8,["html","css","js"]),i[10]||(i[10]=a("",6)),t(n,{html:s(N),css:s(R),js:s(U),height:"150px"},null,8,["html","css","js"]),i[11]||(i[11]=a("",6)),t(n,{html:s($),css:s(z),js:s(O),height:"150px"},null,8,["html","css","js"]),i[12]||(i[12]=a("",6)),t(n,{html:s(G),css:s(J),js:s(H),height:"150px"},null,8,["html","css","js"]),i[13]||(i[13]=a("",6)),t(n,{html:s(K),css:s(L),js:s(M),height:"150px"},null,8,["html","css","js"]),i[14]||(i[14]=a("",7)),t(n,{html:s(Q),css:s(W),js:s(X),height:"150px"},null,8,["html","css","js"]),i[15]||(i[15]=a("",6)),t(n,{html:s(Y),css:s(Z),js:s(ss),height:"150px"},null,8,["html","css","js"]),i[16]||(i[16]=a("",6)),t(n,{html:s(is),css:s(as),js:s(ns),height:"150px"},null,8,["html","css","js"]),i[17]||(i[17]=a("",6)),t(n,{html:s(ts),css:s(ls),js:s(ps),height:"150px"},null,8,["html","css","js"]),i[18]||(i[18]=a("",6)),t(n,{html:s(es),css:s(hs),js:s(ks),height:"150px"},null,8,["html","css","js"]),i[19]||(i[19]=a("",6)),t(n,{html:s(rs),css:s(Es),js:s(ds),height:"150px"},null,8,["html","css","js"]),i[20]||(i[20]=a("",7)),t(n,{html:s(gs),css:s(cs),js:s(os),height:"100px"},null,8,["html","css","js"]),i[21]||(i[21]=a("",6)),t(n,{html:s(ys),css:s(bs),js:s(us),height:"100px"},null,8,["html","css","js"]),i[22]||(i[22]=a("",6)),t(n,{html:s(ms),css:s(vs),js:s(Fs),height:"100px"},null,8,["html","css","js"]),i[23]||(i[23]=a("",6)),t(n,{html:s(Cs),css:s(_s),js:s(As),height:"150px"},null,8,["html","css","js"]),i[24]||(i[24]=a("",6)),t(n,{html:s(Ds),css:s(Bs),js:s(Ts),height:"100px"},null,8,["html","css","js"]),i[25]||(i[25]=a("",4)),t(n,{html:s(qs),css:s(xs),js:s(fs),height:"100px"},null,8,["html","css","js"]),i[26]||(i[26]=a("",6))]))}});export{Is as __pageData,Ns as default};
