import React, { useEffect } from "react";
import PantryMyFridge from "../components/PantryMyFridge";
import IngredientContainer from "../components/IngredientContainer";

// import ChecklistDropdown from "./components/ChecklistDropdown"

const Pantry = () => {
    // functions for handling search and checkboxes
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                    <div className="row">
                    <PantryMyFridge/>
                    <IngredientContainer/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Pantry;