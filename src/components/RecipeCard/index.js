import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Recipes from "../../recipe.json";

const RecipeCard = () => {
  return (
    <div>
      {Recipes.map((recipe) => (

        <Card style={{ width: "18rem" }} className="mt-5 py-5">
          <Card.Img variant="top" src={recipe.image}/>
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>{recipe.description}</Card.Text>
            <Button variant="primary">{recipe.link}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RecipeCard;
