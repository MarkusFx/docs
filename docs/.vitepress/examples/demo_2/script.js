const canvas = document.getElementById('menuCanvas')
const ctx = canvas.getContext('2d')

const nodeWidth = 120
const nodeHeight = 40

const nodes = [
    { id: 1, label: 'HTML', x: 0, y: 100, children: [2] },
    { id: 2, label: 'CSS', x: 150, y: 100, children: [3] },
    { id: 3, label: 'JavaScript', x: 300, y: 100, children: [4, 5, 6, 7] },
    { id: 4, label: 'TypeScript', x: 450, y: 100, children: [] },
    { id: 5, label: 'React', x: 450, y: 200, children: [] },
    { id: 6, label: 'Jest', x: 300, y: 200, children: [] },
    { id: 7, label: 'Vitest', x: 300, y: 300, children: [] },
]

function drawNode(node) {
    ctx.fillStyle = '#4CAF50'
    ctx.fillRect(node.x, node.y, nodeWidth, nodeHeight)
    ctx.fillStyle = 'white'
    ctx.font = '16px sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(node.label, node.x + nodeWidth / 2, node.y + nodeHeight / 2)
}

function drawLine(from, to) {
    ctx.beginPath()
    ctx.moveTo(from.x + nodeWidth, from.y + nodeHeight / 2)
    ctx.lineTo(to.x, to.y + nodeHeight / 2)
    ctx.strokeStyle = '#555'
    ctx.lineWidth = 2
    ctx.stroke()
}

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const node of nodes) {
        drawNode(node)
    }

    for (const node of nodes) {
        for (const childId of node.children) {
            const child = nodes.find((n) => n.id === childId)
            drawLine(node, child)
        }
    }
}

drawTree()
