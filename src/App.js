import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NewCarPricing from "./pages/NewCarPricing";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/newcarpricing" component={NewCarPricing} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
