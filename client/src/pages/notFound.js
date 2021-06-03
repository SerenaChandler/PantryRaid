import React from "react";
import Navbar from "../components/Navbar";

const notFound = () => {
  return (
    <div className="row">
                    <div className="col-lg-12">
                    <Navbar />
                        <div className="hero text-center">
                            <h1 className="display-5 text-light">Nothing to see here! Scram punk!</h1>
                        </div>
                    </div>
                </div>
  );
};

export default notFound;