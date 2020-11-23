import React from 'react';
import '../../styles/ReviewPortalStyles/MostLikedReview.css'
const MostLikeReview = () => {
    const reviewCard =()=>{
        return (
            <>
                <div className='MostLikeReview_cards'>
                    <div className='MostLikeReview_participantCard' style={{justifyContent:'normal'}}>
                        <img
                            src={'https://img.freepik.com/free-photo/half-profile-close-up-image-self-determined-focused-young-caucasian-unshaven-businessman-formal-clothes-posing-against-white-studio-wall-background-with-copyspace-your-text-content_343059-950.jpg?size=626&ext=jpg'}
                            className='participantsReviewCard_img'
                        />
                        <div className='participantsReviewCard_details' >
                            <div className='participantsReviewCard_title'>Full Name</div>
                            <div className='participantsReviewCard_subTitle'>User since : 3 y</div>
                            <div className='participantsReviewCard_subTitle'>Reviews : (188)</div>
                        </div>


                    </div>



                    <div className='MostLikeReview_participantCard'>
                        <img
                            src={'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg'}
                            className='carReviewCard_img'
                        />
                        <div className='carReviewCard_details'>
                            <div className='carReviewCard_title'>2020 TOGG 4WD</div>
                            <div className='carReviewCard_desc'>Costs less than comparable luxury sedans in its class</div>
                        </div>
                    </div>
                    </div>
                <div className='mostLikeReview_title'>A Car for your life</div>
                <div className='mostLikeReview_desc'>Going head to head with BMW’s 5 Series and Mercedes-Benz’s E-Class is no easy feat, but the 2020 G80 sedan easily holds its own. The G80’s roots date back to when the Genesis sedan was a model in the Hyundai lineup, before Genesis was its own brand. Now serving as the middle ground between the sportier G70 and the flagship G90, the G80 offers an appealing blend of comfort and power.</div>
            </>
        )
    }
    return (
        <>
            <div className='mostLikedReview_header'>
                <span style={{color:'#D53535'}}>Most</span> Liked Review
            </div>
            {reviewCard()}
            {reviewCard()}
            {reviewCard()}
        </>
    );
};

export default MostLikeReview;
