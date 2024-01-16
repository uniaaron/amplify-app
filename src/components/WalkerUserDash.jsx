import logo from "../images/dog-icon.png"
import { useLocation, Link } from "react-router-dom";
import { useEffect, React } from "react";
import DogTable from "./DogTable";

function WalkerUserDash() {
    const { state } = useLocation()
    return (
        <>
        <div className="page"> 
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Wagg.ly</h1>
            <p id="welcome-message">Welcome {state[0]}, as a walker you can search for available dogs to walk.</p>
            
            <div className="dashboard">
                <DogTable/>
                <div className="button-container">
                    <Link to="/">
                            <button className="form-button">Log Out</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default WalkerUserDash;