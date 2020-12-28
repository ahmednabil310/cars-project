import React from 'react';
import '../../styles/DealerPageStyles/FullCar.css';
import flag from '../../images/dealer/korea.png';
import SingleDetail from '../SubComponents/SingleDetail/SingleDetail';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const FullCar = (props) => {
  // the hook

  const { t, i18n } = useTranslation();

  return (
    <div className="fullcar-container" id="overview">
      <div className="row">
        <div className="col-lg-6 brief-details">
          <h1 className="brief">{t('Brief About')}</h1>
          <h2 className="car-type">
            {t(
              props.data.make +
                ' - ' +
                props.data.model +
                ' - ' +
                props.data.year,
            )}
          </h2>
          <div className="made-in d-flex align-items-center">
            <span>
              Country Of Origin : &nbsp; {t(props.data.country_of_Origin)}
            </span>
          </div>
          <p className="brief-content pb-5">{t(props.data.overview)}</p>
          {/* <p className="brief-content">{t("brief about 1")}</p> */}
        </div>

        <div className="col-lg-6 full-details">
          <div className="full-details__banner">
            <h3 className="full-details-title brief">{t('More details')}</h3>
            <h4 className="full-details-specs car-type">
              {t('Specs about This car')}
            </h4>
          </div>
          <SingleDetail
            title={'Reliability'}
            hasStar={true}
            info={true}
            rate={props.data.reliability}
          />
          <SingleDetail
            title={'Resale Value'}
            hasStar={true}
            info={true}
            rate={props.data.resale_Value}
          />
          <SingleDetail
            title={'NhtsA Driver Frontal Rating'}
            hasStar={true}
            rate={props.data.nhtsA_Driver_Frontal_Rating}
          />
          <SingleDetail
            title={'EuroNCAP Overall Adult Rating'}
            hasStar={true}
            rate={props.data.euroNCAP_Overall_Adult_Rating}
          />
          <SingleDetail
            title={'Power Hp'}
            hasStar={false}
            SpecificationsValue={props.data.power_hp}
          />
          <SingleDetail
            title={'Torque NM'}
            hasStar={false}
            SpecificationsValue={props.data.torque_Nm}
          />
          <SingleDetail
            title={' Gear Box'}
            hasStar={false}
            SpecificationsValue={props.data.gearbox}
          />
          <SingleDetail
            title={' Engine'}
            hasStar={false}
            SpecificationsValue={props.data.engine}
          />
          <SingleDetail
            title={' Top Speed KPH'}
            hasStar={false}
            SpecificationsValue={props.data.top_speed_kph}
          />
          <SingleDetail
            title={' Ful Econ L 100km'}
            hasStar={false}
            SpecificationsValue={props.data.fuel_Econ_L_100km}
          />
          <SingleDetail
            title={'  Ful Econ KM L'}
            hasStar={false}
            SpecificationsValue={props.data.fuel_Econ_km_L}
          />
        </div>
      </div>
    </div>
  );
};

export default FullCar;
