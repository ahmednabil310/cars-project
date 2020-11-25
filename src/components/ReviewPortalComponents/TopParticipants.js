import React from 'react';

const TopParticipants = () => {
    let data=['','','','']
    const participantsReview=(index)=>{
        return (
            <div className='participantsReviewCard'>
                <img
                    src={'https://img.freepik.com/free-photo/half-profile-close-up-image-self-determined-focused-young-caucasian-unshaven-businessman-formal-clothes-posing-against-white-studio-wall-background-with-copyspace-your-text-content_343059-950.jpg?size=626&ext=jpg'}
                    className='participantsReviewCard_img'
                />
                <div className='participantsReviewCard_details'>
                    <div className='participantsReviewCard_title'>Full Name</div>
                    <div className='participantsReviewCard_subTitle'>User since : 3 y</div>
                    <div className='participantsReviewCard_subTitle'>Reviews : (188)</div>
                </div>
                <div className='participantsReviewCard_order'>#{index}</div>

            </div>
        )
    }
    return (
        <>
            <div className={'reviewPortal_sectionTitle'}>Top Participants</div>
            <div className={'reviewPortal_sectionSeparator'} style={{marginBottom:'13%'}}/>
            {data.map((item,index)=>{
                return participantsReview(index)
            }
            )}
        </>
    );
};

export default TopParticipants;
