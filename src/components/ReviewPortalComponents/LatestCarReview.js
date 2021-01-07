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
                  );
                })
            : null}
        </div>
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
