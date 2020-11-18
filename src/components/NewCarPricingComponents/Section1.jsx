import React from 'react';
import '../../styles/NewCarPricingStyles/Section1.css';
function Section1() {
	return (
		<div className=' d-flex justify-content-center'>
			<div className='custom__container NewCarPricing-Section1'>
				<h3 className='NewCarPricing-Section1__h3 NewCarPricing-Section1__h3--red'>
					Choose
				</h3>
				<h3 className='NewCarPricing-Section1__h3 desc'>
					your car, learn what to pay
				</h3>
				<div className='NewCarPricing-Section1-search'>
					<p className='NewCarPricing-Section1-search__p'>
						Search by:
					</p>
					<p className='NewCarPricing-Section1-search__p'>
						Make/Model
					</p>
					<p className='NewCarPricing-Section1-search__p'>Type</p>
					<p className='NewCarPricing-Section1-search__p'>Price</p>
				</div>
				<div className='d-flex align-items-center justify-content-center select__input'>
					<select className='custom-select my-select mr-xl-4'>
						<option value='' disabled selected>Any Make</option>
						<option>op1</option>
						<option>op2</option>
					</select>

					<select className='custom-select my-select mr-xl-4'>
						<option value='' disabled selected>Country</option>
						<option>op1</option>
						<option>op2</option>
					</select>

					<select className='custom-select my-select mr-xl-3'>
						<option value='' disabled selected>Any Model</option>
						<option>op1</option>
						<option>op2</option>
					</select>

					<button className='btn my-btn btn-primary'>Submit</button>
				</div>
			</div>
		</div>
	);
}
export default Section1;
