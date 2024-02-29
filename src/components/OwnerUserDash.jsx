import { Link, useLocation } from "react-router-dom"
import AddDogForm from "./AddDogForm"
import MyDogsTable from "./MyDogsTable";

import logo from "../images/dog-icon.png"

function OwnerUserDash() {
    const { state } = useLocation()

    const loggedUser = {
        "password": state[0],
        "username": state[1],
        "mobile": state[2],
        "name": state[3],
        "id": state[4],
    }

    return (
        <>
        <div className="page"> 
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Wagg.ly</h1>
            <p id="welcome-message">Welcome {loggedUser["name"]} to the owner dashboard, as a owner you can search for available walkers for your dog.</p>
            
            <div className="dashboard">
                <div className="dash-item" id="item1">
                    <h3>My Dogs</h3>
                    <MyDogsTable id={loggedUser["id"]}></MyDogsTable>
                </div>
                <div className="dash-item" id="item2">
                    <AddDogForm user={loggedUser}></AddDogForm>
                </div>
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