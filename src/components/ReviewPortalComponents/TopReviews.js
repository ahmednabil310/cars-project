import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { bindActionCreators } from "redux";

class TopReviews extends Component {
  constructor(props) {
    super(props); 
  }
 
  componentDidMount() {
    this.props.actions.getTopReview(); 
  }

  render() {
    return (
      <>
        <div className={"reviewPortal_sectionTitle"}>Top Reviews </div>
        <div className={"reviewPortal_sectionSeparator"} />
        {this.props.listReviews.map((item, index) => {
          return (
            <div className="carReviewCard">
              <img src={item.carImage} className="carReviewCard_img" />
              <div className="carReviewCard_details">
                <div className="carReviewCard_title">{item.make}</div>
                <div className="carReviewCard_desc">{item.model}</div>
              </div>
            </div>
          );
        })}

        <div className="reviewPortal_viewAll">View all</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopReviews);
