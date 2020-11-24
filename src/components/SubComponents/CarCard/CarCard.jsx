import React, { useState, useEffect, useContext } from 'react';
import '../../../styles/CarCard/CarCard.css';

import gallery from '../../../images/car-details/Icon-gallary.png';
import close from '../../../images/close.png';

import bigstars from '../../../images/dealer/bigstars.png';
import singleStar from '../../../images/dealer/singlestar.png';

import { carContext } from '../../../contexts/cars/carState';

import StarsRating from 'react-stars-rating';
import { Link } from 'react-router-dom';

const CarCard = ({ title, price, rating, imageUrl, closeModel }) => {
  const { CurrentEngine, GetCarData, CarData } = useContext(carContext);
  useEffect(() => {
    if (CurrentEngine !== null) {
      GetCarData(CurrentEngine);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentEngine]);
  console.log(CarData);
 
   let goods=[];
   let Bads= [];
     if(CarData.length>0){
        goods = CarData.good.split(",")
         Bads = CarData.bad.split(",")
     }
  
   
  return (
    <div>
      <div className="Car__Card pb-4 mb-5">
        <div className="Car__Header p-4 position-relative">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h6 className="text-capitalize font-weight-bold main__red mb-0">
              2020 Aston Martin DB11
            </h6>
            <div className="Close__Btn" onClick={closeModel}>
              <img className="img-fluid" src={close} alt="close" />
            </div>
          </div>
          <p className="main__gary mb-1">V8 Volante 2dr Convertible 4.0L 8c…</p>
          <button
            className="main__gary pl-0"
            style={{
              textDecoration: 'underline',
              border: 'none',
              background: 'none',
            }}>
            Change style
          </button>
        </div>
        {/* =============== Car Image ================ */}
        <div className="Car__Image">
          {/* <img className='img-fluid' src={imageUrl} alt='car' /> */}
          <div className="Car__Image__Gallery d-flex flex-column ">
           
              <Link to="/cardetail">
                <img
                  className="img-fluid w-100"
                  src={CarData.image_1}
                  alt="gallery"
                />{' '}
              </Link>
           
            <p className="mb-0 ml-3 text-white">View all photos</p>
          </div>
        </div>
        {/* =============== Car Price ================ */}
        <div className="Car__Price pb-3">
          <h4 className="main__red pl-4 pt-4 text-capitalize">Pricing</h4>
          
            <p className="main__gary pl-4 py-2 mb-0">
              Starting MSRP <br /> $ <strong>{CarData.price}</strong>
            </p>
       
        </div>
        {/* =============== Car Rating ================ */}
        <div className="Car__Rating pb-3">
          <h4 className="main__red pl-4 pt-4 text-capitalize">Rating</h4>
          <p className="main__gary pl-4 mb-0">
            <strong>
          <sub style={{ position: 'relative', top: '0px' }}>{CarData.nhtsA_Driver_Frontal_Rating}</sub>{' '}
            </strong>
          </p>
          <p className="main__gary pl-4 py-1 font-weight-bold">Pros & Cons</p>
          <ul class="fa-ul px-2">
            {goods.length >0 ? goods.map((good)=>
             <li key={good}>
               <span class="fa-li">
                 <i class="fas fa-check"></i>
               </span>
                 {good}
             </li>) :""}
             { Bads.length>0 ? Bads.map((bad)=>(
             <li key={bad} >
              <span class="fa-li">
                <i class="fas fa-times main__red"></i>
              </span>
              {bad}
            </li>)):""}
           </ul>
          <div className="px-2 mb-4">
            <Link to="/cardetail">
              <button
                className="btn btn-outline-danger Full__Review__Btn btn-block text-capitalize"
                style={{ fontWeight: '500' }}>
                Full Review
              </button>
            </Link>
          </div>
        </div>

        {/* =============== Car Features ================ */}
        <div className="Car__Features pb-3">
          <h4 className="main__red pl-4 pt-4 text-capitalize">Features</h4>
         
        </div>
        {/* =============== Car Specifications ================ */}
        <div className="Car__Specifications pb-3">
          <h4 className="main__red pl-4 pt-4 text-capitalize">
            Specifications
          </h4>
          <p className="main__gary pl-4 py-2 mb-0">
            Engine power
             <br /> <strong>{CarData.power_hp}</strong>
          </p>
          <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
            Engine torque
             <br /> <strong>{CarData.torque_Nm}</strong>
          </p>
          <p className="main__gary pl-4 py-2 mb-0">
            Engine displacement
            <br /> <strong></strong>
          </p>
          <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
            Engine configuration
            <br /> <strong>{CarData.engine}</strong>
          </p>
          <p className="main__gary pl-4 py-2 mb-0">
            Transmission
             <br /> <strong>{CarData.top_speed_kph}</strong>
          </p>
          <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
            Tire size
            <br />{' '}
            <strong>
              20 X 9.0-in (Front)
              <br />
              20 X 11.0-in (Rear)
            </strong>
          </p>
          <p className="main__gary pl-4 py-2 mb-0">
            Wheel type
            <br /> <strong>Alloy wheels</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
