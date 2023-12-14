// import { useHistory } from 'react-router-dom';

function Login() {
    // const history = useHistory();

    // const handleSubmit = (event) => {
    //     history.push("/register-dog")
    // }

    return (
        <>
        <h2>Login</h2>
        <div className="register-container">
        
            <form className="login-page-form">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"/><br/>
                <label for="password" type="password">Password:</label>
                <input type="text" id="password" name="password"/><br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
        </>
    )
}

export default Login;