import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/CarReviewItem/CarReviewItem.css';

const TopReviewItem = ({
	carImage,
	make,
	model,
	subject,
	year,
	onClickFunc,
	totalReviews,
	ratingStar,
}) => {
	return (
		<div className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 px-1 mb-4">
			<div className="row CarReviewItem">
				<div className="col-12 px-0 mb-3 mt-0">
					<img
						className="img-fluid"
						src={carImage}
						alt={`${make} ${model}`}
						onClick={onClickFunc}
					/>
				</div>
				<div className="col-12">
					<p
						className="CarReviewItem__title topReviewTitle"
						onClick={onClickFunc}
					>{`${make} ${model}`}</p>
					<p className="CarReviewItem__modelyear top__review mb-2 pb-2">
						Model Year: <span style={{ color: '#4c545c' }}>{year}</span>
					</p>
					{/* <p className="CarReviewItem_reviews mb-0">{subject}</p> */}
				</div>
			</div>
		</div>
	);
};

export default withRouter(TopReviewItem);
