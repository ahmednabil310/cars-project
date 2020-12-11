import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/NewCarPricingStyles/CarsTable.css';

// the hook
import { useTranslation } from 'react-i18next';

function CarsCard(props) {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ cursor: "pointer" }} onClick={() =>
      props.history.push(
        `/cardetail?type=${props.data.id}`,
      )
    }
      className="carsTable-cardContainer col-xl-3 col-lg-3 col-md-6 py-1 pb-5"
      key={props.key}>
      <div className="carsTable-cardimg" style={{ marginBottom: '5px' }}>
        <img className="img-fluid h-auto" src={props.data.image_1} alt="car" />
      </div>
      <div className="carsTable-carCard-price">
        {<i className="fas fa-angle-left"></i>} {props.data.scoreRange}K $ AED
      </div>
      <div className="carsTable-carCard-topCarsContainer">
        <div className="carsTable-carCard-topCar">
          <p className="carsTable-carCard-topCar-topCategory ml-3">
            {props.data.class}
          </p>
          <p className="carsTable-carCard-topCar-topCarName">
            <span className="carsTable-carCard-topCar-topCarName__span mr-2">
              &gt;
            </span>
            {props.data.make + '  ' + props.data.model}
          </p>
        </div>

        <a href="#" className="carsTable-shop">
          {t('Shop cars under $20k')}
        </a>
      </div>
    </div>
  );
}

export default withRouter(CarsCard);
