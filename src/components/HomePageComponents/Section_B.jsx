import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import close from '../../images/close.png';

import '../../styles/HomePageStyles/Section_B.css';
import AddVechile from '../SubComponents/AddVechile/AddVechile';
import CarCard from '../SubComponents/CarCard/CarCard';
import ModelFields from '../SubComponents/ModelFields/ModelFields';

import Select from 'react-select';
import { Form } from 'react-bootstrap';
import Section_C from './Section_C';

// the hook
// import { useTranslation } from "react-i18next";

// const { t, i18n } = useTranslation();

class Section_B extends Component {
  constructor(props) {
    super(props);

    this.refCSS = React.createRef();
    //this.refParentCSS = React.createRef();

    this.state = {
      Years: [],
      Make: [],
      SelectedYears: { label: 'Select Years', value: 'Select Years' }, //t(
      SelectedMake: { label: 'Select Make', value: 'Select Make' }, //t(
      SelectedSubMake: { label: 'Select SubMake', value: 'Select  SubMake' }, //t(
      SelectedEngine: { label: 'Select Engine', value: 'Select Engine' }, //t(
      cardShow: {
        show: false,
        card1: false,
        card2: false,
        card3: false,
        card4: false,
      },
      listCarData: [],
      carNumber: 0,
      modalShow: false,
      engine: '',
      number: 4,
    };
  }

  componentWillReceiveProps(nextState, prevState) {
    if (nextState.listCarData.length === 4) {
      this.refCSS.current.scrollIntoView();
    }
    this.setState({
      listCarData: nextState.listCarData,
    });
  }

  componentDidMount() {
    this.props.actions.makeYears();
    if (this.props.listCarData.length !== 4) {
      this.props.actions.clearAllCar();
    }
  }

  closeModelHandler1 = (index) => {
    this.props.actions.clearCar(index);
  };

  closeModelHandler2 = () => {
    let lastData = this.state.cardShow;
    lastData['card2'] = false;

    this.setState(
      {
        cardShow: lastData,
        carNumber: this.state.carNumber === 1 ? 0 : this.state.carNumber - 1,
      },
      () => {
        this.props.actions.clearCar(1);
      },
    );
  };

  closeModelHandler3 = () => {
    let lastData = this.state.cardShow;
    lastData['card3'] = false;

    this.setState(
      {
        cardShow: lastData,
        carNumber: this.state.carNumber === 1 ? 0 : this.state.carNumber - 1,
      },
      () => {
        this.props.actions.clearCar(2);
      },
    );
  };

  closeModelHandler4 = () => {
    let lastData = this.state.cardShow;
    lastData['card4'] = false;

    this.setState(
      {
        cardShow: lastData,
        carNumber: this.state.carNumber === 1 ? 0 : this.state.carNumber - 1,
      },
      () => {
        this.props.actions.clearCar(3);
      },
    );
  };

  setModalShow = (type) => {
    this.setState({
      modalShow: type,
      SelectedYears: { label: 'Select Years', value: 'Select Years' },
      SelectedMake: { label: 'Select Make', value: 'Select Make' },
      SelectedSubMake: { label: 'Select SubMake', value: 'Select  SubMake' },
      SelectedEngine: { label: 'Select Engine', value: 'Select Engine' },
    });
  };

  addVechileHandler = () => {
    this.props.actions.getCarData(this.state.SelectedEngine.value);

    this.setState({
      carNumber: 1,
      modalShow: !this.state.modalShow,
    });
  };

  setFieldValue = (type, option) => {
    switch (type) {
      case 'SelectedYears':
        this.props.actions.getCars(option.value);
        break;
      case 'SelectedMake':
        this.props.actions.getSubCars(
          option.value,
          this.state.SelectedYears.value,
        );
        break;
      case 'SelectedSubMake':
        this.props.actions.getEngine(
          option.value,
          this.state.SelectedYears.value,
        );
        break;
    }

    this.setState({
      [type]: option,
    });
  };

