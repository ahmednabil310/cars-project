import React, { Component } from 'react';
import '../styles/Footer.css';
import { connect } from "react-redux";
import actions from "../redux/actions";
import { bindActionCreators } from "redux";
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../images/logo.png';
import social from '../images/social.png';

// the hook
import { useTranslation } from 'react-i18next';

import i18n from '../i18n';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }



  handleClick(car1, car2, car3, car4) {
    this.props.actions.getMultipleComparison(car1, car2, car3, car4);
    const route = window.location.pathname;
    if (route !== "/") {
      this.props.history.push("/");
    }
  };

  render() {
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
            <h5 className="second-column-title">{"Quick Links"}</h5>
            <NavLink to="/" className="footerItem">
              Home
          </NavLink>
            <NavLink to="/" className="footerItem">
              Price & Specifications
          </NavLink>
            <NavLink to="/newcarpricing" className="footerItem">
              New Car
          </NavLink>
            <NavLink to="/car-reviews" className="footerItem">
              Reviews
          </NavLink>
            <a
              href="https://smartarz.com/vehicle/1109/cars-for-sale/1118?fbclid=IwAR0K07Nj2wB9OoUrPcBT40mBIYmkddOeH_meSE-I_Qvrak-KuWKpuGs9QRE"
              className="footerItem">
              Used Car
          </a>
            <NavLink to="/" className="footerItem">
              Terms and Condition
          </NavLink>

            <div
              className="language"
            // onClick={() => {
            //   changelanguage('en');
            // }}
            >
              English
          </div>
            <div
              className="language"
            // onClick={() => {
            //   changelanguage('ar');
            // }}
            >
              Arabic
          </div>
          </div>

          <div className="footer-container__content--second-column d-flex flex-column">
            <h5 className="second-column-title">Popular Compares</h5>
            <div
              onClick={() =>
                this.handleClick(
                  "Toyota Land Crusier",
                  "Nissan Patrol",
                  "GMC Yukon",
                  "Chevrolet Tahoe"
                )
              }
              className="footerItem"
              style={{ textDecoration: 'underline' }}>
              Toyota Land Crusier/Nissan Patrol/GMC Yukon/Chevrolet Tahoe
          </div>
            <div
              onClick={() =>
                this.handleClick(
                  "Toyota RAV4",
                  "Mazda CX-5",
                  "Kia Sportage",
                  "Honda CR-V"
                )
              }
              className="footerItem"
              style={{ textDecoration: 'underline' }}>
              Toyota RAV4/Mazda CX-5/Kia Sportage/Honda CR-V
          </div>
            <div
              onClick={() =>
                this.handleClick(
                  "Toyota Camry",
                  "Honda Accord",
                  "Nissan Altima",
                  "Mazada 6"
                )
              }
              className="footerItem"
              style={{ textDecoration: 'underline' }}>
              Toyota Camry/Honda Accord/Nissan Altima/Mazada 6
          </div>
            <div
              onClick={() =>
                this.handleClick(
                  "Lexus ES",
                  "Mercedes-Benz E-Class",
                  "Audi A6",
                  "BMW 5-Series"
                )
              }
              className="footerItem"
              style={{ textDecoration: 'underline' }}>
              Lexus ES/Mercedes-Benz E-Class/Audi A6/BMW 5-Series
          </div>
            <div
              onClick={() =>
                this.handleClick(
                  "Chrysler 300C",
                  "Dodge Charger",
                  "Ford Taurus",
                  "Toyota Avalon"
                )
              }
              className="footerItem"
              style={{ textDecoration: 'underline' }}>
              Chrysler 300C/Dodge Charger/Ford Taurus/Toyota Avalon
          </div>
            <div
              onClick={() =>
                this.handleClick(
                  "Lexus GS",
                  "Jaguar XF",
                  "Volvo S90",
                  "Infiniti Q70"
                )
              }
              className="footerItem"
              style={{ textDecoration: 'underline' }}>
              Lexus GS/Jaguar XF/Volvo S90/Infiniti Q70
          </div>
            <div
              onClick={() =>
                this.handleClick(
                  "Audi Q7",
                  "BMW X5",
                  "Lexus RX",
                  "Mercedes-Benz GLE 63 AMG"
                )
              }
              className="footerItem"
              style={{ textDecoration: 'underline' }}>
              Audi Q7/BMW X5/Lexus RX/Mercedes-Benz GLE 63 AMG
          </div>
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
  }
}
// const Footer = () => {
//   const { t, i18n } = useTranslation();
//   const changelanguage = (lan) => {
//     return () => {
//       i18n.changeLanguage(lan);
//     };
//   };

// };

const mapStateToProps = (state, ownProps) => ({
  listYears: state.reduces.listYears,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer)); 
