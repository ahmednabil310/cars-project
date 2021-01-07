import React, { Component } from 'react';
import '../../styles/DealerPageStyles/CarsPros.css';
import check from '../../images/dealer/check.png';
import close from '../../images/dealer/close.png';
import magic from '../../images/dealer/magic.png';

class CarsPros extends Component {
  constructor(props) {
    super(props);
    const good = props.data.good.split(',');
    const bad = props.data.bad.split(',');
    const knone = props.data.known_Problems.split('.');
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
            <div className="d-flex align-items-center title-container">
              <h3 className="cons">
                Pros <span className="right-arrow">></span>
              </h3>
            </div>
            {this.state.good.map((item, index) => {
              return (
                <div className="pros-content d-flex" key={index}>
                  <img src={check} width="26px" height="26px" />
                  <h2>{item}</h2>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-12 car-cons">
            <div className="d-flex align-items-center title-container">
              <h3 className="cons">
                Cons <span className="right-arrow">></span>
              </h3>
            </div>
            {this.state.bad.map((item, index) => {
              return (
                <div className="pros-content" key={index}>
                  <img src={close} width="26px" height="26px" />
                  <h2>{item}</h2>
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-12 car-cons">
            <div className="d-flex align-items-center title-container">
              <h3 className="cons">
                Knows Problems <span className="right-arrow">></span>
              </h3>
            </div>
            {this.state.knone.map((item, index) => {
              if (item !== '') {
                return (
                  <div className="pros-content" key={index}>
                    <img src={magic} width="26px" height="26px" />
                    <h2>{item}</h2>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CarsPros;
