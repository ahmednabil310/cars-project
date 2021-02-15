/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../../styles/DealerPageStyles/CarDetails.css';
import ReactBnbGallery from 'react-bnb-gallery';
const CarDetails = (props) => {
  const carImages = [
    props.data.image_3,
    props.data.image_4,
    props.data.image_5,
    props.data.image_6,
    props.data.image_7,
    props.data.image_8,
    props.data.image_9,
    props.data.image_10,
    props.data.image_11,
    props.data.image_12,
    // props.data.image_13,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [prevImage, setPrevImage] = useState(-1);
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState('');

  return (
    <>
      <div className='car-details-container'>
        {props.data.image_3 ? (
          renderCarousel()
        ) : (
          <div className="row">
            <div className='col-lg-6 col-12 bigger-image bigger-image-first'>
              <img src={props.data.image_1} alt='first-image' />
            </div>
            <div className='col-lg-6 col-12 bigger-image'>
              <img src={props.data.image_2} alt='second-image' />
            </div>
          </div>
        )}
      </div>
      {props.data.image_3 && (
        <ReactBnbGallery
          photos={carImages}
          show={isOpen}
          onClose={() => setIsOpen(false)}
          activePhotoIndex={currentImage}
        />
      )}
    </>
  );

  function renderCarousel() {
    return (
      <div
        className='row'
        style={{ border: '1px solid #eaeff5', padding: '1.5rem 0' }}
      >
        <div className='col-lg-2 hide-scrollbar images-panel'>
          {carImages.map((img, index) => (
            <div>
              <img
                key={index}
                src={img}
                className='w-100 mb-2'
                onClick={() => {
                  if (direction) return;
                  if (index - currentImage > 0) setDirection('right');
                  else if (index - currentImage < 0) setDirection('left');
                  else setDirection('');
                  setPrevImage(currentImage);
                  setCurrentImage(index);
                }}
              />
              <div className={currentImage === index ? 'active' : ''}></div>
            </div>
          ))}
        </div>
        <div className='col-lg-10 col-12'>
          <div className='current-image-container'>
            <img
              src={carImages[currentImage]}
              className={
                'w-100 current-image ' + (direction && direction + '-enterance')
              }
              onClick={() => setIsOpen(true)}
              onAnimationEnd={() => setDirection('')}
            ></img>
            {direction && (
              <img
                src={carImages[prevImage]}
                className={'w-100 prev-image ' + direction + '-exit'}
              />
            )}
          </div>
          <a
            class='carousel-control left'
            onClick={() => {
              if (direction) return;
              setDirection('left');
              setPrevImage(currentImage);
              setCurrentImage(
                (((currentImage - 1) % carImages.length) + carImages.length) %
                  carImages.length
              );
            }}
          >
            <i class='fa fa-angle-left'></i>
          </a>
          <a
            class='carousel-control right'
            onClick={() => {
              if (direction) return;
              setDirection('right');
              setPrevImage(currentImage);
              setCurrentImage((currentImage + 1) % carImages.length);
            }}
          >
            <i class='fa fa-angle-right'></i>
          </a>
        </div>
      </div>
    );
  }
};

export default CarDetails;
