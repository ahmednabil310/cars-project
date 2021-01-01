import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/NewCarPricingStyles/CarsTable.css';

// the hook
import { useTranslation } from 'react-i18next';

function CarsCard(props) {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="carsTable-cardContainer col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 "
      key={props.key}>
      <div className="carsTable-cardimg" style={{ marginBottom: '5px' }}>
        <img
          className="img-fluid h-auto"
          style={{ cursor: 'pointer' }}
          src={props.data.image_1}
          alt="car"
          onClick={() =>
            props.history.push(`/cardetail?type=${props.data.listCars[0].id}`)
          }
        />
      </div>
      <div className="carsTable-carCard-price">
        <span style={{ fontSize: '50px' }}>&lt;</span>
        {/* {<i className="fas fa-angle-left"></i>} */}
        {props.data.scoreRange}K AED
      </div>
      <div className="carsTable-carCard-topCarsContainer">
        <div className="carsTable-carCard-topCar">
          <p className="carsTable-carCard-topCar-topCategory ">
            {props.data.class}
          </p>
          {props.data.listCars.map((item, i) => {
            return (
              <p
                style={{ cursor: 'pointer' }}
                className={`carsTable-carCard-topCar-topCarName ${
                  i == 1 ? 'darker' : ''
                }`}
                key={i}
                onClick={() =>
                  props.history.push(`/cardetail?type=${item.id}`)
                }>
                <span className="carsTable-carCard-topCar-topCarName__span mr-2">
                  &gt;
                </span>
                {item.make + '  ' + item.model}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(CarsCard);
