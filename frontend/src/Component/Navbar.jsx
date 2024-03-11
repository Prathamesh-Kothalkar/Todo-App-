import React from "react";
import { CiLogin } from "react-icons/ci";
import "../Style/navbar.css"
import { useNavigate } from "react-router-dom";
function Navbar(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <h1>Todo App</h1>
                </div>
                {
                    props.visible? <div className="login">
                    <CiLogin color="white" fontSize={"4em"} onClick={() => {
                        localStorage.clear();
                        navigate("/login")
                        }} style={{ cursor: "pointer" }} />
                </div>:""
                }
               
            </div>

        </>
    )
}

export default Navbar;