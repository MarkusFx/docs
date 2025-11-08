import{C as a}from"./chunks/theme.BPjpmMZO.js";import{c as t,o as k,ag as l,G as n,j as p,k as s,a as h}from"./chunks/framework.ZCaT2mdU.js";const e=`<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
`,E=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 10px;
}

.container {
    background: white;
    border: 1px dashed #ccc;
    display: flex;
}

.container div {
    width: 100px;
    height: 100px;
    margin: 20px;
    background: teal;
    color: white;
    border-radius: 5px;
}
`,r="",d=`<div class="controls">
    <div>
        <label for="direction">flex-direction:</label>
        <select id="direction">
            <option>row</option>
            <option>row-reverse</option>
            <option>column</option>
            <option>column-reverse</option>
        </select>
    </div>

    <div>
        <label for="wrap">flex-wrap:</label>
        <select id="wrap">
            <option>nowrap</option>
            <option selected>wrap</option>
            <option>wrap-reverse</option>
        </select>
    </div>

    <div>
        <label for="justify">justify-content:</label>
        <select id="justify">
            <option>flex-start</option>
            <option>center</option>
            <option>flex-end</option>
            <option>space-between</option>
            <option>space-around</option>
            <option>space-evenly</option>
        </select>
    </div>

    <div>
        <label for="alignItems">align-items:</label>
        <select id="alignItems">
            <option>stretch</option>
            <option>flex-start</option>
            <option>center</option>
            <option>flex-end</option>
            <option>baseline</option>
        </select>
    </div>

    <div>
        <label for="alignContent">align-content:</label>
        <select id="alignContent">
            <option>stretch</option>
            <option>flex-start</option>
            <option>center</option>
            <option>flex-end</option>
            <option>space-between</option>
            <option>space-around</option>
            <option>space-evenly</option>
        </select>
    </div>
</div>

<div class="flex-container" id="flex">
    <div class="item">BLOCK 1</div>
    <div class="item">BLOCK 2</div>
    <div class="item">BLOCK 3</div>
    <div class="item">BLOCK 4</div>
    <div class="item">BLOCK 5</div>
    <div class="item">BLOCK 6</div>
    <div class="item">BLOCK 7</div>
    <div class="item">BLOCK 8</div>
</div>
`,g=`body {
    font-family: sans-serif;
    padding: 20px;
    background: #f2f2f2;
}

.controls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}

select {
    width: 100%;
    padding: 5px;
}

.flex-container {
    display: flex;
    background: white;
    border: 2px dashed #ccc;
    height: 400px;
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    flex-wrap: wrap;
}

.item {
    padding: 10px;
    /*min-width: 100px;*/
    /*min-height: 80px;*/
    background: teal;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    border-radius: 6px;
}
`,y=`const flex = document.getElementById('flex')
const controls = ['direction', 'wrap', 'justify', 'alignItems', 'alignContent']

controls.forEach((id) => {
    document.getElementById(id).addEventListener('change', () => {
        flex.style.flexDirection = document.getElementById('direction').value
        flex.style.flexWrap = document.getElementById('wrap').value
        flex.style.justifyContent = document.getElementById('justify').value
        flex.style.alignItems = document.getElementById('alignItems').value
        flex.style.alignContent = document.getElementById('alignContent').value
    })
})
`,c=`<div class="controls">
    <div class="control-group">
        <h3>Элемент A</h3>
        <label for="orderA">order:</label>
        <input type="number" id="orderA" value="0" />
        <label for="growA">flex-grow:</label>
        <input type="number" id="growA" value="0" />
        <label for="shrinkA">flex-shrink:</label>
        <input type="number" id="shrinkA" value="1" />
        <label for="basisA">flex-basis:</label>
        <input type="text" id="basisA" value="auto" />
        <label for="alignA">align-self:</label>
        <select id="alignA">
            <option>auto</option>
            <option>flex-start</option>
            <option>center</option>
            <option>flex-end</option>
            <option>baseline</option>
            <option>stretch</option>
        </select>
    </div>

    <div class="control-group">
        <h3>Элемент B</h3>
        <label for="orderB">order:</label>
        <input type="number" id="orderB" value="0" />
        <label for="growB">flex-grow:</label>
        <input type="number" id="growB" value="0" />
        <label for="shrinkB">flex-shrink:</label>
        <input type="number" id="shrinkB" value="1" />
        <label for="basisB">flex-basis:</label>
        <input type="text" id="basisB" value="auto" />
        <label for="alignB">align-self:</label>
        <select id="alignB">
            <option>auto</option>
            <option>flex-start</option>
            <option>center</option>
            <option>flex-end</option>
            <option>baseline</option>
            <option>stretch</option>
        </select>
    </div>

    <div class="control-group">
        <h3>Элемент C</h3>
        <label for="orderC">order:</label>
        <input type="number" id="orderC" value="0" />
        <label for="growC">flex-grow:</label>
        <input type="number" id="growC" value="0" />
        <label for="shrinkC">flex-shrink:</label>
        <input type="number" id="shrinkC" value="1" />
        <label for="basisC">flex-basis:</label>
        <input type="text" id="basisC" value="auto" />
        <label for="alignC">align-self:</label>
        <select id="alignC">
            <option>auto</option>
            <option>flex-start</option>
            <option>center</option>
            <option>flex-end</option>
            <option>baseline</option>
            <option>stretch</option>
        </select>
    </div>
