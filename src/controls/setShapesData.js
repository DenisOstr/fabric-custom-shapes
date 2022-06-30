const settingsContainer = document.getElementById('settings')

const settingsStyleProperty = settingsContainer.style

function showSettings() {
    if (settingsStyleProperty.display == invisibleState) {
        settingsStyleProperty.display = visibleState
    } else {
        settingsStyleProperty.display = invisibleState
    }
}

/**
 * Method for updating current shape path data
 * @param {String} updateShapePath Shape path data as a string
 */
function updateShapePath(updateShapePath) {
    const updatedPath = new fabric.Path(updateShapePath)
    const activeObject = canvas.getActiveObject()

    activeObject.set({ path: updatedPath.path, dirty: true }).setCoords()

    canvas.requestRenderAll()
}


// Change number of spikes in a star
const starSpikesRange = document.getElementById('starSpikesRange')

starSpikesRange.onchange = () => {
    const updateStarPath = drawStar(0, 0, starSpikesRange.value, 50, 20)
    
    updateShapePath(updateStarPath)
}


// Change outer / inner radius star shape
const starOuterRadius = document.getElementById('starOuterRadius')
const starInnerRadius = document.getElementById('starInnerRadius')

starOuterRadius.onchange = () => {
    const updateStarPath = drawStar(0, 0, starSpikesRange.value, starOuterRadius.value, 20)

    updateShapePath(updateStarPath)
}

starInnerRadius.onchange = () => {
    const updateStarPath = drawStar(0, 0, starSpikesRange.value, 50, starInnerRadius.value)

    updateShapePath(updateStarPath)
}


// Enable / Disable stroke round
const strokeRound = document.getElementById('strokeRound')

strokeRound.onchange = () => {
    const activeObject = canvas.getActiveObject()

    if (strokeRound.checked) {
        activeObject.set({ strokeLineJoin: 'round', dirty: true }).setCoords()
    } else {
        activeObject.set({ strokeLineJoin: '', dirty: true }).setCoords()
    }

    canvas.requestRenderAll()
}