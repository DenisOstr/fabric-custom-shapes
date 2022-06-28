function addStarShape() {
    const starPath = drawStar(0, 0, 5, 50, 20)

    const canvasStarPath = new fabric.Path(
        starPath,
        {
            top: 100, left: 50,
            width: 100, height: 100,
            fill: '#000', strokeWidth: 3, stroke: ''
        }
    )

    canvas.add(canvasStarPath)
}

function addGearShape() {

}

function removeSelectedObject() {
    const activeObjects = canvas.getActiveObjects()

    activeObjects.forEach((obj) => {
        canvas.remove(obj)
    })
}