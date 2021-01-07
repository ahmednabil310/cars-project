import '../../styles/DealerPageStyles/Banner.css';

// the hook
import { useTranslation } from 'react-i18next';

const Banner = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="banner-container">
      <div className="banner-content ">
        <div className="banner-inner-content d-flex justify-content-between">
          <h1 className="text-uppercase banner-title">
            {t(
              props.data.year + ' ' + props.data.make + ' ' + props.data.model,
            )}
          </h1>
          <ul className="d-flex align-items-end banner-list">
            <a href="#overview">
              <li>{t('Overview')}</li>
            </a>
            <a href="#review">
              <li>{t('Review')}</li>
            </a>
            <a href="#pricing">
              <li style={{ paddingRight: '0px' }}>{t('Pricing')}</li>
            </a>
          </ul>
        </div>
      </div>
      {/* <div className="banner-seprator" /> */}
    </div>
  );
};

export default Banner;
