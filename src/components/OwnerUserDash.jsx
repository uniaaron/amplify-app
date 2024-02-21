import { Link, useLocation } from "react-router-dom"

import logo from "../images/dog-icon.png"

function OwnerUserDash() {
    const { state } = useLocation()
    console.log(state)
    return (
        <>
        <div className="page"> 
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Wagg.ly</h1>
            <p id="welcome-message">Welcome {state[0]} to the owner dashboard, as a owner you can search for available walkers for your dog.</p>
            
            <div className="dashboard">
                <div className="dash-item" id="item1"/>
                <div className="dash-item" id="item2">
                    B
                </div>
                <div className="dash-item" id="item3">C</div>
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

export default OwnerUserDash;