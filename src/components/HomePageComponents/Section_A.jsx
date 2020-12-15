import '../../styles/HomePageStyles/Section_A.css';
import Hatchback from '../../images/micro.png';
import sedan from '../../images/sedan.png';
import midSizeSedan from '../../images/suv.png';
import luxurySedan from '../../images/sport.png';
import midSizeSuv from '../../images/luxury.png';
import largeSuv from '../../images/Large SUV.png';
import toyota from '../../images/toyota.png';
import mercedes from '../../images/mercedes.png';
import bmw from '../../images/bmw.png';
import nissan from '../../images/nissan.png';
import honda from '../../images/honda.png';
import lexus from '../../images/lexus.png';
import SingleCar from '../SubComponents/SingleCar/SingleCar';
import { Link } from 'react-router-dom';

// the hook
import { useTranslation } from 'react-i18next';

const Section_A = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="section-a-homepage-container">
      <div className="row">
        <div className="choices-container col-xl-6 col-lg-12">
          <div className="d-flex choices-container-sub">
            <h3>
              <span className="special">{t('Common')}</span>{' '}
              {t('types of choice')}
            </h3>
            <svg
              id="Component_6_1"
              data-name="Component 6 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="243.729"
              height="36.969"
              viewBox="0 0 243.729 36.969">
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
                d="M-180,0H42L62,33.969H-180Z"
                transform="translate(180)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Path_53"
                data-name="Path 53"
                d="M-180,0,59.808.207l3.921,6.566L-180,6.958Z"
                transform="translate(180 30.01)"
                fill="url(#linear-gradient-2)"
              />
            </svg>
          </div>
          <h4 className="note">
            {t(
              'You can quickly pick a category from here by clicking on one of the following icons',
            )}
          </h4>
          <div className="row">
            <div className="row w-100 pb-5">
              <SingleCar name="Hatchback" image={Hatchback} isRoute={true} />
              <SingleCar name="Sedan" image={sedan} isRoute={true}/>
              <SingleCar name="Premium" image={midSizeSedan} isRoute={true}/>
              <SingleCar name="Coupe" image={luxurySedan} isRoute={true}/>
              <SingleCar name="SUV" image={midSizeSuv} isRoute={true}/>
              <SingleCar name="Large SUV" image={largeSuv} isRoute={true}/>
            </div>
            {/* <div className="row w-100"></div> */}
          </div>
        </div>

        <div className="make-container col-xl-6 col-lg-12">
          <div className="d-flex  make-container-sub">
            <h3 className="d-inline">
              <span className="special">{t('Common')}</span>{' '}
              {t('types of make')}
            </h3>
            <svg
              id="Component_6_1"
              data-name="Component 6 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="243.729"
              height="36.969"
              viewBox="0 0 243.729 36.969">
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
                d="M-180,0H42L62,33.969H-180Z"
                transform="translate(180)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Path_53"
                data-name="Path 53"
                d="M-180,0,59.808.207l3.921,6.566L-180,6.958Z"
                transform="translate(180 30.01)"
                fill="url(#linear-gradient-2)"
              />
            </svg>
          </div>
          <h4 className="note">
            {t(
              'You can quickly pick a category from here by clicking on one of the following icons1',
            )}
          </h4>
          <div className="row  special-row">
            <div className="row w-100 pb-5">
              <SingleCar name="Toyota" image={toyota} isRoute={false}/>
              <SingleCar name="Mercedes" image={mercedes} isRoute={false}/>
              <SingleCar name="BMW" image={bmw} isRoute={false}/>
              <SingleCar name="Nissan" image={nissan} isRoute={false}/>
              <SingleCar name="Honda" image={honda} isRoute={false}/>
              <SingleCar name="Lexus" image={lexus} isRoute={false}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_A;
