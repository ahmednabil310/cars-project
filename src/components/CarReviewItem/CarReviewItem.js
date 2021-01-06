import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/CarReviewItem/CarReviewItem.css';

const CarReviewItem = ({
	carImage,
	make,
	model,
	postedon,
	subject,
	year,
	onClickFunc,
}) => {
	return (
		<div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-2 px-1">
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
						className="CarReviewItem__title"
						onClick={onClickFunc}
					>{`${make} ${model}`}</p>
					<p className="CarReviewItem__modelyear">
						Model Year: <span style={{ color: '#3E3E3F' }}>{year}</span>
					</p>
					<p className="CarReviewItem_reviews">{subject}</p>
					<hr className="dashed-line" />
					<p className="CarReviewItem__postedin">
						Posted on :{' '}
						<span style={{ color: '#1E1E1E' }}>{postedon.split('T')[0]}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(CarReviewItem);
