import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Dealer from './pages/Dealer';
import Home from './pages/Home';
import NewCarPricing from './pages/NewCarPricing';
import DealerDetails from './pages/DealerDetails';

import CarsAvailable from './pages/CarsAvailable';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/newcarpricing' component={NewCarPricing} />
				<Route path='/cardetail' component={Dealer} />
				<Route path='/dealer-details' component={DealerDetails} />
				<Route path='/cars-available' component={CarsAvailable} />
			</Switch>
		</div>
	);
}

export default App;
