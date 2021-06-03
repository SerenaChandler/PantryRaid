import React, { useEffect, useState } from "react";
import CookbookRecipes from "../components/CookbookRecipes"
import API from "../utils/API"
// import ChecklistDropdown from "./components/ChecklistDropdown"
import Navbar from "../components/Navbar";
const Cookbook = () => {

    const [savedRecipes, setSavedRecipes] = useState([])

    useEffect(() => {
        const matchieUser = localStorage.getItem("userId")
        const matchie = [];
        API.getSavedRecipes()
            .then((results) => {
                //setSavedRecipes(results.data);
                //console.log(results);
                results.data.map((resi) => {
                    if (resi.user_id == matchieUser) {
                        matchie.push(resi);
                        console.log(matchie);
                    }
                })
                setSavedRecipes(matchie);
            })
            .catch((err) => console.log(err))
    }, [])

    const deleteFood = (currentRecipe) => {
        console.log(currentRecipe)
        API.deleteRecipe(currentRecipe.id)
            .then(res => {
                console.log("you deleted this recipe", res)
                const matchieUser = localStorage.getItem("userId")
                const matchie = [];
                API.getSavedRecipes()
                    .then((results) => {
                        //setSavedRecipes(results.data);
                        //console.log(results);
                        results.data.map((resi) => {
                            if (resi.user_id == matchieUser) {
                                matchie.push(resi);
                                console.log(matchie);
                            }
                        })
                        setSavedRecipes(matchie);
                    })
                    .catch((err) => console.log(err))
            })
            .catch(err => {
                console.log("This is the error", err);
            })
    }



    // functions for handling search and checkboxes
    return (
        <div>
            <Navbar />
            <div className="cardcontainer">
                {savedRecipes.map((recipe) => (
                    <CookbookRecipes
                        deleteFood={() => deleteFood(recipe)}
                        id={recipe.id}
                        title={recipe.name}
                        image={recipe.image}
                        link={recipe.link}


                    />
                ))}
            </div>
        </div>


    );
};

export default Cookbook;