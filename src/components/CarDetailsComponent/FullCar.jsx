import React,{useState,useContext,useEffect} from 'react';

import '../../styles/DealerPageStyles/FullCar.css';
import flag from '../../images/dealer/korea.png';
import stars from '../../images/dealer/stars.png';
import SingleDetail from '../SubComponents/SingleDetail/SingleDetail';
import {carContext} from '../../contexts/cars/carState'

const FullCar = () => {
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
    <div className="fullcar-container">
      <div className="row">
        <div className="col-lg-6 brief-details">
          <h1 className="brief">Brief About</h1>
          <h2 className="car-type">Genesis G80 - 2020 - Ultimate</h2>
          <div className="made-in d-flex align-items-center">
            <img src={flag} />
            <span>Made: &nbsp; Korea Republic</span>
          </div>
          <p className="brief-content pb-5">
            Going head to head with BMW’s 5 Series and Mercedes-Benz’s E-Class
            is no easy feat, but the 2020 G80 sedan easily holds its own. The
            G80’s roots date back to when the Genesis sedan was a model in the
            Hyundai lineup, before Genesis was its own brand. Now serving as the
            middle ground between the sportier G70 and the flagship G90, the G80
            offers an appealing blend of comfort and power.
          </p>
          <p className="brief-content">
            Going head to head with BMW’s 5 Series and Mercedes-Benz’s E-Class
            is no easy feat, but the 2020 G80 sedan easily holds its own. The
            G80’s roots date back to when the Genesis sedan was a model in the
            Hyundai lineup, before Genesis was its own brand. Now serving as the
            middle ground between the sportier G70 and the flagship G90, the G80
            offers an appealing blend of comfort and power.
          </p>
        </div>

        <div className="col-lg-6 full-details">
          <div className="full-details__banner">
            <h3 className="full-details-title brief">More details</h3>
            <h4 className="full-details-specs car-type">
              Specs about This car
            </h4>
          </div>
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
        </div>
      </div>
    </div>
  );
};

export default FullCar;
