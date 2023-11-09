import React, { useState } from "react";

function CombinedIntputs(subject) {
    const [name, setName] = useState("");

    return (
        <div>
            <label>Name:</label>
            <input onChange={(e) => setName(e.target.value)}/>

            <button onClick={() => console.log(name)}>Submit</button>
        </div>
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
            <h1 className="page-title">Register {subject}</h1>

            {CombinedIntputs(subject)}

            {IndividualInputs(subject)}

        </div>
    )
}

export default RegisterPage;