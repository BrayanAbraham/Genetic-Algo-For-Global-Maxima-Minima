import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { showData, setVariable } from "../../actions/phaseActions";
import {
  setSettings,
  initializePopulation,
} from "../../actions/populationActions";
import { settingValidation } from "../../validation/settingValidation";
import { setAlert, clearAlert } from "../../actions/alertActions";

const Equation = ({
  population,
  showData,
  setSettings,
  setAlert,
  clearAlert,
  setVariable,
  initializePopulation,
}) => {
  const [sett, setsett] = useState(population);

  const onEqChange = (e) =>
    setsett({ ...sett, [e.target.name]: e.target.value.toLowerCase() });

  const onChange = (e) =>
    setsett({
      ...sett,
      [e.target.name]: e.target.value,
    });

  const maxChange = (e) => {
    const maximum = sett.maximum;
    maximum[e.target.name] = e.target.value;
    setsett({ ...sett, maximum: maximum });
  };

  const minChange = (e) => {
    const minimum = sett.minimum;
    minimum[e.target.name] = e.target.value;
    setsett({ ...sett, minimum: minimum });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validation = settingValidation(sett);
    if (validation.isValid) {
      clearAlert();
      setSettings(validation.setting);
      initializePopulation(validation.setting);
      showData();
    } else {
      setAlert(validation.errors);
    }
  };

  const {
    equation,
    minimum,
    maximum,
    size,
    crossProbability,
    mutateProbability,
    mode,
    ignore,
  } = sett;

  return (
    <div className="container">
      <div className="mt-5">
        <div className="mb-2 text-center text-primary">
          <h4>Rules to write the expression:</h4>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Variables: </strong>x1,x2,x3....
                </li>
                <li className="list-group-item">
                  <strong>Exponent Function: </strong>exp(x1)
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Trignometry: </strong>sin(x1),cos(x1),tan(x1).....
                </li>
                <li className="list-group-item">
                  <strong>Logarithm: </strong>log(x1)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <button
            className="btn btn-outline-danger "
            onClick={(e) => setVariable()}
          >
            Change Number of Variables
          </button>
        </div>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label htmlFor="equation" className="input-group-text">
                Expression
              </label>
            </div>
            <input
              type="text"
              name="equation"
              value={equation}
              placeholder="Enter Expression"
              className="form-control"
              onChange={onEqChange}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              {minimum.map((mini, i) => (
                <div className="input-group mb-3" key={i}>
                  <div className="input-group-prepend">
                    <label htmlFor={i} className="input-group-text">
                      Minimum value of x{i + 1}
                    </label>
                  </div>
                  <input
                    type="number"
                    name={i}
                    className="form-control"
                    value={mini}
                    onChange={minChange}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="col-md-6">
              {maximum.map((maxi, i) => (
                <div className="input-group mb-3" key={i}>
                  <div className="input-group-prepend">
                    <label htmlFor={i} className="input-group-text">
                      Maximum value of x{i + 1}
                    </label>
                  </div>
                  <input
                    type="number"
                    name={i}
                    className="form-control"
                    value={maxi}
                    onChange={maxChange}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label htmlFor="size" className="input-group-text">
                    Population Size
                  </label>
                </div>
                <input
                  type="number"
                  name="size"
                  className="form-control"
                  value={size}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    htmlFor="crossProbability"
                    className="input-group-text"
                  >
                    Cross Probability
                  </label>
                </div>
                <input
                  type="number"
                  name="crossProbability"
                  className="form-control"
                  placeholder="Between 0 and 1"
                  value={crossProbability}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label
                    htmlFor="mutateProbability"
                    className="input-group-text"
                  >
                    Mutate Probability
                  </label>
                </div>
                <input
                  type="number"
                  name="mutateProbability"
                  className="form-control"
                  placeholder="Between 0 and 1"
                  value={mutateProbability}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label htmlFor="maxmin" className="input-group-text">
                    Mode
                  </label>
                </div>
                <select
                  name="mode"
                  className="custom-select"
                  value={mode}
                  onChange={onEqChange}
                >
                  <option value="" disabled>
                    Choose...
                  </option>
                  <option value="maxima">Maxima</option>
                  <option value="minima">Minima</option>
                </select>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      name="ignore"
                      value={ignore}
                      onChange={(e) => setsett({ ...sett, ignore: !ignore })}
                    />
                  </div>
                </div>
                <div className="input-group-append">
                  <input
                    type="text"
                    value="Ignore Range"
                    className="form-control bg-light"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Equation.propTypes = {
  showData: PropTypes.func.isRequired,
  population: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  clearAlert: PropTypes.func.isRequired,
  setVariable: PropTypes.func.isRequired,
  initializePopulation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  population: state.population,
});

export default connect(mapStateToProps, {
  showData,
  setSettings,
  setAlert,
  clearAlert,
  setVariable,
  initializePopulation,
})(Equation);
