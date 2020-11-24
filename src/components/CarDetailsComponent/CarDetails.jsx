import React,{useState,useContext,useEffect} from 'react';
import '../../styles/DealerPageStyles/CarDetails.css';
import mainCar from '../../images/dealer/big-car.png';

import {carContext} from '../../contexts/cars/carState'
const CarDetails = () => {
  const {CurrentEngine , GetCarData , CarData}= useContext(carContext)
		 const [loader,setLoader] = useState(true)
	useEffect(() => {
		if (CurrentEngine !== null) {
      GetCarData(CurrentEngine)
      setLoader(false)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [CurrentEngine])
 
  //console.log(CarData);
  
  return (
    <div className="car-details-container">
      <div className="row">
        <div className="col-lg-6 col-12 bigger-image">
          {loader === false?
          <img src={CarData.image_1}  style={{width : "100%"}}  alt="img"/> : ""
        }
        </div>
        <div className="col-lg-6 col-12 bigger-image">
        {loader === false?
          <img src={CarData.image_2} alt="img" /> : ""
        }
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
