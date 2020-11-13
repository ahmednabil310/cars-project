import '../../styles/HomePageStyles/Section_C.css';
import CompareTypes from '../SubComponents/CompareTypes/CompareTypes';
import SingleCompare from '../SubComponents/CompareTypes/SingleCompare';
const Section_C = () => {
  return (
    <div className="section-c-homepage-container">
      <div className="section-c_compare">
        <SingleCompare mainTitle="COMPARE SUVS" width="1003.729" />
        <div className="row">
          <div className="col-lg-6">
            <div className="col-12">
              <CompareTypes
                title="Popular SUVs"
                types=" Kia Telluride / Jeep Wrangler / Toyota Highlander / Ford
                  Explorer"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Small SUVs"
                types=" Jeep Wrangler / Toyota RAV4 / Honda CR-V / Nissan Rogue"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize SUVs"
                types="Honda Pilot / Kia Telluride / Ford Explorer / Toyota Highlander"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Popular SUVs"
                types="Kia Telluride / Ford Explorer / Toyota Highlander / Subaru Ascent"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-12">
              <CompareTypes
                title="Popular SUVs"
                types="Lexus RX 350 / Volvo XC90 / Audi Q8 / BMW X7"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Popular SUVs"
                types="Acura RDX / Audi Q5 / BMW X3 / Volvo XC40"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Popular SUVs"
                types="Kia Telluride / Jeep Wrangler / Toyota Highlander / Ford Explorer"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Popular SUVs"
                types=" Toyota Sequoia / Nissan Armada / Toyota Land Cruiser"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Compare */}

      <div className="section-c_compare">
        <SingleCompare mainTitle="COMPARE SEDANS" width="1003.729" />
        <div className="row">
          <div className="col-lg-6">
            <div className="col-12">
              <CompareTypes
                title="Popular Sedans "
                types=" Honda Civic / Dodge Charger / Honda Accord / Toyota Camry"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Small Sedans "
                types=" Honda Civic / Toyota Corolla / Ford Focus / Hyundai Elantra"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize Sedans"
                types=" Honda Accord / Toyota Camry / Kia Stinger / Ford Fusion"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="3-row Sedans"
                types=" Dodge Charger / Chrysler 300 / Toyota Avalon / Ford Taurus"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-12">
              <CompareTypes
                title="Popular Luxury Sedans"
                types="Genesis G70 / INFINITI Q50 / Porsche Panamera / Audi A4"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Small Luxury Sedans"
                types="Genesis G70 / INFINITI Q50 / Audi A4 / Alfa Romeo Giulia"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Midsize Luxury Sedans"
                types=" Audi A7 / Cadillac CTS / Lincoln MKZ / Audi A6"
              />
            </div>
            <div className="col-12">
              <CompareTypes
                title="Large Sedans "
                types=" Porsche Panamera / Lincoln Continental / Audi A8 / Cadillac XTS"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Third Compare */}
      <div className="row">
        <div className="col-lg-6">
          <div className="section-c_compare">
            <SingleCompare
              mainTitle="Compare"
              secondTitle=" Trucks"
              width="243.729"
              textColor="#D53535"
            />
            <div className="row">
              <div className="col-lg-6">
                <div className="col-12">
                  <CompareTypes
                    title="Popular Sedans "
                    types=" Honda Civic / Dodge Charger / Honda Accord / Toyota Camry"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Small Sedans "
                    types=" Honda Civic / Toyota Corolla / Ford Focus / Hyundai Elantra"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Midsize Sedans"
                    types=" Honda Accord / Toyota Camry / Kia Stinger / Ford Fusion"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="3-row Sedans"
                    types=" Dodge Charger / Chrysler 300 / Toyota Avalon / Ford Taurus"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="col-12">
                  <CompareTypes
                    title="Popular Luxury Sedans"
                    types="Genesis G70 / INFINITI Q50 / Porsche Panamera / Audi A4"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Small Luxury Sedans"
                    types="Genesis G70 / INFINITI Q50 / Audi A4 / Alfa Romeo Giulia"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Midsize Luxury Sedans"
                    types=" Audi A7 / Cadillac CTS / Lincoln MKZ / Audi A6"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Large Sedans "
                    types=" Porsche Panamera / Lincoln Continental / Audi A8 / Cadillac XTS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-c_compare">
            <SingleCompare
              mainTitle="Compare"
              secondTitle=" Hybrids"
              width="243.729"
              textColor="#D53535"
            />
            <div className="row">
              <div className="col-lg-6">
                <div className="col-12">
                  <CompareTypes
                    title="Popular Sedans "
                    types=" Honda Civic / Dodge Charger / Honda Accord / Toyota Camry"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Small Sedans "
                    types=" Honda Civic / Toyota Corolla / Ford Focus / Hyundai Elantra"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Midsize Sedans"
                    types=" Honda Accord / Toyota Camry / Kia Stinger / Ford Fusion"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="3-row Sedans"
                    types=" Dodge Charger / Chrysler 300 / Toyota Avalon / Ford Taurus"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="col-12">
                  <CompareTypes
                    title="Popular Luxury Sedans"
                    types="Genesis G70 / INFINITI Q50 / Porsche Panamera / Audi A4"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Small Luxury Sedans"
                    types="Genesis G70 / INFINITI Q50 / Audi A4 / Alfa Romeo Giulia"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Midsize Luxury Sedans"
                    types=" Audi A7 / Cadillac CTS / Lincoln MKZ / Audi A6"
                  />
                </div>
                <div className="col-12">
                  <CompareTypes
                    title="Large Sedans "
                    types=" Porsche Panamera / Lincoln Continental / Audi A8 / Cadillac XTS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_C;
