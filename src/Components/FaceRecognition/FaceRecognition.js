import React from "react";
import "./faceRec.css"

const FaceRecognition = ({ url }) => {
    return (
        url ? <img className="faceRecognitionImage ma2" src={url} alt="face recognition " /> : "Please Input a valid Image"
    )
}

export default FaceRecognition;