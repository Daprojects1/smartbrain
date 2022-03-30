import React from "react"
import "./imagelink.css"

const ImageLinkForm = ({ onInputChange, onDetectBtn, value }) => {
    return (
        <div>
            <p className="f3 ma3 tc">{"This smart brain will detect faces. Give it a try"}</p>
            <div className="center">
                <div className="pa4 br3 form center shadow-5">
                    <input className="f4 pa2 w-70 center" value={value} onChange={onInputChange} type="text" />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onDetectBtn}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm