import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input/input"

import logo from "../images/dog-icon.png"

function CombinedIntputs(subject) {
    const [name, setName] = useState(""); // dog or walker name
    const [phoneNum, setPhoneNum] = useState(); // owner or walker phone number
    const [birthDate, setBirthDate] = useState(); // dog or walker birthday


    return (
        <>
            <div className="combined-input-form">
                <label>Name:</label>
                <input onChange={(e) => setName(e.target.value)}/>
                
                <br/>

                {subject === "Dog" ? <label>Owner Number:</label>:<label>Number:</label>}
                <PhoneInput country="UK" value={phoneNum} onChange={setPhoneNum}/>
                
                <br/>

                <label>Date of Birth:</label>
                <input type="date" value={birthDate} onChange={setBirthDate}/>

                <br/>

                <label>Address:</label>
                <input onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="button-container">
                <Link to="/">
                        <button className="form-button">Cancel</button>
                </Link>

                <button className="form-button" onClick={() => console.log(name)}>Submit</button>
            </div>
        </>
    )
}

function IndividualInputs(subject) {

    return (
        <>
        
        </>
    )
}


function RegisterPage(subject) {
    return (
        <div className="page">
            <div id="logo-container">
                <img id="form-dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Register {subject}</h1>

            {CombinedIntputs(subject)}

            {IndividualInputs(subject)}

        </div>
    )
}

export default RegisterPage;