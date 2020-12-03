import React from 'react';
import '../../styles/ReviewPortalStyles/MostLikedReview.css';
import stars from '../../images/ReviewPortal/Group 166.jpg';
const MostLikeReview = () => {
  const reviewCard = () => {
    return (
      <>
        <div className="MostLikeReview_cards row m-0">
          <div className="MostLikeReview_cardContainer col-12 col-xl-6 col-lg-6 col-sm-12 col-md-12">
            <img
              src={
                'https://img.freepik.com/free-photo/half-profile-close-up-image-self-determined-focused-young-caucasian-unshaven-businessman-formal-clothes-posing-against-white-studio-wall-background-with-copyspace-your-text-content_343059-950.jpg?size=626&ext=jpg'
              }
              className="mostLikedReviewParticipantCard_img"
            />

            <div className="mostLikedReviewParticipantCard_details">
              <div className="mostLikedReviewParticipantCard_title">
                Full Name
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
              <div className="mostLikedReviewCarCard_title">2020 TOGG 4WD</div>
              <div className="mostLikedReviewCarCard_desc">
                Costs less than comparable luxury sedans in its class
              </div>
            </div>
          </div>
        </div>
        <div className="mostLikeReview_title">
          A Car for your life{' '}
          <span style={{ marginLeft: '5%' }}>
            <img src={stars} />
          </span>
        </div>
        <div className="mostLikeReview_desc">
          Going head to head with BMW’s 5 Series and Mercedes-Benz’s E-Class is
          no easy feat, but the 2020 G80 sedan easily holds its own. The G80’s
          roots date back to when the Genesis sedan was a model in the Hyundai
          lineup, before Genesis was its own brand. Now serving as the middle
          ground between the sportier G70 and the flagship G90, the G80 offers
          an appealing blend of comfort and power.
        </div>
      </>
    );
  };
  return (
    <>
      <div className="mostLikedReview_header">
        <span style={{ color: '#D53535' }}>Most</span> Liked Review
      </div>
      {reviewCard()}
      {reviewCard()}
      {reviewCard()}
      {reviewCard()}
      {reviewCard()}
    </>
  );
};

export default MostLikeReview;
