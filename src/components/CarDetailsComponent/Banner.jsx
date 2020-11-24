import '../../styles/DealerPageStyles/Banner.css';


// the hook
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="banner-container">
      <div className="banner-content d-flex justify-content-between">
        <h1 className="text-uppercase banner-title">{t("2020 Genesis H80")}</h1>
        <ul className="d-flex align-items-end banner-list">
          <li>{t("Overview")}</li>
          <li>{t("Review")}</li>
          <li>{t("Pricing")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
