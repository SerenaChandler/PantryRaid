import React from "react";
import Recipes from "../../recipe.json";

const RecipeCard = () => {

  return (
    <div>
      {Recipes.map((recipe) => (

        // <Card style={{ width: "18rem" }} className="mt-5 py-5">
        //   <Card.Img variant="top" src={recipe.image}/>
        //   <Card.Body>
        //     <Card.Title>{recipe.name}</Card.Title>
        //     <Card.Text>{recipe.description}</Card.Text>
        //     <Button variant="primary">{recipe.link}</Button>
        //   </Card.Body>
        // </Card>
        <div class="row mt-4">
                            <div class="col-3 text-center">
                                <h1>{recipe.name}</h1>
                                <img src={recipe.image} alt="" width="250" height="250"/>
                            </div>

                            <div class="col-3 text-center">
                                <h1>Description</h1>
                                <p>{recipe.description}</p>
                            </div>

                            <div class="col-3 text-center">
                                <h1>Ingredients</h1>
                                <ul style={{"list-style": "none"}}>
                                  {recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)}  
                                </ul>
                            </div>

                            <div class="col-3 text-center">
                                <h1>Nutritional info</h1>
                                <ul style={{"list-style": "none"}}>
                                {recipe.nutrition.map((nutrition) => <li>{nutrition}</li>)}
                                </ul>
                            </div>
                        </div>

      ))}
    </div>
  );
};

export default RecipeCard;
