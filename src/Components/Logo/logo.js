import React from "react";
import Tilt from "react-parallax-tilt"
import "./logo.css"
import brain from "./icons8-brain-100.png"

const Logo = () => {
    return (
        <div className=" mw6 ma4">
            <Tilt>
                <div className="tilt shadow-2">
                    <img src={brain} alt="logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;