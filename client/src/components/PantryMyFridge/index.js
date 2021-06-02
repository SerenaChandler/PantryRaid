import React from "react";

const PantryMyFridge = (props) => {
  const { label, image, deleteIngredient, search } = props;
  return (
    <li className="list-group-item list-group-item-dark">
      <img src={image} width="50px" height="50px" />

      <p className="label"> {label}</p>
      <button onClick={deleteIngredient}>Delete ingredient </button>
    </li>
  );
};

export default PantryMyFridge;
