import React from 'react';
import '../../styles/NewCarPricingStyles/Section1.css';

// the hook
import { useTranslation } from 'react-i18next';

function Section1() {
	const { t, i18n } = useTranslation();

	return (
		<div className=' d-flex justify-content-center'>
			<div className='custom__container NewCarPricing-Section1'>
				<h3 className='NewCarPricing-Section1__h3 NewCarPricing-Section1__h3--red'>
					{t("Choose")}
				</h3>
				<h3 className='NewCarPricing-Section1__h3 desc'>
					{t("learn what to pay")}
				</h3>
				<div className='NewCarPricing-Section1-search'>
					<p className='NewCarPricing-Section1-search__p'>
						{t("Search by")}
					</p>
					<p className='NewCarPricing-Section1-search__p'>
						{t("Make/Model")}
					</p>
					<p className='NewCarPricing-Section1-search__p'>{t("Type")}</p>
					<p className='NewCarPricing-Section1-search__p'>{t("Price")}</p>
				</div>
				<div className='d-flex align-items-center justify-content-center select__input'>
					<select className='custom-select my-select mr-xl-4'>
						<option value='' disabled selected>{t("Any Make")}</option>
						<option>{t("Any Make1")}</option>
						<option>{t("Any Make2")}</option>
					</select>

					<select className='custom-select my-select mr-xl-4'>
						<option value='' disabled selected>{t("Country")}</option>
						<option>{t("Country1")}</option>
						<option>{t("Country2")}</option>
					</select>

					<select className='custom-select my-select mr-xl-3'>
						<option value='' disabled selected>{t("Any Model")}</option>
						<option>{t("Any Model1")}</option>
						<option>{t("Any Model2")}</option>
					</select>

					<button className='btn my-btn btn-primary'>{t("Submit")}</button>
				</div>
			</div>
		</div>
	);
}
export default Section1;
