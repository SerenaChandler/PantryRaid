import React, { useEffect } from "react";

import Hero from "../components/Hero"
import Searchbar from "../components/Searchbar"
import RecipeHeader from "../components/RecipeHeader"
import RecipeCard from "../components/RecipeCard"
// import ChecklistDropdown from "./components/ChecklistDropdown"

const Home = () => {
    // functions for handling search and checkboxes


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                    <Hero />
                    <Searchbar />
                    {/* <ChecklistDropdown/> */}
                    <RecipeHeader />
                    <div className="row">
                        <div className="col-lg-12">
                            <RecipeCard />


                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Home;