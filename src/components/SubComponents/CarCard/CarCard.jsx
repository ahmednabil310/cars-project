import React, { Component, useState, useEffect, useContext } from 'react';
import '../../../styles/CarCard/CarCard.css';
import close from '../../../images/close.png';
import { Link } from 'react-router-dom';
import SingleDetail from '../SingleDetail/SingleDetail';
import ReactStars from 'react-rating-stars-component';
import { withRouter } from 'react-router-dom';
import right from '../../../images/true.png';
import wrong from '../../../images/false.png';

class CarCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const good = this.props.data.good.split(',');
		const bad = this.props.data.bad.split(',');
		const reliability = Object.keys(this.props.data)[14];
		const resale_Value = Object.keys(this.props.data)[15];
		const nhtsA_Driver_Frontal_Rating = Object.keys(this.props.data)[17];
		const euroNCAP_Overall_Adult_Rating = Object.keys(this.props.data)[18];
		const listPrice = this.props.data.price.split(';');

		const listGood = good.map((item, index) => {
			return (
				<li key={index}>
					<img src={right} className="mr-2" />
					{item}
				</li>
			);
		});

		const listbad = bad.map((item, index) => {
			return (
				<li key={index}>
					<img src={wrong} className="mr-2" />
					{item}
				</li>
			);
		});

		const listPrices = listPrice.map((item, i) => {
			return <div key={i}>{item}</div>;
		});

		return (
			<div className="Car__Card Car__Card__topborder">
				<div className="pb-4 mb-5">
					{/* <div className="Car__Header p-4">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h6 className="text-capitalize font-weight-bold main__red mb-0">
                {this.props.data.make}
              </h6>
              <div className="Close__Btn" onClick={this.props.closeModel}>
                <img className="img-fluid" src={close} alt="close" />
              </div>
            </div>
            <p className="main__gary mb-1"> {this.props.data.model}</p>
            <span
              className="main__gary pl-0"
              style={{
                textDecoration: 'none',
                border: 'none',
                background: 'none',
              }}>
              {this.props.data.class}
            </span>
          </div>
           */}
					{/* =============== Car Image ================ */}
					<div
						className="Car__Image mt-5"
						onClick={() =>
							this.props.history.push(`/cardetail?type=${this.props.data.id}`)
						}
					>
						{/* <img className='img-fluid' src={imageUrl} alt='car' /> */}
						<div className="Car__Image__Gallery d-flex flex-column">
							<img
								className="img-fluid w-100"
								src={this.props.data.image_1}
								alt="gallery"
								style={{ cursor: 'pointer' }}
							/>
							<p className="mb-0 text-white">View all photos</p>
						</div>
					</div>
					{/* =============== Car Price ================ */}
					<div className="Car__Price pb-3">
						<h4 className="main__red pt-4 text-capitalize">Pricing</h4>
						<hr className="dashed-line" />
						<p className="main__gary special-gray py-2 mb-0">
							<>
								Starting MSRP <br />
								<span>{listPrices}</span>
							</>
						</p>
						<hr className="dashed-line mb-0" />
					</div>
					{/* =============== Car Rating ================ */}
					<div className="Car__Rating">
						<h4 className="main__red text-capitalize">Rating</h4>
						<div className="">
							<div style={{ textTransform: 'capitalize' }}>
								{reliability.replaceAll('_', ' ')} <div> </div>
								{/* <div
                  style={{
                    zIndex: 99,
                    top: '10px',
                    left: '0px',
                    width: '105px',
                    height: '39px',
                  }}
                  className=" position-relative bg-transparent"
                  name="rating"></div> */}
								{this.props.data.reliability === null ? (
									<p className="not-stars">N/A</p>
								) : (
									<ReactStars
										edit={false}
										count={5}
										size={24}
										activeColor="#EFAA24"
										value={parseInt(this.props.data.reliability)}
										classNames="stars"
									/>
								)}
							</div>
							<div style={{ textTransform: 'capitalize' }}>
								{resale_Value.replaceAll('_', ' ')}{' '}
								{/* <div
                  style={{
                    zIndex: 99,
                    top: '10px',
                    left: '0px',
                    width: '105px',
                    height: '39px',
                  }}
                  className=" position-relative bg-transparent"
                  name="rating"></div> */}
								{this.props.data.resale_Value === null ? (
									<p className="not-stars">N/A</p>
								) : (
									<ReactStars
										edit={false}
										count={5}
										size={24}
										activeColor="#EFAA24"
										value={parseInt(this.props.data.resale_Value)}
										classNames="stars"
									/>
								)}
							</div>
							<div style={{ textTransform: 'capitalize' }}>
								{nhtsA_Driver_Frontal_Rating.replaceAll('_', ' ')}
								{/* <div
                  style={{
                    zIndex: 99,
                    top: '10px',
                    left: '0px',
                    width: '105px',
                    height: '39px',
                  }}
                  className=" position-relative bg-transparent"
                  name="rating"></div> */}
								{this.props.data.nhtsA_Driver_Frontal_Rating === null ? (
									<p className="not-stars">N/A</p>
								) : (
									<ReactStars
										edit={false}
										count={5}
										size={24}
										activeColor="#EFAA24"
										value={parseInt(
											this.props.data.nhtsA_Driver_Frontal_Rating
										)}
										classNames="stars"
									/>
								)}
							</div>
							<div style={{ textTransform: 'capitalize' }}>
								{euroNCAP_Overall_Adult_Rating.replaceAll('_', ' ')}
								{/* <div
                  style={{
                    zIndex: 99,
                    top: '10px',
                    left: '0px',
                    width: '105px',
                    height: '39px',
                  }}
                  className="position-relative bg-transparent"
                  name="rating"></div> */}
								{this.props.data.euroNCAP_Overall_Adult_Rating === null ? (
									<p className="not-stars">N/A</p>
								) : (
									<ReactStars
										edit={false}
										count={5}
										size={24}
										activeColor="#EFAA24"
										value={parseInt(
											this.props.data.euroNCAP_Overall_Adult_Rating
										)}
										classNames="stars"
									/>
								)}
							</div>
						</div>
					</div>
					<hr className="dashed-line" style={{ margin: '26px 12px 0 12px' }} />
					<div className="Pros">
						<p className="py-1">Pros</p>
						<ul
							className="px-0"
							style={{
								textTransform: 'capitalize',
								listStyleType: 'none',
							}}
						>
							{listGood}
						</ul>
						<hr
							className="dashed-line"
							style={{ margin: '22px 0px 0px -18px' }}
						/>
						<p className="py-1">Cons</p>
						<ul
							className=" px-0"
							style={{
								textTransform: 'capitalize',
								listStyleType: 'none',
							}}
						>
							{listbad}
						</ul>
					</div>
					<hr className="dashed-line" style={{ margin: '0px 12px 0px 12px' }} />
					{/* =============== Car Specifications ================ */}
					<div className="Car__Specifications pb-3">
						<h4 className="main__red pl-4 pt-4 text-capitalize">
							Specifications
						</h4>
						<p className="main__gary pl-4 py-2 mb-0">
							Power Hp
							<br /> <strong>{this.props.data.power_hp}</strong>
						</p>
						<hr className="dashed-line" style={{ margin: '4px 26px' }} />
						<p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
							Torque NM
							<br /> <strong>{this.props.data.torque_Nm}</strong>
						</p>
						<hr className="dashed-line" style={{ margin: '4px 26px' }} />
						<p className="main__gary pl-4 py-2 mb-0">
							Gear Box
							<br /> <strong>{this.props.data.gearbox}</strong>
						</p>
						<hr className="dashed-line" style={{ margin: '4px 26px' }} />
						<p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
							Engine
							<br /> <strong>{this.props.data.engine}</strong>
						</p>
						<hr className="dashed-line" style={{ margin: '4px 26px' }} />
						<p className="main__gary pl-4 py-2 mb-0">
							Top Speed KPH
							<br /> <strong>{this.props.data.top_speed_kph}</strong>
						</p>
						<hr className="dashed-line" style={{ margin: '4px 26px' }} />
						<p className="main__gary bg_custom_gray pl-4 py-2 mb-0">
							Ful Econ L 100km
							<br /> <strong>{this.props.data.fuel_Econ_L_100km}</strong>
						</p>
						<hr className="dashed-line" style={{ margin: '4px 26px' }} />
						<p className="main__gary  pl-4 py-2 mb-0">
							Ful Econ KM L
							<br /> <strong>{this.props.data.fuel_Econ_km_L}</strong>
						</p>
						<hr className="dashed-line" style={{ margin: '4px 26px' }} />
					</div>
					<div className="px-0 ReviewBtn">
						<button
							className="btn btn-outline-danger Full__Review__Btn btn-block text-capitalize"
							style={{ fontWeight: '500' }}
							onClick={() =>
								this.props.history.push(`/cardetail?type=${this.props.data.id}`)
							}
						>
							Full Review
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CarCard);
