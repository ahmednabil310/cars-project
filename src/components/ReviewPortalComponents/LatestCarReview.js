import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import CarReviewItem from '../CarReviewItem/CarReviewItem';
import rightIcon from '../../images/right-icon.png';

class LatestCarReview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewAll: false,
		};
	}

	componentDidMount() {
		this.props.actions.getLatestReview();
	}

	render() {
		return (
			<>
				<div
					className="reviewPortal_sectionTitle d-flex justify-content-between align-items-center"
					style={{ borderTop: 'none' }}
				>
					<h3 className="mb-0">Latest Car Review</h3>
					<h5 className="text-capitalize mb-0 see-all-btn">
						See All Latest car review{' '}
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
					{this.props.ListCarLike.length > 0
						? this.props.ListCarLike
								// .slice(
								//     0,
								//     this.state.viewAll ? Infinity : 5,
								//   )
								.map((item, i) => {
									return (
										<CarReviewItem
											key={item.carId}
											carId={item.carId}
											model={item.model}
											make={item.make}
											carImage={item.carImage}
											year={item.year}
											subject={item.subject}
											postedon={item.postedon}
											onClickFunc={() =>
												this.props.history.push(`/cardetail?type=${item.carId}`)
											}
										/>
										// <div className="carReviewCard col-sm-2 col-md-2" key={i}>
										// 	<div className="row">
										// 		<div className="col-12">
										// 			<img
										// 				style={{ cursor: 'pointer' }}
										// 				src={item.carImage}
										// 				className="carReviewCard_img"
										// 				onClick={() =>
										// 					this.props.history.push(
										// 						`/cardetail?type=${item.carId}`
										// 					)
										// 				}
										// 			/>
										// 		</div>
										// 		<div className="col-12">
										// 			<div className="carReviewCard_details">
										// 				<div
										// 					className="carReviewCard_title"
										// 					style={{ cursor: 'pointer' }}
										// 					onClick={() =>
										// 						this.props.history.push(
										// 							`/cardetail?type=${item.carId}`
										// 						)
										// 					}
										// 				>{`${item.make} ${item.model}`}</div>
										// 				<div className="carReviewCard_desc">
										// 					Model Year: {item.year}
										// 				</div>
										// 				<div className="carReviewCard_subj">
										// 					{item.subject}
										// 				</div>
										// 				<div className="carReviewCard_date">
										// 					Posted on : {item.postedon.split('T')[0]}
										// 				</div>
										// 			</div>
										// 		</div>
										// 	</div>
										// </div>
									);
								})
						: null}
				</div>
				{/* <div
          className="reviewPortal_viewAll"
          onClick={() => {
            this.setState({ viewAll: !this.state.viewAll });
          }}>
          {this.state.viewAll ? 'View less' : 'View all latest cars reviews'}
        </div> */}
			</>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	ListCarLike: state.reduces.ListCarLike,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(LatestCarReview));
