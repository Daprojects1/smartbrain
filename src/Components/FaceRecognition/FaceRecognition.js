import React from "react";
import "./faceRec.css"

const FaceRecognition = ({ url, box }) => {
    return (
        <div className="faceDiv center ma2">
            {<img id="mainImg" className="faceRecognitionImage " src={url} alt="face recognition " width={"500"} />}
            {url && <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>}
        </div>
    )
}

export default FaceRecognition;