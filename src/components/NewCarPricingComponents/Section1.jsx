import React from "react";
import "../../styles/NewCarPricingStyles/Section1.css";
function Section1() {
  return (
    <div className=" d-flex justify-content-center">
      <div className="NewCarPricing-Section1">
        <h3 className="NewCarPricing-Section1__h3 NewCarPricing-Section1__h3--red">
          Choose
        </h3>
        <h3 className="NewCarPricing-Section1__h3">
          your car, learn what to pay
        </h3>
        <div className="NewCarPricing-Section1-search d-flex flex-wrap">
          <p className="NewCarPricing-Section1-search__p">Search by:</p>
          <p className="NewCarPricing-Section1-search__p">Make/Model</p>
          <p className="NewCarPricing-Section1-search__p">Type</p>
          <p className="NewCarPricing-Section1-search__p">Price</p>
        </div>
        <div className="d-flex flex-row select-container flex-wrap justify-content-center">
          <select className="custom-select my-select mr-xl-4 mr-0">
            <option>Any Make</option>
            <option>op1</option>
            <option>op2</option>
          </select>
          <select className="custom-select my-select mr-xl-4 mr-0">
            <option>Any Make</option>
            <option>op1</option>
            <option>op2</option>
          </select>
          <select className="custom-select my-select mr-0 mr-xl-3">
            <option>Any Make</option>
            <option>op1</option>
            <option>op2</option>
          </select>
          <button className="btn my-btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default Section1;
