import stars from "../../../images/dealer/stars.png";
import ReactStars from "react-rating-stars-component";

// the hook
import { useTranslation } from "react-i18next";

const SingleDetail = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {props.hasStar ? (
        <div className="single-detail d-flex ">
          <div className="d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">{t(props.title)}</h5>
          </div>

          <div className="stars-container">
            <ReactStars
              count={5}
              size={24}
              activeColor="#d53535"
              value={parseInt(props.rate)}
            />
          </div>
        </div>
      ) : (
        <div className="single-detail d-flex ">
          <div className="d-flex align-items-center">
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">{t(props.title)}</h5>
          </div> 
          <div className="stars-container">
            <p className="main__gary pl-4 py-2 mb-0">
              {props.Specifications}
              <br /> <strong>{props.SpecificationsValue}</strong>
            </p>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default SingleDetail;
