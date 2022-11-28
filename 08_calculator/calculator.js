const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let unknown = numbers.reduce(function(a, b){
    return a + b
  }, 0)
  return unknown
};

const multiply = function(numbers) {
  let x = 1
  for(i = 0; i < numbers.length; i++){
    x = x * numbers[i]
  }
  return x;
};

const power = function(base, exponent) {
	if(exponent === 0){
    return 1;
  }
  else{
    return base * power(base, exponent - 1);
  }
};

const factorial = function(num) {
	if(num >= 0 && num <= 1){
    return 1;
  }
  else{
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
