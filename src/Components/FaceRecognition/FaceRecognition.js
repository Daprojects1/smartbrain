import React from "react";
import "./faceRec.css"

const FaceRecognition = ({ url, box }) => {
    return (
        <div className="faceDiv center ma2">
            {url ? <img id="mainImg" className="faceRecognitionImage " src={url} alt="" width="500px" height="auto" /> : <h1>Please Input a Valid Face Image</h1>}
            {url && <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>}
        </div>
    )
}

export default FaceRecognition;