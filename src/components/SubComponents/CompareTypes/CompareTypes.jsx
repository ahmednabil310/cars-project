import React from 'react';

const CompareTypes = ({ title, types, handleClick }) => {
  return (
    <div className="compare-labels">
      <h2 className="labels-title">{title}</h2>
      <a onClick={handleClick} className="labels-types">
        {types}
      </a>
    </div>
  );
};

export default CompareTypes;
