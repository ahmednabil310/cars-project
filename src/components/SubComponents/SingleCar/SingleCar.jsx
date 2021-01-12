import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class SingleCar extends Component {
	constructor(props) {
		super(props);
	}

	handleClickImage = name => {
		this.props.history.push(this.props.rout);
	};

	render() {
		return (
			<div
				className="col-md-6 col-6 col-sm-6 col-lg-4 cars-container-col d-flex flex-column align-items-center"
				style={{ cursor: 'pointer' }}
				key={this.props.name}
				onClick={() => this.handleClickImage(this.props.name)}
			>
				<div className="cars-container">
					<img src={this.props.image} alt="img" className="img-fluid" />
					<hr />
					<h4 className="car-name">{this.props.name}</h4>
				</div>
			</div>
		);
	}
}

export default withRouter(SingleCar);
