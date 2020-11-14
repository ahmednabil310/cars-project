import '../../styles/DealerPageStyles/CarsPros.css';
import check from '../../images/dealer/check.png';
import close from '../../images/dealer/close.png';
const CarsPros = () => {
  return (
    <div className="cars-pros-container">
      <div className="row">
        <div className="col-lg-6 col-md-12 car-pros">
          <h3 className="pros">Pros</h3>
          <svg
            id="Component_6_9"
            data-name="Component 6 – 9"
            xmlns="http://www.w3.org/2000/svg"
            width="849.729"
            height="12.969"
            viewBox="0 0 849.729 12.969">
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
              d="M-180,0,669.729,1.338v9.99L-180,9.969Z"
              transform="translate(180)"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M-180,0,669.728.078v6.7L-180,6.958Z"
              transform="translate(180 6.01)"
              fill="url(#linear-gradient-2)"
            />
          </svg>
          <div className="pros-content pt-5">
            <img src={check} className="pr-4" />
            <h2>Costs less than comparable luxury sedans in its class</h2>
          </div>
          <div className="pros-content">
            <img src={check} className="pr-4" />
            <h2>Roomy interior stays very quiet at highway speeds</h2>
          </div>
          <div className="pros-content">
            <img src={check} className="pr-4" />
            <h2>Impressive blend of power, performance and refinement</h2>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 car-cons">
          <h3 className="cons">Cons</h3>
          <svg
            id="Component_6_10"
            data-name="Component 6 – 10"
            xmlns="http://www.w3.org/2000/svg"
            width="822.729"
            height="12.969"
            viewBox="0 0 822.729 12.969">
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
              d="M-180,0,642.729,1.338v9.99L-180,9.969Z"
              transform="translate(180)"
              fill="url(#linear-gradient)"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M-180,0,642.728.078v6.7L-180,6.958Z"
              transform="translate(180 6.01)"
              fill="url(#linear-gradient-2)"
            />
          </svg>
          <div className="pros-content pt-5">
            <img src={close} className="pr-4" />
            <h2>
              Ride quality isn’t as cushy or refined as that of some rival
              sedans
            </h2>
          </div>
          <div className="pros-content">
            <img src={close} className="pr-4" />
            <h2>Rear headroom is a little tight for this class</h2>
          </div>
          <div className="pros-content">
            <img src={close} className="pr-4" />
            <h2>Outward visibility hampered by thick roof pillars</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPros;
