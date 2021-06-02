import React from "react";
// import Recipes from "../../recipe.json";

const RecipeCard = (props) => {
  const {title, image, link, deleteFood} = props
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-10">
        <img src={image} alt={title}/>
        <p className="text-center text-light"><a href={link} target="_blank" rel="noreferrer" className="text-decoration-none">{title}</a></p>
        <button onClick={deleteFood}>Remove from Cookbook</button>
      </div>
    </div>
  );
};

export default RecipeCard;
