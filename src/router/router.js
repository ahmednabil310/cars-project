import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  HashRouter,
} from 'react-router-dom';
import BuyerGuide from '../components/Info/BuyerGuide';
import PrivacyPolicy from '../components/Info/PrivacyPolicy';
import TermsAndCond from '../components/Info/TermsAndCond';
import Loading from '../components/loadingPage';

const Nav = lazy(() => import('../components/Nav'));
const Dealer = lazy(() => import('../pages/Dealer'));
// const Dealer = lazy(() => import('../pages/DealerBrief'));
const Home = lazy(() => import('../pages/Home'));
const NewCarPricing = lazy(() => import('../pages/NewCarPricing'));
const DealerDetails = lazy(() => import('../pages/DealerDetails'));
const CarsAvailable = lazy(() => import('../pages/CarsAvailable'));
const CarsDetailsSmall = lazy(() =>
  import('../components/CarsAvailableComponents/CarsDetailsSmall')
);
const Footer = lazy(() => import('../components/Footer'));
const ReviewPortal = lazy(() => import('../pages/ReviewPortal'));
const CarCard = lazy(() =>
  import('../components/SubComponents/CarCard/CarCard')
);

const RouterDocument = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route
            path='/carbrief'
            component={(props) => <Dealer brief {...props} />}
          />
          <>
            <Nav />
            <Route path='/' component={Home} exact />
            <Route path='/newcarpricing' component={NewCarPricing} />
            <Route path='/cardetail' component={Dealer} />
            <Route path='/dealer-details' component={DealerDetails} />
            <Route path='/cars-available' component={CarsAvailable} />
            <Route path='/sub-cars' component={CarsDetailsSmall} />
            <Route path='/car-reviews' component={ReviewPortal} />
            <Route path='/buyer-guide' component={BuyerGuide} />
            <Route path='/terms-of-use' component={TermsAndCond} />
            <Route path='/privacy-policy' component={PrivacyPolicy} />
            <Footer />
          </>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RouterDocument;
