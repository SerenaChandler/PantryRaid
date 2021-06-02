import React from "react";
import logo from "../Navbar/logo.png"

const Navbar = () => {
   
    const logMeOut = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("loggedIn");
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <ul>
                <a href="/home"><img src={logo} alt="chef flag with skull and crossbones as a knife and spatula" width="100"/></a>
                <a href="/pantry" alt="pantry button" className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Pantry</button></a>
                <a href="/cookbook" alt="pantry button"className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Cookbook</button></a>
                <a href="/login" alt="pantry button"className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Sign In/ Register</button></a>
                <button onClick={logMeOut} className="btn btn-outline-primary mx-4">Logout</button>
            </ul>
        </nav>




    )

}

export default Navbar;