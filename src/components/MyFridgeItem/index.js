import React from "react";


const MyFridgeItem = () => {
    // function for only mapping over items we've added to the user
    return (
                // MAP OVER AND GET EACH ITEM NAME
        <div className="row my-3">
        <div className="col">
            <p className="ms-3">Mapped item here</p>
        </div>
        <div className="col d-flex justify-content-end align-items-center mx-4">
            <button className="btn btn-outline-primary">+</button>
        </div>
    </div>



    )

}

export default MyFridgeItem;