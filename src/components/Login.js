import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    })

    const handleLogin = async () =>{
        console.log( "email", "password", email, password);

        // Await the fetch call
    let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Await the result.json() call
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result.name) {
      navigate("/");
    }else{
        alert("Please enter valid details")
    };
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