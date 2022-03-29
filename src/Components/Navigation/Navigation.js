import React from "react"


const Navigation = ({ onRouteChange, signInString }) => {
    return (
        <nav className="tr">
            <p className="f3 link dim blakc underline pa3 pointer" onClick={() => onRouteChange("Sign In")}>{signInString === "Sign Out" && "Sign Out"}</p>
        </nav>
    )
}

export default Navigation