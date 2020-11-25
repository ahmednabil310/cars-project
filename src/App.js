import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Dealer from './pages/Dealer';
import Home from './pages/Home';
import NewCarPricing from './pages/NewCarPricing';
import DealerDetails from './pages/DealerDetails';
import CarCard from './components/SubComponents/CarCard/CarCard';
import CarsAvailable from './pages/CarsAvailable';
import Footer from './components/Footer';
import ReviewPortal from './pages/ReviewPortal';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newcarpricing" component={NewCarPricing} />
        <Route path="/cardetail" component={Dealer} />
        <Route path="/dealer-details" component={DealerDetails} />
        <Route path="/cars-available" component={CarsAvailable} />
        <Route path="/car-reviews" component={ReviewPortal} />
      </Switch>
      <Footer />
      {/* <CarCard /> */}
    </div>
  );
}

export default App;
