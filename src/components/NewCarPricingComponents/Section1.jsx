import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/NewCarPricingStyles/Section1.css';
import Select from "react-select";
import { withRouter } from 'react-router-dom';
// the hook
import { useTranslation } from 'react-i18next';

class Section1 extends Component {
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
			engine: '',
		};
	}

	componentDidMount() {
		this.props.actions.makeYears();
	}

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
			<div className=' d-flex justify-content-center'>
				<div className='custom__container NewCarPricing-Section1'>
					<h3 className='NewCarPricing-Section1__h3 NewCarPricing-Section1__h3--red'>
						{/* {t("Choose")} */}
						Choose
					</h3>
					<h3 className='NewCarPricing-Section1__h3 desc'>
						{/* {t("learn what to pay")} */}
						learn what to pay
					</h3>
					{/* <div className='NewCarPricing-Section1-search'>
						<p className='NewCarPricing-Section1-search__p'>
							{t("Search by")}
						</p>
						<p className='NewCarPricing-Section1-search__p'>
							{t("Make/Model")}
						</p>
						<p className='NewCarPricing-Section1-search__p'>{t("Type")}</p>
						<p className='NewCarPricing-Section1-search__p'>{t("Price")}</p>
					</div> */}
					<div className='d-flex align-items-center justify-content-center select__input'>
						<Select
							name="yearsId"
							id="yearsId"
							value={this.state.SelectedYears}
							onChange={(opt) => {
								this.setFieldValue('SelectedYears', opt);
							}}
							styles={customStyles}
							options={this.props.listYears}
						/>
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

						<button className='btn my-btn btn-primary' onClick={() =>
							 this.props.history.push(`/cardetail?type=${this.state.SelectedEngine.value}`)}>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Section1));