import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Ingredients = (props) => {
  const { label, image, nutrition, saveIngredient } = props;

  return (
    // <div>
    //   <ListGroup>
    //     {Ingredient.map((ingredient) => (
    //       <ListGroup.Item>{ingredient.name}</ListGroup.Item>
    //     ))}
    //   </ListGroup>
    // </div>

    <div className="row mt-4">
      <div className="col-3 text-center">
        <h1 className="text-light">{label}</h1>
        <img src={image} alt="" width="250" height="250" />
      </div>

      <div className="col-3 text-center">
        <h1 className="text-light">Description</h1>
        <p className="text-light"></p>
      </div>

      <div className="col-3 text-center">
        <h1 className="text-light">Ingredients</h1>
        <ul style={{ "list-style": "none" }}></ul>
      </div>

      <div className="col-3 text-center">
        <h1 className="text-light">Nutritional info</h1>
        <p className="text-light"></p>
      </div>

      <button onClick={saveIngredient}>Save Ingredient to Pantry</button>
    </div>
  );
};

export default Ingredients;
