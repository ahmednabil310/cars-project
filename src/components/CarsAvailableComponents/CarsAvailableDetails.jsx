import React, { useEffect, useState,useContext } from 'react';
import '../../styles/CarsAvailable/CarsAvailableDetails.css';
import carImage from '../../images/Cars/Car1.png';
import CarsOfBrand from './CarsOfBrand';
import {carContext} from '../../contexts/cars/carState'
 
const CarsAvailableDetails=(props)=>{
   
   const [SelectedCountry,setSelectedCountry]=useState('default')
   const [SelectedBrand,setSelectedBrand]=useState('default')

   const {CatagriodCars
    ,GetCarByCategory
    ,CurrentName
    ,Year,
    GetYear,
    Maker
   ,GetCarMake}=useContext(carContext) 

 

  useEffect(()=>{
      if(CurrentName !== null){
        console.log(CurrentName);
        GetCarByCategory(CurrentName)
      }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[CurrentName])


  useEffect(()=>{
      GetYear()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(Year);

  const handleyearChange=(e)=>{
    GetCarMake(e.target.value)
  }


  return(
    <div>
    <div className="Cars-Available__container">
      {SelectedCountry != 'default' ? (
        <div className="Cars-Available__container__title">
          <span style={{ color: '#3e3e3e' }}>
            {SelectedBrand}
          </span>{' '}
          UAE Prices & Specs
        </div>
      ) : (
        <div className="Cars-Available__container__title">Choose</div>
      )}

      {SelectedCountry != 'default' ? (
        <div className="Cars-Available__container__SubTitle mt-2">
          HOME / PRICES & SPECS {SelectedCountry} /{' '}
          <span style={{ color: '#3e3e3e' }}>
            {SelectedBrand}
          </span>
        </div>
      ) : null}
      <div className="Cars-Available__container__form mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submited', e.target[0].value, e.target[1].value);
              {setSelectedCountry(e.target[1].value)}
              {setSelectedBrand(e.target[0].value)}
          }}
          action={''}>
          <select
            required
            className="About__And__Summary__Select mx-3"
            style={{ width: '150px' }}
            onChange={handleyearChange}
            defaultValue={SelectedBrand}>
            <option value="default" disabled>
              Brand
            </option>
            {Year.result === undefined ? console.log('nullable') : Year.result.map((item, index) => 
							 (<option key={item.year}  value={item.year} >{item.year}</option>))}
							</select>

          <select
            required
            className="About__And__Summary__Select mx-3"
            style={{ width: '150px' }}
            defaultValue={SelectedCountry}>
            <option value="default" disabled>
              Country
            </option>
            {Maker.result === undefined ? console.log('null5') :
             Maker.result.map((item, index) => 
							 (<option key={item.make}  value={item.make} >
                 {item.make}</option>))}
          </select>

          <button
            className="Cars-Available__container__submitBtn"
            type="submit">
            Go
          </button>
        </form>
      </div>

      {SelectedBrand != 'default' ? (
        <div>
          <div className="Cars-Available__container__NewUSedBar">
            <a
              href=""
              style={{
                color: '#325c9a',
                fontWeight: 'bold',
                fontSize: '18px',
              }}>
              New {SelectedBrand} for Sale in
              {SelectedCountry}
            </a>
            <a
              href=""
              style={{
                color: '#325c9a',
                fontWeight: 'bold',
                fontSize: '18px',
              }}>
              Used {SelectedBrand} for Sale in
              {SelectedCountry}
            </a>
          </div>

          <div className="Cars-Available__container__ChoosedBrand">
            Browse {SelectedBrand} Models
          </div>

          <CarsOfBrand
            SelectedBrand={SelectedBrand}
            SelectedCountry={SelectedCountry}
          />

          <div className="Cars-Available__container__form mt-4">
            <form
              onSubmit={(e) => {
                console.log(
                  'submited',
                  e.target[0].value, 
                  e.target[1].value,
                )
                   {setSelectedCountry(e.target[1].value)}
                   {setSelectedBrand( e.target[0].value)}
              }}
              action={''}>
              <select
                required
                className="About__And__Summary__Select mx-3"
                style={{ width: '150px' }}
                defaultValue={SelectedBrand}>
                  onChange={handleyearChange}
                <option value="default" disabled>
                  Brand
                </option>
                {Year.result === undefined ? console.log('nullable') : Year.result.map((item, index) => 
							 (<option key={item.year}  value={item.year} >{item.year}</option>))}
              </select>

              <select
                required
                className="About__And__Summary__Select mx-3"
                style={{ width: '150px' }}
                defaultValue={SelectedCountry}>
                <option value="default" disabled>
                  Country
                </option>
                {Maker.result === undefined ? console.log('null5') :
                   Maker.result.map((item, index) => 
							 (<option key={item.make}  value={item.make} >
                 {item.make}</option>))}
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
  </div>
  )
}
export default CarsAvailableDetails
