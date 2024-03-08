import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import '../Style/login.css'
function Signup(){
    return(
        <>
            <Navbar visible={false}/>
            <form className="userform">
                <h2>Create an Account</h2>
                <label htmlFor="username">Username
                    <input type="text" id="username" />
                </label><br/>
                <label htmlFor="password">Password
                    <input type="password" id="password" />
                </label>
                <br />
                <Link to="/"><p>Already have Account?</p></Link>
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default Signup;