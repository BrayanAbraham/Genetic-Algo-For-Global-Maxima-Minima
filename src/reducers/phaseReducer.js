import {
  SET_EQUATION,
  SHOW_DATA,
  SET_VARIABLE,
  SET_DESCRIPTION,
} from "../actions/types";

const initialState = {
  description: true,
  variablePhase: false,
  equationPhase: false,
  showPhase: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EQUATION:
      return {
        ...state,
        description: false,
        variablePhase: false,
        equationPhase: true,
        showPhase: false,
      };
    case SHOW_DATA:
      return {
        ...state,
        description: false,
        variablePhase: false,
        equationPhase: false,
        showPhase: true,
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        description: true,
        variablePhase: false,
        equationPhase: false,
        showPhase: false,
      };
    case SET_VARIABLE:
      return {
        ...state,
        description: false,
        variablePhase: true,
        equationPhase: false,
        showPhase: false,
      };
    default:
      return state;
  }
};
