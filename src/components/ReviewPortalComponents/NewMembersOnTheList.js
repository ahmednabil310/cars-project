import React from 'react';
import arrow from '../../images/ReviewPortal/Icon ionic-ios-arrow-forward.jpg'
import '../../styles/ReviewPortalStyles/NewMembersOnTheList.css'
import profilImg from '../../images/ReviewPortal/thum1.jpg'
const NewMembersOnTheList = () => {
    const memberCard=()=>{
        return (
            <div className='memberCard'>
                <div><img  src={arrow}/></div>
                <img className='profileImg' src={'https://img.freepik.com/free-photo/half-profile-close-up-image-self-determined-focused-young-caucasian-unshaven-businessman-formal-clothes-posing-against-white-studio-wall-background-with-copyspace-your-text-content_343059-950.jpg?size=626&ext=jpg'}/>
                <div className='memberCard_name'>Member Name</div>
                <div className='memberCard_time'>3 m</div>
            </div>
        )
    }
    return (
        <>
            <div className='newMembers_title'><div>New Members</div><div style={{color:'#727272'}}>On the list</div></div>
            {memberCard()}
            {memberCard()}
            {memberCard()}
            {memberCard()}
            {memberCard()}



        </>
    );
};

export default NewMembersOnTheList;
