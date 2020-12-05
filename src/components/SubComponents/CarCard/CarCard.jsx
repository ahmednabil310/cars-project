import React, { Component, useState, useEffect, useContext } from 'react';
import '../../../styles/CarCard/CarCard.css';
import close from '../../../images/close.png';
import { Link } from 'react-router-dom';
import SingleDetail from '../SingleDetail/SingleDetail';
import ReactStars from 'react-rating-stars-component';
import { withRouter } from 'react-router-dom';

class CarCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const good = this.props.data.good.split(',');
    const bad = this.props.data.bad.split(',');
    const reliability = Object.keys(this.props.data)[14];
    const resale_Value = Object.keys(this.props.data)[15];
    const nhtsA_Driver_Frontal_Rating = Object.keys(this.props.data)[17];
    const euroNCAP_Overall_Adult_Rating = Object.keys(this.props.data)[18];
    const listPrice = this.props.data.price.split(';');

    const listGood = good.map((item, index) => {
      return (
        <li key={index}>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          {item}
        </li>
      );
    });

    const listbad = bad.map((item, index) => {
      return (
        <li key={index}>
          <span className="fa-li">
            <i className="fas fa-times main__red"></i>
          </span>
          {item}
        </li>
      );
    });

    const listPrices = listPrice.map((item, i) => {
      return <>{item}</>;
    });

    return (
      <div>
        <div className="Car__Card pb-4 mb-5">
          <div className="Car__Header p-4 position-relative">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h6 className="text-capitalize font-weight-bold main__red mb-0">
                {this.props.data.make}
              </h6>
              <div className="Close__Btn" onClick={this.props.closeModel}>
                <img className="img-fluid" src={close} alt="close" />
              </div>
            </div>
            <p className="main__gary mb-1"> {this.props.data.model}</p>
            <button
              className="main__gary pl-0"
              style={{
                textDecoration: 'underline',
                border: 'none',
                background: 'none',
              }}>
              {this.props.data.class}
            </button>
          </div>
          {/* =============== Car Image ================ */}
          <div
            className="Car__Image"
            onClick={() =>
              this.props.history.push(`/cardetail?type=${this.props.data.id}`)
            }>
            {/* <img className='img-fluid' src={imageUrl} alt='car' /> */}
            <div className="Car__Image__Gallery d-flex flex-column ">
              <img
                className="img-fluid w-100"
                src={this.props.data.image_1}
                alt="gallery"
              />
              <p className="mb-0 ml-3 text-white">View all photos</p>
            </div>
          </div>
          {/* =============== Car Price ================ */}
          <div className="Car__Price pb-3">
            <h4 className="main__red pl-4 pt-4 text-capitalize">Pricing</h4>

            <p className="main__gary pl-4 py-2 mb-0">
              <>
                Starting MSRP <br />
                {listPrices}
              </>
            </p>
          </div>
          {/* =============== Car Rating ================ */}
          <div className="Car__Rating pb-3">
            <h4 className="main__red pl-4 pt-4 text-capitalize">Rating</h4>
            <div className="px-4">
              <div style={{ textTransform: 'capitalize' }}>
                {reliability.replaceAll('_', ' ')} <div> </div>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#d53535"
                  value={parseInt(this.props.data.reliability)}
                />
              </div>
              <div style={{ textTransform: 'capitalize' }}>
                {resale_Value.replaceAll('_', ' ')}{' '}
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#d53535"
                  value={parseInt(this.props.data.resale_Value)}
                />
              </div>
              <div style={{ textTransform: 'capitalize' }}>
                {nhtsA_Driver_Frontal_Rating.replaceAll('_', ' ')}
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#d53535"
                  value={parseInt(this.props.data.nhtsA_Driver_Frontal_Rating)}
                />
              </div>
              <div style={{ textTransform: 'capitalize' }}>
                {euroNCAP_Overall_Adult_Rating.replaceAll('_', ' ')}
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#d53535"
                  value={parseInt(
                    this.props.data.euroNCAP_Overall_Adult_Rating,
                  )}
                />
              </div>
            </div>
            <p className="main__gary pl-4 py-1 font-weight-bold">Pros & Cons</p>
            <ul className="fa-ul px-2">{listGood}</ul>
            <ul className="fa-ul px-2">{listbad}</ul>
            <div className="px-2 mb-4">
              <button
                className="btn btn-outline-danger Full__Review__Btn btn-block text-capitalize"
                style={{ fontWeight: '500' }}
                onClick={() =>
                  this.props.history.push(
                    `/cardetail?type=${this.props.data.id}`,
                  )
                }>
                Full Review
              </button>
            </div>
          </div>

          {/* =============== Car Specifications ================ */}
          <div className="Car__Specifications pb-3">
            <h4 className="main__red pl-4 pt-4 text-capitalize">
              Specifications
            </h4>
            <p className="main__gary pl-4 py-2 mb-0">
              Power Hp
              <br /> <strong>{this.props.data.power_hp}</strong>
            </p>
            <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
              Torque NM
              <br /> <strong>{this.props.data.torque_Nm}</strong>
            </p>
            <p className="main__gary pl-4 py-2 mb-0">
              Gear Box
              <br /> <strong>{this.props.data.gearbox}</strong>
            </p>
            <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
              Engine
              <br /> <strong>{this.props.data.engine}</strong>
            </p>
            <p className="main__gary pl-4 py-2 mb-0">
              Top Speed KPH
              <br /> <strong>{this.props.data.top_speed_kph}</strong>
            </p>
            <p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
              Ful Econ L 100km
              <br /> <strong>{this.props.data.fuel_Econ_L_100km}</strong>
            </p>
            <p className="main__gary  pl-4 py-2 mb-0">
              Ful Econ KM L
              <br /> <strong>{this.props.data.fuel_Econ_km_L}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CarCard);
