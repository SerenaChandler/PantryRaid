import React from "react";
import "./recipecard.css"


const RecipeCard = (props) => {
  const { title, image, description, ingredients, nutrition } = props
  return (
    <div>
      <div className="recipecard">
        <div className="left" style={{ backgroundImage: `url("${image}")` }}>&nbsp;</div>
        <div className="right"><h3 className="text-light">{title}</h3>
          <p className="description text-light">{description}</p>
          <div className="ingredients">
            <ul style={{ "list-style": "none" }}>
              {ingredients.map((ingredient) => <li className="text-light">{ingredient}</li>)}


            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default RecipeCard;
