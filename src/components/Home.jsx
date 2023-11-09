import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1 id="waggly-title">Wagg.ly</h1>
            
            <div className="button-container">
                <Link className="register-link" to="/register-dog">
                    <button className="register-button">Register Dog</button>
                </Link>
                
                <Link className="register-link" to="/register-walker">
                    <button className="register-button">Register Walker</button>
                </Link>
            </div>

        </>
    )
}

export default Home;