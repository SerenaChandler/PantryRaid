import React, { useEffect } from "react";
import PantryMyFridge from "../components/PantryMyFridge";
import IngredientContainer from "../components/IngredientContainer";
import CookbookRecipes from "../components/CookbookRecipes"
// import ChecklistDropdown from "./components/ChecklistDropdown"

const Pantry = () => {
    // functions for handling search and checkboxes
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <CookbookRecipes />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Pantry;