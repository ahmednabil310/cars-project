import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { bindActionCreators } from "redux";
import "../../styles/ReviewPortalStyles/TopRatedCars.css";
import stars from "../../images/ReviewPortal/Group 166.jpg";
import ReactStars from "react-rating-stars-component";

class TopRatedCars extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getMostLike();
  }

  render() {
    return (
      <>
        <div className="topCarsRated_title">
          <div>Top Rated</div>
          <div style={{ color: "#727272" }}>Cars</div>
        </div>
        <div className="topRatedCarCard">
          <img
            className="topRatedCarCard_img"
            src={
              "https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg"
            }
          />
          <div className="topRatedCarCard_details">
            <div className="topRatedCarCard_title">Gensis G80</div>
            <div className="topRatedCarCard_reviewCard">
              <div className="topRatedCarCard_rateNum">5.0</div>
              <div className="topRatedCarCard_reteDetails">
                <div>255 reviews</div>
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#d53535"
                    value={4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topRatedCarCard">
          <img
            className="topRatedCarCard_img"
            src={
              "https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg"
            }
          />
          <div className="topRatedCarCard_details">
            <div className="topRatedCarCard_title">Gensis G80</div>
            <div className="topRatedCarCard_reviewCard">
              <div className="topRatedCarCard_rateNum">5.0</div>
              <div className="topRatedCarCard_reteDetails">
                <div>255 reviews</div>
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#d53535"
                    value={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topRatedCarCard">
          <img
            className="topRatedCarCard_img"
            src={
              "https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg"
            }
          />
          <div className="topRatedCarCard_details">
            <div className="topRatedCarCard_title">Gensis G80</div>
            <div className="topRatedCarCard_reviewCard">
              <div className="topRatedCarCard_rateNum">5.0</div>
              <div className="topRatedCarCard_reteDetails">
                <div>255 reviews</div>
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#d53535"
                    value={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topRatedCarCard">
          <img
            className="topRatedCarCard_img"
            src={
              "https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg"
            }
          />
          <div className="topRatedCarCard_details">
            <div className="topRatedCarCard_title">Gensis G80</div>
            <div className="topRatedCarCard_reviewCard">
              <div className="topRatedCarCard_rateNum">5.0</div>
              <div className="topRatedCarCard_reteDetails">
                <div>255 reviews</div>
                <div>
                  <img src={stars} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ListMostLike: state.reduces.ListMostLike,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedCars);
