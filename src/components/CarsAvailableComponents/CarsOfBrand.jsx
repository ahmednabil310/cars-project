import React, { Component } from 'react';
// import carImage from "../../558c846dedae5Geely_Emgrand_7_front.jpg";

class CarsOfBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CarsDetails: [],
    };
  }
  componentDidMount() {
    this.fetchCarsDetails();
  }

  //////////////////////////// Fetch Cars Data Here
  fetchCarsDetails() {
    console.log(this.props.SelectedBrand, this.props.SelectedCountry);
    let SelectedBrand = this.props.SelectedBrand;
    let SelectedCountry = this.props.SelectedCountry;

    this.setState({
      CarsDetails: [
        {
          title: 'car1',
          img:
            'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
        },
        {
          title: 'car1',
          img:
            'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
        },
        {
          title: 'car1',
          img:
            'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
        },
        {
          title: 'car1',
          img:
            'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
        },
        {
          title: 'car1',
          img:
            'https://s3.caradvice.com.au/wp-content/uploads/2015/12/2016-Lexus-GS200t_10.jpg',
        },
      ],
    });
  }
  /////////////////////

  render() {
    return (
      <div className=" row m-0">
        {this.state.CarsDetails.map((item) => {
          return (
            <div className="Cars-Available__container__carImgContainer col-12 col-sm-6 col-md-4 col-lg-4 p-0">
              <img src={item.img}  alt="img" ></img>
              <div className="Cars-Available__container__carImgContainer__title">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CarsOfBrand;
