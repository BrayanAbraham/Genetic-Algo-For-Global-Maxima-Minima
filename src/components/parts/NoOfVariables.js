import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { variableValidation } from "../../validation/settingValidation";
import { setEquation, setDescription } from "../../actions/phaseActions";
import {
  setNumberOfVariables,
  clearSetting,
} from "../../actions/populationActions";
import { setAlert } from "../../actions/alertActions";

const NoOfVariables = ({
  population: { numberOfVariables },
  setEquation,
  setNumberOfVariables,
  clearSetting,
  setAlert,
  setDescription,
}) => {
  const [variables, setvariables] = useState(numberOfVariables);

  const onSubmit = (e) => {
    e.preventDefault();
    const validation = variableValidation(variables);
    if (!validation.isValid) {
      setAlert(validation.errors);
    } else {
      clearSetting();
      setNumberOfVariables(parseInt(variables, 10));
      setEquation();
    }
  };

  return (
    <div className="container ">
      <div className="mt-5">
        <div className="text-left">
          <button className="btn btn-primary" onClick={() => setDescription()}>
            GO TO DESCRIPTION
          </button>
        </div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <form>
              <div className="form-group text-center">
                <label htmlFor="numberofvariables" className="h4 text-primary">
                  Enter Number of Variables
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    value={variables}
                    name="numberofvariables"
                    className="form-control"
                    onChange={(e) => setvariables(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" onClick={onSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

NoOfVariables.propTypes = {
  setEquation: PropTypes.func.isRequired,
  setNumberOfVariables: PropTypes.func.isRequired,
  clearSetting: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  population: PropTypes.object.isRequired,
  setDescription: PropTypes.func.isRequired,
};

const mapStateToProps = (State) => ({
  population: State.population,
});

export default connect(mapStateToProps, {
  setEquation,
  setNumberOfVariables,
  clearSetting,
  setAlert,
  setDescription,
})(NoOfVariables);
