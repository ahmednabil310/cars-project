const SingleCar = ({ name, image }) => {
  return (
    <div className="col-md-4 col-12   cars-container d-flex flex-column align-items-center">
      <img src={image} />
      <h4 className="car-name">{name}</h4>
    </div>
  );
};

export default SingleCar;
