import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input/input"

import logo from "../images/dog-icon.png"

const walkerAvailability = [false, false, false, false, false, false, false];

function updateAvailability(event) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    const dayChange = event.target.value

    walkerAvailability[days.indexOf(dayChange)] = event.target.checked
}

function API() {
    fetch("https://ayblvlyw3e.execute-api.eu-west-2.amazonaws.com/beta/walkers")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}

function CombinedIntputs(subject) {
    const [name, setName] = useState(""); // dog or walker (subject) name
    const [phoneNum, setPhoneNum] = useState(); // owner or walker phone number
    const [birthDate, setBirthDate] = useState(Date); // dog or walker birthday
    const [homeAddress, setHomeAddress] = useState(""); // dog or walker address

    const [dogBreed, setDogBreed] = useState(""); // only for dog breed
    const [ownerName, setOwnerName] = useState(""); // only for dog owner
    
    return (
        <>
            <div className="combined-input-form">
                <label>{subject}'s Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                
                <br/>

                {subject === "Dog" && 
                    <>
                        <label>Dog's Breed:</label>
                        <input value={dogBreed} onChange={(e) => setDogBreed(e.target.value)}/>
                        <br/>

                        <label>Owner's Name:</label>
                        <input value={ownerName} onChange={(e) => setOwnerName(e.target.value)}/>
                        <br/>
                    </>
                }

                {subject === "Dog" ? <label>Owner's Number:</label>:<label>{subject}'s Number:</label>}
                <PhoneInput country="UK" value={phoneNum} onChange={setPhoneNum}/>
                
                <br/>

                <label>{subject}'s Date of Birth:</label>
                <input type="date" onChange={setBirthDate}/>

                <br/>

                <label>{subject}'s Home Address:</label>
                <input value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}/>

                {subject === "Walker" &&
                    <>
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
                    </>
                }
            </div>

            <div className="button-container">
                <Link to="/">
                        <button className="form-button">Cancel</button>
                </Link>

                <button className="form-button" onClick={API}>Submit</button>
            </div>
        </>
    )
}


function RegisterPage(subject) {
    return (
        <div className="page">
            <div id="form-logo-container">
                <img id="form-dog-logo" src={logo} alt="dog icon logo"/>
            </div>

            <h1 className="page-title">Register {subject}</h1>

            {CombinedIntputs(subject)}

        </div>
    )
}

export default RegisterPage;