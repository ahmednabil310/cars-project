import React from 'react';
import '../../styles/DealerPageStyles/LastBanner.css';
import { useTranslation } from 'react-i18next';
import buildingImage from '../../images/last-banner-image.png';
const LastBanner = (props) => {
  // the hook

  const { t, i18n } = useTranslation();

  let prices = props.data.price.split(';');

  return (
    <div className="last-banner d-flex" id="pricing">
      <div className="last-banner-inner-container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={buildingImage}
              alt="building-image"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 last-banner-content d-flex justify-content-center flex-column">
            <div>
              <h1 className="banner-title">
                <span className="first-title-price">
                  {t('Approximate Price')}
                </span>
                <br />
                {t('for each model')}
              </h1>
            </div>
            <div>
              <div className="banner-price">
                {prices.map((item, i) => {
                  return (
                    <h3 className="price-range" key={i}>
                      {item}
                    </h3>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBanner;
