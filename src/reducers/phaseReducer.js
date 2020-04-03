import { SET_EQUATION, SHOW_DATA, SET_VARIABLE } from "../actions/types";

const initialState = {
  variablePhase: true,
  equationPhase: false,
  showPhase: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EQUATION:
      return {
        ...state,
        variablePhase: false,
        equationPhase: true,
        showPhase: false
      };
    case SHOW_DATA:
      return {
        ...state,
        variablePhase: false,
        equationPhase: false,
        showPhase: true
      };
    case SET_VARIABLE:
      return {
        ...state,
        variablePhase: true,
        equationPhase: false,
        showPhase: false
      };
    default:
      return state;
  }
};