</div>

<div class="flex-container">
    <div class="item" id="itemA">A</div>
    <div class="item" id="itemB">B</div>
    <div class="item" id="itemC">C</div>
</div>
`,b=`body {
    font-family: sans-serif;
    padding: 20px;
    background: #f8f8f8;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.controls {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
}

.control-group {
    background: #fff;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    flex: 1;
    min-width: 100px;
}

label {
    font-weight: bold;
    display: block;
    margin-top: 10px;
}

input {
    width: 90%;
    padding: 5px;
}

select {
    width: 99%;
    padding: 5px;
}

.flex-container {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    background: white;
    border: 2px dashed #ccc;
    padding: 20px;
    height: 300px;
    box-sizing: border-box;
    width: 100%;
    max-width: 1000px;
    /*width: 550px;*/
    margin: auto;
}

.item {
    background: steelblue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 6px;
    height: 40%;
    margin: 5px;
    transition: all 0.3s ease;
    font-size: 1.5rem;
    min-width: 50px;
}

#itemA,
#itemB,
#itemC {
    min-width: 100px;
}

#itemA {
    height: 100px;
}

#itemB {
    height: 200px;
}

#itemC {
    height: 130px;
}

.info {
    text-align: center;
    font-size: 0.9rem;
    color: #555;
    margin-top: 10px;
}
`,F=`const updateItem = (prefix, elementId) => {
    const el = document.getElementById(elementId)
    el.style.order = document.getElementById('order' + prefix).value
    el.style.flexGrow = document.getElementById('grow' + prefix).value
    el.style.flexShrink = document.getElementById('shrink' + prefix).value
    el.style.flexBasis = document.getElementById('basis' + prefix).value
    el.style.alignSelf = document.getElementById('align' + prefix).value
}

const updateAll = () => {
    updateItem('A', 'itemA')
    updateItem('B', 'itemB')
    updateItem('C', 'itemC')
}

document.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateAll)
})

updateAll()
`,o=`<h3>row (по умолчанию)</h3>
<div class="demo row">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>row-reverse</h3>
<div class="demo row-reverse">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>column</h3>
<div class="demo column">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>column-reverse</h3>
<div class="demo column-reverse">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>
`,u=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    gap: 10px;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
}

.box {
    background: steelblue;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 4px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.row {
    flex-direction: row;
}

.row-reverse {
    flex-direction: row-reverse;
}

.column {
    flex-direction: column;
    height: 200px;
}

.column-reverse {
    flex-direction: column-reverse;
    height: 200px;
}
`,C=`const updateItem = (prefix, elementId) => {
    const el = document.getElementById(elementId)
    el.style.order = document.getElementById('order' + prefix).value
    el.style.flexGrow = document.getElementById('grow' + prefix).value
    el.style.flexShrink = document.getElementById('shrink' + prefix).value
    el.style.flexBasis = document.getElementById('basis' + prefix).value
    el.style.alignSelf = document.getElementById('align' + prefix).value
}

const updateAll = () => {
    updateItem('A', 'itemA')
    updateItem('B', 'itemB')
    updateItem('C', 'itemC')
}

document.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateAll)
})

updateAll()
`,m=`<h3>nowrap (по умолчанию)</h3>
<div class="demo nowrap">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
</div>

<h3>wrap (разрешить перенос)</h3>
<div class="demo wrap">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
</div>

<h3>wrap-reverse (перенос снизу вверх)</h3>
<div class="demo wrap-reverse">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
</div>
`,B=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
    margin-bottom: 30px;
}

