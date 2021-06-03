import React from "react";

const Searchbar = (props) => {
  const { search, handleFormSubmit, handleInputChange } = props;

  return (
            <div className="d-flex justify-content-center mt-4">
              <button
                onClick={handleFormSubmit}
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                style={{height:'150px',width:'300px',border:'1px solid white', borderRadius:'60px', backgroundColor:'green',color:'white',fontSize:'25px'}}
              >
                Search My Pantry!
              </button>
            </div>
  );
};

export default Searchbar;
