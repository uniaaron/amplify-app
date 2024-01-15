import Availability from "./Availability";
import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isWalker, setIsWalker] = useState(false);
    const [availability, setAvailability] = useState([0]);


    function createUser() {
        var RequestOptions = {
            method: "POST",
            body: JSON.stringify(
                {
                    "name": name,
                    "username": username,
                    "password": password,
                    "is_walker": isWalker,
                    "availability": availability,
                }
            )
        }

        fetch("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/users", RequestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <>
        <h2>Register</h2>
        <div className="register-container">
            
            <form className="login-page-form">
                <label>Name:</label>
                <input type="text" id="fname" name="fname" onChange={(e) => setName(e.target.value)}/><br/>
                <label>Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/><br/>
                <label>Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/><br/>

                <div className="account-type-container">
                    <input type="radio" id="walker" name="account_type" onClick={(e) => setIsWalker(true)}/>
                    <label for="walker">Walker</label>
                    <input defaultChecked type="radio" id="owner" name="account_type" onClick={(e) => setIsWalker(false)}/>
                    <label for="owner">Owner</label><br/>
                </div>

                {isWalker===true ? <Availability/> : <></>}
            </form>
        </div>
        <div className="button-container">
            <button onClick={createUser}>Submit</button>
        </div>
        </>
    )
}

export default Register;