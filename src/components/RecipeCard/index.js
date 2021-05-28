import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Recipes from "../../recipe.json";

const RecipeCard = (props) => {
  const {title, image, description, ingredients, nutrition} = props
  return (
    <div>
      

     
{/* 
        // <Card style={{ width: "18rem" }} className="mt-5 py-5">
        //   <Card.Img variant="top" src={recipe.image}/>
        //   <Card.Body>
        //     <Card.Title>{recipe.name}</Card.Title>
        //     <Card.Text>{recipe.description}</Card.Text>
        //     <Button variant="primary">{recipe.link}</Button>
        //   </Card.Body>
        // </Card>
         */}
        <div class="row mt-4">
                            <div class="col-3 text-center">
                                <h1>{title}</h1>
                                <img src={image} alt="" width="250" height="250"/>
                            </div>

                            <div class="col-3 text-center">
                                <h1>Description</h1>
                                <p>{description}</p>
                            </div>

                            <div class="col-3 text-center">
                                <h1>Ingredients</h1>
                                <ul style={{"list-style": "none"}}>
                                  <li>{ingredients}</li>
                                    
                                  
                                </ul>
                            </div>

                            <div class="col-3 text-center">
                                <h1>Nutritional info</h1>
                                <p>{nutrition}</p>

                            </div>
                        </div>

      
    </div>
  );
};

export default RecipeCard;
