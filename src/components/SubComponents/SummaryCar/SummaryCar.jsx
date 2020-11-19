import React from 'react';
import arrowForward from '../../../images/dealerdetails/arrow-forward.png';

const SummaryCar = ({ carTitle, carAmount }) => {
	return (
		<>
			<div className='align-items-center d-flex'>
				<img
					className='img-fluid'
					src={arrowForward}
					alt='arrowForward'
				/>
				<h5 className='font-weight-bold text-capitalize mb-0 ml-3'>
					{carTitle}
				</h5>
			</div>
			<div>
				<p className='ml-4 mt-2 mb-0 main__gary'>{carAmount} car</p>
			</div>
		</>
	);
};

export default SummaryCar;
