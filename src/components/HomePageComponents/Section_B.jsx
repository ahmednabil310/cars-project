import { useState } from 'react';
import '../../styles/HomePageStyles/Section_B.css';
import AddVechile from '../SubComponents/AddVechile/AddVechile';
import ModelFields from '../SubComponents/ModelFields/ModelFields';

const Section_B = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="section-b-homepage-container">
      <div className="d-flex sub-container">
        <h3>
          <span className="special">Compare</span> Cars Side-by-Side
        </h3>
        <svg
          id="Component_6_2"
          data-name="Component 6 – 2"
          xmlns="http://www.w3.org/2000/svg"
          width="1003.729"
          height="36.969"
          viewBox="0 0 1003.729 36.969">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#d53535" />
              <stop offset="1" stop-color="#6b1b1b" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="0.777"
              x2="0.777"
              y2="1.686"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#efefef" />
              <stop offset="1" stop-color="#c4c4c4" />
            </linearGradient>
          </defs>
          <path
            id="Path_52"
            data-name="Path 52"
            d="M-940,0H42L62,33.969H-940Z"
            transform="translate(940)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_53"
            data-name="Path 53"
            d="M-940,0,59.808.207l3.921,6.566L-940,6.958Z"
            transform="translate(940 30.01)"
            fill="url(#linear-gradient-2)"
          />
        </svg>
      </div>
      <div className="section-b__nav">
        <div className="nav-container d-flex">
          <nav className="navbar navbar-expand-xl w-100 navbar-dark">
            <div className="m-auto" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Rating
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Consumer rating
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Waranty
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Specifications
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fuel economy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Dimensions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Ownership costs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Colors
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="car-container-wrapper">
        <div className="row section-b_car-container">
          <AddVechile showModel={() => setModalShow(true)} />
          <AddVechile showModel={() => setModalShow(true)} />
          <AddVechile showModel={() => setModalShow(true)} />
          <AddVechile showModel={() => setModalShow(true)} />
          <ModelFields show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Section_B;
