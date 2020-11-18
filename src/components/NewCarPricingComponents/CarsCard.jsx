import React from 'react';
import '../../styles/NewCarPricingStyles/CarsTable.css';

function CarsCard({ img, price, arrow, mb }) {
	return (
		<div className='carsTable-cardContainer col-xl-3 col-lg-3 col-md-6 py-1 pb-5'>
			<div className='carsTable-cardimg' style={{marginBottom: mb}}>
				<img className='img-fluid h-auto' src={img} alt='car' />
			</div>
			<div className='carsTable-carCard-price'>
				{' '}
				{arrow && <i class='fas fa-angle-left'></i>} {price} $
			</div>
			<div className='carsTable-carCard-topCarsContainer'>
				<div className='carsTable-carCard-topCar'>
					<p className='carsTable-carCard-topCar-topCategory ml-3'>
						Top Sedan
					</p>
					<p className='carsTable-carCard-topCar-topCarName'>
						<span className='carsTable-carCard-topCar-topCarName__span mr-2'>
							&gt;
						</span>
						Toyota Yaris
					</p>
				</div>
				<div className='carsTable-carCard-topCar carsTable-carCard-topCar--mid'>
					<p className='carsTable-carCard-topCar-topCategory'>
						Top SUV
					</p>
					<p className='carsTable-carCard-topCar-topCarName'>
						<span className='carsTable-carCard-topCar-topCarName__span mr-2'>
							&gt;
						</span>
						KIA Soul
					</p>
				</div>
				<div className='carsTable-carCard-topCar'>
					<p className='carsTable-carCard-topCar-topCategory'>
						Top Hatchback
					</p>
					<p className='carsTable-carCard-topCar-topCarName'>
						<span className='carsTable-carCard-topCar-topCarName__span mr-2'>
							&gt;
						</span>
						Hyundai Veloster
					</p>
				</div>
				<a href='#' className='carsTable-shop'>
					Shop cars under $20k
				</a>
			</div>
		</div>
	);
}

export default CarsCard;
