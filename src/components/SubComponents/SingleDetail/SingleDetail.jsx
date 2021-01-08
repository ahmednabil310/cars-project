import ReactStars from 'react-rating-stars-component';
import infoIcon from '../../../images/info.png';
import rightIcon from '../../../images/right-icon.png';
// the hook
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SingleDetail = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {props.hasStar ? (
        <div className="single-detail d-flex ">
          <div className="d-flex align-items-center">
            <img src={rightIcon} alt="rightIcon" className="img-fluid" />
            <h5 className="mb-0">{t(props.title)}</h5>
            {props.info ? (
              <Link to="/buyer-guide" className="ml-2 notPadding">
                <img src={infoIcon} className="img-fluid" />
              </Link>
            ) : null}
          </div>

          <div className="stars-container d-flex py-1">
            {props.rate === null ? (
              <span className="not-stars">N/A</span>
            ) : (
              <ReactStars
                edit={false}
                count={5}
                size={24}
                activeColor="#EFAA24"
                value={parseInt(props.rate)}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="single-detail d-flex ">
          <div className="d-flex align-items-center">
            {/* <i className="fas fa-angle-right"></i> */}
            <img src={rightIcon} alt="rightIcon" />
            <h5 className="mb-0">{t(props.title)}</h5>
          </div>
          <div className="stars-container">
            <p className="main__gary py-1 mb-0">
              {props.Specifications}
              <span>{props.SpecificationsValue}</span>
            </p>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default SingleDetail;
