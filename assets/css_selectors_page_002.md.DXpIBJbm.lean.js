import{C as a}from"./chunks/theme.CVRE9yEk.js";import{c as t,o as p,ag as n,G as l,k as s}from"./chunks/framework.BgId8OS5.js";const e=`<!doctype html>
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
`,h=`.container p {
    color: blue;
}
`,k="",E=`<!doctype html>
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
`,r=`.card > p {
    color: blue;
    font-weight: bold;
}
`,d="",c=`<!doctype html>
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
`,g=`h2 + p {
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
        <h2>Заголовок</h2>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
        <p>Параграф 3</p>
        <div>
            <p>Параграф 4</p>
        </div>
    </body>
</html>
`,b=`h2 ~ p {
    color: green;
}
`,m="",C=JSON.parse('{"title":"Комбинированные селекторы","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/selectors/page_002.md","filePath":"css/selectors/page_002.md"}'),u={name:"css/selectors/page_002.md"},F=Object.assign(u,{setup(v){return(A,i)=>(p(),t("div",null,[i[0]||(i[0]=n("",7)),l(a,{html:s(e),css:s(h),js:s(k),height:"250px"},null,8,["html","css","js"]),i[1]||(i[1]=n("",6)),l(a,{html:s(E),css:s(r),js:s(d),height:"200px"},null,8,["html","css","js"]),i[2]||(i[2]=n("",6)),l(a,{html:s(c),css:s(g),js:s(o),height:"250px"},null,8,["html","css","js"]),i[3]||(i[3]=n("",6)),l(a,{html:s(y),css:s(b),js:s(m),height:"250px"},null,8,["html","css","js"])]))}});export{C as __pageData,F as default};
