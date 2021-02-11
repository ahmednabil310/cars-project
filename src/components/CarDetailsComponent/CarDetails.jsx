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
    props.data.image_13,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <div className="car-details-container">
        <div className="row ">
          {/* <div className="col-lg-6 col-12 bigger-image bigger-image-first">
            <img src={props.data.image_1} alt="first-image" />
          </div>
          <div className="col-lg-6 col-12 bigger-image">
            <img src={props.data.image_2} alt="second-image" />
          </div> */}
          <div
            className="col-lg-3 col-12 hide-scrollbar"
            style={{ maxHeight: '705px', overflowY: 'auto' }}>
            {carImages.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-100 pb-3"
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <div className="col-lg-9 col-12">
            <img
              src={carImages[currentImage]}
              className="w-100"
              onClick={() => setIsOpen(true)}
              style={{ minHeight: '705px' }}
            />
          </div>
        </div>
      </div>
      <ReactBnbGallery
        photos={carImages}
        show={isOpen}
        onClose={() => setIsOpen(false)}
        activePhotoIndex={currentImage}
      />
    </>
  );
};

export default CarDetails;
