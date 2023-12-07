import React, { useState } from "react";

import logo from "../images/dog-icon.png"

function ViewDogs() {

    async function GET_API() {
        const [allData, setAllData] = useState()
    
        await fetch("https://pxuvfvxvph.execute-api.eu-west-2.amazonaws.com/beta/dogs", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    
    }
    
    return (
        <>
        <div className="page">
            <div id="form-logo-container">
                <img id="form-dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">All Dogs</h1>
        </div>
        </>
    )
}

export default ViewDogs;