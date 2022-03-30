import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./faceRec.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const FaceRecognition = ({ url, box, isImageLoaded }) => {
    return (
        <div className="faceDiv center ma2">
            {url && <img id="mainImg" className="faceRecognitionImage " src={url} alt="" width="500px" height="auto" />}
            {url && <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>}
            {url && !isImageLoaded ? <div className="center"><Spinner animation="border" /></div> : null}
        </div>
    )
}

export default FaceRecognition;