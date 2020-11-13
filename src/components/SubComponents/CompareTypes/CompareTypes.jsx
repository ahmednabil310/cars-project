import React from 'react';

const CompareTypes = ({ title, types }) => {
  return (
    <div className="compare-labels">
      <h2 className="labels-title">{title}</h2>
      <h3 className="labels-types">{types}</h3>
    </div>
  );
};

export default CompareTypes;
