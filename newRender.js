/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} width 
 * @param {number} height 
 */

function render(frequencyArray, ctx, count, width, height) {
    const eyesContainer = document.getElementById('backgroundCanvas')
    const eyesCtx = eyesContainer.getContext("2d")

    eyesCtx.clearRect(0, 0, eyesContainer.width, eyesContainer.height)

    const bars = frequencyArray.length + 15
    const step = width / bars + 0.1
    const lineWidth = (width / count) - 4
    const int = Math.floor(frequencyArray.length / count)

    ctx.beginPath()
    // ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
    ctx.lineWidth = lineWidth
    ctx.fillRect(0, 0, width, height)
    ctx.fill()

    let fsum = 0

    for (let i = 0; i < bars; i += int) {
        const f = frequencyArray[i]
        fsum = Math.max(fsum, f)

        if (i % int === 0) {
            const fval = fsum
            const barLength = fval / 255 * height + 5
            const x1 = step * i
            const y1 = height
            const x2 = x1
            const y2 = height - barLength

            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            fsum = 0

        }

    }

    const maxFreq = Math.max.apply(null, frequencyArray)
    eyesCtx.fillStyle = `rgba(242, 252, 0, ${maxFreq * 0.002})`
    // console.log(maxFreq)


    eyesCtx.fillRect(0, 0, eyesContainer.width, eyesContainer.height)


    ctx.strokeStyle = '#f4fc03'
    ctx.stroke()
}

export default render