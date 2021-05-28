import React from "react";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <ul>
                <a href="/home">LOGO HERE</a>
                <button className="btn btn-outline-primary mx-4"><a href="/pantry" alt="pantry button" className="text-decoration-none">Pantry</a></button>
                <button className="btn btn-outline-primary mx-4"><a href="/cookbook" alt="pantry button"className="text-decoration-none">Cookbook</a></button>
                <button className="btn btn-outline-primary mx-4"><a href="/login" alt="pantry button"className="text-decoration-none">Sign In/ Register</a></button>
            </ul>
        </nav>




    )

}

export default Navbar;