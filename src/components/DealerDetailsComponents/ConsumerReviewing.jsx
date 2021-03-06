import React, { useState } from 'react';
import '../../styles/DealerPageStyles/CustomerReviews.css';
import '../../styles/DealerDetailsStyles/ConsumerReviewing.css';

// Images
import bigstars from '../../images/dealer/bigstars.png';
import singleStar from '../../images/dealer/singlestar.png';
import startsGroup from '../../images/starts_group.png';

// Model Component
import ModelFields from '../SubComponents/ModelFields/ModelFields';

// the hook
import { useTranslation } from 'react-i18next';

const ConsumerReviewing = () => {
  const { t, i18n } = useTranslation();

  const [modalShow, setModalShow] = useState(false);

  const [review, setReview] = useState({
    title: '',
    rating: '',
    comment: '',
  });

  const { title, rating, comment } = review;

  const inputChangeHandler = (event) => {
    setReview({ ...review, [event.target.name]: event.target.value });
  };

  const addReviewHandler = () => {
    setModalShow(false);
    console.log(review);
  };

  return (
    <>
      <div className="container-fluid customer-reviews">
        <div className="row d-flex justify-content-between align-items-center w-100">
          <div className="col-md-8">
            <div className="d-flex flex-column">
              <h3 className="customer-review-title mb-0">
                <span className="special">{t('Consumer')}</span>{' '}
                {t('Reviewing UAE Car Lease Services')}
              </h3>
              <div className="d-flex align-items-center">
                <h6 className="customer-review-sub-title mb-0">
                  {t('Here is some reviews')}
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
                      <stop offset="0" stop-color="#d53535" />
                      <stop offset="1" stop-color="#6b1b1b" />
                    </linearGradient>
                    <linearGradient
                      id="linear-gradient-2"
                      x1="0.777"
                      x2="0.777"
                      y2="1.686"
                      gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#efefef" />
                      <stop offset="1" stop-color="#c4c4c4" />
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
          <div className="col-md-4">
            <button
              type="button"
              className="mr-0 mt-1 btn-block py-2"
              onClick={() => {document.getElementById('loginPopUpShow')?document.getElementById('loginPopUpShow').click():setModalShow(true);}}>
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
                {t('Write a review')}
              </div>
            </button>
            <ModelFields
              show={modalShow}
              onHide={() => setModalShow(false)}
              submitHandler={addReviewHandler}
              submitValid={comment}
              title="Review">
              <div className="form-group position-relative">
                <input
                  type="text"
                  className="form-control p-3 px-4 review__input review__input_title position-relative bg-transparent"
                  name="title"
                  value={title}
                  onChange={inputChangeHandler}
                />
                {title.length === 0 && (
                  <div className="position-absolute review__input_title__placeholder">
                    <span className="main__gary mr-2">{t('Review title')}</span>
                    <span
                      className="main__gary ml-2"
                      style={{ color: '#C4C4C4' }}>
                      {t('letters or numbers')}
                    </span>
                  </div>
                )}
              </div>
              <div className="form-group position-relative">
                <input
                  type="text"
                  className="form-control p-3 px-4 review__input review__input_rating position-relative bg-transparent"
                  name="rating"
                  value={rating}
                  onChange={inputChangeHandler}
                />
                {rating.length === 0 && (
                  <div className="position-absolute review__input_rating__placeholder">
                    <span className="main__gary mr-2">
                      {t('Review rating')}
                    </span>
                    <span
                      className="ml-2 d-inline-block"
                      style={{ width: '135px' }}>
                      <img
                        className="img-fluid"
                        src={startsGroup}
                        alt="startsGroup"
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
                  value={comment}
                  onChange={inputChangeHandler}></textarea>
                {comment.length === 0 && (
                  <div
                    className="position-absolute"
                    style={{ top: '12%', left: '6%' }}>
                    <span className="main__gary mr-2">
                      {t('Review details')}
                    </span>
                    <span
                      className="main__gary ml-2"
                      style={{ color: '#C4C4C4' }}>
                      {t('360 letters or numbers')}
                    </span>
                  </div>
                )}
              </div>
            </ModelFields>
          </div>
        </div>
        <div className="ratings-section row align-items-center">
          <div className="col-sm-4 col-md-5 col-lg-2 text-center rating-score-container ">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <h1 className="mb-0">4.0</h1>
                <span className="d-block mb-5">(4/5)</span>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-2 offset-md-1 offset-lg-0 d-flex justify-content-start align-items-center">
            <div className="ml-2">
              <img
                src={bigstars}
                className="big-star"
                alt="rating"
                height="27px"
              />
              <p className="mt-3">{t('10 Reviews')}</p>
              <p>{t('See all reviews')}</p>
              <p className="">{t('Write a review')}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <div className="progress-container">
              <table className="table mb-0">
                <tbody>
                  <tr>
                    <td>5</td>
                    <td>
                      <img
                        src={singleStar}
                        alt="rating"
                        height="20px"
                        width="20px"
                      />
                    </td>
                    <td className="ml-2">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '85%' }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </td>
                    <td className="pl-3">85%</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <img
                        src={singleStar}
                        alt="rating"
                        height="20px"
                        width="20px"
                      />
                    </td>
                    <td className="ml-2">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '75%' }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </td>
                    <td className="pl-3">75%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <img
                        src={singleStar}
                        alt="rating"
                        height="20px"
                        width="20px"
                      />
                    </td>
                    <td className="ml-2">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '60%' }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </td>
                    <td className="pl-3">60%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <img
                        src={singleStar}
                        alt="rating"
                        height="20px"
                        width="20px"
                      />
                    </td>
                    <td className="ml-2">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '45%' }}
                          aria-valuenow="45"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </td>
                    <td className="pl-3">45%</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src={singleStar}
                        alt="rating"
                        height="20px"
                        width="20px"
                      />
                    </td>
                    <td className="ml-2">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: '10%' }}
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </td>
                    <td className="pl-3">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="consumer-reviews">
          <h1>{t('Customer reviews')}</h1>
          <div className="review">
            <div className="review-title d-flex flex-row flex-wrap align-items-center">
              <h2>{t('UAECLS is the best store in town')}</h2>
              <img src={bigstars} alt="rating" className="mb-1" height="25px" />
            </div>
            <p>{t('UAECLS is the best store in town-p')}</p>
            <span>{t('Phil Wilson')}</span>
            <span>{t('date-cons')}</span>
            <span>{t('detail-car')}</span>
            <span className="last">{t('likes')}</span>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="29.25"
              height="27"
              viewBox="0 0 29.25 27">
              <path
                id="Icon_ionic-md-heart-empty"
                data-name="Icon ionic-md-heart-empty"
                d="M24.581,4.5A8.652,8.652,0,0,0,18,7.587,8.652,8.652,0,0,0,11.419,4.5a7.952,7.952,0,0,0-8.044,8.093c0,5.59,4.971,10.076,12.5,16.995L18,31.5l2.123-1.913c7.53-6.919,12.5-11.4,12.5-16.995A7.952,7.952,0,0,0,24.581,4.5ZM18.9,27.654l-.3.274-.6.548-.6-.548-.3-.274a89.372,89.372,0,0,1-8.627-8.578c-1.969-2.44-2.841-4.437-2.841-6.483A5.848,5.848,0,0,1,7.3,8.423a5.722,5.722,0,0,1,4.12-1.673,6.449,6.449,0,0,1,4.859,2.285L18,11.081l1.723-2.046A6.425,6.425,0,0,1,24.581,6.75a5.75,5.75,0,0,1,4.127,1.673,5.86,5.86,0,0,1,1.666,4.17c0,2.039-.879,4.043-2.841,6.483A89.552,89.552,0,0,1,18.9,27.654Z"
                transform="translate(-3.375 -4.5)"
                fill="#c4c4c4"
              />
            </svg>
          </div>
          <div className="review">
            <div className="review-title d-flex flex-row flex-wrap align-items-center">
              <h2>{t('Don’t use UAECLS')}</h2>
              <img src={bigstars} alt="rating" className="mb-1" height="25px" />
            </div>
            <p>{t('Don’t use UAECLS-p')}</p>
            <span>{t('Phil Wilson')}</span>
            <span>{t('date-cons')}</span>
            <span>{t('detail-car')}</span>
            <span className="last">{t('likes')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.875"
              height="25.266"
              viewBox="0 0 28.875 25.266">
              <path
                id="Icon_awesome-heart"
                data-name="Icon awesome-heart"
                d="M26.072,3.975a7.712,7.712,0,0,0-10.523.767L14.437,5.887,13.326,4.742A7.712,7.712,0,0,0,2.8,3.975,8.1,8.1,0,0,0,2.244,15.7L13.157,26.968a1.768,1.768,0,0,0,2.555,0L26.624,15.7a8.093,8.093,0,0,0-.553-11.725Z"
                transform="translate(0.001 -2.248)"
                fill="#d53535"
              />
            </svg>
          </div>
          <div className="review">
            <div className="review-title d-flex flex-row flex-wrap align-items-center">
              <h2>{t('Best wishes')}</h2>
              <img src={bigstars} alt="rating" className="mb-1" height="25px" />
            </div>
            <p>{t('Best wishes-p')}</p>
            <span>{t('Phil Wilson')}</span>
            <span>{t('date-cons')}</span>
            <span>{t('detail-car')}</span>
            <span className="last">{t('likes')}</span>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="29.25"
              height="27"
              viewBox="0 0 29.25 27">
              <path
                id="Icon_ionic-md-heart-empty"
                data-name="Icon ionic-md-heart-empty"
                d="M24.581,4.5A8.652,8.652,0,0,0,18,7.587,8.652,8.652,0,0,0,11.419,4.5a7.952,7.952,0,0,0-8.044,8.093c0,5.59,4.971,10.076,12.5,16.995L18,31.5l2.123-1.913c7.53-6.919,12.5-11.4,12.5-16.995A7.952,7.952,0,0,0,24.581,4.5ZM18.9,27.654l-.3.274-.6.548-.6-.548-.3-.274a89.372,89.372,0,0,1-8.627-8.578c-1.969-2.44-2.841-4.437-2.841-6.483A5.848,5.848,0,0,1,7.3,8.423a5.722,5.722,0,0,1,4.12-1.673,6.449,6.449,0,0,1,4.859,2.285L18,11.081l1.723-2.046A6.425,6.425,0,0,1,24.581,6.75a5.75,5.75,0,0,1,4.127,1.673,5.86,5.86,0,0,1,1.666,4.17c0,2.039-.879,4.043-2.841,6.483A89.552,89.552,0,0,1,18.9,27.654Z"
                transform="translate(-3.375 -4.5)"
                fill="#c4c4c4"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumerReviewing;
