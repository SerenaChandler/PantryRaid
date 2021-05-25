import React from "react";


const Searchbar = () => {
    return (

        
        <div className="row">
        <div className="col-lg-12">
            <div className="container">
                <h1 className="text-center">Search for a recipe</h1>
                <div className="d-flex justify-content-center">

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>



    )

}

export default Searchbar;