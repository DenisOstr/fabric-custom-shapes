/**
     * Method that draw a star shape with N spikes
     * @param {Integer} cX          Center x coordination
     * @param {Integer} cY          Center y coordination
     * @param {Integer} spikes      Count of star segments
     * @param {Integer} oR          Outer radius
     * @param {Integer} iR          Inner radius
     */
function drawStar(cX, cY, spikes, oR, iR) {
    var rot = Math.PI / 2 * 3
    var x = cX, y = cY
    var step = Math.PI / spikes

    // Start point in path
    var startPoint = `M ${cX}, ${cY - oR}`
    var path = startPoint

    for (var i = 0; i < spikes; i++) {
        x = cX + Math.cos(rot) * oR
        y = cY + Math.sin(rot) * oR

        path += ` L ${x}, ${y}`
        rot += step

        x = cX + Math.cos(rot) * iR
        y = cY + Math.sin(rot) * iR

        path += ` L ${x}, ${y}`
        rot += step
    }

    path += `${cX}, ${cY - oR} z`

    return path
}