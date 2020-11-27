import React, { Component } from "react";
import "../../styles/DealerPageStyles/CarsPros.css";
import check from "../../images/dealer/check.png";
import close from "../../images/dealer/close.png";
import magic from "../../images/dealer/magic.png";
import { useTranslation } from "react-i18next";

// const { t, i18n } = useTranslation();

class CarsPros extends Component {
  constructor(props) {
    super(props);
    const good = props.data.good.split(",");
    const bad = props.data.bad.split(",");
    const knone = props.data.known_Problems.split(".");
    this.state = {
      good: good,
      bad: bad,
      knone: knone,
    };
  }

  render() {
    return (
      <div className="cars-pros-container">
        <div className="row">
          <div className="col-lg-4 col-md-12 car-pros">
            <h3 className="pros">{"Pros"}</h3>
            <svg
              id="Component_6_11"
              data-name="Component 6 – 11"
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="12.969"
              viewBox="0 0 300 12.969"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#d53535" />
                  <stop offset="1" stopColor="#6b1b1b" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="0.777"
                  x2="0.777"
                  y2="1.686"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#efefef" />
                  <stop offset="1" stopColor="#c4c4c4" />
                </linearGradient>
              </defs>
              <path
                id="Path_52"
                data-name="Path 52"
                d="M-180,0,464.729,1.338v9.99L-180,9.969Z"
                transform="translate(180)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Path_53"
                data-name="Path 53"
                d="M-180,0,464.728.078v6.7L-180,6.958Z"
                transform="translate(180 6.01)"
                fill="url(#linear-gradient-2)"
              />
            </svg>
            {this.state.good.map((item, index) => {
              return (
                <div className="pros-content pt-4" key={index}>
                  <img src={check} className="pr-4" />
                  <h2>{item}</h2>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-12 car-cons">
            <h3 className="cons">{"Cons"}</h3>
            <svg
              id="Component_6_11"
              data-name="Component 6 – 11"
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="12.969"
              viewBox="0 0 300 12.969"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#d53535" />
                  <stop offset="1" stopColor="#6b1b1b" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="0.777"
                  x2="0.777"
                  y2="1.686"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#efefef" />
                  <stop offset="1" stopColor="#c4c4c4" />
                </linearGradient>
              </defs>
              <path
                id="Path_52"
                data-name="Path 52"
                d="M-180,0,464.729,1.338v9.99L-180,9.969Z"
                transform="translate(180)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Path_53"
                data-name="Path 53"
                d="M-180,0,464.728.078v6.7L-180,6.958Z"
                transform="translate(180 6.01)"
                fill="url(#linear-gradient-2)"
              />
            </svg>

            {this.state.bad.map((item, index) => {
              return (
                <div className="pros-content pt-4" key={index}>
                  <img src={close} className="pr-4" />
                  <h2>{item}</h2>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-12 car-cons">
            <h3 className="cons">{"Known Problems"}</h3>
            <svg
              id="Component_6_11"
              data-name="Component 6 – 11"
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="12.969"
              viewBox="0 0 300 12.969"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#d53535" />
                  <stop offset="1" stopColor="#6b1b1b" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="0.777"
                  x2="0.777"
                  y2="1.686"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#efefef" />
                  <stop offset="1" stopColor="#c4c4c4" />
                </linearGradient>
              </defs>
              <path
                id="Path_52"
                data-name="Path 52"
                d="M-180,0,464.729,1.338v9.99L-180,9.969Z"
                transform="translate(180)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Path_53"
                data-name="Path 53"
                d="M-180,0,464.728.078v6.7L-180,6.958Z"
                transform="translate(180 6.01)"
                fill="url(#linear-gradient-2)"
              />
            </svg>
            {this.state.knone.map((item, index) => {
              return (
                <div className="pros-content pt-4" key={index}>
                  <img src={magic} className="pr-4" />
                  <h2>{item}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CarsPros;
