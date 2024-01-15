import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input/input"

import logo from "../images/dog-icon.png"

function RegisterDog() {
    const [name, setName] = useState(""); 
    const [phoneNum, setPhoneNum] = useState("");
    const [birthDate, setBirthDate] = useState(Date);
    const [homeAddress, setHomeAddress] = useState("");

    const [dogBreed, setDogBreed] = useState("");
    const [ownerName, setOwnerName] = useState("");

    function reset() {
        setName("")
        setPhoneNum()
        setBirthDate(Date)
        setHomeAddress("")
        setDogBreed("")
        setOwnerName("")
    }

    function API_POST() {
        var RequestOptions = {
            method: "POST",
            body: JSON.stringify(
                {
                    "name": name,
                    "breed": dogBreed,
                    "date_of_birth": birthDate,
                    "owners_name": ownerName,
                    "owners_phone_number": phoneNum,
                    "address": homeAddress
                }
            )
        }

        fetch("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/dogs", RequestOptions)
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

            <h1 className="page-title">Register Dog</h1>

            <div className="combined-input-form">
                    <label>Dog's Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}/>
                    
                    <br/>
            
                    <label>Dog's Breed:</label>
                    <input value={dogBreed} onChange={(e) => setDogBreed(e.target.value)}/>
                    
                    <br/>

                    <label>Owner's Name:</label>
                    <input value={ownerName} onChange={(e) => setOwnerName(e.target.value)}/>
                    
                    <br/>

                    <label>Owner's Number:</label>
                    <PhoneInput country="UK" value={phoneNum} onChange={setPhoneNum}/>

                    <br/>

                    <label>Dog's Date of Birth:</label>
                    <input type="date" onChange={setBirthDate}/>

                    <br/>

                    <label>Home Address:</label>
                    <input value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}/>
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

export default RegisterDog;