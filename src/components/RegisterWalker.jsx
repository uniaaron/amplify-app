import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input/input"

import logo from "../images/dog-icon.png"

function RegisterWalker() {
    const walkerAvailability = [false, false, false, false, false, false, false];

    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [birthDate, setBirthDate] = useState(Date); 
    const [homeAddress, setHomeAddress] = useState(""); 

    function updateAvailability(event) {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        const dayChange = event.target.value

        walkerAvailability[days.indexOf(dayChange)] = event.target.checked
    }

    function reset() {
        setName("")
        setPhoneNum()
        setBirthDate(Date)
        setHomeAddress("")
    }

    function API_POST() {
        var RequestOptions = {
            method: "POST",
            body: JSON.stringify(
                {
                    "name": name,
                    "phone_number": phoneNum,
                    "date_of_birth": birthDate,
                    "address": homeAddress,
                    "availability": walkerAvailability,
                }
            )
        }
        fetch("https://pxuvfvxvph.execute-api.eu-west-2.amazonaws.com/beta/walkers", RequestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <>
        <div className="page">
            <div id="logo-container">
                <img id="dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Register Walker</h1>

            <div className="combined-input-form">
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                
                <br/>

                <label>Mobile Number:</label>
                <PhoneInput country="UK" value={phoneNum} onChange={setPhoneNum}/>
                
                <br/>

                <label>Date of Birth:</label>
                <input type="date" onChange={setBirthDate}/>

                <br/>

                <label>Home Address:</label>
                <input value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}/>

                <br/>
                <fieldset className="checkbox-container">
                    <legend>Availability</legend>
                    <div>
                        <input type="checkbox" id="monday" name="availability" value="Monday" onChange={updateAvailability}/>
                        <label htmlFor="monday">Monday</label>
                    </div>

                    <div>
                        <input type="checkbox" id="Tuesday" name="availability" value="Tuesday" onChange={updateAvailability}/>
                        <label htmlFor="Tuesday">Tuesday</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" id="wednesday" name="availability" value="Wednesday" onChange={updateAvailability}/>
                        <label htmlFor="wednesday">Wednesday</label>
                    </div>
                
                    <div>
                        <input type="checkbox" id="thursday" name="availability" value="Thursday" onChange={updateAvailability}/>
                        <label htmlFor="thursday">Thursday</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" id="friday" name="availability" value="Friday" onChange={updateAvailability}/>
                        <label htmlFor="friday">Friday</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" id="Saturday" name="availability" value="Saturday" onChange={updateAvailability}/>
                        <label htmlFor="Saturday">Saturday</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" id="Sunday" name="availability" value="Sunday" onChange={updateAvailability}/>
                        <label htmlFor="Sunday">Sunday</label>
                    </div>
                    
                </fieldset>

            </div>

            <div className="button-container">
                <Link to="/">
                        <button onClick={reset} className="form-button">Cancel</button>
                </Link>

                <button className="form-button" onClick={API_POST}>Submit</button>
            </div>

        </div>
        </>
    )
}

export default RegisterWalker;