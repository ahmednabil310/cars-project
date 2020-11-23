import React,{useState,useEffect,useContext} from 'react';
import '../../../styles/CarCard/CarCard.css';

import gallery from '../../../images/car-details/Icon-gallary.png';
import close from '../../../images/close.png';

import bigstars from '../../../images/dealer/bigstars.png';
import singleStar from '../../../images/dealer/singlestar.png';

import {carContext} from '../../../contexts/cars/carState'

import StarsRating from 'react-stars-rating';
import { Link } from 'react-router-dom';


const CarCard = ({ title, price, rating, imageUrl, closeModel }) => {
	
	const {CurrentEngine , GetCarData , CarData}= useContext(carContext)
		 
	useEffect(() => {
		if (CurrentEngine !== null) {
			console.log(CurrentEngine)
			GetCarData(CurrentEngine)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [CurrentEngine])
 
	console.log(CarData);
	

	return (
		<div>
			<div className='Car__Card pb-4 mb-5'>
				<div className='Car__Header p-4 position-relative'>
					<div className='d-flex justify-content-between align-items-center mb-1'>
						<h6 className='text-capitalize font-weight-bold main__red mb-0'>
							2020 Aston Martin DB11
						</h6>
						<div className='Close__Btn' onClick={closeModel}>
							<img
								className='img-fluid'
								src={close}
								alt='close'
							/>
						</div>
					</div>
					<p className='main__gary mb-1'>
						V8 Volante 2dr Convertible 4.0L 8c…
					</p>
					<button
						className='main__gary pl-0'
						style={{
							textDecoration: 'underline',
							border: 'none',
							background: 'none',
						}}
					>
						Change style
					</button>
				</div>
				{/* =============== Car Image ================ */}
				<div className='Car__Image'>
					{/* <img className='img-fluid' src={imageUrl} alt='car' /> */}
					<div className='Car__Image__Gallery d-flex flex-column '>
						{CarData !== null ?
						<img
							className='img-fluid'
							src={CarData.result.image_1}
							alt='gallery'
						/> : ""
						}
						<p className='mb-0 ml-3 text-white'>View all photos</p>
					</div>
				</div>
				{/* =============== Car Price ================ */}
				<div className='Car__Price pb-3'>
					<h4 className='main__red pl-4 pt-4 text-capitalize'>
						Pricing
					</h4>
					{CarData !== null ?
					<p className='main__gary pl-4 py-2 mb-0'>
						Starting MSRP <br /> $ <strong>{CarData.result.price}</strong>
					</p>:""
					}
					<p className='main__gary pl-4 py-2 mb-0'>
						Average Price Paid <br /> $ <strong>220,900</strong>
					</p>
				</div>
				{/* =============== Car Rating ================ */}
				<div className='Car__Rating pb-3'>
					<h4 className='main__red pl-4 pt-4 text-capitalize'>
						Rating 
					</h4>
					<p className='main__gary pl-4 mb-0'>
						<strong>
							      <StarsRating rating={5} />
							<sub style={{ position: 'relative', top: '0px' }}>
								8.9/ 10
							</sub>{' '}
						</strong>
					</p>
					<p className='main__gary pl-4 py-1 font-weight-bold'>
						Pros & Cons
					</p>
					<ul class='fa-ul px-2'>
						<li>
							<span class='fa-li'>
								<i class='fas fa-check'></i>
							</span>
							Impressively powerful engines
						</li>
						<li>
							<span class='fa-li'>
								<i class='fas fa-check'></i>
							</span>
							Supple ride befitting a grand-touring car
						</li>
						<li>
							<span class='fa-li'>
								<i class='fas fa-check'></i>
							</span>
							Excellent long-distance comfort
						</li>
						<li>
							<span class='fa-li'>
								<i class='fas fa-check'></i>
							</span>
							Distinct and lustful design with lots of options for
							personalization
						</li>
						<li>
							<span class='fa-li'>
								<i class='fas fa-times main__red'></i>
							</span>
							Interior lacks the panache of the competition
						</li>
						<li>
							<span class='fa-li'>
								<i class='fas fa-times main__red'></i>
							</span>
							Rear seats are quite small
						</li>
						<li>
							<span class='fa-li'>
								<i class='fas fa-times main__red'></i>
							</span>
							Many common driver aids and safety features not
							offered
						</li>
					</ul>
					<div className='px-2 mb-4'>
						<Link to="/cardetail">
						<button
							className='btn btn-outline-danger Full__Review__Btn btn-block text-capitalize'
							style={{ fontWeight: '500' }}
						>
							Full Review
						</button>
						</Link>
					</div>
				</div>
				{/* =============== Car Rating ================ */}
				<div className='Car__Consumer__Rating px-4'>
					<div className='ratings-section row align-items-center py-3'>
						<div className='col-12'>
							<h4 className='main__red'>Consumer Rating</h4>
							<p className='main__gary font-weight-bold'>
								Overall consumer rating
							</p>
						</div>
						<div className='col-12 text-center rating-score-container '>
							<div className='d-flex justify-content-center align-items-center'>
								<div>
									<h1 className='mb-0'>4.0</h1>
									<span className='d-block mb-5'>(4/5)</span>
								</div>
							</div>
						</div>
						<div className='col-12 d-flex justify-content-center align-items-center'>
							<div>
								<img
									src={bigstars}
									className='big-star'
									height='27px'
									alt='rating'
								/>
								<p className='mt-3 text-center'>
									Based on 10 Reviews
								</p>
							</div>
						</div>
						<div className='col-12'>
							<div className='progress-container'>
								<table class='table mb-0'>
									<tbody>
										<tr>
											<td>5</td>
											<td>
												<img
													src={singleStar}
													height='20px'
													width='20px'
													alt='rating'
												/>
											</td>
											<td className='ml-2'>
												<div class='progress'>
													<div
														class='progress-bar'
														role='progressbar'
														style={{ width: '85%' }}
														aria-valuenow='85'
														aria-valuemin='0'
														aria-valuemax='100'
													></div>
												</div>
											</td>
											<td className='pl-3'>85%</td>
										</tr>
										<tr>
											<td>4</td>
											<td>
												<img
													src={singleStar}
													height='20px'
													width='20px'
													alt='rating'
												/>
											</td>
											<td className='ml-2'>
												<div class='progress'>
													<div
														class='progress-bar'
														role='progressbar'
														style={{ width: '75%' }}
														aria-valuenow='75'
														aria-valuemin='0'
														aria-valuemax='100'
													></div>
												</div>
											</td>
											<td className='pl-3'>75%</td>
										</tr>
										<tr>
											<td>3</td>
											<td>
												<img
													src={singleStar}
													height='20px'
													width='20px'
													alt='rating'
												/>
											</td>
											<td className='ml-2'>
												<div class='progress'>
													<div
														class='progress-bar'
														role='progressbar'
														style={{ width: '60%' }}
														aria-valuenow='60'
														aria-valuemin='0'
														aria-valuemax='100'
													></div>
												</div>
											</td>
											<td className='pl-3'>60%</td>
										</tr>
										<tr>
											<td>2</td>
											<td>
												<img
													src={singleStar}
													height='20px'
													width='20px'
													alt='rating'
												/>
											</td>
											<td className='ml-2'>
												<div class='progress'>
													<div
														class='progress-bar'
														role='progressbar'
														style={{ width: '45%' }}
														aria-valuenow='45'
														aria-valuemin='0'
														aria-valuemax='100'
													></div>
												</div>
											</td>
											<td className='pl-3'>45%</td>
										</tr>
										<tr>
											<td>1</td>
											<td>
												<img
													src={singleStar}
													height='20px'
													width='20px'
													alt='rating'
												/>
											</td>
											<td className='ml-2'>
												<div class='progress'>
													<div
														class='progress-bar'
														role='progressbar'
														style={{ width: '10%' }}
														aria-valuenow='10'
														aria-valuemin='0'
														aria-valuemax='100'
													></div>
												</div>
											</td>
											<td className='pl-3'>10%</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				{/* =============== Car Warranty ================ */}
				<div className='Car__Warranty pb-3'>
					<h4 className='main__red pl-4 pt-4 text-capitalize'>
						Warranty
					</h4>
					<p className='main__gary pl-4 py-2 mb-0'>
						Basic <br /> <strong>Not available</strong>
					</p>
					<p className='main__gary bg_custom_gray pl-4 py-2 mb-0'>
						Drivetrain
						<br /> <strong>Not available</strong>
					</p>
					<p className='main__gary pl-4 py-2 mb-0'>
						Roadside Assistance
						<br /> <strong>3 yr./ unlimited mi.</strong>
					</p>
				</div>
				{/* =============== Car Features ================ */}
				<div className='Car__Features pb-3'>
					<h4 className='main__red pl-4 pt-4 text-capitalize'>
						Features
					</h4>
					<p className='main__gary pl-4 py-2 mb-0'>
						Bluetooth <br /> <strong>Standard</strong>
					</p>
					<p className='main__gary bg_custom_gray pl-4 py-2 mb-0'>
						Navigation
						<br /> <strong>Navigation</strong>
					</p>
					<p className='main__gary pl-4 py-2 mb-0'>
						Navigation
						<br /> <strong>Standard</strong>
					</p>
					<p className='main__gary bg_custom_gray pl-4 py-2 mb-0'>
						Navigation
						<br /> <strong>Standard</strong>
					</p>
					<p className='main__gary pl-4 py-2 mb-0'>
						Cruise control
						<br /> <strong>Standard</strong>
					</p>
					<p className='main__gary bg_custom_gray pl-4 py-2 mb-0'>
						Folding rear seats
						<br /> <strong>Not available</strong>
					</p>
					<p className='main__gary pl-4 py-2 mb-0'>
						Sunroof
						<br /> <strong>Not available</strong>
					</p>
				</div>
				{/* =============== Car Specifications ================ */}
				<div className='Car__Specifications pb-3'>
					<h4 className='main__red pl-4 pt-4 text-capitalize'>
						Specifications
					</h4>
					<p className='main__gary pl-4 py-2 mb-0'>
						Engine power
						<br /> <strong>503 hp @ 6000 rpm</strong>
					</p>
					<p className='main__gary bg_custom_gray pl-4 py-2 mb-0'>
						Engine torque
						<br /> <strong>513 ft-lbs. @ 2000 rpm</strong>
					</p>
					<p className='main__gary pl-4 py-2 mb-0'>
						Engine displacement
						<br /> <strong>4.0 l</strong>
					</p>
					<p className='main__gary bg_custom_gray pl-4 py-2 mb-0'>
						Engine configuration
						<br /> <strong>V8</strong>
					</p>
					<p className='main__gary pl-4 py-2 mb-0'>
						Transmission
						<br /> <strong>8-speed shiftable automatic</strong>
					</p>
					<p className='main__gary bg_custom_gray pl-4 py-2 mb-0'>
						Tire size
						<br />{' '}
						<strong>
							20 X 9.0-in (Front)
							<br />
							20 X 11.0-in (Rear)
						</strong>
					</p>
					<p className='main__gary pl-4 py-2 mb-0'>
						Wheel type
						<br /> <strong>Alloy wheels</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CarCard;
