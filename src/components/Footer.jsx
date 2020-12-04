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
      <div className="footer-container__content d-flex row m-0">
        
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
          <NavLink to="/" className='footerItem'>Home</NavLink>
          <NavLink to="/" className='footerItem'>Help</NavLink>
          <NavLink to="/" className='footerItem'>About Us</NavLink>
          <NavLink to="/" className='footerItem'>Contact Us</NavLink>
          <NavLink to="/" className='footerItem'>Careers</NavLink>
          <NavLink to="/" className='footerItem'>Affiliate Program</NavLink>
          <NavLink to="/" className='footerItem mb-3'>Dealer Center</NavLink>
          <NavLink to="/" className='footerItem mb-3'>Terms And Conditios</NavLink>
          <div className='language' onClick={()=>{changelanguage('en')}}>English</div>
          <div className='language' onClick={()=>{changelanguage('ar')}}>العربيه</div>
        </div>

        <div className="footer-container__content--second-column d-flex flex-column">
          <h5 className="second-column-title">Popular Compares</h5>
          <NavLink to="/" className='footerItem' style={{textDecoration:'underline'}}>Honda HR-V vs Honda CR-V Comparison</NavLink>
          <NavLink to="/" className='footerItem' style={{textDecoration:'underline'}}>Toyota RAV4 vs Honda CR-V Comparison</NavLink>
          <NavLink to="/" className='footerItem' style={{textDecoration:'underline'}}>Subaru Forester vs Subaru Outback Comparison</NavLink>
          <NavLink to="/" className='footerItem' style={{textDecoration:'underline'}}>Chevrolet Camaro vs Ford Mustang Comparison</NavLink>
          <NavLink to="/" className='footerItem' style={{textDecoration:'underline'}}>Toyota Camry vs Honda Accord Comparison</NavLink>
          <NavLink to="/" className='footerItem' style={{textDecoration:'underline'}}>Honda Civic vs Toyota Corolla Comparison</NavLink>
          <NavLink to="/" className='footerItem' style={{textDecoration:'underline'}}>Honda Odyssey vs Toyota Sienna Comparison</NavLink>

        </div>

      </div>
      <div className='sepratorline'/>
      <div className='row m-0' style={{color:'white',padding:'2.5%  '}}>
        <di className="col-12 col-sm-12 col-md-6 col-lg-8  pl-0 ">This site is powered and designed by <span style={{fontWeight:'bold'}}>Smarter</span>, All rights are reserved @2020</di>
        <div className="col-12 col-sm-12 col-md-3 col-lg-2  pl-0 mt-3">Privacy Polices</div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-2  pl-0 mt-3">Rules & Regulations</div>
        
      </div>
    </footer>
  );
};

export default Footer;
