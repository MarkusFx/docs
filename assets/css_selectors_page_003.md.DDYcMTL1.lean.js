import{C as a}from"./chunks/theme.CdBL7g63.js";import{c as l,o as e,ag as t,G as n,k as s}from"./chunks/framework.Drb80Ych.js";const p=`<!doctype html>
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
`,h=`input[placeholder] {
    border: 2px solid green;
}
`,k="",d=`<!doctype html>
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
`,r=`span[data-type='error'] {
    color: red;
    font-weight: bold;
}
`,E="",c=`<!doctype html>
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
`,o=`div[class^='card-'] {
    padding: 10px;
    border: 1px solid #ccc;
}
`,g="",y=`<!doctype html>
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
`,u=`p[data-id$='456'] {
    color: blue;
}
`,b="",m=`<!doctype html>
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
`,v=`span[title*='mess'] {
    font-weight: bold;
}
`,F="",x=JSON.parse('{"title":"Селекторы по атрибутам","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/selectors/page_003.md","filePath":"css/selectors/page_003.md"}'),C={name:"css/selectors/page_003.md"},D=Object.assign(C,{setup(_){return(q,i)=>(e(),l("div",null,[i[0]||(i[0]=t("",7)),n(a,{html:s(p),css:s(h),js:s(k),height:"150px"},null,8,["html","css","js"]),i[1]||(i[1]=t("",6)),n(a,{html:s(d),css:s(r),js:s(E),height:"150px"},null,8,["html","css","js"]),i[2]||(i[2]=t("",6)),n(a,{html:s(c),css:s(o),js:s(g),height:"150px"},null,8,["html","css","js"]),i[3]||(i[3]=t("",6)),n(a,{html:s(y),css:s(u),js:s(b),height:"150px"},null,8,["html","css","js"]),i[4]||(i[4]=t("",6)),n(a,{html:s(m),css:s(v),js:s(F),height:"150px"},null,8,["html","css","js"])]))}});export{x as __pageData,D as default};
