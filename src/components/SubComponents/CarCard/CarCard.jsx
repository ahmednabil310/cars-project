import React, { useState, useEffect, useContext } from 'react';
import '../../../styles/CarCard/CarCard.css';
import close from '../../../images/close.png';
import { carContext } from '../../../contexts/cars/carState';
import { Link } from 'react-router-dom';
import SingleDetail from '../SingleDetail/SingleDetail';

const CarCard = ({ title, price, rating, imageUrl, closeModel }) => {
  const { CurrentEngine, GetCarData, CarData } = useContext(carContext);
  useEffect(() => {
    if (CurrentEngine !== null) {
      GetCarData(CurrentEngine);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentEngine]);
  console.log(CarData);

  let goods = [];
  let Bads = [];
  if (CarData.length > 0) {
    goods = CarData.good.split(',');
    Bads = CarData.bad.split(',');
  }

  return (
    <div>
      <div className="Car__Card pb-4 mb-5">
        <div className="Car__Header p-4 position-relative">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h6 className="text-capitalize font-weight-bold main__red mb-0">
              {CarData.model}
            </h6>
            <div className="Close__Btn" onClick={closeModel}>
              <img className="img-fluid" src={close} alt="close" />
            </div>
          </div>
          <p className="main__gary mb-1">{CarData.make}</p>
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
              />
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
          <div className="px-4">
            <SingleDetail />
            <SingleDetail />
            <SingleDetail />
            <SingleDetail />
          </div>
          {/* <p className="main__gary pl-4 mb-0">
            <strong>
              <sub style={{ position: 'relative', top: '0px' }}>
                {CarData.nhtsA_Driver_Frontal_Rating}
              </sub>{' '}
            </strong>
          </p> */}
          <p className="main__gary pl-4 py-1 font-weight-bold">Pros & Cons</p>
          <ul className="fa-ul px-2">
            {goods.length > 0
              ? goods.map((good) => (
                  <li key={good}>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {good}
                  </li>
                ))
              : ''}
            {Bads.length > 0
              ? Bads.map((bad) => (
                  <li key={bad}>
                    <span className="fa-li">
                      <i className="fas fa-times main__red"></i>
                    </span>
                    {bad}
                  </li>
                ))
              : ''}
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

        {/* =============== Car Specifications ================ */}
        <div className="Car__Specifications pb-3">
          <h4 className="main__red pl-4 pt-4 text-capitalize">
            Specifications
          </h4>
          <p className="main__gary pl-4 py-2 mb-0">
            Power Hp
            <br /> <strong>{CarData.power_hp}</strong>
          </p>
          <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
            Torque NM
            <br /> <strong>{CarData.torque_Nm}</strong>
          </p>
          <p className="main__gary pl-4 py-2 mb-0">
            Gear Box
            <br /> <strong>{CarData.gearbox}</strong>
          </p>
          <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
            Engine
            <br /> <strong>{CarData.engine}</strong>
          </p>
          <p className="main__gary pl-4 py-2 mb-0">
            Top Speed KPH
            <br /> <strong>{CarData.top_speed_kph}</strong>
          </p>
          <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
            Ful Econ L 100km
            <br /> <strong>{CarData.fuel_Econ_L_100km}</strong>
          </p>
          <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
            Ful Econ KM L
            <br /> <strong>{CarData.fuel_Econ_km_L}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
