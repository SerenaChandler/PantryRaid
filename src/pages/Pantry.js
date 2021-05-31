import React, { useEffect, useState } from "react";
import PantryMyFridge from "../components/PantryMyFridge";
import IngredientContainer from "../components/IngredientContainer";
import API from "../utils/API";
import IngredientCards from "../components/ingredientCards";

// import ChecklistDropdown from "./components/ChecklistDropdown"

const Pantry = () => {
  // functions for handling search and checkboxes

  const [search, setSearch] = useState("");
  const [returnedIngredients, setReturnedIngredients] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getIngredients(search);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearch(value);
  };

  const getIngredients = (search) => {
    API.getIngredientsTest(search)
      .then((results) => {
        setReturnedIngredients(results.data.hints);
        console.log(results);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    API.getSavedRecipes()
    .then((results) => {
        setSavedRecipes(results.data);
        console.log(results);
      }).catch((err) => console.log(err))
}, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 min-vh-100">
          <div className="row">
            <PantryMyFridge />
            <IngredientContainer
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              search={search}
            />
            {returnedIngredients.map(({ food }) => (
              <IngredientCards label={food.label} image={food.image} />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pantry;
