import React from 'react';
import Car1 from '../../images/Cars/Car1.png';
import Car2 from '../../images/Cars/Car2.png';
import Car3 from '../../images/Cars/Car3.png';
import Car4 from '../../images/Cars/Car4.png';
import Car5 from '../../images/Cars/Car5.png';
import Car6 from '../../images/Cars/Car6.png';
import Car7 from '../../images/Cars/Car7.png';
import Car8 from '../../images/Cars/Car8.png';
import CarsCard from './CarsCard';

function CarsTable() {
	return (
		<div className='row m-auto no-gutters carsTable-container'>
			<CarsCard img={Car1} price='20’000' arrow />
			<CarsCard img={Car2} price='20K - 30K' mb='5px' />
			<CarsCard img={Car3} price='30K - 40K' />
			<CarsCard img={Car4} price='40K - 50K' />
		</div>
	);
}

export default CarsTable;
