import React from "react";

import "../../styles/DealerPageStyles/FullCar.css";
import flag from "../../images/dealer/korea.png";
import stars from "../../images/dealer/stars.png";
import SingleDetail from "../SubComponents/SingleDetail/SingleDetail";
import { useTranslation } from "react-i18next";
const FullCar = (props) => {
  // the hook

  const { t, i18n } = useTranslation();

  return (
    <div className="fullcar-container">
      <div className="row">
        <div className="col-lg-6 brief-details">
          <h1 className="brief">{t("Brief About")}</h1>
          <h2 className="car-type">
            {t("Genesis G80 - 2020 - Ultimate")}
            {t(
              props.data.make +
                " - " +
                props.data.model +
                " - " +
                props.data.year
            )}
          </h2>
          <div className="made-in d-flex align-items-center">
            <img src={flag} />
            <span>
              {t("Made:")} &nbsp; {t(props.data.country_of_Origin)}
            </span>
          </div>
          <p className="brief-content pb-5">{t(props.data.overview)}</p>
          {/* <p className="brief-content">{t("brief about 1")}</p> */}
        </div>

        <div className="col-lg-6 full-details">
          <div className="full-details__banner">
            <h3 className="full-details-title brief">{t("More details")}</h3>
            <h4 className="full-details-specs car-type">
              {t("Specs about This car")}
            </h4>
          </div>
          <SingleDetail title={""}/>
          <SingleDetail />
          <SingleDetail />
          <SingleDetail />
         
        </div>
      </div>
    </div>
  );
};

export default FullCar;
