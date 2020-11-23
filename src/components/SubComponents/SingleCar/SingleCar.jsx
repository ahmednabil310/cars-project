import react,{useContext} from 'react' 
import { Link } from "react-router-dom";
import {carContext} from '../../../contexts/cars/carState'

const SingleCar = ({ name, image }) => {
  const {setCurrentName}=useContext(carContext)
  return (
    <div className="col-md-4 col-12   cars-container d-flex flex-column align-items-center" key={name}>
      <img src={image} alt="img" />
      <Link to='/cars-available'  onClick={()=>setCurrentName(name)}  className="stretched-link">
        <h4 className="car-name">{name}</h4>
      </Link>
    </div>
  );
};

export default SingleCar;
