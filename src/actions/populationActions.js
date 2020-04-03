import {
  SET_NUMBER_OF_VARIABLES,
  CLEAR_SETTING,
  SET_SETTINGS,
  INITIALIZE_POPULATION,
  NEXT_GENERATION
} from "./types";
import Population from "../genAlgoClasses/Population";

export const setNumberOfVariables = numberOfVariables => dispatch => {
  dispatch({
    type: SET_NUMBER_OF_VARIABLES,
    payload: numberOfVariables
  });
};

export const clearSetting = () => dispatch => {
  dispatch({
    type: CLEAR_SETTING
  });
};

export const setSettings = formData => dispatch => {
  dispatch({
    type: SET_SETTINGS,
    payload: formData
  });
};

export const initializePopulation = data => dispatch => {
  const {
    size,
    minimum,
    maximum,
    mode,
    crossProbability,
    mutateProbability,
    equation,
    ignore
  } = data;
  const newPopulation = new Population(
    size,
    minimum,
    maximum,
    mode,
    crossProbability,
    mutateProbability,
    equation,
    ignore
  );
  dispatch({
    type: INITIALIZE_POPULATION,
    payload: newPopulation
  });
};

export const nextGeneration = population => dispatch => {
  population.nextGeneration();
  dispatch({
    type: NEXT_GENERATION,
    payload: population
  });
};
