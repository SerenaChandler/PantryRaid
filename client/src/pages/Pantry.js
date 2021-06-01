import React, { useEffect, useState } from "react";
import PantryMyFridge from "../components/PantryMyFridge";
import IngredientContainer from "../components/IngredientContainer";
import API from "../utils/API";
import IngredientCards from "../components/ingredientCards";
import "./style.css"

// import ChecklistDropdown from "./components/ChecklistDropdown"

const Pantry = () => {
  // functions for handling search and checkboxes

  const [search, setSearch] = useState("");
  const [returnedIngredients, setReturnedIngredients] = useState([]);
  const [savedIngredients, setSavedIngredients] = useState([]);

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
    API.getSavedIngredients()
      .then((results) => {
        setSavedIngredients(results.data);
        console.log(results);
      })
      .catch((err) => console.log(err));
  }, []);

  const saveIngredient = (ingredientInfo) => {
    const savedIngredient = {
      name: ingredientInfo.label,
      image: ingredientInfo.image

    }
    console.log("Saved ", savedIngredient);
    API.saveIngredient(savedIngredient).then((response) => {
      console.log(response);
    });
  };

  return (
<div className="flex">
<div className="searchbar">
  <IngredientContainer
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              search={search}
            /></div>
<div className="left">
<PantryMyFridge />
 </div>
<div className="right">  <ul class="list-group">
            {returnedIngredients.map(({ food }) => (
              <IngredientCards 
              label={food.label} 
              image={food.image}
              saveIngredient={() => saveIngredient(food)}
              />
            ))}
            </ul></div>
</div>


    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-lg-12 min-vh-100">
    //       <div className="row">
    //         <PantryMyFridge />


    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Pantry;

// comment