import React from "react";

const PantryMyFridge = (props) => {
  const { label, image} = props;
  return (
    <div className="list-group-item list-group-item-dark">
      <img src={image} width="50px" height="50px" />
      <p className="label"> {label}</p>
    </div>
  );
};

export default PantryMyFridge;
