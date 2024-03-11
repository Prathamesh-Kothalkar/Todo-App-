import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import '../Style/login.css'
function Signup(){

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    function createAccount(e){
        e.preventDefault();
        if(username&&password){
            fetch("http://localhost:3000/signup",{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    username:username,
                    password:password
                })
            }).then((res)=>{
                return res.json()
            }).then((data)=>{
                if(data.msg=="User register Successfully"){
                    alert("User created Sucessfully")
                    setUsername("");
                    setPassword("");
                    navigate('/login')
                }
                else{
                    alert("Check Username and Password: username must have unqiue and 3+ password 6+")
                }
            }
            )
            .catch((err)=>console.log(err))
            return
        }
        alert("All fields are required")
    }
    return(
        <>
            <Navbar visible={false}/>
            <form className="userform">
                <h2>Create an Account</h2>
                <label htmlFor="username">Username
                    <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)} value={username} />
                </label><br/>
                <label htmlFor="password">Password
                    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                </label>
                <br />
                <Link to="/"><p>Already have Account?</p></Link>
                <button onClick={(e)=>{createAccount(e)}}>Sign Up</button>
            </form>
        </>
    )
}

export default Signup;