import React from "react";
import "./style.css"
import ChecklistDropdown from "../ChecklistDropdown"

const Searchbar = (props) => {
  const { search, handleFormSubmit, handleInputChange, getRecipes } = props;

  return (
    <div className="">
<div className="searchbutton"><button
        onClick={getRecipes}
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        style={{
          height: "150px",
          width: "300px",
          border: "1px solid black",
          borderRadius: "60px",
          backgroundColor: "rgba(141, 3, 3, 0.897)",
          color: "white",
          fontSize: "25px",
        }}
      >
        Search My Pantry!
      </button></div>
      <form className="form-inline my-2 my-lg-0" onSubmit={handleFormSubmit}>
        <input
          value={search}
          name="search"
          onChange={handleInputChange}
          className="form-control mr-sm-2 "
          type="search"
          placeholder="Search for a Recipe"
          aria-label="Search"
        />

        
        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{
              border:"1px solid black",
              backgroundColor:"orange",
              color:"white"
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
