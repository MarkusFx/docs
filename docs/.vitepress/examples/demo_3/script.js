document.addEventListener('DOMContentLoaded', () => {
    // connections с цветом для каждой связи
    const connections = {
        html: [{ id: 'css', color: 'highlight-next', lineId: 'tests-css' }],
        css: [
            { id: 'html', color: 'highlight-prev', lineId: 'tests-css' },
            { id: 'sass', color: 'highlight-next', lineId: 'css-sass' },
            { id: 'scss', color: 'highlight-next', lineId: 'css-scss' },
            { id: 'less', color: 'highlight-next', lineId: 'css-less' },
            {
                id: 'javascript',
                color: 'highlight-next',
                lineId: 'css-javascript',
            },
        ],
        javascript: [
            { id: 'css', color: 'highlight-prev', lineId: 'css-javascript' },
            {
                id: 'typescript',
                color: 'highlight-next',
                lineId: 'javascript-typescript',
            },
            {
                id: 'react',
                color: 'highlight-next',
                lineId: 'javascript-react',
            },
            { id: 'jest', color: 'highlight-other', lineId: 'javascript-jest' },
            {
                id: 'vitest',
                color: 'highlight-next',
                lineId: 'javascript-vitest',
            },
            { id: 'gsap', color: 'highlight-other', lineId: 'javascript-gsap' },
            {
                id: 'socketio',
                color: 'highlight-next',
                lineId: 'javascript-socketio',
            },
            {
                id: 'nodejs',
                color: 'highlight-next',
                lineId: 'javascript-nodejs',
            },
            {
                id: 'threejs',
                color: 'highlight-next',
                lineId: 'javascript-threejs',
            },
            {
                id: 'vuejs',
                color: 'highlight-next',
                lineId: 'javascript-vuejs',
            },
            {
                id: 'angularjs',
                color: 'highlight-next',
                lineId: 'javascript-angularjs',
            },
            {
                id: 'electron',
                color: 'highlight-next',
                lineId: 'javascript-electron',
            },
            {
                id: 'gsap',
                color: 'highlight-next',
                lineId: 'javascript-gsap',
            },
            {
                id: 'jest',
                color: 'highlight-next',
                lineId: 'javascript-jest',
            },
        ],
    }

    document.querySelectorAll('.node').forEach((node) => {
        node.addEventListener('mouseenter', () => {
            const id = node.id
            node.classList.add('highlight-self')
            ;(connections[id] || []).forEach(({ id: cid, color, lineId }) => {
                const cn = document.getElementById(cid)
                if (cn) cn.classList.add(color)

                if (lineId) {
                    const line = document.getElementById(lineId)
                    if (line) line.classList.add('highlight-line')
                }
            })
        })

        node.addEventListener('mouseleave', () => {
            const id = node.id
            node.classList.remove('highlight-self')
            ;(connections[id] || []).forEach(({ id: cid, color, lineId }) => {
                const cn = document.getElementById(cid)
                if (cn) cn.classList.remove(color)

                if (lineId) {
                    const line = document.getElementById(lineId)
                    if (line) line.classList.remove('highlight-line')
                }
            })
        })
    })
})

function connectLShape(fromId, toId, lineId) {
    const fromEl = document.getElementById(fromId).getBoundingClientRect()
    const toEl = document.getElementById(toId).getBoundingClientRect()
    const svg = document.querySelector('svg.lines')
    const svgRect = svg.getBoundingClientRect()

    const x1 = fromEl.right - svgRect.left
    const y1 = fromEl.top + fromEl.height / 2 - svgRect.top

    const x2 = toEl.left - svgRect.left
    const y2 = toEl.top + toEl.height / 2 - svgRect.top

    const midX = (x1 + x2) / 2

    const polyline = document.getElementById(lineId)
    polyline.setAttribute(
        'points',
        `${x1},${y1} ${midX},${y1} ${midX},${y2} ${x2},${y2}`,
    )
}

