import React,{useState,useContext,useEffect} from 'react';
import '../../styles/DealerPageStyles/CarDetails.css';
import mainCar from '../../images/dealer/big-car.png';

import {carContext} from '../../contexts/cars/carState'
const CarDetails = () => {
  const {CurrentEngine , GetCarData , CarData}= useContext(carContext)
		 
	useEffect(() => {
		if (CurrentEngine !== null) {
			console.log(CurrentEngine)
			GetCarData(CurrentEngine)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [CurrentEngine])
 
	console.log(CarData);
  return (
    <div className="car-details-container">
      <div className="row">
        <div className="col-lg-6 col-12 bigger-image">
          {CarData !== null ?
          <img src={CarData.result.image_1}   alt="img"/> : ""
        }
        </div>
        <div className="col-lg-6 col-12 bigger-image">
        {CarData !== null ?
          <img src={CarData.result.image_2} alt="img" /> : ""
        }
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
