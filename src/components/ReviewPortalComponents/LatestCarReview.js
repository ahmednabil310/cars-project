import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';



class LatestCarReview extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getLatestReview();
    }


    render() {
        return (
            <>
                <div className={'reviewPortal_sectionTitle'}>Latest Car Review</div>
                <div className={'reviewPortal_sectionSeparator'} />

                {this.props.ListCarLike.length > 0 ? this.props.ListCarLike.map((item, i) => {
                    return <div className='carReviewCard' key={i}>
                        <img
                            src={item.carImage}
                            className='carReviewCard_img'
                        />
                        <div className='carReviewCard_details'>
                            <div className='carReviewCard_title'>{item.make + "  " + item.model}</div>
                            <div className='carReviewCard_desc'>{item.subject}</div>
                        </div>
                    </div>
                }) : null}
                <div className='reviewPortal_viewAll'>View all latest cars reviews</div>
            </>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    ListCarLike: state.reduces.ListCarLike,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestCarReview);
