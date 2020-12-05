import React from "react";
import "../../styles/NewCarPricingStyles/Section2.css";
import CarsTable from "./CarsTable";


// the hook
import { useTranslation } from 'react-i18next';

function Section2() {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='custom__container'>
      <div className="NewCarPricing-Section2 m-auto">
        <div className="NewCarPricing-Section2-Heading">
          <h3 className="NewCarPricing-Section2-Heading__h3 NewCarPricing-Section2-Heading__h3--red">
            {t("Best-rated")}
          </h3>
          <h3 className="NewCarPricing-Section2-Heading__h3">{t("cars by price")}</h3>
        </div>
        <CarsTable /> 
      </div>
    </div>
  );
}

export default Section2;
