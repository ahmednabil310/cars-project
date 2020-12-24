import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';

class TopParticipants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAll: false,
    };
  }

  componentDidMount() {
    this.props.actions.getTopParticipants();
  }

  render() {
    return (
      <>
        <div className={'reviewPortal_sectionTitle'}>Top Participants</div>

        <div
          className={'reviewPortal_sectionSeparator'}
          style={{ marginBottom: '13%' }}
        />

        {this.props.ListParticipants.length > 0
          ? this.props.ListParticipants
          // .slice(0,this.state.viewAll ? Infinity : 5,)
            .map((item, i) => {
              return (
                <div className="participantsReviewCard" key={i}>
                  <img
                    src={item.profilePic}
                    className="participantsReviewCard_img"
                  />
                  <div className="participantsReviewCard_details">
                    <div className="participantsReviewCard_title">
                      {item.fullName}
                    </div>
                    <div className="participantsReviewCard_subTitle">
                      Total Post : {item.totalPost}
                    </div>
                    <div className="participantsReviewCard_subTitleTwo">
                      Joined on : {item.joinedDate.split('T')[0]}
                    </div>
                  </div>
                </div>
              );
            })
          : null}

        {/* <div
          className="reviewPortal_viewAll mt-5"
          onClick={() => {
            this.setState({ viewAll: !this.state.viewAll });
          }}>
          {this.state.viewAll ? 'View less' : 'View all'}
        </div> */}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ListParticipants: state.reduces.ListParticipants,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopParticipants);
