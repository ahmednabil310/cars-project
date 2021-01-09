import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/ReviewPortalStyles/MostLikedReview.css';
import ReactStars from 'react-rating-stars-component';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';
import like from '../../images/heart.png';
import unlike from '../../images/regularHeart.png';

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
        <div className="reviewPortal_sectionTitle d-flex justify-content-start align-items-center">
          <h3 className="mb-0 Sections-title">Most Liked Review</h3>
        </div>
        <div className={'reviewPortal_sectionSeparator'} />
        {this.props.ListLike.slice(0, this.state.viewAll ? Infinity : 2).map(
          (item, i) => {
            return (
              <div key={i} className="review-card-comment">
                <div className="MostLikeReview_cards row no-gutters justify-content-between align-items-center mx-2 mt-1 pt-0 pb-3">
                  <div className="MostLikeReview_cardContainer col-12 col-md-8">
                    <div className="row w-100 mostLiked-row">
                      <div className="col-12 col-md-4 mostLiked-image-container">
                        <img
                          style={{ cursor: 'pointer' }}
                          src={item.imageURL}
                          className="img-fluid"
                          onClick={() =>
                            this.props.history.push(
                              `/cardetail?type=${item.carId}`,
                            )
                          }
                        />
                      </div>
                      <div className="col-12 col-md-8 justify-content-start align-items-center">
                        <div className="mostLikedReviewParticipantCard_details">
                          <div
                            className="mostLikedReviewParticipantCard_title"
                            onClick={() =>
                              this.props.history.push(
                                `/cardetail?type=${item.carId}`,
                              )
                            }>
                            {item.make + '  ' + item.model + '  ' + item.year}
                          </div>
                          <div className="mostLikedReviewParticipantCard_subTitle">
                            <span className="stars-container">
                              <ReactStars
                                edit={false}
                                count={5}
                                size={24}
                                activeColor="#EFAA24"
                                value={parseFloat(item.ratingStar)}
                              />
                            </span>
                          </div>
                          <div className="mostLiked__PostedOn">
                            PostedOn : <b>{item.postedon.split('T')[0]}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MostLikeReview_cardContainer last-one col-12 col-sm-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                    <div className="row no-gutters w-100">
                      <div className="col-10 col-sm-10 col-md-10 pr-4 d-flex justify-content-end align-items-center">
                        <div className="mostLikedReviewCarCard_details">
                          <div className="mostLikedReviewCarCard_title mb-2">
                            {item.fullName}
                          </div>
                          <div className="mostLikedReviewCarCard_desc float-right">
                            TotalPost: <span>{item.totalPost}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-2 col-sm-2 col-md-2 d-flex justify-content-center justify-content-sm-end align-items-center">
                        <img
                          src={item.profilePic}
                          className="img-fluid"
                          style={{ width: '85px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mostLikeReview_title px-1 mx-1">
                  <div className="d-flex justify-content-between align-items-center w-100 py-3">
                    <span className="reviewTitle">{item.title}</span>
                    <img
                      src={this.state[i] ? like : unlike}
                      id={i}
                      className={`cursor-pointer ml-auto`}
                      onClick={(e) => {
                        if (this.state.userId !== null) {
                          this.setState({ [e.target.id]: true });
                          !this.state[i] && this.hnadleLike(item);
                        } else {
                          toastr.warning('Please Login');
                        }
                      }}
                      style={this.state[i] ? null : { color: 'grey' }}
                    />
                  </div>

                  {/* <div
										style={{
											zIndex: 99,
											position: 'absolute',
											width: '117px',
											height: '37px',
											left: '229px',
										}}
										className="bg-transparent stars-z"
										name="rating"
									></div> */}
                </div>
                <div className="mostLikeReview_desc px-1 mx-1 mb-3">
                  {item.subject}
                </div>
              </div>
            );
          },
        )}
        <div
          className="reviewPortal_viewAll my-5 mb-3 text-center"
          onClick={() => {
            this.setState({ viewAll: true });
          }}>
          {!this.state.viewAll && 'Load more Reviews'}
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
