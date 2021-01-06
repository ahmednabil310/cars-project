import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import TopReviewItem from '../TopReviewItem/TopReviewItem';

class TopReviews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewAll: false,
		};
	}

	componentDidMount() {
		this.props.actions.getTopReview();
	}

	render() {
		return (
			<>
				<div className="reviewPortal_sectionTitle d-flex justify-content-between align-items-center">
					<h3 className="mb-0">Top Reviews</h3>
				</div>
				<div className={'reviewPortal_sectionSeparator'} />
				<div className="row overflow-container my-4">
					{this.props.listReviews
						// .slice(0, this.state.viewAll ? Infinity : 5)
						.map((item, index) => {
							return (
								<TopReviewItem
									key={index}
									carId={item.carId}
									model={item.model}
									make={item.make}
									carImage={item.carImage}
									year={item.year}
									subject={item.subject}
									postedon={item.postedon}
									totalReviews={item.totalReviews}
									ratingStar={item.ratingStar}
									onClickFunc={() =>
										this.props.history.push(`/cardetail?type=${item.carId}`)
									}
								/>
								// <div className="carReviewCard" key={index}>
								// 	<img
								// 		src={item.carImage}
								// 		className="carReviewCard_img"
								// 		style={{ cursor: 'pointer' }}
								// 		onClick={() =>
								// 			this.props.history.push(`/cardetail?type=${item.carId}`)
								// 		}
								// 	/>
								// 	<div className="carReviewCard_details">
								// 		<div
								// 			className="carReviewCard_title"
								// 			style={{ cursor: 'pointer' }}
								// 			onClick={() =>
								// 				this.props.history.push(`/cardetail?type=${item.carId}`)
								// 			}
								// 		>
								// 			{item.make} {item.model}
								// 		</div>
								// 		{/* <div className="carReviewCard_title">{item.year}</div> */}
								// 		<div className="carReviewCard_modelyear">
								// 			Model Year: {item.year}
								// 		</div>

								// 		<div className="carReviewCard_reviews">
								// 			Total Reviews: {item.totalReviews}
								// 		</div>
								// 		{/* <div className="carReviewCard_model"></div> */}
								// 	</div>
								// </div>
							);
						})}
				</div>
				{/* <div
          className="reviewPortal_viewAll"
          onClick={() => {
            this.setState({ viewAll: !this.state.viewAll });
          }}>
          {this.state.viewAll ? 'View less' : 'View all'}
        </div> */}
			</>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	listReviews: state.reduces.listReviews,
	ListParticipants: state.reduces.ListParticipants,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(TopReviews));
