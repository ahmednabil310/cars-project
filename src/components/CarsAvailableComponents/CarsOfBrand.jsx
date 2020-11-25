import React, { useContext, useEffect, useState } from 'react';
import { carContext } from '../../contexts/cars/carState';
import CarDetails from '../CarDetailsComponent/CarDetails';

const CarsOfBrand = ({ SelectedBrand, SelectedCountry }) => {
  const {  CurrentName , GetCarSubModel,Cars } = useContext(
    carContext,
  );
  
  const [load,setLoad]=useState(true)

 useEffect(()=>{
     GetCarSubModel(CurrentName,2020)
  },[])

  if (Cars.length >0) {
     setLoad(false) 
  }

  const [CarsDetails, setCarsDetails] = useState([]);
  const fetchCarsDetails = () => {
    let SelectedBrands = SelectedBrand;
    let SelectedCountries = SelectedCountry;
  }
  return (
    <div className=" row m-0">
      {load === false 
        ? Cars.result.map((item, index) => {
            return (
              <div
                key={index}
                className="Cars-Available__container__carImgContainer col-12 col-sm-6 col-md-4 col-lg-4 "
                style={{ padding: '0.2% 0.2%' }}>
                <div className="Cars-Available__container__carImgContainer__shadowBox" />
                <img
                  className="Cars-Available__container__carImgContainer__img"
                  src={item.image_1}  alt="img"></img>
                <div className="Cars-Available__container__carImgContainer__title">
                  {item.model}
                </div>
              </div>
            );
          })
        : ''}
    </div>
  );
};
export default CarsOfBrand;
