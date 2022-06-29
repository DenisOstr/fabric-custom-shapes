/**
 * Method that draw a gear shape with N notches
 * @param {Integer} cX          Center x coordination
 * @param {Integer} cY          Center y coordination
 * @param {Integer} notches     Count of gear segments
 * @param {Integer} oR          Outer radius
 * @param {Integer} iR          Inner radius
 * @param {Integer} oTaper      Outer taper (in percentage)
 * @param {Integer} iTaper      Inner taper (in percentage)
 * @param {Integer} holeR       Hole radius
 */
function drawGear(cX, cY, notches, oR, iR, oTaper, iTaper, holeR) {
    const pi2 = 2 * Math.PI
    const angle = pi2 / (notches * 2)
    const innerTaperAngle = angle * iTaper * 0.005
    const outerTaperAngle = angle * oTaper * 0.005
    
    var toggle = false

    var startPoint = `M ${cX + oR * Math.cos(outerTaperAngle)}, ${cY + oR * Math.sin(outerTaperAngle)}`
    var path = startPoint

    for (var a = angle; a <= pi2; a += angle) {
        if (toggle) {
            x = cX + iR * Math.cos(a - innerTaperAngle)
            y = cY + iR * Math.sin(a - innerTaperAngle)

            path += ` L ${x}, ${y}`

            x = cX + oR * Math.cos(a + outerTaperAngle)
            y = cY + oR * Math.sin(a + outerTaperAngle)

            path += ` L ${x}, ${y}`
        } else {
            x = cX + oR * Math.cos(a - outerTaperAngle)
            y = cY + oR * Math.sin(a - outerTaperAngle)

            path += ` L ${x}, ${y}`

            x = cX + iR * Math.cos(a + innerTaperAngle)
            y = cY + iR * Math.sin(a + innerTaperAngle)

            path += ` L ${x}, ${y}`
        }

        toggle = !toggle
    }

    path += ` z`

    return path
}