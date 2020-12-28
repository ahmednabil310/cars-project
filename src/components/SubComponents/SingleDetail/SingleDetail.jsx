import ReactStars from 'react-rating-stars-component';
import infoIcon from '../../../images/info.png'

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
            <i className="fas fa-angle-right"></i>
            <h5 className="mb-0">{t(props.title)}</h5>
            {props.info?<Link to='/buyer-guide' className='ml-2'><img width='15px'src={infoIcon} /></Link>:null}
          </div>

          <div className="stars-container d-flex pl-4 py-2">
            {/* <div
              style={{ zIndex: 99, top: '0px', left: '100px', width: '105px' }}
              className="  position-relative bg-transparent"
              name="rating"></div> */}
            {props.rate === null ? (
              <span className="not-stars">N/A</span>
            ) : (
                <ReactStars
                  edit={false}
                  count={5}
                  size={24}
                  activeColor="#d53535"
                  value={parseInt(props.rate)}
                />
              )}
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
                <strong>{props.SpecificationsValue}</strong>
              </p>
            </div>
          </div>
        )}
      <hr />
    </div>
  );
};

export default SingleDetail;
