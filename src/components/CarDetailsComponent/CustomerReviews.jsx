import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/DealerPageStyles/CustomerReviews.css';
import ReactStars from 'react-rating-stars-component';
import toastr from 'toastr';
import like from '../../images/heart.png';
import unlike from '../../images/regularHeart.png';

// Images
import bigstars from '../../images/dealer/bigstars.png';
import singleStar from '../../images/dealer/singlestar.png';
// Model Component
import ModelFields from '../SubComponents/ModelFields/ModelFields';

import { useTranslation } from 'react-i18next';
import { toHumanSize } from 'i18n-js';
//const { t, i18n } = useTranslation();

const userId = window.localStorage.getItem('userId');

class CustomerReviews extends Component {
  constructor(props) {
    super(props);
    this.successRequest = this.successRequest.bind(this);

    const userId = localStorage.getItem('userId');
    this.state = {
      title: '',
      rating: '',
      comment: '',
      rate: 0,
      modalShow: false,
      carId: props.data.id,
      isLike: false,
      currentIdComment: 0,
      id: 0,
      userId: userId,
    };
  }

  componentWillReceiveProps(nextState, prevState) {}

  componentDidMount() {
    this.props.actions.getCommentList(this.state.carId);
  }

  inputChangeHandler = (event) => {
    this.setState({
      ...this.state.review,
      [event.target.name]: event.target.value,
    });
  };

  inputChangeHandlerEdit = (event) => {
    let lastData = this.state.editingItem;
    lastData['subject'] = event.target.value;
    this.setState({ editingItem: lastData });
  };

  inputChangeHandlerTitleEdit = (event) => {
    let lastData = this.state.editingItem;
    lastData['title'] = event.target.value;
    this.setState({ editingItem: lastData });
  };

  inputRateHandler = (event) => {
    this.setState({ ...this.state.review, rate: event });
  };

  inputRateHandlerEdit = (event) => {
    let lastData = this.state.editingItem;
    lastData['ratingStar'] = event;
    this.setState({ editingItem: lastData });
  };

  addReviewHandler = () => {
    if (this.state.rate > 0 && this.state.title && this.state.comment) {
      if (this.state.title.length > 64) {
        toastr.warning('Title should not exceed 64 letters');
      } else if (this.state.comment.length > 360) {
        toastr.warning('Comment should not exceed 360 letters');
      } else {
        this.setState({ modalShow: !this.state.modalShow });
        const userId = localStorage.getItem('userId');

        const param = {
          userId: userId,
          carId: this.state.carId,
          ratingStar: this.state.rate.toString(),
          title: this.state.title,
          subject: this.state.comment,
        };
        this.props.actions.addComment(param);
      }
    } else {
      toastr.warning('Please fill the form');
    }
  };

  viewReviewHandler = (type) => {
    this.setState({ modalShow: type });
  };

  handleEditComment() {
    const obj = {
      ratingStar: this.state.editingItem.ratingStar.toString(),
      title: this.state.editingItem.title,
      subject: this.state.editingItem.subject,
      id: this.state.editingItem.id,
    };
    this.setState({ editformshow: false });

    this.props.actions.updateComment(obj);
  }
  handleDeleteComment() {
    const userId = localStorage.getItem('userId');

    const obj = {
      id: this.state.editingItem.id,
      userId: userId,
      carId: this.state.editingItem.id,
      ratingStar: this.state.editingItem.ratingStar.toString(),
      title: this.state.editingItem.title,
      subject: this.state.editingItem.subject,
      totalView: this.state.editingItem.totalView,
      totalLike: this.state.editingItem.totalLike,
      status: this.state.editingItem.status,
      postedon: this.state.editingItem.postedon,
    };
    this.props.actions.deleteComment(obj);
  }
  successRequest(id) {
    this.setState({ [id]: true });
  }
  hnadleLike(id, carId) {
    const userId = localStorage.getItem('userId');
    if (userId !== null) {
      const obj = {
        id: id,
        userId: userId,
        carId: carId,
      };

      this.setState({ isLike: true });

      this.props.actions.likeComment(obj, this.successRequest);
    } else {
      toastr.warning('Please Login');
    }
  }

