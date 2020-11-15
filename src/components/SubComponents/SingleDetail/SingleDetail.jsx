import stars from '../../../images/dealer/stars.png';

const SingleDetail = () => {
  return (
    <div>
      <div className="single-detail d-flex ">
        <div className="d-flex align-items-center">
          <i className="fas fa-angle-right"></i>
          <h5 className="mb-0">Reliability</h5>
        </div>
        <div className="stars-container">
          <img src={stars} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleDetail;
