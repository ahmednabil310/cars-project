import React, { Component } from 'react';
import '../../styles/NewCarPricingStyles/Section3.css';
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { bindActionCreators } from "redux";

// the hook
import { useTranslation } from 'react-i18next';

class Section3 extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.actions.getCarByCategory();
	}


	render() {
		return (
			<div className='custom__container NewCarPricing-Section3 m-auto'>
				<div className='NewCarPricing-Section2-Heading'>
					<h3 className='NewCarPricing-Section2-Heading__h3 NewCarPricing-Section2-Heading__h3--red'>
						{/* {t("Best-rated")} */}
						 Best-rated
					</h3>
					<h3 className='NewCarPricing-Section2-Heading__h3'>
						{/* {t("cars by category")} */}
						cars by category
					</h3>
				</div>
				<div className='row m-0'>
					{this.props.ListCarCategory.map((item, i) => {
						return (<div key={i} className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
							<img className='img-fluid h-auto' src={item.imageURL} alt='SUV' />
							<p>{item.make}</p>
						</div>);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	ListCarCategory: state.reduces.ListCarCategory
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section3);  
