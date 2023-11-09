import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1 id="waggly-title">Wagg.ly</h1>

            <ul>
                <li>
                    <Link to="/register-dog">Register</Link>
                </li>
            </ul>

            <div id="button-grid">
                <button className="register-button">Register Dog</button>
                <button className="register-button">Register Walker</button>
            </div>
        </>
    )
}

export default Home;