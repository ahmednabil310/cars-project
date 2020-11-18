import React from 'react';
import '../../styles/NewCarPricingStyles/CarsTable.css';

function CarsCard({ img }) {
	return (
		<div className='carsTable-cardContainer col-xl col-lg-6 col-md-12 p-0'>
			<div className='carsTable-cardimg'>
				<img className='img-fluid h-auto' src={img} alt='car' />
			</div>
			<div className='carsTable-carCard-price'>&lt; 20’000 $</div>
			<div className='carsTable-carCard-topCarsContainer'>
				<div className='carsTable-carCard-topCar'>
					<p className='carsTable-carCard-topCar-topCategory'>
						Top Sedan
					</p>
					<p className='carsTable-carCard-topCar-topCarName'>
						<span className='carsTable-carCard-topCar-topCarName__span'>
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
						<span className='carsTable-carCard-topCar-topCarName__span'>
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
						<span className='carsTable-carCard-topCar-topCarName__span'>
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
