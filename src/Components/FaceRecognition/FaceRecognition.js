import React from "react";
import "./faceRec.css"

const FaceRecognition = ({ url, box, isImageLoaded }) => {
    console.log(isImageLoaded)
    if (!url && !isImageLoaded) return ""
    else if (url) {
        return (
            <div className="faceDiv center ma2">
                <img id="mainImg" className="faceRecognitionImage " src={url} alt="" width="500px" height="auto" />
                <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        )
    }
}

export default FaceRecognition;