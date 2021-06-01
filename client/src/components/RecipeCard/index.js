import React from "react";
import "./recipecard.css"


const RecipeCard = (props) => {
  const {title, image, description, ingredients, nutrition, link, saveFood} = props
  return (
    <div>
<div className="recipecard">
<div className="left" style={{ backgroundImage: `url("${image}")`}}>&nbsp;</div>
<button onClick={saveFood} className="saveBtn">Save Recipe</button>
<a href={link} target="_blank" rel="noreferrer" ><button className="saveBtn">go to full recipe</button> </a>
<div className="right"><h3>{title}</h3>
<p className="description">{description}</p>
<div className="ingredients">
<ul className="columns" data-columns="2">
{ingredients.map((ingredient) => <li className="text-light">{ingredient}</li>)}
        
      
    </ul>
</div>

</div>
</div>
    </div>
  );
};

export default RecipeCard;
