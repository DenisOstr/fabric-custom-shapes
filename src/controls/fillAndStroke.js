const fillContainer = document.getElementById('fillColorContainer')
const strokeContainer = document.getElementById('strokeColorContainer')

const fillStyleProperty = fillContainer.style
const strokeStyleProperty = strokeContainer.style

function addFillLayer() {
    if (fillStyleProperty.display == invisibleState) {
        fillStyleProperty.display = visibleState
    } else {
        fillStyleProperty.display = invisibleState
    }
}

function addStrokeLayer() {
    if (strokeStyleProperty.display == invisibleState) {
        strokeStyleProperty.display = visibleState
    } else {
        strokeStyleProperty.display = invisibleState
    }
}

const fillColor = document.getElementById('shapeFillColor')
const strokeColor = document.getElementById('shapeStrokeColor')

fillColor.onchange = () => {
    canvas.getActiveObject().set({ fill: fillColor.value, dirty: true })
    canvas.renderAll()
}

strokeColor.onchange = () => {
    canvas.getActiveObject().set({ stroke: strokeColor.value, dirty: true })
    canvas.renderAll()
}