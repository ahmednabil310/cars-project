import '../styles/Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import social from '../images/social.png';

// the hook
import { useTranslation } from 'react-i18next';

import i18n from '../i18n';



const Footer = () => {
  const { t, i18n } = useTranslation();
  const changelanguage = (lan) => {
    return () => {
      i18n.changeLanguage(lan);
    };
  };
  return (
    <footer className="footer-container">
      <div className="footer-container__red"></div>
      <div className="footer-container__content d-flex">
        <div className="footer-container__content--first-column d-flex flex-column">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <p className="first-column-pargraph">
            {t("footerParagph")} 
          </p>
          <img src={social} width="200px" />
        </div>
        <div className="footer-container__content--second-column d-flex flex-column">
          <h5 className="second-column-title">{t("Quick Links")}</h5>
        </div>
        <div className="footer-container__content--second-column d-flex flex-column">
          <h5 className="second-column-title">{t("Language")}</h5>
          <div className='language' onClick={()=>{changelanguage('en')}}>English</div>
          <div className='language' onClick={()=>{changelanguage('ar')}}>Arabic</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
