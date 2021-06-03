import React, { useEffect, useState } from "react";
import PantryMyFridge from "../components/PantryMyFridge";
import IngredientContainer from "../components/IngredientContainer";
import API from "../utils/API";
import IngredientCards from "../components/ingredientCards";
import "./style.css";
import Navbar from "../components/Navbar";

// import ChecklistDropdown from "./components/ChecklistDropdown"

const Pantry = () => {
  // functions for handling search and checkboxes

  const [search, setSearch] = useState("");
  const [returnedIngredients, setReturnedIngredients] = useState([]);
  const [savedIngredients, setSavedIngredients] = useState([]);

  useEffect(() => {
    API.getSavedIngredients()
      .then((results) => {
        setSavedIngredients(results.data);
        console.log(results);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const saveIngredient = (ingredientInfo) => {
    const savedIngredient = {
      name: ingredientInfo.label,
      image: ingredientInfo.image,
      looking: 0,
      user_id: localStorage.getItem("userId")
    };
    console.log("Saved ", savedIngredient);
    API.saveIngredient(savedIngredient).then((response) => {
      console.log(response);
      API.getSavedIngredients()
        .then((results) => {
          setSavedIngredients(results.data);
          console.log(results);
        })
        .catch((err) => console.log(err));
    });
  };

  const deleteIngredient = (currentIngredient) => {
    console.log(currentIngredient);
    API.deleteIngredient(currentIngredient.id)
      .then((res) => {
        console.log("you deleted this ingredient", res);
        API.getSavedIngredients()
          .then((results) => {
            setSavedIngredients(results.data);
            console.log(results);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log("This is the error", err);
      });
  };

  const setLookie = (currIng) => {
    currIng.looking = !currIng.looking;
    console.log(currIng.looking);
    console.log(currIng.id);
    API.updateIng(currIng.id,currIng.looking)
    .then((results) => {
      console.log(results);
      API.getSavedIngredients()
      .then((results) => {
        setSavedIngredients(results.data);
        console.log(results);
      })
    })
    .catch((err) => console.log(err));
  }

  return (

    // <div className="flex">

    //   <div className="searchbar">
    //     <IngredientContainer
    //       handleFormSubmit={handleFormSubmit}
    //       handleInputChange={handleInputChange}
    //       search={search}
    //     />
    //   </div>

    //   <div className="left">
    //     {savedIngredients.map((ingredient) => (
    //       <PantryMyFridge
    //         deleteIngredient={() => deleteIngredient(ingredient)}
    //         id={ingredient.id}
    //         label={ingredient.name}
    //         image={ingredient.image}
    //       />
    //     ))}
    //   </div>

    //   <div className="right">
    //     {" "}
    //     <ul className="list-group">
    //       {returnedIngredients.map(({ food }) => (
    //         <IngredientCards
    //           label={food.label}
    //           image={food.image}
    //           saveIngredient={() => saveIngredient(food)}
    //         />
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 min-vh-100">
        <Navbar />
          <div className="searchbar">
            <IngredientContainer
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              search={search}

            />
          </div>

          <div className="row">
            <div className="col-md-6">
              {savedIngredients.map((ingredient) => (
                <PantryMyFridge
                  deleteIngredient={() => deleteIngredient(ingredient)}
                  id={ingredient.id}
                  label={ingredient.name}
                  image={ingredient.image}
                  looking={ingredient.looking}
                  setLookie={() => setLookie(ingredient)}
                />
              ))}


            </div>

            <div className="col-md-6">
              {" "}
              <ul className="list-group">
                {returnedIngredients.map(({ food }) => (
                  <IngredientCards
                    label={food.label}
                    image={food.image}
                    saveIngredient={() => saveIngredient(food)}
                  />
                ))}
              </ul>


            </div>
          </div>



        </div>
      </div>
    </div>


  );
};

export default Pantry;

// comment
