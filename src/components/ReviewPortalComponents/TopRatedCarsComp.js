import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/ReviewPortalStyles/TopRatedCars.css';
import stars from '../../images/ReviewPortal/Group 166.jpg';
import ReactStars from 'react-rating-stars-component';

class TopRatedCars extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getCarsRate();
  }

  render() {
    return (
      <div>
        <div className="topCarsRated_title">
          <div>Top Rated</div>
          <div style={{ color: '#727272' }}>Cars</div>
        </div>

        {this.props.ListCarsRate.length > 0
          ? this.props.ListCarsRate.map((item, i) => {
              return (
                <div className="topRatedCarCard" key={i}>
                  <img className="topRatedCarCard_img" src={item.imageURL} />
                  <div className="topRatedCarCard_details">
                    <div className="topRatedCarCard_title">
                      {item.make + '  ' + item.model}
                    </div>
                    <div className="topRatedCarCard_reviewCard">
                      <div className="topRatedCarCard_rateNum">
                        {item.reliability}
                      </div>
                      <div className="topRatedCarCard_reteDetails">
                        <div>255 reviews</div>
                        <div
                          style={{
                            zIndex: 99,
                            position: 'absolute',
                            width: '117px',
                            height: '37px',
                            tio: '233px',
                          }}
                          className="bg-transparent"
                          name="rating"></div>
                        <div>
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#d53535"
                            value={parseInt(item.reliability)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ListCarsRate: state.reduces.ListCarsRate,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedCars);
