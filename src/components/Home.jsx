import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/dog-icon.png"

function Home() {
    return (
        <div className="page"> 
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Wagg.ly</h1>
            
            <div className="button-container">
                <Link className="register-link" to="/register-dog">
                    <button className="register-button">Register Dog</button>
                </Link>
                
                <Link className="register-link" to="/register-walker">
                    <button className="register-button">Register Walker</button>
                </Link>
            </div>

        </div>
    )
}

export default Home;