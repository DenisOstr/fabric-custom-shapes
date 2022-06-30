const jsonEditorModal = document.getElementById('jsonEditorModal')
const jsonEditorArea = document.getElementById('jsonEditorArea')
const mainContainer = document.getElementById('main')

const styleProperty = jsonEditorModal.style
const visibleState = 'block', invisibleState = 'none'

// Open and close modal
function openJsonEditor() {
    styleProperty.display = visibleState
    mainContainer.style.overflow = 'hidden'
}

function closeJsonEditor() {
    styleProperty.display = invisibleState
    mainContainer.style.overflow = 'auto'
}

// JSON prettify
function jsonPrettify() {
    const minifiedJsonData = jsonEditorArea.value
    const obj = JSON.parse(minifiedJsonData)
    const prettifyJsonData = JSON.stringify(obj, undefined, 4)

    jsonEditorArea.value = prettifyJsonData
}

// Clear editor
function clearEditor() {
    jsonEditorArea.value = ''
}

// Convert canvas to json
function canvasToJson() {
    const canvasJsonData = JSON.stringify(canvas, undefined, 4)

    jsonEditorArea.value = canvasJsonData
}

// Convert json to canvas
function jsonToCanvas() {
    const jsonEditorData = jsonEditorArea.value

    canvas.loadFromJSON(jsonEditorData)
}