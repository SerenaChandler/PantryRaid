import React from "react";
// import "./recipecard.css"


const RecipeCard = (props) => {
  const {title, image, description, ingredients, nutrition, link, saveFood} = props
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-10">
        <img src={image} alt={title}/>
        <h1 className="text-center text-light"><a href={link} target="_blank" rel="noreferrer" className="text-decoration-none">{title}</a></h1>
        <p className="text-center text-light">{description}</p>
        <ul className="list-group list-group-flush">
        {ingredients.map((ingredient) => <li className="text-light text-center list-group-item">{ingredient}</li>)}
        <button onClick={saveFood} className="btn btn-primary">Save Recipe</button>
        </ul>

      </div>
    </div>
  );
};

export default RecipeCard;
