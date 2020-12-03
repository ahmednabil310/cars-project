import React from "react";
import "../../styles/DealerPageStyles/LastBanner.css";
import { useTranslation } from "react-i18next";
const LastBanner = (props) => {
  // the hook

  const { t, i18n } = useTranslation();

  let prices = props.data.price.split(";");

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
              {prices.map((item,i)=>{
                return    <h3 className="price-range">{item}</h3>
              })}
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBanner;
