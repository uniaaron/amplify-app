import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState(null)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    function validateUser() {
        var valid = false

        for (let i in data) {
            if (data[i]["username"] === username && data[i]["password"] === password) {
                console.log("logged in")
                valid = true
            } else {
                console.log("access denied")
            }
        }
        if (valid === true) {
            navigate("/home", {replace: true})
        }
    }

    useEffect(() => {
        fetch("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/users", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))
    }, [])

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
            <button onClick={validateUser}>Submit</button>
        </div>
        
        </>
    )
}

export default Login;