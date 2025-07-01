const updateItem = (prefix, elementId) => {
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
