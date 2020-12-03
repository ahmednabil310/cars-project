import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';

import '../../styles/HomePageStyles/Section_B.css';
import AddVechile from '../SubComponents/AddVechile/AddVechile';
import CarCard from '../SubComponents/CarCard/CarCard';
import ModelFields from '../SubComponents/ModelFields/ModelFields';

import car1 from '../../images/car-details/car1.png';
import car2 from '../../images/car-details/car2.png';
import car3 from '../../images/car-details/car3.png';
import car4 from '../../images/car-details/car4.png';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

// the hook
// import { useTranslation } from "react-i18next";

// const { t, i18n } = useTranslation();

class Section_B extends Component {
  constructor(props) {
    super(props);

    this.refCSS = React.createRef();

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
      carNumber: 0,
      modalShow: false,
      engine: '',
    };
  }

  componentWillReceiveProps(nextState, prevState) {
    if (this.state.carNumber > 0) {
      switch (this.state.carNumber) {
        case 1:
          let objCard1 = this.state.cardShow;
          objCard1.card1 = true;
          objCard1.show = true;
          this.setState({
            cardShow: objCard1,
          });
          break;

        case 2:
          let objCard2 = this.state.cardShow;
          objCard2.card2 = true;
          objCard2.show = true;
          this.setState({
            cardShow: objCard2,
          });
          break;
        case 3:
          let objCard3 = this.state.cardShow;
          objCard3.card3 = true;
          objCard3.show = true;
          this.setState({
            cardShow: objCard3,
          });
          break;
        case 4:
          let objCard4 = this.state.cardShow;
          objCard4.card4 = true;
          objCard4.show = true;
          this.setState({
            cardShow: objCard4,
          });
          break;
      }
    } else if (nextState.listCarData.length === 4) {
      let objCard = this.state.cardShow;
      objCard.card1 = true;
      objCard.card2 = true;
      objCard.card3 = true;
      objCard.card4 = true;
      objCard.show = true;
      this.refCSS.current.scrollIntoView();
      this.setState({ cardShow: objCard });
    }
  }

  componentDidMount() {
    this.props.actions.makeYears();
  }

  closeModelHandler1 = () => {
    let lastData = this.state.cardShow;
    lastData['card1'] = false;

    this.setState({
      cardShow: lastData,
    });
  };

  closeModelHandler2 = () => {
    let lastData = this.state.cardShow;
    lastData['card2'] = false;

    this.setState({
      cardShow: lastData,
    });
  };

  closeModelHandler3 = () => {
    let lastData = this.state.cardShow;
    lastData['card3'] = false;

    this.setState({
      cardShow: lastData,
    });
  };

  closeModelHandler4 = () => {
    let lastData = this.state.cardShow;
    lastData['card4'] = false;

    this.setState({
      cardShow: lastData,
    });
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
    if (this.state.cardShow.card1 === false) {
      this.props.actions.getCarData(this.state.SelectedEngine.value);

      this.setState({
        carNumber: 1,
        modalShow: !this.state.modalShow,
      });
    } else if (this.state.cardShow.card2 === false) {
      this.props.actions.getCarData(this.state.SelectedEngine.value);

      this.setState({
        carNumber: 2,
        modalShow: !this.state.modalShow,
      });
    } else if (this.state.cardShow.card3 === false) {
      this.props.actions.getCarData(this.state.SelectedEngine.value);

      this.setState({
        carNumber: 3,
        modalShow: !this.state.modalShow,
      });
    } else if (this.state.cardShow.card4 === false) {
      this.props.actions.getCarData(this.state.SelectedEngine.value);

      this.setState({
        carNumber: 4,
        modalShow: !this.state.modalShow,
      });
    }
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

    return (
      <div className="section-b-homepage-container">
        <div className="d-flex sub-container">
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

        <div className="car-container-wrapper">
          <div className="row section-b_car-container" ref={this.refCSS}>
            {this.state.cardShow.show && this.state.cardShow.card1 && (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <CarCard
                  closeModel={this.closeModelHandler1}
                  data={this.props.listCarData[0]}
                />
              </div>
            )}
            {this.state.cardShow.show && this.state.cardShow.card2 && (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <CarCard
                  closeModel={this.closeModelHandler2}
                  data={this.props.listCarData[1]}
                />
              </div>
            )}
            {this.state.cardShow.show && this.state.cardShow.card3 && (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <CarCard
                  closeModel={this.closeModelHandler3}
                  data={this.props.listCarData[2]}
                />
              </div>
            )}
            {this.state.cardShow.show && this.state.cardShow.card4 && (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <CarCard
                  imageUrl={car4}
                  closeModel={this.closeModelHandler4}
                  data={this.props.listCarData[3]}
                />
              </div>
            )}
            {!this.state.cardShow.card1 && (
              <AddVechile showModel={() => this.setModalShow(true, 1)} />
            )}
            {!this.state.cardShow.card2 && (
              <AddVechile showModel={() => this.setModalShow(true, 2)} />
            )}
            {!this.state.cardShow.card3 && (
              <AddVechile showModel={() => this.setModalShow(true, 3)} />
            )}
            {!this.state.cardShow.card4 && (
              <AddVechile showModel={() => this.setModalShow(true, 4)} />
            )}
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
