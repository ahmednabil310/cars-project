import React from 'react';

import Header from '../components/DealerDetailsComponents/Header';
import Banner from '../components/DealerDetailsComponents/Banner';
import AboutAndSummary from '../components/DealerDetailsComponents/AboutAndSummary';
import ConsumerReviewing from '../components/DealerDetailsComponents/ConsumerReviewing';

const DealerDetails = () => {
	return (
		<>
			<Header />
			<Banner />
			<AboutAndSummary />
			<ConsumerReviewing />
		</>
	);
};

export default DealerDetails;
