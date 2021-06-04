import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";
import logo from "../../logo.png"
const Ingredients = (props) => {
  const { label, image, nutrition, saveIngredient } = props;

  return (
    <li className="list-group-item">
      <img src={image? image: logo} width="50px" height="50px" />
      <p className="label">
        {" "}
        {label} <button onClick={saveIngredient}>Save to Fridge</button>
      </p>
    </li>
  );
};

export default Ingredients;

// comment

// import React from "react";
// import ListGroup from "react-bootstrap/ListGroup";
// import "./style.css";
// import logo from "../../logo.png"
// const Ingredients = (props) => {
//   const { label, image, nutrition, saveIngredient } = props;

//   return (
//     <li className="list-group-item list-group-item-dark">
//       <img src={image? image: logo} width="50px" height="50px" />
//       <p className="label">
//         {" "}
//         {label} <button onClick={saveIngredient}>Save to Fridge</button>
//       </p>
//     </li>
//   );
// };

// export default Ingredients;

// // comment
