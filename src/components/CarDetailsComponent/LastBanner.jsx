import React,{useState,useContext,useEffect} from 'react';
import '../../styles/DealerPageStyles/LastBanner.css';

<<<<<<< HEAD

// the hook
import { useTranslation } from 'react-i18next';


const LastBanner = () => {
  const { t, i18n } = useTranslation();

=======
import {carContext} from '../../contexts/cars/carState'

const LastBanner = () => {
  const {CurrentEngine , GetCarData , CarData}= useContext(carContext)
		 
	useEffect(() => {
		if (CurrentEngine !== null) {
			GetCarData(CurrentEngine)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [CurrentEngine])
 
>>>>>>> master
  return (
    <div className="last-banner d-flex py-5">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-start align-items-center">
            <h1 className="banner-title">
              <span>{t("Approximate Price")}</span>
              <br />
              {t("for each model")}
            </h1>
          </div>
          <div className="col-lg-7 d-flex banner-content container-fluid">
            <div className="banner-price">
              <h2 className="price-detail">{t("Popular")}</h2>
              <h3 className="price-range">{t("price-range")}</h3>
            </div>
            <div className="banner-price">
              <h2 className="price-detail">{t("Sport")}</h2>
              <h3 className="price-range">{t("price-range")}</h3>
            </div>
            <div className="banner-price">
              <h2 className="price-detail">{t("Ultimate")}</h2>
              <h3 className="price-range">{t("price-range")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBanner;
