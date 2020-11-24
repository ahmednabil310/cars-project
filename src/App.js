import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Dealer from './pages/Dealer';
import Home from './pages/Home';
import NewCarPricing from './pages/NewCarPricing';
import DealerDetails from './pages/DealerDetails';
import CarCard from './components/SubComponents/CarCard/CarCard';
import CarsAvailable from './pages/CarsAvailable';
import Footer from './components/Footer';
import {CarProvider} from './contexts/cars/carState'
import {CommentProvider} from './contexts/comments/commentState'

function App() {
  return (
    <CommentProvider>
  <CarProvider>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newcarpricing" component={NewCarPricing} />
        <Route path="/cardetail" component={Dealer} />
        <Route path="/dealer-details" component={DealerDetails} />
        <Route path="/cars-available" component={CarsAvailable} />
      </Switch>
      <Footer />
      {/* <CarCard /> */}
    </div>
    </CarProvider> 
     </CommentProvider>
  );
}

export default App;
