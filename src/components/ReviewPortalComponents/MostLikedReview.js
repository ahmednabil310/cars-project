import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/ReviewPortalStyles/MostLikedReview.css';
import stars from '../../images/ReviewPortal/Group 166.jpg';
import ReactStars from 'react-rating-stars-component';

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

    this.setState({ isLike: !this.state.isLike });

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
                  <img
                    src={item.imageURL}
                    className="mostLikedReviewParticipantCard_img"
                  />
                  <div className="mostLikedReviewParticipantCard_details">
                    <div className="mostLikedReviewParticipantCard_title">
                      {item.fullName}
                    </div>
                    <div className="mostLikedReviewParticipantCard_subTitle">
                      User since : 3 y
                    </div>
                    <div className="mostLikedReviewParticipantCard_subTitle">
                      Reviews : (188)
                    </div>
                  </div>
                </div>

                <div className="MostLikeReview_cardContainer col-12 col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12">
                  <img
                    src={
                      'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg'
                    }
                    className="mostLikedReviewCarCard_img"
                  />

                  <div className="mostLikedReviewCarCard_details">
                    <div className="mostLikedReviewCarCard_title">
                      2020 TOGG 4WD
                    </div>
                    <div className="mostLikedReviewCarCard_desc">
                      {item.subject}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mostLikeReview_title">
                A Car for your life{' '}
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
                <span className="stars-container">
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#d53535"
                    value={parseFloat(item.ratingStar)}
                  />
                </span>
                <i
                  id={i}
                  className={`${
                    this.state[i] ? 'fas fa-heart' : 'far fa-heart'
                  } cursor-pointer  ml-auto`}
                  onClick={(e) => {
                    this.setState({ [e.target.id]: true });
                  }}
                  style={this.state[i] ? null : { color: 'grey' }}></i>
              </div>
              <div className="mostLikeReview_desc">
                Going head to head with BMW’s 5 Series and Mercedes-Benz’s
                E-Class is no easy feat, but the 2020 G80 sedan easily holds its
                own. The G80’s roots date back to when the Genesis sedan was a
                model in the Hyundai lineup, before Genesis was its own brand.
                Now serving as the middle ground between the sportier G70 and
                the flagship G90, the G80 offers an appealing blend of comfort
                and power.
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

export default connect(mapStateToProps, mapDispatchToProps)(MostLikeReview);
