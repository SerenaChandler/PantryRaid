import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Ingredients = () => {
  return (
    <div>
      <ListGroup>
        {Ingredient.map((ingredient) => (
          <ListGroup.Item>{ingredient.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Ingredients;
