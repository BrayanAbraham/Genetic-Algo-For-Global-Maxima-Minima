//Generating Random bit
export function newBit() {
  return Math.random() > 0.5 ? 1 : 0;
}

//Converting decimal to binary
function convert2binary(value) {
  const array = [];
  while (value > 0) {
    array.push(value % 2);
    value = Math.floor(value / 2);
  }
  return array.reverse();
}

//Converting binary to decimal
function convert2decimal(array, temp = 1, increment = 2) {
  let t = temp;
  let value = 0;
  for (let i = 0; i < array.length; i++, t *= increment) {
    value += array[i] * t;
  }
  return value;
}

//Convert Decimal Numbers to IEEE format
export function decimal2IEEE(value) {
  // IF ZERO INPUT
  if (Math.abs(value) === 0) {
    return Array(32).fill(0);
  }

  //Checking Sign
  const sign = value < 0 ? [1] : [0];

  //Calculating Mantissa and Exponent
  var mantissa = [];
  var exponent = [];
  value = Math.abs(value);

  if (value < 1) {
    // If Only decimal part exists
    var exp = 0;
    for (let i = 0; i < 24 - exp; i++) {
      var temp = value * 2;
      if (mantissa.length === 0 && Math.floor(temp) === 0) {
        exp -= 1;
      } else {
        mantissa.push(Math.floor(temp));
      }
      value = temp - Math.floor(temp);
    }
    mantissa = mantissa.slice(1);
    exponent = convert2binary(exp + 126);
    //Making Exponent 8 bit
    exponent = [...Array(8 - exponent.length).fill(0), ...exponent];
  } else {
    //Splitting Decimal and floor value
    var floor = Math.floor(value);
    value -= floor;

    mantissa = convert2binary(floor);
    exp = mantissa.length - 1;

    //Calculating Decimal Part of Mantissa
    for (let i = 0; i < 24; i++) {
      temp = value * 2;
      mantissa.push(Math.floor(temp));
      value = temp - Math.floor(temp);
    }

    //Normalizing
    mantissa = mantissa.slice(1, 24);
    exponent = convert2binary(exp + 127);
    exponent = Array(8 - exponent.length)
      .fill(0)
      .concat(exponent);
  }

  return [...sign, ...exponent, ...mantissa];
}

//Convert IEEE to decimal number
export function IEEE2Decimal(array) {
  //Check of zero
  if (array.findIndex(i => i === 1) === -1) {
    return 0;
  }

  //Splitting Sign, exponent and Mantissa
  var sign = array[0];
  var exponent = array.slice(1, 9);
  var mantissa = array.slice(9);

  //Calculating Exponent
  let exp = convert2decimal(exponent.reverse()) - 127;

  let value =
    exp < 0
      ? convert2decimal(
          [...Array(Math.abs(exp + 1)).fill(0), ...[1], ...mantissa],
          1 / 2,
          1 / 2
        )
      : convert2decimal([...mantissa.slice(0, exp).reverse(), ...[1]]) +
        convert2decimal(mantissa.slice(exp), 1 / 2, 1 / 2);
  value = sign === 1 ? -1 * value : value;
  return value;
}
