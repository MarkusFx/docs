const widthEl = document.getElementById('viewportWidth')

function updateWidth() {
    widthEl.textContent = window.innerWidth
}

window.addEventListener('resize', updateWidth)
updateWidth()
