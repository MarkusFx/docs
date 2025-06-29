import{C as a}from"./chunks/theme.DsSd0YCj.js";import{c as n,o as l,ag as e,G as t,k as s}from"./chunks/framework.BgId8OS5.js";const p=`<img src="/images/css/pepe-002.png" alt="Пример" />

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
`,h=`* {
    font-family: sans-serif;
}

img {
    float: left;
    margin: 0 15px 15px 0;
    width: 150px;
    height: auto;
}

.clearfix {
    clear: both;
}
`,r="",g=JSON.parse('{"title":"Обтекание","description":"","frontmatter":{"outline":[2,2]},"headers":[],"relativePath":"css/property/page_012.md","filePath":"css/property/page_012.md"}'),k={name:"css/property/page_012.md"},m=Object.assign(k,{setup(c){return(d,i)=>(l(),n("div",null,[i[0]||(i[0]=e(`<h1 id="обтекание" tabindex="-1">Обтекание <a class="header-anchor" href="#обтекание" aria-label="Permalink to &quot;Обтекание&quot;">​</a></h1><ul><li><strong><code>float</code></strong> - обтекание элемента другими элементами; <ul><li><strong><code>none</code></strong> - обтекание отключено (<em>по умолчанию</em>);</li><li><strong><code>left</code></strong> - элемент прижимается к левому краю, а текст обтекает справа;</li><li><strong><code>right</code></strong> - элемент прижимается к правому краю;</li></ul></li><li><strong><code>clear</code></strong> - запрещает элементу располагаться рядом с <strong><code>float</code></strong> элементами; <ul><li><strong><code>none</code></strong> - обтекание разрешено с любой стороны (<em>по умолчанию</em>);</li><li><strong><code>left</code></strong> - запретить обтекать справа (<em>т.е. <strong><code>float</code></strong> элемент будет слева</em>);</li><li><strong><code>right</code></strong> - запретить обтекать слева (<em>т.е. <strong><code>float</code></strong> элемент будет справа</em>);</li><li><strong><code>both</code></strong> - запретить обтекать со всех сторон;</li></ul></li></ul><p>Например. Изменим файл <strong><code>index.html</code></strong>:</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/images/css/pepe-002.png&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Пример&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Это пример текста, который обтекает картинку. Картинка выровнена по левому</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    краю, а текст располагается справа от неё и под ней, пока не закончится</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    место. Float позволяет создавать обтекание без сложной верстки.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;clearfix&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    consequatur corporis cupiditate explicabo laboriosam velit. Aliquid aperiam</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    architecto atque aut, esse illum magnam quae veniam voluptatem! Ab ducimus</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    impedit nihil!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Изменим файл <strong><code>styles.css</code></strong>:</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.clearfix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">both</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,6)),t(a,{html:s(p),css:s(h),js:s(r),height:"300px"},null,8,["html","css","js"])]))}});export{g as __pageData,m as default};
