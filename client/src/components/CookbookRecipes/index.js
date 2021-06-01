import React from "react";
import Recipes from "../../recipe.json";

const RecipeCard = (props) => {
  const { title, image, description, ingredients, nutrition } = props;

  return (
    <div>
      
        <div class="row mt-4 d-flex justify-content-center">
          <div class="col-2 text-center">
            <h1 className="text-light">{title}</h1>
            <img src={image} alt="" width="250" height="250" />
          </div>

     

       

    
        </div>
      
    </div>
  );
};

export default RecipeCard;
