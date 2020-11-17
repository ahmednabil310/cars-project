const { default: Banner } = require('../components/CarDetailsComponent/Banner');
const {
  default: CarDetails,
} = require('../components/CarDetailsComponent/CarDetails');
const {
  default: CarsPros,
} = require('../components/CarDetailsComponent/CarsPros');
const {
  default: CustomerReviews,
} = require('../components/CarDetailsComponent/CustomerReviews');
const {
  default: FullCar,
} = require('../components/CarDetailsComponent/FullCar');
const {
  default: LastBanner,
} = require('../components/CarDetailsComponent/LastBanner');

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
