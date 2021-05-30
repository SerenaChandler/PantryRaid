import React from "react";
import "./recipecard.css"


const RecipeCard = (props) => {
  const {title, image, description, ingredients, nutrition} = props
  return (
    <div>
<div className="recipecard">
<div className="left" style={{ backgroundImage: `url("${image}")`}}>&nbsp;</div>
<button onClick={props.saveFood} className="saveBtn">+</button>
<div className="right"><h3>{title}</h3>
<p className="description">{description}</p>
<div className="ingredients">
<ul className="columns" data-columns="2">
{ingredients.map((ingredient) => <li>{ingredient}</li>)}
        
      
    </ul>
</div>

</div>
</div>
    </div>
  );
};

export default RecipeCard;