  render() {
    return (
      <>
        <div className="container-fluid customer-reviews" id="review">
          <div className="inner-container-review">
            <div className="row d-flex justify-content-between align-items-center top-title-container m-0">
              <div className="">
                <div className="d-flex flex-column">
                  <h3 className="special">Customer Reviews</h3>
                  <div className="d-flex align-items-center">
                    <h6 className="customer-review-sub-title">
                      {`Read what other owners think about the ${
                        this.props.data.year +
                        ' ' +
                        this.props.data.make +
                        ' ' +
                        this.props.data.model
                      }`}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className=" btn-block customer-reviews-writeReview"
                  onClick={() => this.viewReviewHandler(true)}
                  onClick={() => {
                    document.getElementById('loginPopUpShow')
                      ? document.getElementById('loginPopUpShow').click()
                      : this.setState({ modalShow: true });
                  }}>
                  <div className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15">
                      <path
                        id="Icon_material-add"
                        data-name="Icon material-add"
                        d="M22.5,16.071H16.071V22.5H13.929V16.071H7.5V13.929h6.429V7.5h2.143v6.429H22.5Z"
                        transform="translate(-7.5 -7.5)"
                        fill="#fff"
                      />
                    </svg>
                    {'Write a review'}
                  </div>
                </button>
                <ModelFields
                  show={this.state.modalShow}
                  onHide={() => this.viewReviewHandler(false)}
                  submitHandler={this.addReviewHandler}
                  //submitValid={comment}
                  title="Review">
                  <div className="form-group position-relative">
                    <input
                      type="text"
                      className="form-control p-3 px-4 review__input review__input_title position-relative bg-transparent"
                      name="title"
                      value={this.state.title}
                      onChange={this.inputChangeHandler}
                    />
                    {this.state.title.length === 0 && (
                      <div className="position-absolute review__input_title__placeholder">
                        <span className="main__gary mr-2">
                          {'Review title'}
                        </span>
                        <span
                          className="main__gary ml-2"
                          style={{ color: '#C4C4C4' }}>
                          {'64 letters or numbers'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="form-group position-relative">
                    <div
                      style={{ zIndex: 0 }}
                      className="form-control p-3 px-4 review__input review__input_rating position-relative bg-transparent"
                      name="rating"></div>
                    {this.state.rating.length === 0 && (
                      <div
                        className="position-absolute review__input_rating__placeholder"
                        style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="main__gary mr-2">
                          {'Review rating'}
                        </span>
                        <span
                          className="ml-2 d-inline-block"
                          style={{ width: '135px' }}>
                          <ReactStars
                            count={5}
                            size={24}
                            activeColor="#EFAA24"
                            value={this.state.rate}
                            onChange={this.inputRateHandler}
                          />
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="form-group position-relative">
                    <textarea
                      className="form-control p-3 px-4 review__input review__input_comment position-relative bg-transparent"
                      name="comment"
                      rows="5"
                      value={this.state.comment}
                      onChange={this.inputChangeHandler}></textarea>
                    {this.state.comment.length === 0 && (
                      <div className="position-absolute review_input_comment_placeholder">
                        <span className="main__gary mr-2">
                          {'Review details'}
                        </span>
                        <span
                          className="main__gary ml-2"
                          style={{ color: '#C4C4C4' }}>
                          {'360 letters or numbers'}
                        </span>
                      </div>
                    )}
                  </div>
                </ModelFields>
              </div>
            </div>

            <h4
              className="text-center py-5 no-comments"
              style={{
                display: this.props.listComment.length > 0 ? 'none' : 'block',
              }}>
              There are no reviews yet. Be the first to submit a review about
              this car
            </h4>
            <div className="consumer-reviews">
              {this.props.listComment.length > 0
                ? this.props.listComment.map((item, i) => {
                    return (
                      <div className="review" key={item.id}>
                        <div className="d-flex align-items-center">
                          <div className="review-title d-flex flex-row flex-wrap align-items-center ">
                            <h2>{item.fullName}</h2>
                            <ReactStars
                              edit={false}
                              count={5}
                              size={24}
                              activeColor="#EFAA24"
                              classNames="consumer-reviews"
                              value={parseInt(item.ratingStar)}
                            />
                          </div>
                          <div className="ml-auto">
                            {' '}
                            <img
                              src={this.state[item.id] ? like : unlike}
                              id={item.id}
                              // ${ this.state[item.id] ? 'fas fa-heart' : 'far fa-heart'}
                              className={`cursor-pointer  ml-auto`}
                              onClick={(e) => {
                                if (this.state.userId !== null) {
                                  this.setState({ [e.target.id]: true });
                                  !this.state[item.id] &&
                                    this.hnadleLike(item.id, item.carId);
                                } else {
                                  toastr.warning('Please Login');
                                }
                              }}
                              style={
                                this.state[item.id]
                                  ? { color: 'red' }
                                  : { color: 'grey' }
                              }></img>
                          </div>
                        </div>
                        <span>{item.title}</span>
                        <p>{item.subject}</p>

                        {item.userId === userId ? (
                          <div className="edit-delete-btns-container">
                            <button
                              className="consumerReviewBtn"
                              onClick={() => {
                                this.setState({
                                  editingItem: item,
                                  editformshow: true,
                                });
                              }}>
                              {' '}
                              <i className="fas fa-pen mr-2"></i>Edit Comment
                            </button>
                            <button
                              onClick={() =>
                                this.setState({
                                  editingItem: item,
                                })
                              }
                              className="consumerReviewBtn"
                              data-toggle="modal"
                              data-target="#DeleteCofirm">
                              <i className="fas fa-trash-alt mr-2"></i>Delete
                              Comment
                            </button>{' '}
                            <div
                              className="modal fade"
                              id="DeleteCofirm"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel">
                                      Delete
                                    </h5>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                      aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-body text-center">
                                    Are you sure want to delete this comment ?
                                  </div>
                                  <div className="modal-footer justify-content-center">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-dismiss="modal">
                                      Cancel
                                    </button>
                                    <button
                                      data-dismiss="modal"
                                      onClick={this.handleDeleteComment.bind(
                                        this,
                                      )}
                                      type="button"
                                      className="btn btn-danger ">
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ModelFields
                              show={this.state.editformshow}
                              onHide={() => {
                                this.setState({ editformshow: false });
                              }}
                              submitHandler={this.handleEditComment.bind(this)}
                              title="Review">
                              <div className="form-group position-relative">
                                <input
                                  type="text"
                                  className="form-control p-3 px-4 review__input review__input_title position-relative bg-transparent"
                                  name="title"
                                  defaultValue={
                                    this.state.editingItem
                                      ? this.state.editingItem.title
                                      : null
                                  }
                                  onChange={this.inputChangeHandlerTitleEdit}
                                />
                                {this.state.editingItem &&
                                  this.state.editingItem.title.length == 0 && (
                                    <div className="position-absolute review__input_title__placeholder">
                                      <span className="main__gary mr-2">
                                        {'Review title'}
                                      </span>
                                      <span
                                        className="main__gary ml-2"
                                        style={{ color: '#C4C4C4' }}>
                                        {'64 letters or numbers'}
                                      </span>
                                    </div>
                                  )}
                              </div>
                              <div className="form-group position-relative">
                                <div
                                  style={{ zIndex: 0 }}
                                  className="form-control p-3 px-4 review__input review__input_rating position-relative bg-transparent"
                                  name="rating"></div>
                                {this.state.editingItem && (
                                  <div
                                    className="position-absolute review__input_rating__placeholder"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}>
                                    <span className="main__gary mr-2">
                                      {'Review rating'}
                                    </span>
                                    <span
                                      className="ml-2 d-inline-block"
                                      style={{ width: '135px' }}>
                                      <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#EFAA24"
                                        value={
                                          this.state.editingItem.ratingStar
                                        }
                                        onChange={this.inputRateHandlerEdit}
                                      />
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="form-group position-relative">
                                <textarea
                                  className="form-control p-3 px-4 review__input review__input_comment position-relative bg-transparent"
                                  name="comment"
                                  rows="5"
                                  defaultValue={
                                    this.state.editingItem
                                      ? this.state.editingItem.subject
                                      : null
                                  }
                                  onChange={
                                    this.inputChangeHandlerEdit
                                  }></textarea>
                                {this.state.editingItem &&
                                  this.state.editingItem.subject.length ==
                                    0 && (
                                    <div className="position-absolute review_input_comment_placeholder">
                                      <span className="main__gary mr-2">
                                        {'Review details'}
                                      </span>
                                      <span
                                        className="main__gary ml-2"
                                        style={{ color: '#C4C4C4' }}>
                                        {'360 letters or numbers'}
                                      </span>
                                    </div>
                                  )}
                              </div>
                            </ModelFields>
                          </div>
                        ) : null}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listComment: state.reduces.listComment,
  gstate: state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerReviews);
