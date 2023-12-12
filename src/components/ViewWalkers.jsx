import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../images/dog-icon.png"

function ViewWalkers() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://pxuvfvxvph.execute-api.eu-west-2.amazonaws.com/beta/walkers", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))
    }, [])

    function WalkerTable(data) {
        return (
            <div className="table-container">
                <table className="table-display">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th colSpan={7}>Availability
                                <th id="mon-head">Mon</th>
                                <th id="tue-head">Tue</th>
                                <th id="wed-head">Wed</th>
                                <th id="thu-head">Thu</th>
                                <th id="fri-head">Fri</th>
                                <th id="sat-head">Sat</th>
                                <th id="sun-head">Sun</th>
                            </th>
                            <th>Mobile number</th>
                            <th>Address</th>
                            <th>Date of birth</th>
                        </tr>
                        {data.map((val, key) => {
                            const availability = val.Availability.toString().split(",")
                    
                            return (
                                <tr id="table-elements" key={key}>
                                    <td>{val.walker_ID}</td>
                                    <td>{val.Name}</td>
                                    
                                    <td className="day" id="mon">{availability[0]}</td>
                                    <td className="day" id="tue">{availability[1]}</td>
                                    <td className="day" id="wed">{availability[2]}</td>
                                    <td className="day" id="thu">{availability[3]}</td>
                                    <td className="day" id="fri">{availability[4]}</td>
                                    <td className="day" id="sat">{availability[5]}</td>
                                    <td className="day" id="sun">{availability[6]}</td>

                                    <td>{val.PhoneNumber}</td>
                                    <td>{val.Address}</td>
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

            <h1 className="page-title">All Walkers</h1>

            {data ? WalkerTable(data) : <h2 className="loading-header">Loading...</h2>}

            <div className="button-container">
                <Link to="/">
                        <button className="form-button">Cancel</button>
                </Link>
            </div>

        </div>
        </>
    )
}

export default ViewWalkers;