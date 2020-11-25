import React from 'react';
import  '../../styles/ReviewPortalStyles/TopRatedCars.css'
import stars from '../../images/ReviewPortal/Group 166.jpg'

const TopRatedCars = () => {
    const carCard=()=>{
        return (
            <div className='topRatedCarCard'>
                <img className='topRatedCarCard_img' src={'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg'} />
                <div className='topRatedCarCard_details'>
                    <div className='topRatedCarCard_title'>Gensis G80</div>
                    <div className='topRatedCarCard_reviewCard'>
                        <div className='topRatedCarCard_rateNum'>5.0</div>
                        <div className='topRatedCarCard_reteDetails'>
                            <div>255 reviews</div>
                            <div><img src={stars}/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>

            <div className='topCarsRated_title'><div>Top Rated</div><div style={{color:'#727272'}}>Cars</div></div>
            {carCard()}
            {carCard()}
            {carCard()}
            {carCard()}
            {carCard()}
        </>
    );
};

export default TopRatedCars;
