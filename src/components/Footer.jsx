import '../styles/Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import social from '../images/social.png';

// the hook
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
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
      </div>
    </footer>
  );
};

export default Footer;
