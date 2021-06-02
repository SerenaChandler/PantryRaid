import React from "react";
import "./style.css"

const IngredientContainer = (props) => {
  const { search, handleFormSubmit, handleInputChange } = props;
  return (
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={search}
            name="search"
            onChange={handleInputChange}
            className="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
        </form>
  );
};

export default IngredientContainer;
// comment