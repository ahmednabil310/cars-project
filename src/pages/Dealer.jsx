import React, { Component, useState } from "react";
import Banner from "../components/CarDetailsComponent/Banner";
import CarDetails from "../components/CarDetailsComponent/CarDetails";
import CarsPros from "../components/CarDetailsComponent/CarsPros";
import CustomerReviews from "../components/CarDetailsComponent/CustomerReviews";
import FullCar from "../components/CarDetailsComponent/FullCar";
import LastBanner from "../components/CarDetailsComponent/LastBanner";

class Dealer extends Component {
  constructor(props) {
    super(props);

    let objId;

    const query = new URLSearchParams(this.props.location.search);

    for (let params of query.entries()) {
      objId = params[1];
    }

    let objData = JSON.parse(localStorage.getItem("CarData"));

    objData = objData.find((x) => x.id === parseInt(objId));

    this.state = {
      objData: objData,
      loading: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <>
            <Banner data={this.state.objData} />
            <CarDetails data={this.state.objData} />
            <CarsPros data={this.state.objData} />
            <FullCar data={this.state.objData} />
            <LastBanner data={this.state.objData} />
            <CustomerReviews data={this.state.objData} />{" "}
          </>
        ) : null}
      </div>
    );
  }
}

export default Dealer;
