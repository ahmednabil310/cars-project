import React from "react";
import "../../styles/NewCarPricingStyles/Header.css";


// the hook
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div className="NewCarPricing-Header">
      <h2 className="NewCarPricing-Header__text m-0">{t("New Car Pricing")}</h2>
    </div>
  );
}

export default Header;
