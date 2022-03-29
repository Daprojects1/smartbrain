import React, { useRef, useEffect } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null)
    const displayImage = (context) => {
        let url = props.imgurl
        if (url) return context.drawImage(<img className=" ma2" src={url} alt="face recognition " />, 10, 10)
        return null
    }
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = '#fff'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        displayImage(context)
    }, [])
    return <canvas ref={canvasRef} {...props} />
}

export default Canvas