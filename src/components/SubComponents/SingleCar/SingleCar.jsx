import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class SingleCar extends Component {
  constructor(props) {
    super(props);
  }

  handleClickImage = (name) => {
    if (this.props.isRoute === true) {
      this.props.history.push(`/sub-cars?type=${name.replace(/\s/g, '')}`);
    }
  };

  render() {
    return (
      <div
        className="col-md-6 col-xs-12 col-sm-6 col-lg-4 pb-4   cars-container d-flex flex-column align-items-center"
        style={{ cursor: 'pointer' }}
        key={this.props.name}
        onClick={() => this.handleClickImage(this.props.name)}>
        <img src={this.props.image} alt="img" />
        <h4 className="car-name">{this.props.name}</h4>
      </div>
    );
  }
}

export default withRouter(SingleCar);
