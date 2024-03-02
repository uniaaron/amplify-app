import logo from "../images/dog-icon.png"
import { useLocation, Link } from "react-router-dom";
import { React } from "react";
import DogTable from "./DogTable";

function WalkerUserDash() {
    const { state } = useLocation()
    const loggedUser = {
        "password": state[0],
        "username": state[1],
        "mobile": state[2],
        "name": state[4],
        "id": state[3],
    }

    console.log(state)
    
    return (
        <>
        <div className="page"> 
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Wagg.ly</h1>
            <p id="welcome-message">Welcome {loggedUser["name"]} to the walker dashboard, as a walker you can view all available dogs to walk and how to contact them.</p>
            
            <div>
                <h3 className="page-title">Available Dogs</h3>
                <DogTable/>
            </div>

            <div className="button-container" >
                <Link to="/">
                    <button className="form-button">Log Out</button>
                </Link>
            </div>

        </div>
        </>
    )
}

export default WalkerUserDash;