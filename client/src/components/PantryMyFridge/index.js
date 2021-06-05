import React from "react";
import logo from "../../logo.png"


const PantryMyFridge = (props) => {
  const { label, image, deleteIngredient, looking, setLookie } = props;

  if(looking === true){
  return (
    <li className="list-group-item list-group-item-dark">
      <img src={image? image: logo} width="50px" height="50px" />

      <p className="label">{label}</p>
      <button onClick={deleteIngredient}>Delete ingredient </button>
      <button className="btno" onClick={setLookie}>✅</button>
      

    </li>
  );
} else {
  return (
    <li className="list-group-item list-group-item-dark">
      <img src={image? image: logo} width="50px" height="50px" />

      <p className="label"> {label}</p>
      <button onClick={deleteIngredient}>Delete ingredient </button>
      <button className="btno" onClick={setLookie}>❌</button>
      

    </li>
  );
}
};

export default PantryMyFridge;
