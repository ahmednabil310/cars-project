import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
// import carImage from "../../558c846dedae5Geely_Emgrand_7_front.jpg";

class CarsOfBrand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=" row m-0">
        {this.props.CarsDetails.map((item, index) => {
          return (
            <div
              key={index}
              className="Cars-Available__container__carImgContainer col-12 col-sm-6 col-md-4 col-lg-4 "
              style={{ padding: "0.2% 0.2%" }}
              onClick={() =>
                this.props.history.push(
                  `/cardetail?type=${item.id}`,
                )
              }
            >
              <img
                className="Cars-Available__container__carImgContainer__img"
                src={item.imageURL || item.image_1}
              ></img>
              <div className="Cars-Available__container__carImgContainer__shadowBox" />

              <div className="Cars-Available__container__carImgContainer__title">
                {item.model}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(CarsOfBrand);
