import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Dealer from './pages/Dealer';
import Home from './pages/Home';
import NewCarPricing from './pages/NewCarPricing';
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newcarpricing" component={NewCarPricing} />
        <Route path="/cardetail" component={Dealer} />
      </Switch>
    </div>
  );
}

export default App;
