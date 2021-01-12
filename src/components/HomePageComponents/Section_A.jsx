import '../../styles/HomePageStyles/Section_A.css';
import Hatchback from '../../images/hatchback.jpg';
import sedan from '../../images/sedan.jpg';
import midSizeSedan from '../../images/suv.png';
import premium from '../../images/premium.jpg';
import coupe from '../../images/coupe.jpg';
import luxurySedan from '../../images/sport.png';
import midSizeSuv from '../../images/luxury.png';
import suv from '../../images/suv.jpg';
import largeSuv from '../../images/largesuv.jpg';
import toyota from '../../images/toyota.png';
import mercedes from '../../images/mercedes.png';
import bmw from '../../images/bmw.png';
import nissan from '../../images/nissan.png';
import honda from '../../images/honda.png';
import lexus from '../../images/lexus.png';
import SingleCar from '../SubComponents/SingleCar/SingleCar';
import { Link } from 'react-router-dom';

// the hook
import { useTranslation } from 'react-i18next';

const Section_A = () => {
	const { t, i18n } = useTranslation();
	return (
		<div className="section-a-homepage-container mt-5">
			<div className="row">
				<div className="col-xl-6 col-lg-12 my-2">
					<div className="choices-container h-100">
						<div className="d-flex choices-container-sub">
							<h3>
								<span className="special">{t('Common')}</span>{' '}
								{t('types of choice')}
							</h3>
						</div>
						<h4 className="note">
							{t(
								'You can quickly pick a category from here by clicking on one of the following icons'
							)}
						</h4>
						<div className="row">
							<div className="row w-100cars-left">
								<SingleCar
									name="Hatchback"
									image={Hatchback}
									rout={`/sub-cars?type=Hatchback`}
								/>
								<SingleCar
									name="Sedan"
									image={sedan}
									rout={`/sub-cars?type=Sedan`}
								/>
								<SingleCar
									name="Premium"
									image={premium}
									rout={`/sub-cars?type=Premium`}
								/>
								<SingleCar
									name="Coupe"
									image={coupe}
									rout={`/sub-cars?type=Coupe`}
								/>
								<SingleCar name="SUV" image={suv} rout={`/sub-cars?type=SUV`} />
								<SingleCar
									name="Large SUV"
									image={largeSuv}
									rout={`/sub-cars?type=LargeSUV`}
								/>
							</div>
							{/* <div className="row w-100"></div> */}
						</div>
					</div>
				</div>

				<div className="col-xl-6 col-lg-12 my-2">
					<div className="make-container h-100">
						<div className="d-flex  make-container-sub">
							<h3 className="d-inline">
								<span className="special">{t('Common')}</span>{' '}
								{t('types of make')}
							</h3>
						</div>
						<h4 className="note">
							{t(
								'You can quickly pick a category from here by clicking on one of the following icons1'
							)}
						</h4>
						<div className="row  special-row">
							<div className="row w-100 pb-5">
								<SingleCar
									name="Toyota"
									image={toyota}
									rout={`/cars-available?type=Toyota`}
								/>
								<SingleCar
									name="Mercedes"
									image={mercedes}
									rout={`/cars-available?type=Mercedes`}
								/>
								<SingleCar
									name="BMW"
									image={bmw}
									rout={`/cars-available?type=BMW`}
								/>
								<SingleCar
									name="Nissan"
									image={nissan}
									rout={`/cars-available?type=Nissan`}
								/>
								<SingleCar
									name="Honda"
									image={honda}
									rout={`/cars-available?type=Honda`}
								/>
								<SingleCar
									name="Lexus"
									image={lexus}
									rout={`/cars-available?type=Lexus`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section_A;
