import React from 'react';
import '../../styles/DealerDetailsStyles/Header.css';


// the hook
import { useTranslation } from 'react-i18next';

function Header() {
	const { t, i18n } = useTranslation();
	return (
		<div className='Dealer__Details__Header d-flex'>
			<h2 className='Dealer__Details__Header__text text-uppercase font-weight-bold m-0'>
				{t("Dealer details")}
			</h2>
		</div>
	);
}

export default Header;
