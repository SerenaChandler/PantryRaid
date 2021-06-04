import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import RecipeHeader from "../components/RecipeHeader";
import RecipeCard from "../components/RecipeCard";
import API from "../utils/API";
import Navbar from "../components/Navbar"
import logo from "../logo.png"
const Home = () => {
  // functions for handling search and checkboxes
  const [search, setSearch] = useState("");
  const [returnedRecipes, setReturnedRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const [returnedIngredients, setReturnedIngredients] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchRecipes(search);
    setReturnedRecipes([])
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearch(value);
  };

  useEffect(() => {
    API.getSavedIngredients()
      .then((results) => {
        setReturnedIngredients(results.data);
        console.log(results);
      })
      .catch((err) => console.log(err));
  }, []);

  const getRecipes = (search) => {
    const user_id = localStorage.getItem("userId")
    const goodIng = [];
    returnedIngredients.map((result) =>
    {
    if (result.looking === true && result.user_id == user_id){
      goodIng.push(result.name);
      console.log(goodIng);
    }})
    console.log(goodIng)
      API.getRecipesTest(goodIng)
      
        .then((results) => {
          console.log(goodIng)
          setSearchedRecipes([])
          setReturnedRecipes(results.data.hits);
          //this is where I would need to do an includes with the values of the particular ingredient names from my pantry
          console.log(results);
          console.log(returnedRecipes);
        })
        .catch((err) => console.log(err))
    
  };

const searchRecipes = (search) => {
 
  API.getRecipesTest(search)
    .then((results) => {
      setSearchedRecipes(results.data.hits);
      console.log(results);
    })
    .catch((err) => console.log(err))
}

  const saveFood = (recipeInfo) => {
    console.log(recipeInfo);
    const savedRecipe = {
      name: recipeInfo.label,
      image: recipeInfo.image,
      // description: recipeInfo.cuisineType[0],
      link: recipeInfo.url,
      user_id: localStorage.getItem("userId")
      // ingredients: recipeInfo.ingredientLines,
    };

    console.log("Saved ", savedRecipe);
    API.saveRecipe(savedRecipe).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 min-vh-100">
        <Navbar />
          <Hero />
          <Searchbar
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            getRecipes={getRecipes}
            search={search}
          />
          <RecipeHeader />
          <div className="row">
            <div className="col-lg-12 ">
              {returnedRecipes.length === 0 ?
              <div>
               {searchedRecipes.map(({ recipe }) => (
                <RecipeCard
                  id={recipe.id}
                  key={recipe.id}
                  saveFood={() => saveFood(recipe)}
                  title={recipe.label}
                  image={recipe.image? recipe.image : logo}
                  description={recipe.cuisineType}
                  ingredients={recipe.ingredientLines}
                  link={recipe.url}
                  //  nutrition={recipe.recipe.nutrition}
                />
              ))}
               </div>
               
              :
              <div>
              {returnedRecipes.map(({ recipe }) => (
                <RecipeCard
                  id={recipe.id}
                  key={recipe.id}
                  saveFood={() => saveFood(recipe)}
                  title={recipe.label}
                  image={recipe.image? recipe.image : logo}
                  description={recipe.cuisineType}
                  ingredients={recipe.ingredientLines}
                  link={recipe.url}
                  //  nutrition={recipe.recipe.nutrition}
                />
              ))}
              </div>
            }
           
      
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
