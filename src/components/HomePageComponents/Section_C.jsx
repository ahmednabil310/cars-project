import '../../styles/HomePageStyles/Section_C.css';
import CompareTypes from '../SubComponents/CompareTypes/CompareTypes';
import SingleCompare from '../SubComponents/CompareTypes/SingleCompare';
const Section_C = () => {
  return (
    <div className="section-c-homepage-container">
      <div className="section-c_compare">
        <SingleCompare mainTitle="Compare SUV" width="1003.729" />
        <div className="row">
          <div className="col-6 px-0">
            <div className="col-12">
              <CompareTypes
                title="Popular SUV"
                types="Toyota Land Cruiser/Nissan Patrol/GMC Yukon/Chevrolet Tahoe"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Small SUV"
                types="Toyota RAV-4/Mazda CX-5/Kia Sportage/Honda CR-V"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize SUV"
                types="Ford Explorer/Toyota Fortuner/Nissan Pathfinder/Mitsubishi Pajero"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="3-row SUV"
                types="Honda Pilot/Mazda CX-9/Hyundai Grand Santa Fe/GMC Acadia"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="col-12">
              <CompareTypes
                title="Popular Luxury SUV"
                types="Audi Q7/BMW X5/Lexus RX/Mercedes-Benz GLE 63 AMG"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Small Luxury SUV"
                types="Jaguar F-Pace/Volvo XC60/Land Rover Range Rover Evoque/Porsche Macan"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize Luxury SUV"
                types="Jeep Grand Cherokee/Toyota Land Cruiser Prado/Volkswagen Touareg/Land Rover Discovery"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Large SUV"
                types="Infiniti QX80/Land Rover Range Rover/Lexus LX/Mercedes-Benz G 63 AMG"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Compare */}

      <div className="section-c_compare">
        <SingleCompare mainTitle="Compare Sedans" width="1003.729" />
        <div className="row">
          <div className="col-6 px-0">
            <div className="col-12">
              <CompareTypes
                title="Popular Sedans"
                types="Toyota Camry/Honda Accord/Nissan Altima/Mazda 6"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Small Sedan"
                types="Nissan Sunny/Toyota Yaris Sedan/Honda City/Hyundai Elantra"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize Sedans"
                types="Kia Optima/Toyota Corolla/Ford Taurus/Honda Civic"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Large Sedan"
                types="Chrysler 300C/Dodge Charger/Ford Taurus/Toyota Avalon"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="col-12">
              <CompareTypes
                title="Popular Luxury Sedans"
                types="Lexus ES/Mercedes-Benz E-Class/Audi A6/BMW 5-Series"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Small Luxury Sedans"
                types="Audi A4/Mercedes-Benz C-Class/Volvo S60/Jaguar XE"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize Luxury Sedans"
                types="Lexus GS/Jaguar XF/Volvo S90/Infiniti Q70"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Luxry Large Sedan"
                types="Lexus LS/Mercedes-Benz S-Class/Audi A8/BMW 7-Series"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Third Compare */}
      <div className="section-c_compare">
        <SingleCompare mainTitle="Compare Trucks" width="1003.729" />
        <div className="row">
          <div className="col-12  px-0">
            <div className="col-12">
              <CompareTypes
                title="Popular Trucks"
                types="Ram 1200/Chevrolet Silverado/Ford F-150/GMC Sierra 1500"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Large Trucks"
                types="Ford F-150 Raptor/Jeep Wrangler Unlimited/Ram 1200/Chevrolet Silverado"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize Truck"
                types="Nissan Navara/Toyota Hilux/Mitsubishi L200/Isuzu D-Max"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_C;
