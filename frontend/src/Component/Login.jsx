import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import '../Style/login.css'
function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
   
    function login(e){
        e.preventDefault();
        
        if(!(username==" " && password==" ")){
           //redirect to home
          
        }
    }

    return(
        <>
            <Navbar visible={false}/>
            <form className="userform">
                <h2>Login Form</h2>
                <label htmlFor="username">Username
                    <input type="text" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </label><br/>
                <label htmlFor="password">Password
                    <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </label>
                <br />
                <Link to="/signup"><p>Create an Account</p></Link>
                <button onClick={(e)=>{login(e)}}>Login</button>
            </form>
        </>
    )
}

export default Login;