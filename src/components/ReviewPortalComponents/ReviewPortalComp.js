import React from 'react';
import '../../styles/ReviewPortalStyles/ReviewPortalComp.css'
import LatestCarReview from "./LatestCarReview";
import TopReviews from "./TopReviews";
import TopParticipants from "./TopParticipants";
import MostLikeReview from "./MostLikedReview";
import TopRatedCars from "./TopRatedCarsComp";
import NewMembersOnTheList from "./NewMembersOnTheList";
const ReviewPortalComp = () => {
    return (
        <>
            <div className='ReviewPortalTitle '>
                REVIEW PORTAL
            </div>
            <div className='row m-0 paddingSchema' >
                <div className='col-12 col-sm-6 col-md-4 col-lg-4  pl-0'><LatestCarReview/></div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-4 pl-0'><TopReviews/></div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-4 pl-0'><TopParticipants/></div>
            </div>

            <div className='row m-0 paddingSchema' >
                <div className='col-12 col-sm-12 col-md-8 col-lg-8  pl-0' ><MostLikeReview/></div>
                <div className='col-12 col-sm-12 col-md-4 col-lg-4  pl-0'>
                    <div className='writeReviewBtn'>+ Write a review</div>
                    <NewMembersOnTheList/>
                    <TopRatedCars/>
                </div>
            </div>


        </>
    );
};

export default ReviewPortalComp;
