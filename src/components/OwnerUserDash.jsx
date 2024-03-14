import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

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

    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/dogs", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))
    })

    const myDogs = []
    for (let i in data) {
        if (data[i]["owner_ID"] === loggedUser["id"]) {
            myDogs.push(data[i])
        }
    }

    return (
        <>
        <div className="page"> 
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Wagg.ly</h1>
            <p id="welcome-message">Welcome {loggedUser["name"]} to the owner dashboard, as a owner you can add your dogs which will be shown to walkers who will contact you.</p>
            
            <div className="dashboard">
                <div className="dash-item" id="item1">
                    <h3>My Dogs</h3>
                    <MyDogsTable id={myDogs}></MyDogsTable>
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