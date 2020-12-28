import React from "react";
import "../../styles/DealerPageStyles/CarDetails.css";

const CarDetails = (props) => {
  return (
    <div className="car-details-container">
      <div className="row">
        <div className="col-lg-6 col-12 bigger-image">
          <img src={props.data.image_1} style={{ width: "65%" }} alt="img" />
        </div>
        <div className="col-lg-6 col-12 bigger-image">
          <img src={props.data.image_2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
