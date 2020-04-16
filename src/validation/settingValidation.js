import { evaluate } from "mathjs";

export const variableValidation = (noOfVariables) => {
  let errors = {};
  let isValid = true;
  if (noOfVariables === "") {
    errors.msg = "Please Enter The Number of Variables";
    isValid = false;
  } else {
    noOfVariables = parseInt(noOfVariables, 10);
    if (noOfVariables <= 0) {
      errors.msg = "Number of Variables must be greater that 0";
      isValid = false;
    }
  }
  if (isValid === false) {
    errors.type = "danger";
  }
  return { errors, isValid };
};

export const settingValidation = (setting) => {
  let errors = {};
  let isValid = true;
  const {
    mode,
    minimum,
    maximum,
    equation,
    size,
    crossProbability,
    mutateProbability,
  } = setting;
  if (mode === "") {
    isValid = false;
    errors.msg = "Select Mode";
  } else if (size === "" || parseInt(size) < 10) {
    isValid = false;
    errors.msg = "Enter Population Size Greater than or equal to 10";
  } else if (
    crossProbability === null ||
    crossProbability === "" ||
    parseFloat(crossProbability) < 0 ||
    parseFloat(crossProbability) > 1
  ) {
    isValid = false;
    errors.msg = "Enter Cross Probability in between 0 & 1";
  } else if (
    mutateProbability === null ||
    mutateProbability === "" ||
    parseFloat(mutateProbability) < 0 ||
    parseFloat(mutateProbability) > 1
  ) {
    isValid = false;
    errors.msg = "Enter Mutate Probability in between 0 & 1";
  } else if (checkArray(maximum)) {
    isValid = false;
    errors.msg = "Enter all Maximum Values";
  } else if (checkArray(minimum)) {
    isValid = false;
    errors.msg = "Enter all Minimum Values";
  } else if (equation === "") {
    isValid = false;
    errors.msg = "Enter equation";
  } else {
    setting.size = parseInt(size);
    setting.crossProbability = parseFloat(crossProbability);
    setting.mutateProbability = parseFloat(mutateProbability);
    setting.maximum = maximum.map((max) => parseFloat(max));
    setting.minimum = minimum.map((min) => parseFloat(min));
    var check = false;
    for (let i = 0; i < minimum.length; i++) {
      if (minimum[i] >= maximum[i]) {
        check = true;
        break;
      }
    }
    if (check) {
      isValid = false;
      errors.msg = "Minimum Must be Less than Maximum";
    } else {
      try {
        var scope = {};
        for (let i = 0; i < maximum.length; i++) {
          var k = "x" + (i + 1);
          scope[k] = maximum[i];
        }
        evaluate(equation, scope);
        scope = {};
        for (let i = 0; i < minimum.length; i++) {
          k = "x" + (i + 1);
          scope[k] = minimum[i];
        }
        evaluate(equation, scope);
      } catch (error) {
        console.log(error.message);
        isValid = false;
        errors.msg = "Check expression and Boundary Values";
      }
    }
  }
  if (isValid === false) {
    errors.type = "danger";
  }
  return { setting, errors, isValid };
};

const checkArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let x = parseFloat(array);
    if (isNaN(x) || x === null) {
      return true;
    }
  }
  return false;
};
