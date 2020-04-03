import React from "react";
import PropTypes from "prop-types";
import { IEEE2Decimal } from "../../utils/Utils";

const IndividualData = ({ individual, index, value, type }) => {
  return (
    <div className={`card border-${type} mb-3 text-center`}>
      <div className={`card-header bg-${type} text-light`}>
        {index === -1 ? "Fittest Individual" : `Individual ${index + 1}`}
      </div>
      <div className="card-body">
        {individual.DNAset.map((DNA, i) => (
          <div key={i}>
            <strong>DNA {i + 1}: </strong>
            {DNA}
          </div>
        ))}
      </div>
      <div className="card-body">
        {individual.DNAset.map((DNA, i) => (
          <div key={i}>
            <strong>x{i + 1}:</strong>
            {IEEE2Decimal(DNA)}
          </div>
        ))}
      </div>
      <div className="card-body">
        <h5 className="card-title">Value:</h5>
        <p className="card-text">{value}</p>
      </div>
    </div>
  );
};

IndividualData.propTypes = {
  individual: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default IndividualData;
