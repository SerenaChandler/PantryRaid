import React from "react";
import Recipes from "../../recipe.json";

const RecipeCard = (props) => {
  const {
    title,
    image,
    description,
    ingredients,
    nutrition,
    link,
    deleteFood,
  } = props;

  return (
    <div>
      <div className="recipecard">
        <div className="left" style={{ backgroundImage: `url("${image}")` }}>
          &nbsp;
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <button className="saveBtn">go to full recipe</button>{" "}
        </a>
        <div className="right">
          <h3>{title}</h3>

          <div className="ingredients">
            <ul className="columns" data-columns="2"></ul>
          </div>
        </div>
        <button onClick={deleteFood}>Delete Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
