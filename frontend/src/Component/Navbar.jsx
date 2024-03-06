import React from "react";
import { CiLogin } from "react-icons/ci";
import "../Style/navbar.css"
function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <h1>Todo App</h1>
                </div>
                <div className="login">
                    <CiLogin color="white" fontSize={"4em"} onClick={() => { alert("Login") }} style={{ cursor: "pointer" }} />
                </div>
            </div>

        </>
    )
}

export default Navbar;