import react,{useContext, useEffect} from 'react' 
import { Link } from "react-router-dom";
import {carContext} from '../../../contexts/cars/carState'

const SingleCar = ({ name, image }) => {
  const {setCurrentName , GetCarSubModel , setCurrentModels,Cars }=useContext(carContext)
  useEffect(()=>{
    GetCarSubModel(name,2020)
  },[])
  const handleClick=()=>{
    setCurrentName(name)
    if (Cars.length>0) {
      console.log(Cars);
      setCurrentModels(Cars)
    }
  }
  return (
    <div className="col-md-4 col-12   cars-container d-flex flex-column align-items-center" key={name}>
      <img src={image} alt="img" />
      <Link to='/cars-available'  onClick={handleClick}  style={{textDecoration:"none"}}  className="stretched-link">
        <h4 className="car-name">{name}</h4>
      </Link>
    </div>
  );
};

export default SingleCar;
