import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import Banner from '../components/CarDetailsComponent/Banner';
import CarDetails from '../components/CarDetailsComponent/CarDetails';
import CarsPros from '../components/CarDetailsComponent/CarsPros';
import CustomerReviews from '../components/CarDetailsComponent/CustomerReviews';
import FullCar from '../components/CarDetailsComponent/FullCar';
import LastBanner from '../components/CarDetailsComponent/LastBanner';
import LoadingPage from '../components/loadingPage';

import notFoundImg from '../images/404.jpg';
import { Link } from 'react-router-dom';

class Dealer extends Component {
	constructor(props) {
		super(props);
		window.scroll(0, 0);
		let objId;

		if (this.props.location.search === '') {
			props.history.goBack();
		}

		const query = new URLSearchParams(this.props.location.search);

		if (this.props.brief) {
			const objData = {};
			if (query.has("make"))
				objData.make = query.get("make");
			else
				props.history.goBack();
			if (query.has("model"))
				objData.model = query.get("model");
			else
				props.history.goBack();
			if (query.has("year"))
				objData.year = query.get("year");
			else
				props.history.goBack();

			this.state = {
				objData,
				loading: true
			}

		} else {
			for (let params of query.entries()) {
				objId = params[1];
			}

			this.state = {
				objData: objId,
				loading: true,
			};
		}

	}

	componentWillReceiveProps(nextState, prevState) {
		this.setState({ loading: false });
	}
	componentDidMount() {
		window.scroll(0, 0);
		if (this.props.brief)
			this.props.actions.getCarBriefData(this.state.objData);
		else
			this.props.actions.getCarData(this.state.objData);
	}

	render() {
		return (
			<div>
				{this.state.loading === false ? (
					this.props.objCarData.model ?
						(<>
							<Banner data={this.props.objCarData} brief={this.props.brief} />
							{!this.props.brief && <CarDetails data={this.props.objCarData} />}
							<CarsPros data={this.props.objCarData} />
							<FullCar data={this.props.objCarData} brief={this.props.brief} />
							{!this.props.brief && <LastBanner data={this.props.objCarData} />}
							{!this.props.brief && <CustomerReviews data={this.props.objCarData} />}
						</>) :
						<div class="text-center notfound">
							<img src={notFoundImg} alt="404 not found" />
							<h2>Sorry! we don't have information about this car.</h2>
						</div>
				) : (
					<LoadingPage />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	objCarData: state.reduces.objCarData,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dealer);
