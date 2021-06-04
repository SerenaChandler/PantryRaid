import React from "react";
import "./recipecard.css"
import logo from "../../logo.png"


const RecipeCard = (props) => {
  const {title, image, description, ingredients, nutrition, link, saveFood} = props
  return (
    <div className="recipecard">
      <div className="col-md-10 content">
        <img src={image? image : logo} height="400px" width="400px" alt={title} />
        <h1 className="text-center"><a href={link} target="_blank" rel="noreferrer" className="text-decoration-none">{title}</a></h1>
        <p className="text-center">{description}</p>
        <div className="buttoncontainer">
        <button onClick={saveFood} className="btn btn-primary">Save Recipe</button>
        <a className="btn btn-success" href={link} target="_blank">View Recipe</a></div>
        <div className="columns">
        <ul>
        {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul></div>
        

        

      </div>
    </div>
  );
};

export default RecipeCard;
