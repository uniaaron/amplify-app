import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../images/dog-icon.png"



function ViewDogs() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://pxuvfvxvph.execute-api.eu-west-2.amazonaws.com/beta/dogs", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))
    }, [])

    function DogTable(data) {
        return (
            <div className="table-container">
                <table className="table-display">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Date of birth</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr id="table-elements" key={key}>
                                    <td>{val.dog_ID}</td>
                                    <td>{val.Name}</td>
                                    <td>{val.Breed}</td>
                                    <td>{val.DateOfBirth}</td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            </div>
        )
    }

    return (
        <>
        <div className="page">
            <div id="form-logo-container">
                <img id="form-dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">All Dogs</h1>

            {data ? DogTable(data) : <h2 className="loading-header">Loading...</h2>}
            
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