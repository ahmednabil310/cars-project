import React, { Component } from 'react';
import '../../styles/CarsAvailable/CarsAvailableDetails.css';
import carImage from '../../images/Cars/Car1.png';
import CarsOfBrand from './CarsOfBrand';
class CarsAvailableDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Countries: [],
      Brands: [],
      SelectedCountry: 'default',
      SelectedBrand: 'default',
    };
  }

  componentDidMount() {
    this.fetchBrands();
    this.fetchhCountries();
  }

  ///////////////////////////////////////// GET DROPDOWN DATA HERE

  fetchBrands() {
    // Fetch Brands Here
    this.setState({ Brands: ['VW', 'BMW'] });
  }
  fetchhCountries() {
    //Fetch Countries Here
    this.setState({ Countries: ['UAE', 'EGY'] });
  }

  //////////////////////////////////////////

  render() {
    return (
      <div className="Cars-Available__container">
        {this.state.SelectedCountry != 'default' ? (
          <div className="Cars-Available__container__title">
            <span style={{ color: '#3e3e3e' }}>{this.state.SelectedBrand}</span>{' '}
            UAE Prices & Specs
          </div>
        ) : (
          <div className="Cars-Available__container__title">Choose</div>
        )}

        {this.state.SelectedCountry != 'default' ? (
          <div className="Cars-Available__container__SubTitle mt-2">
            HOME / PRICES & SPECS {this.state.SelectedCountry} /{' '}
            <span style={{ color: '#3e3e3e' }}>{this.state.SelectedBrand}</span>
          </div>
        ) : null}
        <div className="Cars-Available__container__form mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('submited', e.target[0].value, e.target[1].value);
              this.setState({
                SelectedCountry: e.target[1].value,
                SelectedBrand: e.target[0].value,
              });
            }}
            action={''}>
            <select
              required
              className="About__And__Summary__Select mx-3"
              style={{ width: '150px' }}
              defaultValue={this.state.SelectedBrand}>
              <option value="default" disabled>
                Brand
              </option>
              {this.state.Brands.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>

            <select
              required
              className="About__And__Summary__Select mx-3"
              style={{ width: '150px' }}
              defaultValue={this.state.SelectedCountry}>
              <option value="default" disabled>
                Country
              </option>
              {this.state.Countries.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>

            <button
              className="Cars-Available__container__submitBtn"
              type="submit">
              Go
            </button>
          </form>
        </div>

        {this.state.SelectedBrand != 'default' ? (
          <div>
            <div className="Cars-Available__container__NewUSedBar">
              <a
                href=""
                style={{
                  color: '#325c9a',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}>
                New {this.state.SelectedBrand} for Sale in
                {this.state.SelectedCountry}
              </a>
              <a
                href=""
                style={{
                  color: '#325c9a',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}>
                Used {this.state.SelectedBrand} for Sale in
                {this.state.SelectedCountry}
              </a>
            </div>

            <div className="Cars-Available__container__ChoosedBrand">
              Browse {this.state.SelectedBrand} Models
            </div>

            <CarsOfBrand
              SelectedBrand={this.state.SelectedBrand}
              SelectedCountry={this.state.SelectedCountry}
            />

            <div className="Cars-Available__container__form mt-4">
              <form
                onSubmit={(e) => {
                  console.log('submited', e.target[0].value, e.target[1].value);
                  this.setState({
                    SelectedCountry: e.target[1].value,
                    SelectedBrand: e.target[0].value,
                  });
                }}
                action={''}>
                <select
                  required
                  className="About__And__Summary__Select mx-3"
                  style={{ width: '150px' }}
                  defaultValue={this.state.SelectedBrand}>
                  <option value="default" disabled>
                    Brand
                  </option>
                  {this.state.Brands.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>

                <select
                  required
                  className="About__And__Summary__Select mx-3"
                  style={{ width: '150px' }}
                  defaultValue={this.state.SelectedCountry}>
                  <option value="default" disabled>
                    Country
                  </option>
                  {this.state.Countries.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>

                <button
                  className="Cars-Available__container__submitBtn"
                  type="submit">
                  Go
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CarsAvailableDetails;
