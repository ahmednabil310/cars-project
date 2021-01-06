import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/ReviewPortalStyles/TopRatedCars.css';
import ReactStars from 'react-rating-stars-component';
import { withRouter } from 'react-router-dom';

import rightIcon from '../../images/right-icon.png';

class TopRatedCars extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewAll: false,
		};
	}

	componentDidMount() {
		this.props.actions.getCarsRate();
	}

	render() {
		return (
			<div>
				<div className="reviewPortal_sectionTitle d-flex justify-content-between align-items-center">
					<h3 className="mb-0">Top Rated Cars</h3>
					<h5 className="text-capitalize mb-0 see-all-btn">
						See All Top Rated cars{' '}
						<span className="d-inline-block ml-2">
							<img className="img-fluid" src={rightIcon} alt="rightIcon" />
						</span>
					</h5>
				</div>
				<div className={'reviewPortal_sectionSeparator'} />

				<div
					className="row flex-nowrap my-4 px-3"
					style={{ overflowX: 'auto' }}
				>
					{this.props.ListCarsRate.length > 0
						? this.props.ListCarsRate
								// .slice(0,this.state.viewAll ? Infinity : 5)
								.map((item, i) => {
									return (
										<div
											className="topRatedCarCard col-12 col-sm-5 col-md-4 col-lg-3 mx-2"
											key={i}
										>
											<div className="row">
												<div className="topRatedCarCard_link col-12 px-0 mb-3 mt-0 w-100">
													<img
														className="topRatedCarCard_img img-fluid"
														onClick={() =>
															this.props.history.push(
																`/cardetail?type=${item.id}`
															)
														}
														src={item.imageURL}
														style={{ cursor: 'pointer' }}
													/>
												</div>
												<div className="topRatedCarCard_details col-12">
													<div className="topRatedCarCard_title_link">
														<div
															className="topRatedCarCard_title"
															onClick={() =>
																this.props.history.push(
																	`/cardetail?type=${item.id}`
																)
															}
															style={{ cursor: 'pointer' }}
														>
															{item.make + '  ' + item.model + '  ' + item.year}
														</div>
													</div>
													<div className="topRatedCarCard_reviewCard">
														<div className="topRatedCarCard_rateNum">
															{parseInt(item.reliability).toFixed(1)}
														</div>
														<div className="topRatedCarCard_reteDetails">
															<div>
																<p className="topRatedCarCard_reli">
																	Reliability
																</p>
																<ReactStars
																	classNames="stylingStars"
																	edit={false}
																	size={'12px'}
																	count={5}
																	size={24}
																	activeColor="#d53535"
																	value={parseInt(item.reliability)}
																/>
															</div>
														</div>
													</div>
													<div className="topRatedCarCard_reviewCard">
														<div className="topRatedCarCard_rateNum">
															{parseInt(item.resaleValue).toFixed(1)}
														</div>
														<div className="topRatedCarCard_reteDetails">
															<div>
																<p className="topRatedCarCard_resale">
																	ResaleValue
																</p>
																<ReactStars
																	classNames="stylingStars"
																	size={'12px'}
																	edit={false}
																	count={5}
																	size={24}
																	activeColor="#d53535"
																	value={parseInt(item.resaleValue)}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})
						: null}
				</div>
				{/* <div
          className="reviewPortal_viewAll mt-5"
          onClick={() => {
            this.setState({ viewAll: !this.state.viewAll });
          }}>
          {this.state.viewAll ? 'View less' : 'View all'}
        </div> */}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	ListCarsRate: state.reduces.ListCarsRate,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(TopRatedCars));
