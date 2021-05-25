import React, { useEffect } from "react";
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import RecipeHeader from "./components/RecipeHeader"
import ChecklistDropdown from "./components/ChecklistDropdown"

const Home = () => {
    // functions for handling search and checkboxes


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                <Hero/>
                <Searchbar/>
                <ChecklistDropdown/>
                <RecipeHeader/>
                
        


                </div>
            </div>
        </div>
    );
};

export default Home;