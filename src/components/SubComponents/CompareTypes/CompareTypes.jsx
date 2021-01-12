import React from 'react';
import arrow from '../../../images/compare-arrow.png';

const CompareTypes = ({ title, types, handleClick }) => {
	return (
		<div className="compare-labels d-flex ml-3">
			<div className="d-flex justify-content-center align-items-center mr-3 pb-2">
				<img
					className="img-fluid"
					src={arrow}
					alt="arrow"
					width="22"
					height="22"
				/>
			</div>
			<div>
				<h2 className="labels-title">{title}</h2>
				<a onClick={handleClick} className="labels-types">
					{types}
				</a>
			</div>
		</div>
	);
};

export default CompareTypes;
