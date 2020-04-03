import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AlertItem from "./AlertItem";

const Alert = ({ alerts: { alerts } }) => {
  return (
    <div className="container">
      <div className="mt-5">
        {alerts.map(a => (
          <AlertItem a={a} key={a.id} />
        ))}
      </div>
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.object.isRequired
};

const mapStateToProps = State => ({
  alerts: State.alert
});

export default connect(mapStateToProps, {})(Alert);
