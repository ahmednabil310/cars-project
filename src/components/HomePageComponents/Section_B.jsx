import { useState, useContext, useEffect } from 'react';
import '../../styles/HomePageStyles/Section_B.css';
import AddVechile from '../SubComponents/AddVechile/AddVechile';
import CarCard from '../SubComponents/CarCard/CarCard';
import ModelFields from '../SubComponents/ModelFields/ModelFields';

import car1 from '../../images/car-details/car1.png';
import car2 from '../../images/car-details/car2.png';
import car3 from '../../images/car-details/car3.png';
import car4 from '../../images/car-details/car4.png';

import { carContext } from '../../contexts/cars/carState';

const Section_B = () => {
  const [years, setYears] = useState([]);
  const [maker, setMakers] = useState([]);
  const [submodel, setSubModel] = useState([]);
  const [engineId, setEngineId] = useState([]);
  const {
    Cars,
    Engine,
    Year,
    Maker,
    GetCarMake,
    GetCarSubModel,
    GetYear,
    GetCarEngine,
    setcurrentEngine,
    CurrentEngine,
  } = useContext(carContext);

  useEffect(() => {
    GetYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [modalShow, setModalShow] = useState(false);

  const [cardShow, setCardShow] = useState({
    show: false,
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [engine, setEngine] = useState('');

  // handle years selector
  const handleSelectYear = (e) => {
    setYears(e.target.value);
    //rendering Maker
    GetCarMake(e.target.value);
    setYear(e.target.value);
  };

  //handle make selector
  const handleMakeSelector = (e) => {
    setMakers(e.target.value);
    //rendering Model
    GetCarSubModel(e.target.value, years);
    setMake(e.target.value);
  };

  // handle model change
  const handleModelsChange = (e) => {
    setSubModel(e.target.value);
    //rendering engine
    GetCarEngine(e.target.value, years);
    setModel(e.target.value);
  };
  // handle engine change
  const handleEngineSelector = (e) => {
    let index = e.target.selectedIndex;
    let element = e.target.childNodes[index];
    setEngine(e.target.value);
    setEngineId(element.id);
  };

  const { show, card1, card2, card3, card4 } = cardShow;

  const addVechileHandler = () => {
    setcurrentEngine(engineId);

    setYear('');
    setMake('');
    setModel('');
    setEngine('');

    setModalShow(false);

    setCardShow({
      show: true,
      card1: true,
      card2: false,
      card3: false,
      card4: false,
    });

    if (card1) {
      setCardShow({
        show: true,
        card1: true,
        card2: true,
        card3: false,
        card4: false,
      });
    }

    if (card1 && card2) {
      setCardShow({
        show: true,
        card1: true,
        card2: true,
        card3: true,
        card4: false,
      });
    }

    if (card1 && card2 && card3) {
      setCardShow({
        show: true,
        card1: true,
        card2: true,
        card3: true,
        card4: true,
      });
    }
  };

  const closeModelHandler1 = () => {
    setCardShow({
      ...cardShow,
      card1: false,
    });
  };

  const closeModelHandler2 = () => {
    setCardShow({
      ...cardShow,
      card2: false,
    });
  };

  const closeModelHandler3 = () => {
    setCardShow({
      ...cardShow,
      card3: false,
    });
  };

  const closeModelHandler4 = () => {
    setCardShow({
      ...cardShow,
      card4: false,
    });
  };

  return (
    <div className="section-b-homepage-container">
      <div className="d-flex sub-container">
        <h3>
          <span className="special">Compare</span> Cars Side-by-Side
        </h3>
        <svg
          id="Component_6_2"
          data-name="Component 6 – 2"
          xmlns="http://www.w3.org/2000/svg"
          width="1003.729"
          height="36.969"
          viewBox="0 0 1003.729 36.969">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#d53535" />
              <stop offset="1" stopColor="#6b1b1b" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="0.777"
              x2="0.777"
              y2="1.686"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#efefef" />
              <stop offset="1" stopColor="#c4c4c4" />
            </linearGradient>
          </defs>
          <path
            id="Path_52"
            data-name="Path 52"
            d="M-940,0H42L62,33.969H-940Z"
            transform="translate(940)"
            fill="url(#linear-gradient)"
          />
          <path
            id="Path_53"
            data-name="Path 53"
            d="M-940,0,59.808.207l3.921,6.566L-940,6.958Z"
            transform="translate(940 30.01)"
            fill="url(#linear-gradient-2)"
          />
        </svg>
      </div>
      <div className="section-b__nav">
        <div className="nav-container d-flex">
          <nav className="navbar navbar-expand-xl w-100 navbar-dark">
            <div className="m-auto" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Rating
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Consumer rating
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Waranty
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Specifications
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fuel economy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Dimensions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Ownership costs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Colors
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="car-container-wrapper">
        <div className="row section-b_car-container">
          {show && card1 && (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <CarCard imageUrl={car1} closeModel={closeModelHandler1} />
            </div>
          )}
          {show && card2 && (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <CarCard imageUrl={car2} closeModel={closeModelHandler2} />
            </div>
          )}
          {show && card3 && (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <CarCard imageUrl={car3} closeModel={closeModelHandler3} />
            </div>
          )}
          {show && card4 && (
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <CarCard imageUrl={car4} closeModel={closeModelHandler4} />
            </div>
          )}
          {!card1 && <AddVechile showModel={() => setModalShow(true)} />}
          {!card2 && <AddVechile showModel={() => setModalShow(true)} />}
          {!card3 && <AddVechile showModel={() => setModalShow(true)} />}
          {!card4 && <AddVechile showModel={() => setModalShow(true)} />}
          <ModelFields
            show={modalShow}
            onHide={() => setModalShow(false)}
            submitHandler={addVechileHandler}
            submitValid={engine}
            title="Vehicle">
            <div className="form-group">
              <select
                className="form-control p-3 model__add__vehicle__select"
                style={{ height: 'auto' }}
                name="year"
                onChange={handleSelectYear}>
                <option defaultValue>Select year</option>
                {Year.result !== undefined
                  ? Year.result.map((item, index) => (
                      <option key={item.year} value={item.year}>
                        {item.year}
                      </option>
                    ))
                  : ''}
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control p-3 model__add__vehicle__select"
                id="exampleFormControlSelect1"
                style={{ height: 'auto' }}
                disabled={year === ''}
                name="make"
                value={make}
                onChange={handleMakeSelector}>
                <option defaultValue>Select make</option>
                {Maker.result !== undefined
                  ? Maker.result.map((item, index) => (
                      <option key={item.make} value={item.make}>
                        {item.make}
                      </option>
                    ))
                  : ''}
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control p-3 model__add__vehicle__select"
                id="exampleFormControlSelect1"
                style={{ height: 'auto' }}
                disabled={make === ''}
                name="model"
                value={model}
                onChange={handleModelsChange}>
                <option defaultValue>Select model</option>
                {Cars.result !== undefined
                  ? Cars.result.map((item, index) => (
                      <option key={item.model} value={item.model}>
                        {item.model}
                      </option>
                    ))
                  : ''}
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control p-3 model__add__vehicle__select"
                id="exampleFormControlSelect1"
                style={{ height: 'auto' }}
                property="voucherCategoryClass"
                disabled={model === ''}
                name="engine"
                value={engine}
                onChange={handleEngineSelector}>
                <option defaultValue>Select engine</option>
                {Engine.result !== undefined
                  ? Engine.result.map((item, index) => (
                      <option
                        key={item.engine}
                        id={item.id}
                        value={item.engine}>
                        {item.engine}
                      </option>
                    ))
                  : ''}
              </select>
            </div>
          </ModelFields>
        </div>
      </div>
    </div>
  );
};

export default Section_B;
