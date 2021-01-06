import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import CarReviewItem from '../CarReviewItem/CarReviewItem';

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
          style={{ borderTop: 'none' }}>
          <h3 className="mb-0 Sections-title">Latest Car Review</h3>
        </div>
        <div className={'reviewPortal_sectionSeparator'} />

        <div className="row overflow-container my-4">
          {this.props.ListCarLike.length > 0
            ? this.props.ListCarLike
                // .slice(
                //     0,
                //     this.state.viewAll ? Infinity : 5,
                //   )
                .map((item, i) => {
                  return (
                    <CarReviewItem
                      key={i}
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
  mapDispatchToProps,
)(withRouter(LatestCarReview));
