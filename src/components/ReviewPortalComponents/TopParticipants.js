import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { bindActionCreators } from "redux";

class TopParticipants extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getTopParticipants();
  }

  render() {
    return (
      <>
        <div className={"reviewPortal_sectionTitle"}>Top Participants</div>
        <div
          className={"reviewPortal_sectionSeparator"}
          style={{ marginBottom: "13%" }}
        />
        <div className="participantsReviewCard">
          <img
            src={
              "https://img.freepik.com/free-photo/half-profile-close-up-image-self-determined-focused-young-caucasian-unshaven-businessman-formal-clothes-posing-against-white-studio-wall-background-with-copyspace-your-text-content_343059-950.jpg?size=626&ext=jpg"
            }
            className="participantsReviewCard_img"
          />
          <div className="participantsReviewCard_details">
            <div className="participantsReviewCard_title">Full Name</div>
            <div className="participantsReviewCard_subTitle">
              User since : 3 y
            </div>
            <div className="participantsReviewCard_subTitle">
              Reviews : (188)
            </div>
          </div>
          <div className="participantsReviewCard_order">#{1}</div>
        </div>
        <div className="participantsReviewCard">
          <img
            src={
              "https://img.freepik.com/free-photo/half-profile-close-up-image-self-determined-focused-young-caucasian-unshaven-businessman-formal-clothes-posing-against-white-studio-wall-background-with-copyspace-your-text-content_343059-950.jpg?size=626&ext=jpg"
            }
            className="participantsReviewCard_img"
          />
          <div className="participantsReviewCard_details">
            <div className="participantsReviewCard_title">Full Name</div>
            <div className="participantsReviewCard_subTitle">
              User since : 3 y
            </div>
            <div className="participantsReviewCard_subTitle">
              Reviews : (188)
            </div>
          </div>
          <div className="participantsReviewCard_order">#{2}</div>
        </div>
        <div className="participantsReviewCard">
          <img
            src={
              "https://img.freepik.com/free-photo/half-profile-close-up-image-self-determined-focused-young-caucasian-unshaven-businessman-formal-clothes-posing-against-white-studio-wall-background-with-copyspace-your-text-content_343059-950.jpg?size=626&ext=jpg"
            }
            className="participantsReviewCard_img"
          />
          <div className="participantsReviewCard_details">
            <div className="participantsReviewCard_title">Full Name</div>
            <div className="participantsReviewCard_subTitle">
              User since : 3 y
            </div>
            <div className="participantsReviewCard_subTitle">
              Reviews : (188)
            </div>
          </div>
          <div className="participantsReviewCard_order">#{3}</div>
        </div>
      </>
    );
  }
}
 

const mapStateToProps = (state, ownProps) => ({
  ListParticipants: state.reduces.ListParticipants,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopParticipants);
