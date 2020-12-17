import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/CarsAvailable/CarsAvailableDetails.css';
import CarsOfBrand from './CarsOfBrand';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
      SelectedMake: { label: makeID, value: makeID },
    };
  }

  // life cycle of react calling when any change of props
  componentWillReceiveProps(nextState, prevState) {
    if (nextState.SelectedMake && nextState.SelectedMake.length > 0) {
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

  // life cycle of react calling when page is loading
  componentDidMount() {
    this.props.actions.getCarsByCategory(this.state.SelectedMake.value);
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
              <NavLink to="/"> HOME &nbsp;</NavLink>/&nbsp;
              <NavLink to="/">PRICES & SPECS</NavLink>&nbsp;
              {this.state.SelectedMake.label} / &nbsp;
              <span style={{ color: '#3e3e3e' }}>
                {this.state.SelectedMake.label}
              </span>
            </div>
          ) : null}
          {this.state.SelectedMake.label != 'default' ? (
            <div>
              <div className="Cars-Available__container__ChoosedBrand">
                Browse {this.state.SelectedMake.label} Models
              </div>

              <CarsOfBrand CarsDetails={this.props.listMakeYears} />
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
