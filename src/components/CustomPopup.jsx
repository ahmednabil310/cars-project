import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/Popup.css';
const CustomPopup = (props) => {
  return (
    <Popup position="right center" lockScroll={true} {...props}>
      <button className="close-popup" onClick={props.onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30.161" height="30.161" viewBox="0 0 30.161 30.161">
          <path id="Icon_material-close" data-name="Icon material-close" d="M37.661,10.538,34.623,7.5,22.58,19.543,10.538,7.5,7.5,10.538,19.543,22.58,7.5,34.623l3.038,3.038L22.58,25.618,34.623,37.661l3.038-3.038L25.618,22.58Z" transform="translate(-7.5 -7.5)" fill="#d53535"/>
        </svg>
      </button>
      <div className="popup-title">Add Review</div>
    </Popup>
  );
};

export default CustomPopup;
