import { useState } from 'react';
import '../../styles/HomePageStyles/Section_B.css';
import AddVechile from '../SubComponents/AddVechile/AddVechile';
import CarCard from '../SubComponents/CarCard/CarCard';
import ModelFields from '../SubComponents/ModelFields/ModelFields';

import car1 from '../../images/car-details/car1.png';
import car2 from '../../images/car-details/car2.png';
import car3 from '../../images/car-details/car3.png';
import car4 from '../../images/car-details/car4.png';

// the hook
import { useTranslation } from 'react-i18next';

const Section_B = () => {
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

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleEngineChange = (e) => {
    setEngine(e.target.value);
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
  const { show, card1, card2, card3, card4 } = cardShow;

  const addVechileHandler = () => {
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

  const { t, i18n } = useTranslation();

  return (
    <div className="section-b-homepage-container">
      <div className="d-flex sub-container">
        <h3>
          <span className="special">{t('Compare')}</span>{' '}
          {t('Cars Side-by-Side')}
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
              <stop offset="0" stop-color="#d53535" />
              <stop offset="1" stop-color="#6b1b1b" />
            </linearGradient>
            <linearGradient
              id="linear-gradient-2"
              x1="0.777"
              x2="0.777"
              y2="1.686"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#efefef" />
              <stop offset="1" stop-color="#c4c4c4" />
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
                    {t('Pricing1')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Rating')}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Consumer rating')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Waranty')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Features')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Specifications')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Fuel economy')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Dimensions')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Ownership costs')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {t('Colors')}
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
            <div class="form-group">
              <select
                class="form-control p-3 model__add__vehicle__select"
                style={{ height: 'auto' }}
                name="make"
                value={make}>
                <option defaultValue>{t('Select make')}</option>
                <option value="1">{t('Select make')}</option>
                <option value="2">{t('Select make')}</option>
              </select>
            </div>
            <div class="form-group">
              <select
                class="form-control p-3 model__add__vehicle__select"
                id="exampleFormControlSelect1"
                style={{ height: 'auto' }}
                disabled={make === ''}
                name="year"
                value={year}>
                <option defaultValue>{t('Select year')}</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="form-group">
              <select
                class="form-control p-3 model__add__vehicle__select"
                id="exampleFormControlSelect1"
                style={{ height: 'auto' }}
                disabled={year === ''}
                name="model"
                value={model}>
                <option defaultValue>{t('Select model')}</option>
                <option value="1">{t('Select model1')}</option>
                <option value="2">{t('Select model2')}</option>
              </select>
            </div>
            <div class="form-group">
              <select
                class="form-control p-3 model__add__vehicle__select"
                id="exampleFormControlSelect1"
                style={{ height: 'auto' }}
                property="voucherCategoryClass"
                disabled={model === ''}
                name="engine"
                value={engine}>
                <option defaultValue>{t('Select engine')}</option>
                <option value="1">{t('Select engine1')}</option>
                <option value="2">{t('Select engine2')}</option>
              </select>
            </div>
          </ModelFields>
        </div>
      </div>
    </div>
  );
};

export default Section_B;
