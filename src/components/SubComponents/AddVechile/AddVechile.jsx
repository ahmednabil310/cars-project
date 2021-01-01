import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';
import plusIconn from '../../../images/plus.png'
const AddVechile = ({ showModel }) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className=" col-3  section-b_car-sub-container"
      role="button"
      onClick={showModel}>
      <div className="section-b__addCar d-flex flex-column justify-content-center align-items-center ">
        <i className="fas fa-plus fa-4x"></i>
        <h4 className="Add text-center">{t('Add a vechile')}</h4>
      </div>
    </div>
  );
};

export default AddVechile;
