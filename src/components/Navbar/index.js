import React from "react";
import logo from "../Navbar/pantryraid.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <ul>
                <a href="/home"><img src={logo} alt="chef flag with skull and crossbones as a knife and spatula" width="100"/></a>
                <a href="/pantry" alt="pantry button" className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Pantry</button></a>
                <a href="/cookbook" alt="pantry button"className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Cookbook</button></a>
                <a href="/login" alt="pantry button"className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Sign In/ Register</button></a>
            </ul>
        </nav>




    )

}

export default Navbar;