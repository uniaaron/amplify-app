import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../images/dog-icon.png"

function ViewDogs() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://pxuvfvxvph.execute-api.eu-west-2.amazonaws.com/beta/dogs", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json)) 
        .catch(error => console.error(error))
    }, [])

    console.log(data)

    return (
        <>
        <div className="page">
            <div id="form-logo-container">
                <img id="form-dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">All Dogs</h1>

            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <h2>Loading...</h2>}

            <div className="button-container">
                <Link to="/">
                        <button className="form-button">Cancel</button>
                </Link>
            </div>

        </div>
        </>
    )
}

export default ViewDogs;