import React from "react";
import Car1 from "../../images/Cars/Car1.png";
import Car2 from "../../images/Cars/Car2.png";
import Car3 from "../../images/Cars/Car3.png";
import Car4 from "../../images/Cars/Car4.png";
import Car5 from "../../images/Cars/Car5.png";
import Car6 from "../../images/Cars/Car6.png";
import Car7 from "../../images/Cars/Car7.png";
import Car8 from "../../images/Cars/Car8.png";
import CarsCard from "./CarsCard";

function CarsTable() {
  return (
    <div className="row m-auto carsTable-container">
      <CarsCard img={Car1} />
      <CarsCard img={Car2} />
      <CarsCard img={Car3} />
      <CarsCard img={Car4} />
    </div>
  );
}

export default CarsTable;
