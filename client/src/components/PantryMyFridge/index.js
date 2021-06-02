import React from "react";

const PantryMyFridge = (props) => {
  const { label, image, deleteIngredient, looking } = props;
  return (
    <li className="list-group-item list-group-item-dark">
      <img src={image} width="50px" height="50px" />

      <p className="label"> {label}</p>
      <button onClick={deleteIngredient}>Delete ingredient </button>
      <button onClick={deleteIngredient}>Cook with this! </button>
    </li>
  );
};

export default PantryMyFridge;
