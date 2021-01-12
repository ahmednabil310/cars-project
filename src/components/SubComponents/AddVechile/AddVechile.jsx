import React from 'react';
import { useTranslation } from 'react-i18next';
import plusIconn from '../../../images/plus.png';
const AddVechile = ({ showModel }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className=" col-3  section-b_car-sub-container"
      role="button"
      onClick={() => {
        showModel();
        document.getElementById('cards_container').scrollLeft = 0;
        document.getElementById('sticky_nav').scrollLeft = 0;
      }}>
      <div className="section-b__addCar d-flex  align-items-center">
        <div className="d-flex justify-content-center align-items-center add-image__container">
          <img src={plusIconn} />
        </div>
        <h4 className="Add text-center">{t('Add a vechile')}</h4>
      </div>
    </div>
  );
};

export default AddVechile;
