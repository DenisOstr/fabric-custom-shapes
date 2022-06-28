function addFillLayer() {
    const fillContainer = document.getElementById('fillColorContainer')

    if (fillContainer.style.display == 'none') {
        fillContainer.style.display = 'block'
    } else {
        fillContainer.style.display = 'none'
    }
}

function addStrokeLayer() {
    const strokeContainer = document.getElementById('strokeColorContainer')

    if (strokeContainer.style.display == 'none') {
        strokeContainer.style.display = 'block'
    } else {
        strokeContainer.style.display = 'none'
    }
}

const fillColor = document.getElementById('shapeFillColor')
const strokeColor = document.getElementById('shapeStrokeColor')

fillColor.onchange = () => {
    canvas.getActiveObject().set('fill', fillColor.value)
    canvas.renderAll()
}

strokeColor.onchange = () => {
    canvas.getActiveObject().set('stroke', strokeColor.value)
    canvas.renderAll()
}