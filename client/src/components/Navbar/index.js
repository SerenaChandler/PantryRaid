import React, {useEffect, useState} from "react";
import logo from "../Navbar/logo.png";
import "./style.css"

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState();


    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn");
        setLoggedIn(loggedIn);
      }, []);


    const logMeOut = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("loggedIn");
    }



    return (
        <div class="topnav">


            <div class="topnav-centered">
                <a href="/home"><img src={logo} alt="chef flag with skull and crossbones as a knife and spatula" width="100" /></a>
            </div>

            <a href="/pantry" alt="pantry button" className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Pantry</button></a>
            <a href="/cookbook" alt="pantry button" className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Cookbook</button></a>

            <div class="topnav-right">

              {loggedIn? 
              <a href='javascript:;' onclick={logMeOut}><button onClick={logMeOut} className="btn btn-outline-primary mx-4">Logout</button></a>
              :
              <a href="/login" alt="pantry button" className="text-decoration-none"><button className="btn btn-outline-primary mx-4">Sign In/ Register</button></a>
            }
            </div>

        </div>






    )

}

export default Navbar;

