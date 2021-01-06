import React from 'react';
import '../../styles/TopParticipantItem/TopParticipantItem.css';

const TopParticipantItem = ({
	fullName,
	joinedDate,
	profilePic,
	totalPost,
}) => {
	return (
		<div className="TopParticipantItem d-flex align-items-center col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-2 my-2 p-2 px-3">
			<div className="row">
				<div className="col-5 col-lg-5 col-xl-6 image__container d-flex justify-content-center align-items-center">
					<img className="img-fluid" src={profilePic} alt={fullName} />
				</div>
				<div className="col-7 col-lg-7 col-xl-6 d-flex justify-content-start align-items-center pl-0">
					<div className="d-flex flex-column justify-content-between align-items-center">
						<div className="TopParticipantItem__title font-weight-bold mb-1 w-100">
							{fullName}
						</div>
						<div className="TopParticipantItem__total__posts w-100 mb-1">
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
