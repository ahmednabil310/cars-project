import React from "react";
import "../../styles/NewCarPricingStyles/Section2.css";
import CarsTable from "./CarsTable";
function Section2() {
  return (
    <div className='custom__container'>
      <div className="NewCarPricing-Section2 m-auto">
        <div className="NewCarPricing-Section2-Heading">
          <h3 className="NewCarPricing-Section2-Heading__h3 NewCarPricing-Section2-Heading__h3--red">
            Best-rated
          </h3>
          <h3 className="NewCarPricing-Section2-Heading__h3">cars by price</h3>
        </div>
        <CarsTable />
        <CarsTable />
      </div>
    </div>
  );
}

export default Section2;
