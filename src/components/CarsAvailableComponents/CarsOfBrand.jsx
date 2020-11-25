import React, { useState } from 'react';
import CarDetails from '../CarDetailsComponent/CarDetails';

const CarsOfBrand = ({ SelectedBrand, SelectedCountry }) => {

  const [CarsDetails, setCarsDetails] = useState([]);
  const fetchCarsDetails = () => {
    let SelectedBrands = SelectedBrand;
    let SelectedCountries = SelectedCountry;
    setCarsDetails([
      {
        title: 'car1',
        img:
          'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
      },
      {
        title: 'car1',
        img:
          'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
      },
      {
        title: 'car1',
        img:
          'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
      },
      {
        title: 'car1',
        img:
          'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
      },
      {
        title: 'car1',
        img:
          'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
      },
    ],
    )
  }
  return (
    <div className=" row m-0">
      {CarsDetails.map((item,index) => {
        return (
          <div key={index} className="Cars-Available__container__carImgContainer col-12 col-sm-6 col-md-4 col-lg-4 " style={{padding:'0.2% 0.2%'}}>
            <div className='Cars-Available__container__carImgContainer__shadowBox'/>
            <img className='Cars-Available__container__carImgContainer__img' src={item.img}></img>
            <div className="Cars-Available__container__carImgContainer__title">
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}


export default CarsOfBrand;

