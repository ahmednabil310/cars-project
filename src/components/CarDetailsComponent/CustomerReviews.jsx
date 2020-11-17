import React, { useState } from "react";
import "../../styles/DealerPageStyles/CustomerReviews.css";
import stars from "../../images/dealer/stars.png";
const CustomerReviews = () => {
  const [openAddReviewPopup, setOpenAddReviewPopup] = useState(false);
  return (
    <>
      <div className="customer-reviews-container">
        <div className="d-flex">
          <div className="row d-flex sub-container justify-content-between align-items-center w-100">
            <div className="d-flex flex-column">
              <h3 style={{ marginBottom: 0 }}>
                <span className="special">Customer</span> Reviews
              </h3>
              <div>
                <h7>
                  Read what other owners think about the 2020 Genesis G80.
                </h7>
                <svg
                  id="Component_6_1"
                  data-name="Component 6 – 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="243.729"
                  height="36.969"
                  viewBox="0 0 243.729 36.969"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#d53535" />
                      <stop offset="1" stop-color="#6b1b1b" />
                    </linearGradient>
                    <linearGradient
                      id="linear-gradient-2"
                      x1="0.777"
                      x2="0.777"
                      y2="1.686"
                      gradientUnits="objectBoundingBox"
                    >
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
            <button type="button" onClick={() => setOpenAddReviewPopup(true)}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                >
                  <path
                    id="Icon_material-add"
                    data-name="Icon material-add"
                    d="M22.5,16.071H16.071V22.5H13.929V16.071H7.5V13.929h6.429V7.5h2.143v6.429H22.5Z"
                    transform="translate(-7.5 -7.5)"
                    fill="#fff"
                  />
                </svg>
                Write a review
              </div>
            </button>
          </div>
        </div>
        <div className="ratings-section row">
          <div className="col-2 d-flex justify-content-center align-items-center flex-column">
            <h1>4.0</h1>
            <span>(4/5)</span>
          </div>
          <div className="col-3 d-flex flex-column justify-content-between">
            <img src={stars} />
            <p>10 Reviews</p>
            <p>See all reviews</p>
            <p>Write a review</p>
          </div>
          <div className="col-7">
            <div className="d-flex align-items-center justify-content-around">
              <div className="d-flex justify-content-between align-items-center">
                <h2>5</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="28.5"
                  viewBox="0 0 30 28.5"
                >
                  <path
                    id="Icon_material-star"
                    data-name="Icon material-star"
                    d="M18,25.9l9.27,5.6L24.81,20.955,33,13.86l-10.785-.915L18,3l-4.215,9.945L3,13.86l8.19,7.1L8.73,31.5Z"
                    transform="translate(-3 -3)"
                    fill="#d53535"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="650"
                height="23"
                viewBox="0 0 774 23"
              >
                <line
                  id="Line_32"
                  data-name="Line 32"
                  x2="751"
                  transform="translate(11.5 11.5)"
                  fill="none"
                  stroke="#c4c4c4"
                  stroke-linecap="round"
                  stroke-width="23"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="309"
                  height="23"
                  viewBox="0 0 309 23"
                >
                  <line
                    id="Line_37"
                    data-name="Line 37"
                    x2="286"
                    transform="translate(11.5 11.5)"
                    fill="none"
                    stroke="#d53535"
                    stroke-linecap="round"
                    stroke-width="23"
                  />
                </svg>
              </svg>
            </div>

            <div className="d-flex align-items-center justify-content-around">
              <div className="d-flex justify-content-between align-items-center">
                <h2>4</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="28.5"
                  viewBox="0 0 30 28.5"
                >
                  <path
                    id="Icon_material-star"
                    data-name="Icon material-star"
                    d="M18,25.9l9.27,5.6L24.81,20.955,33,13.86l-10.785-.915L18,3l-4.215,9.945L3,13.86l8.19,7.1L8.73,31.5Z"
                    transform="translate(-3 -3)"
                    fill="#d53535"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="650"
                height="23"
                viewBox="0 0 774 23"
              >
                <line
                  id="Line_32"
                  data-name="Line 32"
                  x2="751"
                  transform="translate(11.5 11.5)"
                  fill="none"
                  stroke="#c4c4c4"
                  stroke-linecap="round"
                  stroke-width="23"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="309"
                  height="23"
                  viewBox="0 0 309 23"
                >
                  <line
                    id="Line_37"
                    data-name="Line 37"
                    x2="286"
                    transform="translate(11.5 11.5)"
                    fill="none"
                    stroke="#d53535"
                    stroke-linecap="round"
                    stroke-width="23"
                  />
                </svg>
              </svg>
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <div className="d-flex justify-content-between align-items-center">
                <h2>3</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="28.5"
                  viewBox="0 0 30 28.5"
                >
                  <path
                    id="Icon_material-star"
                    data-name="Icon material-star"
                    d="M18,25.9l9.27,5.6L24.81,20.955,33,13.86l-10.785-.915L18,3l-4.215,9.945L3,13.86l8.19,7.1L8.73,31.5Z"
                    transform="translate(-3 -3)"
                    fill="#d53535"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="650"
                height="23"
                viewBox="0 0 774 23"
              >
                <line
                  id="Line_32"
                  data-name="Line 32"
                  x2="751"
                  transform="translate(11.5 11.5)"
                  fill="none"
                  stroke="#c4c4c4"
                  stroke-linecap="round"
                  stroke-width="23"
                />
              </svg>
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <div className="d-flex justify-content-between align-items-center">
                <h2>2</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="28.5"
                  viewBox="0 0 30 28.5"
                >
                  <path
                    id="Icon_material-star"
                    data-name="Icon material-star"
                    d="M18,25.9l9.27,5.6L24.81,20.955,33,13.86l-10.785-.915L18,3l-4.215,9.945L3,13.86l8.19,7.1L8.73,31.5Z"
                    transform="translate(-3 -3)"
                    fill="#d53535"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="650"
                height="23"
                viewBox="0 0 774 23"
              >
                <line
                  id="Line_32"
                  data-name="Line 32"
                  x2="751"
                  transform="translate(11.5 11.5)"
                  fill="none"
                  stroke="#c4c4c4"
                  stroke-linecap="round"
                  stroke-width="23"
                />
              </svg>
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <div className="d-flex justify-content-between align-items-center">
                <h2>1</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="28.5"
                  viewBox="0 0 30 28.5"
                >
                  <path
                    id="Icon_material-star"
                    data-name="Icon material-star"
                    d="M18,25.9l9.27,5.6L24.81,20.955,33,13.86l-10.785-.915L18,3l-4.215,9.945L3,13.86l8.19,7.1L8.73,31.5Z"
                    transform="translate(-3 -3)"
                    fill="#d53535"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="650"
                height="23"
                viewBox="0 0 774 23"
              >
                <line
                  id="Line_32"
                  data-name="Line 32"
                  x2="751"
                  transform="translate(11.5 11.5)"
                  fill="none"
                  stroke="#c4c4c4"
                  stroke-linecap="round"
                  stroke-width="23"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="consumer-reviews">
          <h1>Most helpful consumer reviews</h1>
          <div className="review">
            <div className="review-title d-flex flex-row align-items-center">
              <h2>My 3rd consecutive Genesis</h2>
              <img src={stars} />
            </div>
            <p>
              My 2020 G80 was a no brainer for me when my 2018 G80 lease was up.
              I started my love of the Genesis in 2012 with the prior
              generation, when it was under the Hyundai nameplate. In 2015 I
              leased the current generation Genesis (still under Hyundai
              nameplate). 2018 marked my 1st under its own division. I say the
              G80 is a no brainer simply because there isn’t any other vehicle
              within its price category that gives you as much as three G80
              does. I’ve always had the 3.8 V6 and never once thought I needed
              more power. I enjoy the ultra quiet cabin as well as the
              exceptional seat comfort. The 3 years of Genesis valet is icing on
              the cake, never having to return to the dealer (for any reason)
              the valet service is simple thru the Genesis app on my smart
              phone. My car is picked up at my place of employment, a loaner
              dropped off and then returned when service is completed (nicely
              detailed, I might add). I always choose one convenience option
              package up from the base model, which gives me anything from smart
              cruise to lane departure to 3d view cameras to aid in parking,
              also included is heated seats front and back as well as air
              conditioned front seats. The Upgraded Lexicon sound system is
              among the best I’ve experienced in a vehicle. My combined MPG
              (mostly city than highway) is always around 21 mpg. I really hoped
              the GV80 suv was available when my lease was up but I’ll look
              forward to that in the next 30 months while I enjoy my 4 Genesis
              vehicle.
            </p>
            <span>Phil Wilson</span>
            <span>Date : 03/17/2020.</span>
            <span>3.8 4dr Sedan (3.8L 6cyl 8A)</span>
            <span className="last">50 people like this comment</span>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="29.25"
              height="27"
              viewBox="0 0 29.25 27"
            >
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
            <div className="review-title d-flex flex-row align-items-center">
              <h2>My 3rd consecutive Genesis</h2>
              <img src={stars} />
            </div>
            <p>
              I just took delivery of a 2020 G80 5.0 Ultimate model. Last year
              for the G80 V8. This car is impressive in so many ways. It may not
              quite match the German V8 cars for power, but for $20,000 less it
              is very impressive nonetheless. I think 420 HP is plenty for me.
              In addition, Genesis is rated higher than the German brands for
              reliability. If you don’t need the perceived “snob appeal” of
            </p>
            <span>Phil Wilson</span>
            <span>Date : 03/17/2020.</span>
            <span>3.8 4dr Sedan (3.8L 6cyl 8A)</span>
            <span className="last">50 people like this comment</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.875"
              height="25.266"
              viewBox="0 0 28.875 25.266"
            >
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
            <div className="review-title d-flex flex-row align-items-center">
              <h2>My 3rd consecutive Genesis</h2>
              <img src={stars} />
            </div>
            <p>
              Stylish and comfortable. Ride a bit stiff but getting use to it.
              Features galore.
            </p>
            <span>Phil Wilson</span>
            <span>Date : 03/17/2020.</span>
            <span>3.8 4dr Sedan (3.8L 6cyl 8A)</span>
            <span className="last">50 people like this comment</span>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="29.25"
              height="27"
              viewBox="0 0 29.25 27"
            >
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

export default CustomerReviews;
