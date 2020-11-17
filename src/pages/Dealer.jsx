const { default: Banner } = require('../components/CarDetailsComponent/Banner');
const {
  default: CarDetails,
} = require('../components/CarDetailsComponent/CarDetails');
const {
  default: CarsPros,
} = require('../components/CarDetailsComponent/CarsPros');
const {
  default: FullCar,
} = require('../components/CarDetailsComponent/FullCar');
const {
  default: LastBanner,
} = require('../components/CarDetailsComponent/LastBanner');
const { default: Form } = require('../components/SubComponents/PopUp/Form');

const Dealer = () => {
  return (
    <div>
      <Banner />
      <CarDetails />
      <CarsPros />
      <FullCar />
      <LastBanner />
      <Form />
    </div>
  );
};

export default Dealer;
