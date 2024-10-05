import React from "react";

const Login = () =>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin = () =>{
        console.log(email, password)
    }
    return(
        <div className="login">
            <input className="inputfields" type="text" placeholder="Enter Name" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input className="inputfields" type="password" placeholder="Enter Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin} className="signup-btn" type="button">Login</button>
        </div>
    )
}

export default Login;