.box {
    background: tomato;
    color: white;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nowrap {
    flex-wrap: nowrap;
    overflow-x: auto;
}

.wrap {
    flex-wrap: wrap;
}

.wrap-reverse {
    flex-wrap: wrap-reverse;
}
`,v=`const updateItem = (prefix, elementId) => {
    const el = document.getElementById(elementId)
    el.style.order = document.getElementById('order' + prefix).value
    el.style.flexGrow = document.getElementById('grow' + prefix).value
    el.style.flexShrink = document.getElementById('shrink' + prefix).value
    el.style.flexBasis = document.getElementById('basis' + prefix).value
    el.style.alignSelf = document.getElementById('align' + prefix).value
}

const updateAll = () => {
    updateItem('A', 'itemA')
    updateItem('B', 'itemB')
    updateItem('C', 'itemC')
}

document.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateAll)
})

updateAll()
`,x=`<h3>flex-start (по умолчанию)</h3>
<div class="demo flex-start">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>center</h3>
<div class="demo center">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>flex-end</h3>
<div class="demo flex-end">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>space-between</h3>
<div class="demo space-between">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>space-around</h3>
<div class="demo space-around">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>space-evenly</h3>
<div class="demo space-evenly">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>
`,A=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    flex-wrap: nowrap;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
    margin-bottom: 10px;
    align-items: center;
    gap: 10px;
}

.box {
    background: seagreen;
    color: white;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 50px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex-start {
    justify-content: flex-start;
}
.center {
    justify-content: center;
}
.flex-end {
    justify-content: flex-end;
}
.space-between {
    justify-content: space-between;
}
.space-around {
    justify-content: space-around;
}
.space-evenly {
    justify-content: space-evenly;
}
`,f=`const updateItem = (prefix, elementId) => {
    const el = document.getElementById(elementId)
    el.style.order = document.getElementById('order' + prefix).value
    el.style.flexGrow = document.getElementById('grow' + prefix).value
    el.style.flexShrink = document.getElementById('shrink' + prefix).value
    el.style.flexBasis = document.getElementById('basis' + prefix).value
    el.style.alignSelf = document.getElementById('align' + prefix).value
}

const updateAll = () => {
    updateItem('A', 'itemA')
    updateItem('B', 'itemB')
    updateItem('C', 'itemC')
}

document.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateAll)
})

updateAll()
`,D=`<h3>stretch (по умолчанию)</h3>
<div class="demo stretch">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>flex-start (по верху)</h3>
<div class="demo flex-start">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>center (по центру)</h3>
<div class="demo center">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>flex-end (по низу)</h3>
<div class="demo flex-end">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>baseline (по базовой линии)</h3>
<div class="demo baseline">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>
`,q=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    justify-content: center;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    height: 120px;
}

.box {
    background: darkorange;
    color: white;
    padding: 10px;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 80px;
    margin: 5px;
}

.stretch {
    align-items: stretch;
}

.flex-start {
    align-items: flex-start;
}

.center {
    align-items: center;
}

.flex-end {
    align-items: flex-end;
}

.baseline {
    align-items: baseline;
}

.baseline .box:nth-child(1) {
    font-size: 1rem;
}

.baseline .box:nth-child(2) {
    font-size: 1.5rem;
}

.baseline .box:nth-child(3) {
    font-size: 2rem;
}
`,w=`const updateItem = (prefix, elementId) => {
    const el = document.getElementById(elementId)
    el.style.order = document.getElementById('order' + prefix).value
    el.style.flexGrow = document.getElementById('grow' + prefix).value
    el.style.flexShrink = document.getElementById('shrink' + prefix).value
    el.style.flexBasis = document.getElementById('basis' + prefix).value
    el.style.alignSelf = document.getElementById('align' + prefix).value
}

const updateAll = () => {
    updateItem('A', 'itemA')
    updateItem('B', 'itemB')
    updateItem('C', 'itemC')
}

document.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateAll)
})

updateAll()
`,_=`<h3>stretch (по умолчанию)</h3>
<div class="demo stretch">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>flex-start (по верху)</h3>
<div class="demo flex-start">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>center (по центру)</h3>
<div class="demo center">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>flex-end (по низу)</h3>
<div class="demo flex-end">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>space-between</h3>
<div class="demo space-between">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>space-around</h3>
<div class="demo space-around">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>

