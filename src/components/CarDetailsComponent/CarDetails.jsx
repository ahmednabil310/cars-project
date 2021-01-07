import React from 'react';
import '../../styles/DealerPageStyles/CarDetails.css';

const CarDetails = (props) => {
  return (
    <div className="car-details-container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12 bigger-image bigger-image-first">
          <img src={props.data.image_1} alt="first-image" />
        </div>
        <div className="col-lg-6 col-12 bigger-image">
          <img src={props.data.image_2} alt="second-image" />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
