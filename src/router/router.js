import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Loading from '../components/loadingPage';

const Nav = lazy(() => import('../components/Nav'));
const Dealer = lazy(() => import('../pages/Dealer'));
const Home = lazy(() => import('../pages/Home'));
const NewCarPricing = lazy(() => import('../pages/NewCarPricing'));
const DealerDetails = lazy(() => import('../pages/DealerDetails'));
const CarsAvailable = lazy(() => import('../pages/CarsAvailable'));
const Footer = lazy(() => import('../components/Footer'));
const ReviewPortal = lazy(() => import('../pages/ReviewPortal'));
const CarCard = lazy(() =>
  import('../components/SubComponents/CarCard/CarCard'),
);

const RouterDocument = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router basename="/">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/newcarpricing" component={NewCarPricing} />
          <Route path="/cardetail" component={Dealer} />
          <Route path="/dealer-details" component={DealerDetails} />
          <Route path="/cars-available" component={CarsAvailable} />
          <Route path="/car-reviews" component={ReviewPortal} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default RouterDocument;
