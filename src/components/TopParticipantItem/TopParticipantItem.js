import React from 'react';
import '../../styles/TopParticipantItem/TopParticipantItem.css';

const TopParticipantItem = ({
  fullName,
  joinedDate,
  profilePic,
  totalPost,
}) => {
  return (
    <div className="TopParticipantItem d-flex align-items-center col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2  mt-2 mb-4">
      <div className="row w-100 TopParicipant-container">
        <div
          className={`col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5 image__container d-flex justify-content-center align-items-center ${
            profilePic ? '' : 'profileNot'
          }`}>
          <img
            className="img-fluid"
            src={
              profilePic
                ? profilePic
                : `https://ui-avatars.com/api/?size=512&font-size=0.33&background=random&rounded=true&name=${fullName}`
            }
            // style={{
            //   height: profilePic ? '69px' : '64px',
            //   maxWidth: profilePic ? '62px' : '64px',
            // }}
            alt={fullName}
          />
        </div>
        <div className="col-6 col-sm-5 col-md-6 col-lg-7 col-xl-7 d-flex justify-content-start align-items-center p-0 top-content">
          <div className="d-flex flex-column justify-content-between align-items-center w-100">
            <div className="TopParticipantItem__title font-weight-bold w-100">
              {fullName.split(' ')[0] === 'Mohammed' ||
              fullName.split(' ')[1] === 'Nawal' ||
              fullName.split(' ')[0] === 'Tauqeer'
                ? fullName.split(' ')[1]
                : fullName}
            </div>
            <div className="TopParticipantItem__total__posts w-100">
              total Post: <strong>{totalPost}</strong>
            </div>
            <div className="TopParticipantItem__joind__on w-100">
              <span className="d-block">Joined on</span>
              <strong>{joinedDate.split('T')[0]}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopParticipantItem;
