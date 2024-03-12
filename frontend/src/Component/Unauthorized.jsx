import React from "react";
import Navbar from "./Navbar";
import '../Style/error.css'
import { useNavigate } from "react-router-dom";
function Unauthorization() {

    const navigate = useNavigate();
    return (
        <>
            <Navbar visible={false} />
            <div className="danger-body">
                <div className="text-wrapper">
                    <div className="danger" data-content="404">
                        403 - ACCESS DENIED
                    </div>

                    <div className="subtitle">
                        Oops, You don't have permission to access this page.
                    </div>
                    <div className="isi">
                        Don't Worry ! To Access this Page Login First
                    </div>

                    <div className="buttons">
                        <a className="button" onClick={() => { navigate('/login') }}>Go to Login Page</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Unauthorization;