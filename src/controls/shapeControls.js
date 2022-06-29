function addStarShape() {
    const starPath = drawStar(0, 0, 5, 50, 20)

    const canvasStarPath = new fabric.Path(
        starPath,
        {
            top: 100, left: 50,
            width: 100, height: 100,
            fill: '#000', strokeWidth: 3, stroke: '',
        }
    )

    canvas.add(canvasStarPath)
}

function addGearShape() {
    const gearPath = drawGear(200, 200, 9, 180, 130, 50, 35, 20)

    const canvasGearPath = new fabric.Path(
        gearPath,
        {
            top: 100, left: 50,
            width: 100, height: 100,
            fill: '#000', strokeWidth: 3, stroke: '',
        }
    )

    canvas.add(canvasGearPath)
}

function removeSelectedObject() {
    const activeObjects = canvas.getActiveObjects()

    activeObjects.forEach((obj) => {
        canvas.remove(obj)
    })
}