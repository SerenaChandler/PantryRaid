import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Recipes = () => {
  return (<div>



{Recipe.map((recipe) => (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={recipe.image} />
  <Card.Body>
    <Card.Title>{recipe.name}</Card.Title>
    <Card.Text>
     {recipe.description}
    </Card.Text>
    <Button variant="primary">{recipe.link}</Button>
  </Card.Body>
</Card>
))}







  </div>
  
  )
};

export default Recipes