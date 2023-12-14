import React, { useState } from "react";

import logo from "../images/dog-icon.png"
import Login from "./Login";
import Register from "./Register";

function LoginPage() {
    const [register, setRegister] = useState(false);
    
    return (
        <div className="page">
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Wagg.ly</h1>

            <div className="button-container">
                <button className="register-button" onClick={() => setRegister(true)}>Register</button>
                <button className="register-button" onClick={() => setRegister(false)}>Login</button>
            </div>

            {register ? <Register/> : <Login/>}

        </div>
    )
}

export default LoginPage;