<h3>space-evenly</h3>
<div class="demo space-evenly">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
    <div class="box">D</div>
    <div class="box">E</div>
    <div class="box">F</div>
    <div class="box">G</div>
    <div class="box">H</div>
</div>
`,I=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    flex-wrap: wrap;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
    height: 240px;
    align-content: stretch;
}

.box {
    background: slateblue;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.stretch {
    align-content: stretch;
}
.flex-start {
    align-content: flex-start;
}
.center {
    align-content: center;
}
.flex-end {
    align-content: flex-end;
}
.space-between {
    align-content: space-between;
}
.space-around {
    align-content: space-around;
}
.space-evenly {
    align-content: space-evenly;
}
`,j=`const updateItem = (prefix, elementId) => {
    const el = document.getElementById(elementId)
    el.style.order = document.getElementById('order' + prefix).value
    el.style.flexGrow = document.getElementById('grow' + prefix).value
    el.style.flexShrink = document.getElementById('shrink' + prefix).value
    el.style.flexBasis = document.getElementById('basis' + prefix).value
    el.style.alignSelf = document.getElementById('align' + prefix).value
}

const updateAll = () => {
    updateItem('A', 'itemA')
    updateItem('B', 'itemB')
    updateItem('C', 'itemC')
}

document.querySelectorAll('input, select').forEach((input) => {
    input.addEventListener('input', updateAll)
})

updateAll()
`,T=`<h3>По умолчанию (order: 0)</h3>
<div class="demo">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>С заданным порядком</h3>
<div class="demo order-demo">
    <div class="box a">A (order: 3)</div>
    <div class="box b">B (order: 1)</div>
    <div class="box c">C (order: 2)</div>
</div>
`,S=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    gap: 10px;
    background: white;
    border: 1px dashed #ccc;
    padding: 20px;
    margin-bottom: 30px;
    height: auto;
}

.box {
    background: mediumseagreen;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.order-demo .a {
    order: 3;
}
.order-demo .b {
    order: 1;
}
.order-demo .c {
    order: 2;
}
`,P="",z=`<h3>По умолчанию (flex-grow: 0)</h3>
<div class="demo">
    <div class="box fixed-width">A</div>
    <div class="box fixed-width">B</div>
    <div class="box fixed-width">C</div>
</div>

<h3>С ростом: A(1), B(2), C(3)</h3>
<div class="demo grow-demo">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
</div>
`,G=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
}

.box {
    background: #ff8c00;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.grow-demo .a {
    flex-grow: 1;
}
.grow-demo .b {
    flex-grow: 2;
}
.grow-demo .c {
    flex-grow: 3;
}

.fixed-width {
    width: 80px;
}
`,V="",N=`<h3>Без сжатия (flex-shrink: 0)</h3>
<div class="demo no-shrink">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>С сжатием: A(1), B(2), C(3)</h3>
<div class="demo shrink-demo">
    <div class="box a">A</div>
    <div class="box b">B</div>
    <div class="box c">C</div>
</div>
`,R=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
    width: 400px;
}

.box {
    background: #007acc;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    width: 200px;
    flex-shrink: 1;
}

.no-shrink .box {
    flex-shrink: 0;
}

.shrink-demo .a {
    flex-shrink: 1;
}
.shrink-demo .b {
    flex-shrink: 2;
}
.shrink-demo .c {
    flex-shrink: 3;
}
`,H="",L=`<h3>По умолчанию (flex-basis: auto)</h3>
<div class="demo default-basis">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>С заданной базовой шириной</h3>
<div class="demo custom-basis">
    <div class="box a">A (100px)</div>
    <div class="box b">B (150px)</div>
    <div class="box c">C (200px)</div>
</div>
`,K=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
}

.box {
    background: #8a2be2;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.default-basis .box {
    flex-basis: auto;
}

.custom-basis .a {
    flex-basis: 100px;
}

.custom-basis .b {
    flex-basis: 150px;
}

.custom-basis .c {
    flex-basis: 200px;
}
`,O="",J=`<h3>По умолчанию (flex: 0 1 auto)</h3>
<div class="demo default-flex">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
</div>

<h3>Сокращённая запись: grow, shrink, basis</h3>
<div class="demo custom-flex">
    <div class="box a">A (1 1 100px)</div>
    <div class="box b">B (2 1 150px)</div>
    <div class="box c">C (1 2 200px)</div>
</div>
`,Z=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
}

