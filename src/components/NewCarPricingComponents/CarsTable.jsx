import React, { Component } from 'react';
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { bindActionCreators } from "redux";
// import Car1 from '../../images/Cars/Car1.png';
// import Car2 from '../../images/Cars/Car2.png';
// import Car3 from '../../images/Cars/Car3.png';
// import Car4 from '../../images/Cars/Car4.png';
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
			{/* <CarsCard img={Car1} price='20’000' arrow />
			<CarsCard img={Car2} price='20K - 30K' mb='5px' />
			<CarsCard img={Car3} price='30K - 40K' />
			<CarsCard img={Car4} price='40K - 50K' /> */}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CarsTable); 
