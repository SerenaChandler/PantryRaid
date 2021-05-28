import React, { useEffect } from "react";
import CookbookRecipes from "../components/CookbookRecipes"
// import ChecklistDropdown from "./components/ChecklistDropdown"

const Cookbook = () => {
    // functions for handling search and checkboxes
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <CookbookRecipes />
                            {/* maybe this needs to be passed a function or prop or something for keeping track of the missing ingredients */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


    );
};

export default Cookbook;