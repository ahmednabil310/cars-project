import React from "react";
import "../../styles/NewCarPricingStyles/Section1.css";
function Section1() {
  return (
    <div>
      <div className="NewCarPricing-Section1">
        <h3 className="NewCarPricing-Section1__h3 NewCarPricing-Section1__h3--red">
          Choose
        </h3>
        <h3 className="NewCarPricing-Section1__h3">
          your car, learn what to pay
        </h3>
        <div className="NewCarPricing-Section1-search">
          <p className="NewCarPricing-Section1-search__p">Search by:</p>
          <p className="NewCarPricing-Section1-search__p">Make/Model</p>
          <p className="NewCarPricing-Section1-search__p">Type</p>
          <p className="NewCarPricing-Section1-search__p">Price</p>
        </div>
      </div>
    </div>
  );
}
export default Section1;
