import React from "react";
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
        <div className="row mt-4">
                            <div className="col-3 text-center">
                                <h1 className="text-light">{title}</h1>
                                <img src={image} alt="" width="250" height="250"/>
                            </div>

                            <div className="col-3 text-center">
                                <h1 className="text-light">Description</h1>
                                <p className="text-light">{description}</p>
                            </div>

                            <div className="col-3 text-center">
                                <h1 className="text-light">Ingredients</h1>
                                <ul style={{"list-style": "none"}}>

                                  {ingredients.map((ingredient) => <li className="text-light">{ingredient}</li>)}

                                    
                                  
                                </ul>
                            </div>

                            <div className="col-3 text-center">
                                <h1 className="text-light">Nutritional info</h1>
                                <p className="text-light">{nutrition}</p>

                            </div>
                        </div>


      
    </div>
  );
};

export default RecipeCard;