.box {
    background: #e91e63;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.default-flex .box {
    flex: 0 1 auto;
}

.custom-flex .a {
    flex: 1 1 100px;
}

.custom-flex .b {
    flex: 2 1 150px;
}

.custom-flex .c {
    flex: 1 2 200px;
}
`,W="",Y=`<h3>Разные значения: stretch, flex-start, flex-end</h3>
<div class="demo">
    <div class="box a">stretch</div>
    <div class="box b">start</div>
    <div class="box c">end</div>
    <div class="box d">center</div>
    <div class="box e">auto</div>
</div>

<h3>baseline</h3>
<div class="demo">
    <div class="box small" style="align-self: baseline">A</div>
    <div class="box large" style="align-self: baseline">B</div>
</div>
`,X=`body {
    font-family: sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.demo {
    display: flex;
    background: white;
    border: 1px dashed #ccc;
    padding: 10px;
    margin-bottom: 30px;
    height: 200px;
    align-items: stretch;
}

.box {
    background: #3f51b5;
    color: white;
    font-size: 1rem;
    text-align: center;
    border-radius: 4px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 10px;
}

.a {
    align-self: stretch;
}

.b {
    align-self: flex-start;
}

.c {
    align-self: flex-end;
}

.d {
    align-self: center;
}

.e {
    align-self: auto;
}

.small {
    font-size: 1rem;
    height: auto;
}

.large {
    font-size: 4rem;
    height: auto;
}
`,U="",as=JSON.parse('{"title":"Flexbox","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"css/layout/page_007.md","filePath":"css/layout/page_007.md"}'),Q={name:"css/layout/page_007.md"},ns=Object.assign(Q,{setup(M){return($,i)=>(k(),t("div",null,[i[0]||(i[0]=l("",7)),n(a,{html:s(e),css:s(E),js:s(r),height:"200px"},null,8,["html","css","js"]),i[1]||(i[1]=l("",5)),n(a,{html:s(o),css:s(u),js:s(C),height:"950px"},null,8,["html","css","js"]),i[2]||(i[2]=l("",4)),n(a,{html:s(m),css:s(B),js:s(v),height:"750px"},null,8,["html","css","js"]),i[3]||(i[3]=l("",4)),n(a,{html:s(x),css:s(A),js:s(f),height:"950px"},null,8,["html","css","js"]),i[4]||(i[4]=l("",4)),n(a,{html:s(D),css:s(q),js:s(w),height:"1100px"},null,8,["html","css","js"]),i[5]||(i[5]=l("",4)),n(a,{html:s(_),css:s(I),js:s(j),height:"800px"},null,8,["html","css","js"]),i[6]||(i[6]=p("h3",{id:"интерактивныи-пример",tabindex:"-1"},[h("Интерактивный пример "),p("a",{class:"header-anchor",href:"#интерактивныи-пример","aria-label":'Permalink to "Интерактивный пример"'},"​")],-1)),n(a,{html:s(d),css:s(g),js:s(y),height:"600px"},null,8,["html","css","js"]),i[7]||(i[7]=l("",5)),n(a,{html:s(T),css:s(S),js:s(P),height:"450px"},null,8,["html","css","js"]),i[8]||(i[8]=l("",4)),n(a,{html:s(z),css:s(G),js:s(V),height:"420px"},null,8,["html","css","js"]),i[9]||(i[9]=l("",4)),n(a,{html:s(N),css:s(R),js:s(H),height:"420px"},null,8,["html","css","js"]),i[10]||(i[10]=l("",4)),n(a,{html:s(L),css:s(K),js:s(O),height:"420px"},null,8,["html","css","js"]),i[11]||(i[11]=l("",4)),n(a,{html:s(J),css:s(Z),js:s(W),height:"420px"},null,8,["html","css","js"]),i[12]||(i[12]=l("",4)),n(a,{html:s(Y),css:s(X),js:s(U),height:"680px"},null,8,["html","css","js"]),i[13]||(i[13]=p("h3",{id:"интерактивныи-пример-1",tabindex:"-1"},[h("Интерактивный пример "),p("a",{class:"header-anchor",href:"#интерактивныи-пример-1","aria-label":'Permalink to "Интерактивный пример"'},"​")],-1)),n(a,{html:s(c),css:s(b),js:s(F),height:"750px"},null,8,["html","css","js"])]))}});export{as as __pageData,ns as default};
