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
      <div className="footer-container__content d-flex justify-content-between row m-0">
        <div className="footer-container__content--first-column d-flex flex-column">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <p className="first-column-pargraph">
            caradvice.smartarz.com is the largest automotive consumer portal of
            its kind in the UAE. The site provides a unique online service for
            motoring consumers, designed specifically for the United Arab
            Emirates.
            <br />
            <br />
            Unless otherwise stated, all prices are shown as Manufacturer's
            Recommended List Price (MRLP) inclusive of VAT, exclusive of options
            and on road costs.
          </p>
          <div className="icons">
            <a href="/">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-container__content--second-column d-flex flex-column">
          <h5 className="second-column-title">{t('Quick Links')}</h5>
          <NavLink to="/" className="footerItem">
            Home
          </NavLink>
          <NavLink to="/" className="footerItem">
            Price & Specifications
          </NavLink>
          <NavLink to="/" className="footerItem">
            New Car
          </NavLink>
          <NavLink to="/" className="footerItem">
            Reviews
          </NavLink>
          <NavLink to="/" className="footerItem">
            Used Car
          </NavLink>
          <NavLink to="/" className="footerItem">
            Terms and Condition
          </NavLink>

          <div
            className="language"
            onClick={() => {
              changelanguage('en');
            }}>
            English
          </div>
          <div
            className="language"
            onClick={() => {
              changelanguage('ar');
            }}>
            Arabic
          </div>
        </div>

        <div className="footer-container__content--second-column d-flex flex-column">
          <h5 className="second-column-title">Popular Compares</h5>
          <NavLink
            to="/"
            className="footerItem"
            style={{ textDecoration: 'underline' }}>
            Honda HR-V vs Honda CR-V Comparison
          </NavLink>
          <NavLink
            to="/"
            className="footerItem"
            style={{ textDecoration: 'underline' }}>
            Toyota RAV4 vs Honda CR-V Comparison
          </NavLink>
          <NavLink
            to="/"
            className="footerItem"
            style={{ textDecoration: 'underline' }}>
            Subaru Forester vs Subaru Outback Comparison
          </NavLink>
          <NavLink
            to="/"
            className="footerItem"
            style={{ textDecoration: 'underline' }}>
            Chevrolet Camaro vs Ford Mustang Comparison
          </NavLink>
          <NavLink
            to="/"
            className="footerItem"
            style={{ textDecoration: 'underline' }}>
            Toyota Camry vs Honda Accord Comparison
          </NavLink>
          <NavLink
            to="/"
            className="footerItem"
            style={{ textDecoration: 'underline' }}>
            Honda Civic vs Toyota Corolla Comparison
          </NavLink>
          <NavLink
            to="/"
            className="footerItem"
            style={{ textDecoration: 'underline' }}>
            Honda Odyssey vs Toyota Sienna Comparison
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="paddingSchema "></div>
      <div
        className="row m-0 paddingSchema last-footer"
        style={{ color: 'white' }}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-8  pl-0 mb-3 ">
          This site is powered and designed by{' '}
          <span style={{ fontWeight: 'bold' }}>Smartarz</span>, All rights
          reserved @2021
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-2  pl-0 mb-3">
          Privacy Polices
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-2  pl-0 mb-3">
          Rules & Regulations
        </div>
      </div>
    </footer>
  );
};

export default Footer;
