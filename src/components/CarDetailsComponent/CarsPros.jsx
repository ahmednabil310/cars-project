import React from 'react';
import '../../styles/DealerPageStyles/CarsPros.css';
import check from '../../images/dealer/check.png';
import close from '../../images/dealer/close.png';
import magic from '../../images/dealer/magic.png';
import { useTranslation } from 'react-i18next';

const CarsPros = () => {
  // the hook

  const { t, i18n } = useTranslation();

  return (
    <div className="cars-pros-container">
      <div className="row">
        <div className="col-lg-4 col-md-12 car-pros">
          <h3 className="pros">{t('Pros')}</h3>
          <svg
            id="Component_6_11"
            data-name="Component 6 – 11"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="12.969"
            viewBox="0 0 300 12.969">
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#d53535" />
                <stop offset="1" stopColor="#6b1b1b" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="0.777"
                x2="0.777"
                y2="1.686"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#efefef" />
                <stop offset="1" stopColor="#c4c4c4" />
              </linearGradient>
            </defs>
            <path
              id="Path_52"
              data-name="Path 52"
              d="M-180,0,464.729,1.338v9.99L-180,9.969Z"
              transform="translate(180)"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M-180,0,464.728.078v6.7L-180,6.958Z"
              transform="translate(180 6.01)"
              fill="url(#linear-gradient-2)"
            />
          </svg>
          <div className="pros-content pt-4">
            <img src={check} className="pr-4" />
            <h2>
              {t('Costs less than comparable luxury sedans in its class')}
            </h2>
          </div>
          <div className="pros-content">
            <img src={check} className="pr-4" />
            <h2>{t('Roomy interior stays very quiet at highway speeds')}</h2>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 car-cons">
          <h3 className="cons">{t('Cons')}</h3>
          <svg
            id="Component_6_11"
            data-name="Component 6 – 11"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="12.969"
            viewBox="0 0 300 12.969">
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#d53535" />
                <stop offset="1" stopColor="#6b1b1b" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="0.777"
                x2="0.777"
                y2="1.686"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#efefef" />
                <stop offset="1" stopColor="#c4c4c4" />
              </linearGradient>
            </defs>
            <path
              id="Path_52"
              data-name="Path 52"
              d="M-180,0,464.729,1.338v9.99L-180,9.969Z"
              transform="translate(180)"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M-180,0,464.728.078v6.7L-180,6.958Z"
              transform="translate(180 6.01)"
              fill="url(#linear-gradient-2)"
            />
          </svg>
          <div className="pros-content pt-4">
            <img src={close} className="pr-4" />
            <h2>
              {t(
                'Ride quality isn’t as cushy or refined as that of some rival sedans',
              )}
            </h2>
          </div>
          <div className="pros-content">
            <img src={close} className="pr-4" />
            <h2>{t('Rear headroom is a little tight for this class')}</h2>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 car-cons">
          <h3 className="cons">{t("What's New")}</h3>
          <svg
            id="Component_6_11"
            data-name="Component 6 – 11"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="12.969"
            viewBox="0 0 300 12.969">
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#d53535" />
                <stop offset="1" stopColor="#6b1b1b" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="0.777"
                x2="0.777"
                y2="1.686"
                gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#efefef" />
                <stop offset="1" stopColor="#c4c4c4" />
              </linearGradient>
            </defs>
            <path
              id="Path_52"
              data-name="Path 52"
              d="M-180,0,464.729,1.338v9.99L-180,9.969Z"
              transform="translate(180)"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M-180,0,464.728.078v6.7L-180,6.958Z"
              transform="translate(180 6.01)"
              fill="url(#linear-gradient-2)"
            />
          </svg>
          <div className="pros-content pt-4">
            <img src={magic} className="pr-4" />
            <h2>
              {t(
                'New blind-spot collision-avoidance assist helps with lane changes',
              )}
            </h2>
          </div>
          <div className="pros-content">
            <img src={magic} className="pr-4" />
            <h2>
              {t(
                'Optional 9.2-inch infotainment system now has customizable home screen',
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPros;
