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
                <span style={{ marginLeft: '5%' }}>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#d53535"
                    value={parseFloat(item.ratingStar)}
                  />
                </span>
                <i
                  className="far fa-heart cursor-pointer  ml-auto"
                  onClick={() => this.hnadleLike(item)}
                  style={{ color: 'grey' }}></i>
                <i className="fas fa-heart cursor-pointer  ml-auto"></i>
                {/* <svg
                  
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.25"
                  height="27"
                  viewBox="0 0 29.25 27">
                  <path
                    id="Icon_ionic-md-heart-empty"
                    data-name="Icon ionic-md-heart-empty"
                    d="M24.581,4.5A8.652,8.652,0,0,0,18,7.587,8.652,8.652,0,0,0,11.419,4.5a7.952,7.952,0,0,0-8.044,8.093c0,5.59,4.971,10.076,12.5,16.995L18,31.5l2.123-1.913c7.53-6.919,12.5-11.4,12.5-16.995A7.952,7.952,0,0,0,24.581,4.5ZM18.9,27.654l-.3.274-.6.548-.6-.548-.3-.274a89.372,89.372,0,0,1-8.627-8.578c-1.969-2.44-2.841-4.437-2.841-6.483A5.848,5.848,0,0,1,7.3,8.423a5.722,5.722,0,0,1,4.12-1.673,6.449,6.449,0,0,1,4.859,2.285L18,11.081l1.723-2.046A6.425,6.425,0,0,1,24.581,6.75a5.75,5.75,0,0,1,4.127,1.673,5.86,5.86,0,0,1,1.666,4.17c0,2.039-.879,4.043-2.841,6.483A89.552,89.552,0,0,1,18.9,27.654Z"
                    transform="translate(-3.375 -4.5)"
                    fill="#c4c4c4"
                  />
                </svg>
               */}
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
