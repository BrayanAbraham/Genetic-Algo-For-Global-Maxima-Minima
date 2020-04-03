import React, { useState } from "react";
import PropTypes from "prop-types";
import IndividualData from "./IndividualData";

const Population = ({ population, fitness, mode, type }) => {
  const [all, setAll] = useState(false);

  const top5 = population.slice(0, 10);

  return (
    <div className="text-center">
      {all ? (
        <button className="btn btn-primary " onClick={e => setAll(false)}>
          See less
        </button>
      ) : null}
      <div className="row mt-3">
        {all
          ? population.map((individual, i) => (
              <div className="col-md-6" key={i}>
                <IndividualData
                  individual={individual}
                  index={i}
                  value={mode === "maxima" ? fitness[i] : -1 * fitness[i]}
                  type={type}
                />
              </div>
            ))
          : top5.map((individual, i) => (
              <div className="col-md-6" key={i}>
                <IndividualData
                  individual={individual}
                  index={i}
                  value={mode === "maxima" ? fitness[i] : -1 * fitness[i]}
                  type={type}
                />
              </div>
            ))}
      </div>
      {!all ? (
        <button className="btn btn-primary " onClick={e => setAll(true)}>
          See all
        </button>
      ) : null}
    </div>
  );
};

Population.propTypes = {
  population: PropTypes.array.isRequired,
  fitness: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Population;
