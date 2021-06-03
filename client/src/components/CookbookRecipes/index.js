import React from "react";
// import Recipes from "../../recipe.json";
import "./style.css"

const RecipeCard = (props) => {
  const {title, image, link, deleteFood} = props
  return (
      <div className="card">
        <img src={image} alt={title} className="card-img-top" />
        <p className="text-center text-light">{title}</p>
        <a href={link} target="_blank" class="btn btn-success">View Recipe</a>
        <button className="btn btn-danger" onClick={deleteFood}>Remove</button>
      </div>
  );
};

export default RecipeCard;

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}