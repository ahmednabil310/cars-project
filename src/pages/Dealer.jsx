import CustomerReviews from './../components/DealerComponent/CustomerReviews';
const { default: Banner } = require('../components/DealerComponent/Banner');
const {
  default: CarDetails,
} = require('../components/DealerComponent/CarDetails');
const { default: CarsPros } = require('../components/DealerComponent/CarsPros');
const { default: FullCar } = require('../components/DealerComponent/FullCar');
const {
  default: LastBanner,
} = require('../components/DealerComponent/LastBanner');

const Dealer = () => {
  return (
    <div>
      <Banner />
      <CarDetails />
      <CarsPros />
      <FullCar />
      <LastBanner />
      <CustomerReviews />
    </div>
  );
};

export default Dealer;
