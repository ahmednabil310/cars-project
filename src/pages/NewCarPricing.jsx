import React, { Component } from "react";
import Header from "../components/NewCarPricingComponents/Header";
import Section1 from "../components/NewCarPricingComponents/Section1";
import Section2 from "../components/NewCarPricingComponents/Section2";
import Section3 from "../components/NewCarPricingComponents/Section3";


class NewCarPricing extends Component {
  constructor(props) {
    super(props);

    this.refCSS = React.createRef();
    this.state = {
      isloading: true
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.refCSS.current.scrollTo(0, 0);
    this.setState({ isloading: false });
  }

  render() {
    return (
      <div ref={this.refCSS}>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    );
  }
}


export default NewCarPricing;
