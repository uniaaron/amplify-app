import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState(null)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function validateUser(subject) {
        fetch(("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/" + subject), {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))

        var valid = false
        var loggedUserNum
        
        for (let i in data) {
            if (data[i]["username"] === username && data[i]["password"] === password) {
                console.log("logged in")
                valid = true
                loggedUserNum = i
                break
            } else {
                console.log("access denied")
            }
        }
        
        if (valid === true) {
            const loggedUser_dict = data[loggedUserNum]
            var loggedUser_list = []
            for (let key in loggedUser_dict) {
                if (loggedUser_dict.hasOwnProperty(key)) {
                  let value = loggedUser_dict[key];
                  loggedUser_list.push(value)
                }
            }

            if (subject === "walkers") {
                navigate("/walker-dashboard", { state: loggedUser_list })
            } else {
                navigate("/owner-dashboard", { state: loggedUser_list })
            }
        }
    }

    return (
        <>
        <h2>Login</h2>
        <div className="register-container">
        
            <form className="login-page-form">
                <label>Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/><br/>
                <label>Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/><br/>
            </form>
        </div>
        <div className="button-container">
            <button onClick={() => validateUser("walkers")}>Login as Walker</button>
            <button onClick={() => validateUser("owners")}>Login as Owner</button>
        </div>
        </>
    )
}

export default Login;