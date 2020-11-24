import React,{useState,useContext,useEffect} from 'react';
import '../../styles/DealerPageStyles/LastBanner.css';

import {carContext} from '../../contexts/cars/carState'

const LastBanner = () => {
  const {CurrentEngine , GetCarData , CarData}= useContext(carContext)
		 
	useEffect(() => {
		if (CurrentEngine !== null) {
			GetCarData(CurrentEngine)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [CurrentEngine])
 
  return (
    <div className="last-banner d-flex py-5">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-start align-items-center">
            <h1 className="banner-title">
              <span>Approximate Price</span>
              <br />
              for each model
            </h1>
          </div>
          <div className="col-lg-7 d-flex banner-content container-fluid">
            <div className="banner-price">
              <h2 className="price-detail">Popular</h2>
              <h3 className="price-range">$ 50,000</h3>
            </div>
            <div className="banner-price">
              <h2 className="price-detail">Sport</h2>
              <h3 className="price-range">$ 50,000</h3>
            </div>
            <div className="banner-price">
              <h2 className="price-detail">Ultimate</h2>
              <h3 className="price-range">$ 50,000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBanner;
