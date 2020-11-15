import '../../styles/DealerPageStyles/CarDetails.css';
import mainCar from '../../images/dealer/big-car.png';
const CarDetails = () => {
  return (
    <div className="car-details-container">
      <div className="row">
        <div className="col-lg-6 col-12 bigger-image">
          <img src={mainCar} />
        </div>
        <div className="col-lg-6 col-12 bigger-image">
          <img src={mainCar} />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
