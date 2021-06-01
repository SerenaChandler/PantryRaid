import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import RecipeHeader from "../components/RecipeHeader";
import RecipeCard from "../components/RecipeCard";
import API from "../utils/API";
// import ChecklistDropdown from "./components/ChecklistDropdown"

const Home = () => {
  // functions for handling search and checkboxes
  const [search, setSearch] = useState("");
  const [returnedRecipes, setReturnedRecipes] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getRecipes(search);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearch(value);
  };

  const getRecipes = (search) => {
    API.getRecipesTest(search)
      .then((results) => {
        setReturnedRecipes(results.data.hits);
        console.log(results);
      })
      .catch((err) => console.log(err));
  };

  const saveFood = (recipeInfo) => {
    console.log(recipeInfo)
    const savedRecipe = 
      {
        name: recipeInfo.label,
        image: recipeInfo.image,
        description: recipeInfo.cuisineType[0],
        // ingredients: recipeInfo.ingredientLines,
      }
    
    console.log("Saved ", savedRecipe);
    API.saveRecipe(savedRecipe).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 min-vh-100">
          <Hero />
          <Searchbar
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            search={search}
          />
          {/* <ChecklistDropdown/> */}
          <RecipeHeader />
          <div className="row">
            <div className="col-lg-12">
              {returnedRecipes.map(({ recipe }) => (
                <RecipeCard
                  id={recipe.id}
                  key={recipe.id}
                  saveFood={() => saveFood(recipe)}
                  title={recipe.label}
                  image={recipe.image}
                  description={recipe.cuisineType}
                  ingredients={recipe.ingredientLines}
                  //  nutrition={recipe.recipe.nutrition}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
