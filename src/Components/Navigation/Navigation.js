import React from "react"
import "./nav.css"


const Navigation = ({ onRouteChange, route }) => {
    if (route === "Sign In" || route === "Register") {
        return (

            <nav className="tr mainNav">
                <>
                    <p className="f3 link dim blakc underline pa3 pointer" onClick={() => onRouteChange("Sign In")}>Sign In</p>
                    <p className="f3 link dim blakc underline pa3 pointer" onClick={() => onRouteChange("Register")}>Register</p>
                </>
            </nav>
        )
    } else {
        return (
            <nav className="tr">
                <>
                    <p className="f3 link dim blakc underline pa3 pointer" onClick={() => onRouteChange("Sign In")}>Sign Out</p>
                </>
            </nav>
        )
    }

}

export default Navigation