import React from 'react';

const AddVechile = ({ showModel }) => {
	return (
		<div
			className=' col-3  section-b_car-sub-container'
			role='button'
			onClick={showModel}
		>
			<div className='section-b__addCar d-flex flex-column justify-content-center align-items-center'>
				<i className='fas fa-plus fa-4x'></i>
				<h4 className='Add text-center'>Add a vechile</h4>
			</div>
		</div>
	);
};

export default AddVechile;
