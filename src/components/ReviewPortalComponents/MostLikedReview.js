import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/ReviewPortalStyles/MostLikedReview.css';
import ReactStars from 'react-rating-stars-component';
import { withRouter } from 'react-router-dom';

class MostLikeReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false,
    };
  }

  componentDidMount() {
    this.props.actions.getMostLikes();
  }
  hnadleLike(item) {
    const userId = localStorage.getItem('userId');
    const obj = {
      id: item.id,
      userId: userId,
      carId: item.carId,
      ratingStar: item.ratingStar,
      title: item.title,
      subject: item.subject,
      totalView: item.totalView,
      totalLike: item.totalLike,
      status: item.status,
      postedon: item.postedon,
    };

    this.props.actions.likeComment(obj);
  }

  render() {
    return (
      <>
        <div className="mostLikedReview_header">
          <span style={{ color: '#D53535' }}>Most</span> Liked Review
        </div>
        {this.props.ListLike.map((item, i) => {
          return (
            <div key={i}>
              <div className="MostLikeReview_cards row m-0">
                <div className="MostLikeReview_cardContainer col-12 col-xl-6 col-lg-6 col-sm-12 col-md-12">
                  <img style={{ cursor: "pointer" }}
                    src={item.imageURL}
                    className="mostLikedReviewParticipantCard_img"
                    onClick={() =>
                      this.props.history.push(
                        `/cardetail?type=${item.carId}`,
                      )
                    }
                  />
                  <div className="mostLikedReviewParticipantCard_details">
                    <div className="mostLikedReviewParticipantCard_title">
                      {item.make + "  " + item.model + "  " + item.year}
                    </div>
                    <div className="mostLikedReviewParticipantCard_subTitle">
                      <span className="stars-container">
                        <ReactStars
                          count={5}
                          size={24}
                          activeColor="#d53535"
                          value={parseFloat(item.ratingStar)}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="MostLikeReview_cardContainer col-12 col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12">
                  <img
                    src={item.profilePic}
                    className="mostLikedReviewCarCard_img"
                  />

                  <div className="mostLikedReviewCarCard_details">
                    <div className="mostLikedReviewCarCard_title">
                      {item.fullName}
                    </div>
                    <div className="mostLikedReviewCarCard_desc">
                      TotalPost:  {item.totalPost}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mostLikeReview_title">
                {item.title}<br />
               PostedOn : {item.postedon.split("T")[0]}
                <div
                  style={{
                    zIndex: 99,
                    position: 'absolute',
                    width: '117px',
                    height: '37px',
                    left: '229px',
                  }}
                  className="bg-transparent stars-z"
                  name="rating"></div>
                {/* <span className="stars-container">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#d53535"
                    value={parseFloat(item.ratingStar)}
                  />
                </span> */}
                <i
                  id={i}
                  className={`${this.state[i] ? 'fas fa-heart' : 'far fa-heart'
                    } cursor-pointer  ml-auto`}
                  onClick={(e) => {
                    this.setState({ [e.target.id]: true });
                    this.hnadleLike(item)
                  }}
                  style={this.state[i] ? null : { color: 'grey' }}></i>
              </div>
              <div className="mostLikeReview_desc">
                {item.subject}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ListLike: state.reduces.ListLike,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MostLikeReview));
