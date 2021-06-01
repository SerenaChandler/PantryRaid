import React, { useEffect, useState } from "react";
import CookbookRecipes from "../components/CookbookRecipes"
import API from "../utils/API"
// import ChecklistDropdown from "./components/ChecklistDropdown"

const Cookbook = () => {

    const [savedRecipes, setSavedRecipes] = useState([])

    useEffect(() => {
        API.getSavedRecipes()
        .then((results) => {
            setSavedRecipes(results.data);
            console.log(results);
          }).catch((err) => console.log(err))
    }, [])
    



    // functions for handling search and checkboxes
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                    <div className="row">
                        <div className="d-flex justify-content-center">

                            {savedRecipes.map((recipe) => (
                            <CookbookRecipes 
                            key={recipe.label}
                            title={recipe.label}
                            image={recipe.image}
                            description={recipe.cuisineType}
                            ingredients={recipe.ingredientLines}
                            />
                            ))}
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>

        



    );
};

export default Cookbook;