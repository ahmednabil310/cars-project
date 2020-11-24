import React, { useContext, useEffect, useState } from 'react';
import {carContext} from '../../contexts/cars/carState'
import CarDetails from '../CarDetailsComponent/CarDetails';

const CarsOfBrand=({SelectedBrand,SelectedCountry})=>{
  
  const { GetCarByCategory, CurrentName ,CatagriodCars} = useContext(carContext); 

  const [loader,setLoader] = useState(true)
 
 useEffect(()=>{
    fetchCarsDetails()
    GetCarByCategory(CurrentName)
    setLoader(false)
  },[])

  console.log(CatagriodCars);

  const [CarsDetails,setCarsDetails]=useState([])
  const fetchCarsDetails=()=>{
    let SelectedBrands = SelectedBrand;
    let SelectedCountries = SelectedCountry;
 
   if (loader === false) {
     setCarsDetails(
      GetCarByCategory
    ) 
   }
    
  }
  return (
    <div className=" row m-0">
      {CarDetails.length >0? CarsDetails.result.map((item,index) => {
        return (
          <div key={index} className="Cars-Available__container__carImgContainer col-12 col-sm-6 col-md-4 col-lg-4 " style={{padding:'0.2% 0.2%'}}>
            <div className='Cars-Available__container__carImgContainer__shadowBox'/>
            <img className='Cars-Available__container__carImgContainer__img' src={item.image_1}></img>
            <div className="Cars-Available__container__carImgContainer__title">
              {item.model}
            </div>
          </div>
        );
      }):""}
    </div>
  );
}
export default CarsOfBrand