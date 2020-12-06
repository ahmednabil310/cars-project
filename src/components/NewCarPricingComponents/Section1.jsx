import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/NewCarPricingStyles/Section1.css';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
// the hook
import { useTranslation } from 'react-i18next';

class Section1 extends Component {
  constructor(props) {
    super(props);

    this.refCSS = React.createRef();
    var d = new Date();
    var year = d.getFullYear();
    this.state = {
      Years: year,
      Make: [],
      SelectedYears: { label: 'Select Years', value: 'Select Years' }, //t(
      SelectedMake: { label: 'Select Make', value: 'Select Make' }, //t(
      SelectedSubMake: { label: 'Select SubMake', value: 'Select  SubMake' }, //t(
      SelectedEngine: { label: 'Select Engine', value: 'Select Engine' }, //t(
      engine: '',
    };
  }

  componentDidMount() {
    this.props.actions.getCars(this.state.Years);
  }

  setFieldValue = (type, option) => {
    switch (type) {
      case 'SelectedYears':
        this.props.actions.getCars(option.value);
        break;
      case 'SelectedMake':
        this.props.actions.getSubCars(option.value, this.state.Years);
        break;
      case 'SelectedSubMake':
        this.props.actions.getEngine(option.value, this.state.Years);
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
      <div className=" d-flex justify-content-center">
        <div className="custom__container NewCarPricing-Section1">
          <h3 className="NewCarPricing-Section1__h3 NewCarPricing-Section1__h3--red">
            Choose
          </h3>
          <h3 className="NewCarPricing-Section1__h3 desc">learn what to pay</h3>

          <div className="d-flex align-items-center select__input row">
            <div className="col-lg-3 col-sm-12">
              <Select
                name="makeId"
                id="makeId"
                value={this.state.SelectedMake}
                onChange={(opt) => {
                  this.setFieldValue('SelectedMake', opt);
                }}
                options={this.props.listCars}
                styles={customStyles}
              />
            </div>
            <div className="col-lg-3 col-sm-12">
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
            </div>
            <div className="col-lg-3 col-sm-12">
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
            </div>
            <div className="col-lg-3">
              <button
                className="btn my-btn btn-primary"
                onClick={() =>
                  this.props.history.push(
                    `/cardetail?type=${this.state.SelectedEngine.value}`,
                  )
                }>
                Submit
              </button>
            </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Section1));
