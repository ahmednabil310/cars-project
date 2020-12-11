import React, { Component } from 'react';
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { bindActionCreators } from "redux";
import CarsCard from './CarsCard';

class CarsTable extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.actions.getCarByPriceRange();
	}

	render() {
		return (<div className='row m-auto no-gutters carsTable-container'>
			{this.props.ListCarPrice.map((item, i) => {
				return <CarsCard data={item} key={i} />
			})}
		</div>);
	}
}


const mapStateToProps = (state, ownProps) => ({
	ListCarPrice: state.reduces.ListCarPrice
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsTable); 
