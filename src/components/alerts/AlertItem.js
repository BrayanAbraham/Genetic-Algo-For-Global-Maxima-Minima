import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeAlert } from "../../actions/alertActions";

const AlertItem = ({ a, removeAlert }) => {
  return (
    <div className={`alert alert-${a.type} alert-dismissable fase show`}>
      {a.msg}
      <button className="close" type="button" onClick={e => removeAlert(a.id)}>
        <span>&times;</span>
      </button>
    </div>
  );
};

AlertItem.propTypes = {
  a: PropTypes.object.isRequired,
  removeAlert: PropTypes.func.isRequired
};

export default connect(null, { removeAlert })(AlertItem);
