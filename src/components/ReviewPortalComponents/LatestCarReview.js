import React from 'react';

const LatestCarReview = () => {
    const carReview=()=>{
        return (
            <div className='carReviewCard'>
                <img
                    src={'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg'}
                    className='carReviewCard_img'
                />
                <div className='carReviewCard_details'>
                    <div className='carReviewCard_title'>2020 TOGG 4WD</div>
                    <div className='carReviewCard_desc'>Costs less than comparable luxury sedans in its class</div>
                </div>

            </div>
        )
    }
    return (
        <>
            <div className={'reviewPortal_sectionTitle'}>Latest Car Review</div>
            <div className={'reviewPortal_sectionSeparator'}/>
            {carReview()}
            {carReview()}
            {carReview()}

            <div className='reviewPortal_viewAll'>View all latest cars reviews</div>
        </>
    );
};

export default LatestCarReview;
