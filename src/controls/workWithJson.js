const jsonEditorModal = document.getElementById('jsonEditorModal')
const jsonEditorArea = document.getElementById('jsonEditorArea')

const editorStyleProperty = jsonEditorModal.style

// Open and close modal
function openJsonEditor() {
    editorStyleProperty.display = visibleState
    mainContainer.style.overflow = 'hidden'
}

function closeJsonEditor() {
    editorStyleProperty.display = invisibleState
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