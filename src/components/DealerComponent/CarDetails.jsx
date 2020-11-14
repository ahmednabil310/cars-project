import '../../styles/DealerPageStyles/CarDetails.css';
import mainCar from '../../images/dealer/big-car.png';
import first from '../../images/dealer/1.png';
import second from '../../images/dealer/2.png';
import third from '../../images/dealer/3.png';
import fourth from '../../images/dealer/4.png';
import fifth from '../../images/dealer/5.png';
import magic from '../../images/dealer/magic.png';
const CarDetails = () => {
  return (
    <div className="car-details-container">
      <div className="row">
        <div className="col-lg-6 bigger-image">
          <img src={mainCar} />
        </div>
        <div className="col-lg-2 smaller-image">
          <div className="row ml-1 h-100">
            <div className="col-12">
              <img src={first} />
            </div>
            <div className="col-12">
              <img src={second} />
            </div>
            <div className="col-12">
              <img src={third} />
            </div>
            <div className="col-12">
              <img src={fourth} />
            </div>
            <div className="col-12 last-image">
              <img src={fifth} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 car-specs d-flex flex-column">
          <h1 className="car-new">What’s new</h1>
          <svg
            id="Component_6_11"
            data-name="Component 6 – 11"
            xmlns="http://www.w3.org/2000/svg"
            width="644.729"
            height="12.969"
            viewBox="0 0 644.729 12.969">
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
          <div className="car-specs-details d-flex">
            <img src={magic} className="pr-3" />
            <h3>
              New blind-spot collision-avoidance assist helps with lane changes
            </h3>
          </div>
          <div className="car-specs-details d-flex">
            <img src={magic} className="pr-3" />
            <h3>
              Optional 9.2-inch infotainment system now has customizable home
              screen
            </h3>
          </div>
          <div className="car-specs-details d-flex last-detail">
            <img src={magic} className="pr-3" />
            <h3>Part of the first G80 generation introduced for 2017</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
