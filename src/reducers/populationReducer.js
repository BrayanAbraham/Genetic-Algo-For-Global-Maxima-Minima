import {
  SET_NUMBER_OF_VARIABLES,
  CLEAR_SETTING,
  SET_SETTINGS,
  INITIALIZE_POPULATION,
  NEXT_GENERATION
} from "../actions/types";

const initialState = {
  numberOfVariables: 0,
  equation: "",
  minimum: [],
  maximum: [],
  size: 0,
  crossProbability: 0,
  mutateProbability: 0,
  mode: "",
  population: null,
  ignore: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER_OF_VARIABLES:
      return {
        ...state,
        numberOfVariables: action.payload,
        minimum: Array(action.payload).fill(0),
        maximum: Array(action.payload).fill(0)
      };
    case CLEAR_SETTING:
      return {
        ...state,
        numberOfVariables: 0,
        equation: "",
        minimum: [],
        maximum: [],
        size: 0,
        crossProbability: 0,
        mutateProbability: 0,
        mode: "",
        population: null,
        ignore: false
      };
    case SET_SETTINGS:
      return {
        ...state,
        equation: action.payload.equation,
        minimum: action.payload.minimum,
        maximum: action.payload.maximum,
        size: action.payload.size,
        crossProbability: action.payload.crossProbability,
        mutateProbability: action.payload.mutateProbability,
        mode: action.payload.mode,
        ignore: action.payload.ignore
      };
    case INITIALIZE_POPULATION:
      return {
        ...state,
        population: action.payload
      };
    case NEXT_GENERATION:
      return {
        ...state,
        population: action.payload
      };
    default:
      return state;
  }
};
