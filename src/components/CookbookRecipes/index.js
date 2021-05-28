import React from "react";
import Recipes from "../../recipe.json";

const RecipeCard = () => {

  return (
    <div>
      {Recipes.map((recipe) => (
        <div class="row mt-4 d-flex justify-content-center">
          <div class="col-2 text-center">
            <h1 className="text-light">{recipe.name}</h1>
            <img src={recipe.image} alt="" width="250" height="250" />
          </div>

          <div class="col-2 text-center">
            <h1 className="text-light">Description</h1>
            <p className="text-light">{recipe.description}</p>
          </div>

          <div class="col-2 text-center">
            <h1 className="text-light">Ingredients</h1>
            <ul style={{ "list-style": "none" }}>
              {recipe.ingredients.map((ingredient) => <li className="text-light">{ingredient}</li>)}
            </ul>
          </div>

          <div class="col-2 text-center">
            <h1 className="text-light">Nutritional info</h1>
            <ul style={{ "list-style": "none" }}>
              {recipe.nutrition.map((nutrition) => <li className="text-light">{nutrition}</li>)}
            </ul>
          </div>
          
          <div class="col-2 text-center">
            <h1 className="text-light">Missing ingredients:</h1>
            <ul style={{ "list-style": "none" }}>
              {/* this is where the missing ingredients should be */}
              <li className="text-light">Missing ingredient 1</li>
              <li className="text-light">Missing ingredient 2</li>
              <li className="text-light">Missing ingredient 3</li>
              <li className="text-light">Missing ingredient 4</li>
            </ul>
          </div>
        </div>

      ))}
    </div>
  );
};

export default RecipeCard;
