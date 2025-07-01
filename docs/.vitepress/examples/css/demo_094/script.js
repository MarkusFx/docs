const flex = document.getElementById('flex')
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
