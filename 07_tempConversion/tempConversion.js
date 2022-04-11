const ftoc = function() {                     // conversion from fahrenheit to celsius
  let temp = (arguments[0]-32)* 5/9;          // formulae for converting fahrenheit to celsius
  let rounded = Math.round(temp * 10) / 10;   // rounds-off to one decimal place
  return rounded;
};

const ctof = function() {
  let temp = arguments[0]* 9/5 + 32;             // formulae for converting celsius to fahrenheit
  let rounded = Math.round(temp * 10) / 10;      // rounds-off to one decimal place
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
