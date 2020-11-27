import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class SingleCar extends Component {
  constructor(props) {
    super(props);
  }

  handleClickImage = (name) => {
    this.props.history.push(`/cars-available?type=${name}`);
  };

  render() {
    return (
      <div
        className="col-md-4 col-12   cars-container d-flex flex-column align-items-center"
        style={{ cursor: "pointer" }}
        key={this.props.name}
        onClick={() => this.handleClickImage(this.props.name)}
      >
        <img src={this.props.image} alt="img" />
        <h4 className="car-name">{this.props.name}</h4>
      </div>
    );
  }
}

export default withRouter(SingleCar);
