import '../../styles/DealerPageStyles/Banner.css';
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content d-flex justify-content-between">
        <h1 className="text-uppercase banner-title">2020 Genesis H80</h1>
        <ul className="d-flex align-items-end banner-list">
          <li>Overview</li>
          <li>Review</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