function connectZigZagDown(fromId, toId, lineId, offset = 25) {
    const fromEl = document.getElementById(fromId).getBoundingClientRect()
    const toEl = document.getElementById(toId).getBoundingClientRect()
    const svg = document.querySelector('svg.lines')
    const svgRect = svg.getBoundingClientRect()

    // Стартовая точка: нижний центр from
    const x1 = fromEl.left + fromEl.width / 2 - svgRect.left
    const y1 = fromEl.bottom - svgRect.top

    // Конечная точка: левый центр to
    const x2 = toEl.left - svgRect.left
    const y2 = toEl.top + toEl.height - svgRect.top

    // Первая точка ниже from
    const yMid1 = y1 + offset

    // Горизонтальный отрезок влево
    const xMid = Math.min(x1, x2) - offset

    // Следующий вертикальный отрезок (ниже to)
    const yMid2 = y2 - offset

    // Точки маршрута
    const points = [
        `${x1},${y1}`, // низ from
        `${x1},${yMid1}`, // вниз
        `${xMid},${yMid1}`, // влево
        `${xMid},${yMid2}`, // вниз
        `${x2},${yMid2}`, // вправо
    ].join(' ')

    const polyline = document.getElementById(lineId)
    polyline.setAttribute('points', points)
}

function connectZigZagUp(fromId, toId, lineId, offset = 25) {
    const fromEl = document.getElementById(fromId).getBoundingClientRect()
    const toEl = document.getElementById(toId).getBoundingClientRect()
    const svg = document.querySelector('svg.lines')
    const svgRect = svg.getBoundingClientRect()

    // Точка старта: центр-верх блока from
    const x1 = fromEl.left + fromEl.width / 2 - svgRect.left
    const y1 = fromEl.top - svgRect.top

    // Целевая точка: центр-левая сторона блока to
    const x2 = toEl.left - svgRect.left
    const y2 = toEl.top + toEl.height / 2 - svgRect.top

    // 1. вверх от from
    const yMid1 = y1 - offset

    // 2. влево
    const xMid = Math.min(x1, x2) - offset

    // 3. вверх до уровня центра to
    const yMid2 = y2

    // Рисуем маршрут
    const points = [
        `${x1},${y1}`, // из центра-верха from
        `${x1},${yMid1}`, // вверх
        `${xMid},${yMid1}`, // влево
        `${xMid},${yMid2}`, // вверх до уровня центра to
        `${x2},${yMid2}`, // вправо в центр-лево блока to
    ].join(' ')

    const polyline = document.getElementById(lineId)
    polyline.setAttribute('points', points)
}

function redrawLines() {
    connectLShape('html', 'css', 'tests-css')
    connectLShape('css', 'javascript', 'css-javascript')
    connectLShape('javascript', 'typescript', 'javascript-typescript')
    connectLShape('javascript', 'react', 'javascript-react')
    connectLShape('javascript', 'nodejs', 'javascript-nodejs')
    connectLShape('javascript', 'threejs', 'javascript-threejs')
    connectLShape('nodejs', 'express', 'nodejs-express')
    connectLShape('nodejs', 'nestjs', 'nodejs-nestjs')
    connectLShape('javascript', 'vuejs', 'javascript-vuejs')
    connectLShape('javascript', 'angularjs', 'javascript-angularjs')
    connectLShape('javascript', 'electron', 'javascript-electron')
    connectLShape('react', 'nextjs', 'react-nextjs')
    connectLShape('react', 'reactnative', 'react-reactnative')
    connectLShape('vuejs', 'nuxtjs', 'vuejs-nuxtjs')
    connectZigZagDown('javascript', 'jest', 'javascript-jest')
    connectZigZagDown('javascript', 'vitest', 'javascript-vitest')
    connectZigZagDown('css', 'sass', 'css-sass')
    connectZigZagDown('css', 'scss', 'css-scss')
    connectZigZagDown('css', 'less', 'css-less')
    connectZigZagUp('javascript', 'gsap', 'javascript-gsap')
    connectZigZagUp('javascript', 'socketio', 'javascript-socketio')
}

window.addEventListener('load', redrawLines)
window.addEventListener('resize', redrawLines)
