import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { bindActionCreators } from "redux";
import "../../styles/ReviewPortalStyles/ReviewPortalComp.css";
import LatestCarReview from "./LatestCarReview";
import TopReviews from "./TopReviews";
import TopParticipants from "./TopParticipants";
import MostLikeReview from "./MostLikedReview";
import TopRatedCars from "./TopRatedCarsComp";
import NewMembersOnTheList from "./NewMembersOnTheList";
import ReactStars from "react-rating-stars-component";
import ModelFields from "../SubComponents/ModelFields/ModelFields";
import "../../styles/DealerPageStyles/CustomerReviews.css";

class ReviewPortalComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      title: "",
      rate: 0,
      comment: "",
    };
  }

  componentDidMount() {
    //  this.props.actions.getTopReview();
  }

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClickReview = () => {
    this.setState({
      modalShow: !this.state.modalShow,
    });
  };

  inputRateHandler = (event) => {
    this.setState({ rate: event });
  };

  addReviewHandler = () => {
    this.setState({ modalShow: !this.state.modalShow });
    const param = {
      carId: this.state.carId,
      ratingStar: this.state.rate.toString(),
      title: this.state.title,
      subject: this.state.comment,
    };

    this.props.actions.addComment(param);
  };

  render() {
    return (
      <>
        <div className="ReviewPortalTitle ">REVIEW PORTAL</div>
        <div className="row m-0 paddingSchema">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4  pl-0">
            <LatestCarReview />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 pl-0">
            <TopReviews />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 pl-0">
            <TopParticipants />
          </div>
        </div>

        <div className="row m-0 paddingSchema">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8  pl-0">
            <MostLikeReview />
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4  pl-0">
            <div className="writeReviewBtn" onClick={this.handleClickReview}>
              + Write a review
            </div>
            {/* <NewMembersOnTheList /> */}
            <TopRatedCars />
          </div>
        </div>

        <ModelFields
          show={this.state.modalShow}
          onHide={this.handleClickReview}
          submitHandler={this.addReviewHandler}
          //submitValid={comment}
          title="Review"
        >
          <div class="form-group position-relative">
            <input
              type="text"
              className="form-control p-3 px-4 review__input review__input_title position-relative bg-transparent"
              name="title"
              value={this.state.title}
              onChange={this.inputChangeHandler}
            />
            {this.state.title.length === 0 && (
              <div className="position-absolute review__input_title__placeholder">
                <span className="main__gary mr-2">{"Review title"}</span>
                <span className="main__gary ml-2" style={{ color: "#C4C4C4" }}>
                  {"64 letters or numbers"}
                </span>
              </div>
            )}
          </div>
          <div className="form-group position-relative">
            <div
              style={{ zIndex: 0 }}
              className="form-control p-3 px-4 review__input review__input_rating position-relative bg-transparent"
              name="rating"
            ></div>

            <div className="position-absolute review__input_rating__placeholder">
              <span className="main__gary mr-2">{"Review rating"}</span>
              <span className="ml-2 d-inline-block" style={{ width: "135px" }}>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#d53535"
                  value={this.state.rate}
                  onChange={this.inputRateHandler}
                />
              </span>
            </div>
          </div>
          <div className="form-group position-relative">
            <textarea
              className="form-control p-3 px-4 review__input review__input_comment position-relative bg-transparent"
              name="comment"
              rows="5"
              value={this.state.comment}
              onChange={this.inputChangeHandler}
            ></textarea>
            {this.state.comment.length === 0 && (
              <div
                className="position-absolute"
                style={{ top: "12%", left: "6%" }}
              >
                <span className="main__gary mr-2">{"Review details"}</span>
                <span className="main__gary ml-2" style={{ color: "#C4C4C4" }}>
                  {"360 letters or numbers"}
                </span>
              </div>
            )}
          </div>
        </ModelFields>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listReviews: state.reduces.listReviews, 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPortalComp);
