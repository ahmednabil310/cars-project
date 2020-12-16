import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import Banner from "../components/CarDetailsComponent/Banner";
import CarDetails from "../components/CarDetailsComponent/CarDetails";
import CarsPros from "../components/CarDetailsComponent/CarsPros";
import CustomerReviews from "../components/CarDetailsComponent/CustomerReviews";
import FullCar from "../components/CarDetailsComponent/FullCar";
import LastBanner from "../components/CarDetailsComponent/LastBanner";

class Dealer extends Component {
  constructor(props) {
    super(props);
    window.scroll(0, 0);
    let objId;

    if (this.props.location.search === "") {
      props.history.goBack();
    }

    const query = new URLSearchParams(this.props.location.search);

    for (let params of query.entries()) {
      objId = params[1];
    }


    this.state = {
      objData: objId,
      loading: true,
    };
  }

  componentWillReceiveProps(nextState, prevState) {
    this.setState({ loading: false })

  }
  componentDidMount() {
    window.scroll(0, 0);
    this.props.actions.getCarData(this.state.objData);
  }

  render() {
    return (
      <div>
        {this.state.loading === false ? (
          <>
            <Banner data={this.props.objCarData} />
            <CarDetails data={this.props.objCarData} />
            <CarsPros data={this.props.objCarData} />
            <FullCar data={this.props.objCarData} />
            <LastBanner data={this.props.objCarData} />
            <CustomerReviews data={this.props.objCarData} />
          </>
        ) : null}
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => ({
  objCarData: state.reduces.objCarData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dealer); 
