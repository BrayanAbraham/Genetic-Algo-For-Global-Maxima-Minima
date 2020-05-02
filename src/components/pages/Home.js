import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Equation from "../parts/Equation";
import NoOfVariables from "../parts/NoOfVariables";
import Data from "../parts/Data";
import Alert from "../alerts/Alert";
import Instructions from "../layout/Instructions";
import Description from "../parts/Description";

const Home = ({
  phase: { variablePhase, equationPhase, showPhase, description },
}) => {
  return (
    <Fragment>
      {description ? <Description /> : <Instructions />}
      <Alert />
      {variablePhase ? <NoOfVariables /> : null}
      {equationPhase ? <Equation /> : null}
      {showPhase ? <Data /> : null}
    </Fragment>
  );
};

Home.propTypes = {
  phase: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  phase: state.phase,
});

export default connect(mapStateToProps)(Home);
