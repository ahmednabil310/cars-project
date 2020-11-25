import React from 'react';
import '../../styles/DealerDetailsStyles/Banner.css';

import crown from '../../images/dealerdetails/Icon-crown.png';
import feather from '../../images/dealerdetails/Icon-feather.png';
import carImage1 from '../../images/dealerdetails/1.png';
import carImage2 from '../../images/dealerdetails/2.png';
import carImage3 from '../../images/dealerdetails/3.png';
import carImage4 from '../../images/dealerdetails/4.png';


// the hook
import { useTranslation } from 'react-i18next';

const Banner = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className='Banner position-relative'>
			<div className='Banner__Overlay position-absolute w-100 h-100'></div>
			<div className='Banner__Title position-absolute'>
				<h2 className='text-uppercase main__gary bg-white mb-0 p-3 px-5 position-relative font-weight-normal'>
					<img
						className='img-fluid position-absolute'
						src={crown}
						alt='crown'
					/>
					{t("UAE CAR LEASE SERVICES")}
				</h2>
			</div>
			<div className='Banner__Images position-absolute'>
				<img className='img-fluid' src={carImage1} alt='cars' />
				<img className='img-fluid' src={carImage2} alt='cars' />
				<img className='img-fluid' src={carImage3} alt='cars' />
				<img className='img-fluid' src={carImage4} alt='cars' />
			</div>
			<div className='Banner__Slugan bg-white position-absolute d-flex justify-content-center align-items-center flex-nowrap'>
				<h4 className='main__red mb-0'>
					{t("UAE Car Lease Services - Card")}
				</h4>
				<div
					// className='d-inline-block'
					style={{ width: '16px', cursor: 'pointer' }}
				>
					<img
						className='img-fluid ml-2'
						src={feather}
						alt='feather'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
