import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class TopReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAll: false,
    };
  }

  componentDidMount() {
    this.props.actions.getTopReview();
    console.log(this.props);
  }

  render() {
    return (
      <>
        <div className={'reviewPortal_sectionTitle'}>Top Reviews </div>
        <div className={'reviewPortal_sectionSeparator'} />
        {this.props.listReviews
          .slice(0, this.state.viewAll ? Infinity : 3)
          .map((item, index) => {
            return (
              <div className="carReviewCard" key={index}>
                <img
                  src={item.carImage}
                  className="carReviewCard_img"
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    this.props.history.push(`/cardetail?type=${item.carId}`)
                  }
                />
                <div className="carReviewCard_details">
                  <div
                    className="carReviewCard_title"
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      this.props.history.push(`/cardetail?type=${item.carId}`)
                    }>
                    {item.make}
                  </div>
                  {/* <div className="carReviewCard_title">{item.year}</div> */}
                  <div className="carReviewCard_modelyear">
                    Model Year: {item.year}
                  </div>

                  <div className="carReviewCard_reviews">
                    Total Reviews: {item.totalReviews}
                  </div>
                  <div className="carReviewCard_model">{item.model}</div>
                </div>
              </div>
            );
          })}

        <div
          className="reviewPortal_viewAll"
          onClick={() => {
            this.setState({ viewAll: !this.state.viewAll });
          }}>
          {this.state.viewAll ? 'View less' : 'View all'}
        </div>
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
  mapDispatchToProps,
)(withRouter(TopReviews));
