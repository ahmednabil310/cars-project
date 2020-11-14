import '../../styles/DealerPageStyles/LastBanner.css';
const LastBanner = () => {
  return (
    <div className="last-banner-container d-flex">
      <h1 className="banner-title">
        <span>Approximate Price</span>
        <br />
        for each model
      </h1>
      <div className="banner-price">
        <h2 className="price-detail">Popular</h2>
        <h3 className="price-range">$ 50,000</h3>
      </div>
      <div className="banner-price">
        <h2 className="price-detail">Sport</h2>
        <h3 className="price-range">$ 50,000</h3>
      </div>
      <div className="banner-price">
        <h2 className="price-detail">Ultimate</h2>
        <h3 className="price-range">$ 50,000</h3>
      </div>
    </div>
  );
};

export default LastBanner;
