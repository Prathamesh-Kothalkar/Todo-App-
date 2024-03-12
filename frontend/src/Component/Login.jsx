import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

import '../Style/login.css'
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    //const [isRedirect, setIsRedirect]=useState(false)

    function login(e) {
        e.preventDefault();

        if ((username && password)) {

            fetch("http://localhost:3000/signin", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).then((res) => {
                return res.json()
            }).then((data) => {
                if (!data.msg || data.msg == "Invalid User") {
                    //console.log()
                    alert("User not exitsed")
                }
                else {

                    localStorage.setItem("token", data.jwt)
                    alert("User login Sucessfully")
                    setUsername("");
                    setPassword("");
                    navigate('/')
                }
            }
            )
                .catch((err) => console.log(err))
            return
        }
        else {
            alert("All fields are required")
        }
    }

    return (
        <>
            <Navbar visible={false} />
            <form className="userform">
                <h2>Login Form</h2>
                <label htmlFor="username">Username
                    <input type="text" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label><br />
                <label htmlFor="password">Password
                    <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <Link to="/signup"><p>Create an Account</p></Link>
                <button onClick={(e) => {
                    login(e)
                }}>Login</button>
            </form>
        </>
    )
}

export default Login;