  render() {
    document.getElementById('cards_container')&&document.getElementById('cards_container').addEventListener('scroll', (event) => {
     
      document.getElementById('sticky_nav').scrollLeft=document.getElementById('cards_container').scrollLeft
      console.log('event',document.getElementById('sticky_nav').scrollLeft)
  });
  document.getElementById('sticky_nav')&&document.getElementById('sticky_nav').addEventListener('scroll', (event) => {
     
    document.getElementById('cards_container').scrollLeft=document.getElementById('sticky_nav').scrollLeft
    console.log('event',document.getElementById('cards_container').scrollLeft)
});
    const customStyles = {
      control: (base) => ({
        ...base,
        height: '72px!important',
        width: '100%!important',
        padding: '6px 10px 6px 16px!important',
        marginBottom: '3px!important',
        border: '1px solid #707070!important',
        marginTop: '3px',
        boxShadow: '0 1px 3px #707070',
      }),
    };

    let listAdded = [];
    const existNumber = this.state.number - this.state.listCarData.length;
    for (var i = 0; i < existNumber; i++) {
      listAdded.push(
        <AddVechile showModel={() => this.setModalShow(i)} key={i} />,
      );
    }

    return (
      <>


        <div className='sticky-top  bg-white' id='sticky_nav' style={{overflow:'auto'}}>
          <div className="section-b-homepage-container">
            <div className="d-flex sub-container ">
              <h3>
                {/* //t( */}
                <span className="special">{'Compare'}</span> {/* t( */}
                {'Cars Side-by-Side'}
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

            <div className="row section-b_car-container " ref={this.refCSS} style={{ top: '13%' }}>

              {this.state.listCarData.length > 0
                ? this.state.listCarData.map((item, i) => {
                  return (
                    <div className="col-3 col-lg-3" key={i}>
                      <div className="Car__Card pb-4 ">
                        <div className="Car__Header p-4 sticky-top " >
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="text-capitalize font-weight-bold main__red mb-0">
                              {item.make}
                            </h6>
                            <div className="Close__Btn" onClick={() => this.closeModelHandler1(i)}>
                              <img className="img-fluid" src={close} alt="close" />
                            </div>
                          </div>
                          <p className="main__gary mb-1"> {item.model}</p>
                          <span
                            className="main__gary pl-0"
                            style={{
                              textDecoration: 'none',
                              border: 'none',
                              background: 'none',
                            }}>
                            {item.class}
                          </span>
                        </div>
                      </div>

                    </div>
                  );
                })
                : null}
              {listAdded}
            </div>

          </div>
        </div>
        <div className="section-b-homepage-container">
          {/* <div className="d-flex sub-container ">
            <h3>
              <span className="special">{'Compare'}</span> 
              {'Cars Side-by-Side'}
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
 */}

          <div className="car-container-wrapper" id='cards_container'>
            <div className="row section-b_car-container" ref={this.refCSS}>
              {this.state.listCarData.length > 0
                ? this.state.listCarData.map((item, i) => {
                  return (
                    <div className="col-3 col-lg-3" key={i}>
                      <CarCard
                        closeModel={() => this.closeModelHandler1(i)}
                        data={item}
                      />
                    </div>
                  );
                })
                : null}

              {/* {listAdded} */}

              <ModelFields
                show={this.state.modalShow}
                onHide={() => this.setModalShow(false)}
                submitHandler={this.addVechileHandler}
                submitValid={this.state.SelectedEngine.label}
                title="Vehicle">
                <Form.Group controlId="yearsId">
                  <Select
                    name="yearsId"
                    id="yearsId"
                    value={this.state.SelectedYears}
                    onChange={(opt) => {
                      this.setFieldValue('SelectedYears', opt);
                    }}
                    options={this.props.listYears}
                    styles={customStyles}
                  />
                </Form.Group>
                <Form.Group controlId="makeId">
                  <Select
                    name="makeId"
                    id="makeId"
                    value={this.state.SelectedMake}
                    onChange={(opt) => {
                      this.setFieldValue('SelectedMake', opt);
                    }}
                    options={this.props.listCars}
                    isDisabled={this.state.SelectedYears.label === 'Select Years'}
                    styles={customStyles}
                  />
                </Form.Group>
                <Form.Group controlId="submakeId">
                  <Select
                    name="submakeId"
                    id="submakeId"
                    value={this.state.SelectedSubMake}
                    onChange={(opt) => {
                      this.setFieldValue('SelectedSubMake', opt);
                    }}
                    styles={customStyles}
                    options={this.props.listSubCars}
                    isDisabled={this.state.SelectedMake.label === 'Select Make'}
                  />
                </Form.Group>
                <Form.Group controlId="engine">
                  <Select
                    name="engine"
                    id="engine"
                    value={this.state.SelectedEngine}
                    onChange={(opt) => {
                      this.setFieldValue('SelectedEngine', opt);
                    }}
                    styles={customStyles}
                    options={this.props.listEngine}
                    isDisabled={
                      this.state.SelectedSubMake.label === 'Select SubMake'
                    }
                  />
                </Form.Group>
              </ModelFields>
            </div>
          </div>

        </div>

      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listYears: state.reduces.listYears,
  listMake: state.reduces.listMake,
  listMakeYears: state.reduces.listMakeYears,
  listCars: state.reduces.listCars,
  listSubCars: state.reduces.listSubCars,
  listEngine: state.reduces.listEngine,
  listCarData: state.reduces.listCarData,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section_B);
