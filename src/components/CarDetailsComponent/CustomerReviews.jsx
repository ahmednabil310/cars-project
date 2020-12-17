import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from 'redux';
import '../../styles/DealerPageStyles/CustomerReviews.css';
import ReactStars from 'react-rating-stars-component';
import toastr from 'toastr';
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
    };
  }

  componentWillReceiveProps(nextState, prevState) {}

  componentDidMount() {
    this.props.actions.getCommentList(this.state.carId);
    console.log(this.props.data);
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
    const obj = {
      id: id,
      userId: userId,
      carId: carId,
    };

    this.setState({ isLike: true });

    this.props.actions.likeComment(obj, this.successRequest);
  }

  render() {
    return (
      <>
        <div className="container-fluid customer-reviews" id="review">
          <div className="row d-flex justify-content-between align-items-center w-100">
            <div className="col-md-7">
              <div className="d-flex flex-column">
                <h3
                  style={{ marginBottom: 0 }}
                  className="customer-review-title">
                  <span className="special">{'Customer'}</span> {'Reviews'}
                </h3>
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
                  <svg
                    id="Component_6_1"
                    className="ml-5 d-none d-xl-block"
                    data-name="Component 6 – 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="243.729"
                    height="36.969"
                    viewBox="0 0 243.729 36.969">
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#d53535" />
                        <stop offset="1" stopColor="#6b1b1b" />
                      </linearGradient>
                      <linearGradient
                        id="linear-gradient-2"
                        x1="0.777"
                        x2="0.777"
                        y2="1.686"
                        gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#efefef" />
                        <stop offset="1" stopColor="#c4c4c4" />
                      </linearGradient>
                    </defs>
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M-180,0H42L62,33.969H-180Z"
                      transform="translate(180)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_53"
                      data-name="Path 53"
                      d="M-180,0,59.808.207l3.921,6.566L-180,6.958Z"
                      transform="translate(180 30.01)"
                      fill="url(#linear-gradient-2)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <button
                type="button"
                className="mr-0 mt-1 btn-block py-2 customer-reviews-writeReview"
                onClick={() => this.viewReviewHandler(true)}
                onClick={() => {
                  document.getElementById('loginPopUpShow')
                    ? document.getElementById('loginPopUpShow').click()
                    : this.setState({ modalShow: true });
                }}>
                <div>
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
                      <span className="main__gary mr-2">{'Review title'}</span>
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
                      <span className="main__gary mr-2">{'Review rating'}</span>
                      <span
                        className="ml-2 d-inline-block"
                        style={{ width: '135px' }}>
                        <ReactStars
                          count={5}
                          size={24}
                          activeColor="#d53535"
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
                    <div
                      className="position-absolute"
                      style={{ top: '12%', left: '6%' }}>
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

          <h2
            className="text-center py-5"
            style={{
              color: 'red',
              display: this.props.listComment.length > 0 ? 'none' : 'block',
            }}>
            There Is No Reviews Yet
          </h2>
          <div className="consumer-reviews pt-5">
            <h1>{'Most helpful consumer reviews'}</h1>

            {this.props.listComment.length > 0
              ? this.props.listComment.map((item, index) => {
                  return (
                    <div className="review" key={item.id}>
                      <div className="review-title d-flex flex-row flex-wrap align-items-center">
                        <h2>{item.title}</h2>
                        <ReactStars
                          count={5}
                          size={24}
                          activeColor="#d53535"
                          classNames="consumer-reviews"
                          value={parseInt(item.ratingStar)}
                        />
                      </div>
                      <p>{item.subject}</p>
                      <span>{item.fullName}</span>
                      <span>{'date-cons'}</span>
                      <span>{'detail-car'}</span>
                      <span className="last">{'likes'}</span>
                      <i
                        id={item.id}
                        className={`${
                          this.state.isLike ? 'fas fa-heart' : 'far fa-heart'
                        } cursor-pointer  ml-auto`}
                        onClick={(e) => {
                          this.hnadleLike(item.id, item.carId);
                        }}
                        style={{
                          color: `${this.state.isLike ? '#d53535' : 'grey'}`,
                          fontSize: '25px',
                        }}></i>

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
                                      activeColor="#d53535"
                                      value={this.state.editingItem.ratingStar}
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
                                this.state.editingItem.subject.length == 0 && (
                                  <div
                                    className="position-absolute"
                                    style={{ top: '12%', left: '6%' }}>
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
