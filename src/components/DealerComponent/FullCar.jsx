import '../../styles/DealerPageStyles/FullCar.css';
import flag from '../../images/dealer/korea.png';
import stars from '../../images/dealer/stars.png';
const FullCar = () => {
  return (
    <div className="fullcar-container">
      <div className="row">
        <div className="col-lg-6 brief-details">
          <h1 className="brief">Brief About</h1>
          <h2 className="car-type">Genesis G80 - 2020 - Ultimate</h2>
          <div className="made-in d-flex align-items-center">
            <img src={flag} />
            <span>Made: &nbsp; Korea Republic</span>
          </div>
          <p className="brief-content pb-5">
            Going head to head with BMW’s 5 Series and Mercedes-Benz’s E-Class
            is no easy feat, but the 2020 G80 sedan easily holds its own. The
            G80’s roots date back to when the Genesis sedan was a model in the
            Hyundai lineup, before Genesis was its own brand. Now serving as the
            middle ground between the sportier G70 and the flagship G90, the G80
            offers an appealing blend of comfort and power.
          </p>
          <p className="brief-content">
            Going head to head with BMW’s 5 Series and Mercedes-Benz’s E-Class
            is no easy feat, but the 2020 G80 sedan easily holds its own. The
            G80’s roots date back to when the Genesis sedan was a model in the
            Hyundai lineup, before Genesis was its own brand. Now serving as the
            middle ground between the sportier G70 and the flagship G90, the G80
            offers an appealing blend of comfort and power.
          </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 full-details">
          <div className="full-details__banner">
            <h3 className="full-details-title brief">More details</h3>
            <h4 className="full-details-specs car-type">
              Specs about This car
            </h4>
          </div>
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">Reliability</h5>
            <div className="stars-container">
              <img src={stars} />
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">Resale value</h5>
            <div className="stars-container">
              <img src={stars} />
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">NHTSA_Driver_Frontal_Rating</h5>
            <div className="stars-container">
              <img src={stars} />
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">EuroNCAP_Overall_Adult_Rating</h5>
            <div className="stars-container">
              <img src={stars} />
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">Engine</h5>
            <div className="stars-container">
              <h5>2200 cc</h5>
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">Gearbox</h5>
            <div className="stars-container">
              <h5>8</h5>
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">Power HP</h5>
            <div className="stars-container">
              <h5>9800 HP</h5>
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">Fuel Econ</h5>
            <div className="stars-container">
              <h5>N/A</h5>
            </div>
          </div>
          <hr />
          <div className="single-detail d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">Top Speed</h5>
            <div className="stars-container">
              <h5>320 km/h</h5>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default FullCar;
