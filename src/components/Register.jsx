import Availability from "./Availability";
import { useState } from "react";

function Register() {
    const [accountType, setAccountType] = useState("onwer");

    return (
        <>
        <h2>Register</h2>
        <div className="register-container">
            
            <form className="login-page-form">
                <label for="fname">Name:</label>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"/><br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/><br/>

                <div className="account-type-container">
                    <input type="radio" id="walker" name="account_type" value="walker" onClick={(e) => setAccountType(e.target.value)}/>
                    <label for="walker">Walker</label>
                    <input defaultChecked type="radio" id="owner" name="account_type" value="owner" onClick={(e) => setAccountType(e.target.value)}/>
                    <label for="owner">Owner</label><br/>
                </div>

                {accountType==="walker" ? <Availability/> : <></>}

                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    )
}

export default Register;