import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/CarsAvailable/CarsAvailableDetails.css';
import CarsOfBrand from './CarsOfBrand';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';

class CarsAvailableDetails extends Component {
  constructor(props) {
    super(props);

    const query = new URLSearchParams(this.props.location.search);

    let makeID = '';

    for (let params of query.entries()) {
      makeID = params[1];
    }

    var d = new Date();
    var year = d.getFullYear();

    this.state = {
      Years: [],
      Make: [],
      SelectedYears: { label: year, value: year },
      SelectedMake: { label: makeID, value: makeID },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // life cycle of react calling when any change of props
  componentWillReceiveProps(nextState, prevState) {
    if (
      (nextState.listYears && nextState.listYears.length > 0) ||
      (nextState.listMake && nextState.listMake.length > 0)
    ) {
      this.setState({
        isLoading: false,
        show: false,
        showConfirme: false,
      });
    } else {
      this.setState({
        isLoading: false,
        showConfirme: false,
      });
    }
  }

  setFieldValue = (type, option) => {
    this.setState({
      [type]: option,
    });
  };

  // life cycle of react calling when page is loading
  componentDidMount() {
    this.props.actions.makeList();
    this.props.actions.makeYears();
    this.props.actions.getCarsByCategory(this.state.SelectedMake.value);
  }

  handleClick() {
    this.props.actions.getMakeByYears(
      this.state.SelectedMake.value,
      this.state.SelectedYears.value,
    );
  }

  render() {
    return (
      <div>
        <div className="Cars-Available__container">
          {this.state.SelectedMake.value != 'default' ? (
            <div className="Cars-Available__container__title">
              <span style={{ color: '#3e3e3e' }}>
                {this.state.SelectedMake.label}
              </span>{' '}
              UAE Prices & Specs
            </div>
          ) : (
            <div className="Cars-Available__container__title">Choose</div>
          )}

          {this.state.SelectedMake.value != 'default' ? (
            <div className="Cars-Available__container__SubTitle mt-2">
              HOME / PRICES & SPECS {this.state.SelectedMake.label} /{' '}
              <span style={{ color: '#3e3e3e' }}>
                {this.state.SelectedMake.label}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listYears: state.reduces.listYears,
  listMake: state.reduces.listMake,
  listMakeYears: state.reduces.listMakeYears,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CarsAvailableDetails));
