import React from 'react';
import '../../styles/NewCarPricingStyles/Section3.css';
import Car1 from '../../images/Cars/Car1.png';
import Car2 from '../../images/Cars/Car2.png';
import Car3 from '../../images/Cars/Car3.png';
import Car4 from '../../images/Cars/Car4.png';
import Car5 from '../../images/Cars/Car5.png';
import Car6 from '../../images/Cars/Car6.png';
import Car7 from '../../images/Cars/Car7.png';
import Car8 from '../../images/Cars/Car8.png';
import Coupes from '../../images/Cars/Coupes.png';
import Sedan from '../../images/Cars/Sedan.png';


// the hook
import { useTranslation } from 'react-i18next';

function Section3() {
	const { t, i18n } = useTranslation();

	return (
		<div className='custom__container NewCarPricing-Section3 m-auto'>
			<div className='NewCarPricing-Section2-Heading'>
				<h3 className='NewCarPricing-Section2-Heading__h3 NewCarPricing-Section2-Heading__h3--red'>
				{t("Best-rated")}
				</h3>
				<h3 className='NewCarPricing-Section2-Heading__h3'>
					{t("cars by category")}
				</h3>
			</div>
			<div className='row m-0'>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img className='img-fluid h-auto' src={Car2} alt='SUV' />
					<p>SUVs</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img className='img-fluid h-auto' src={Sedan} alt='Sedan' />
					<p>Sedans</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img className='img-fluid h-auto' src={Car4} alt='Truck' />
					<p>Trucks</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img className='img-fluid h-auto' src={Car7} alt='Luxury' />
					<p>Luxury</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img
						className='img-fluid h-auto'
						src={Car2}
						alt='Hatchback'
					/>
					<p>Hatchbacks</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img
						className='img-fluid h-auto'
						src={Coupes}
						alt='Coupes'
					/>
					<p>Coupes</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img className='img-fluid h-auto' src={Car3} alt='Hybrid' />
					<p>Hybrids</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img
						className='img-fluid h-auto'
						src={Car1}
						alt='Electric Car'
					/>
					<p>Electric Cars</p>
				</div>
				<div className='NewCarPricing-Section3-CategoryContainer d-flex flex-column align-items-center col-xl-2 col-lg-4 col-sm-6 p-0 col-6'>
					<img
						className='img-fluid h-auto'
						src={Car4}
						alt='Convertible'
					/>
					<p>Convertibles</p>
				</div>
			</div>
		</div>
	);
}

export default Section3;
