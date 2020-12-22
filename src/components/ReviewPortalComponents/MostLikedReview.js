import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/ReviewPortalStyles/MostLikedReview.css';
import ReactStars from 'react-rating-stars-component';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';

class MostLikeReview extends Component {
  constructor(props) {
    super(props);
    const userId = localStorage.getItem('userId');
    this.state = {
      isLike: false,
      userId: userId,
      viewAll: false,
    };
  }

  componentDidMount() {
    this.props.actions.getMostLikes();
  }

  hnadleLike(item) {
    const userId = localStorage.getItem('userId');

    if (userId !== null) {
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
    } else {
      toastr.warning('Please Login');
    }
  }

  render() {
    return (
      <>
        <div className="mostLikedReview_header">
          <span style={{ color: '#D53535' }}>Most</span> Liked Review
        </div>
        {this.props.ListLike.slice(0, this.state.viewAll ? Infinity : 3).map(
          (item, i) => {
            return (
              <div key={i}>
                <div className="MostLikeReview_cards row m-0">
                  <div className="MostLikeReview_cardContainer col-6 col-xl-6 col-lg-6 col-sm-6 col-md-6">
                    <img
                      style={{ cursor: 'pointer' }}
                      src={item.imageURL}
                      className="mostLikedReviewParticipantCard_img"
                      onClick={() =>
                        this.props.history.push(`/cardetail?type=${item.carId}`)
                      }
                    />
                    <div className="mostLikedReviewParticipantCard_details">
                      <div
                        className="mostLikedReviewParticipantCard_title"
                        onClick={() =>
                          this.props.history.push(
                            `/cardetail?type=${item.carId}`,
                          )
                        }
                        style={{ cursor: 'pointer' }}>
                        {item.make + '  ' + item.model + '  ' + item.year}
                      </div>
                      <div className="mostLikedReviewParticipantCard_subTitle">
                        <span className="stars-container">
                          <ReactStars
                            edit={false}
                            count={5}
                            size={24}
                            activeColor="#d53535"
                            value={parseFloat(item.ratingStar)}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="MostLikeReview_cardContainer col-6 col-xl-6 col-lg-6 col-xs-12 col-sm-6 col-md-6">
                    <img
                      src={item.profilePic}
                      className="mostLikedReviewCarCard_img"
                    />
                    <div className="mostLikedReviewCarCard_details">
                      <div className="mostLikedReviewCarCard_title">
                        {item.fullName}
                      </div>
                      <div className="mostLikedReviewCarCard_desc">
                        TotalPost: {item.totalPost}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mostLikeReview_title">
                  {item.title}
                  <br />
                  PostedOn : {item.postedon.split('T')[0]}
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
                  <i
                    id={i}
                    className={`${
                      this.state[i] ? 'fas fa-heart' : 'far fa-heart'
                    } cursor-pointer  ml-auto`}
                    onClick={(e) => {
                      if (this.state.userId !== null) {
                        this.setState({ [e.target.id]: true });
                        this.hnadleLike(item);
                      } else {
                        toastr.warning('Please Login');
                      }
                    }}
                    style={this.state[i] ? null : { color: 'grey' }}></i>
                </div>
                <div className="mostLikeReview_desc">{item.subject}</div>
              </div>
            );
          },
        )}
        <div
          className="reviewPortal_viewAll my-5"
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
  ListLike: state.reduces.ListLike,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MostLikeReview));
