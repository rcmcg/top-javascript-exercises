const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let res = 0;
  for (const elem of arr) {
    res += elem;
  }
  return res;
};

const multiply = function(arr) {
  let res = 1;
  for(const elem of arr) {
    res *= elem;
  }
  return res;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
  let res = 1;
	for (let i = x; i > 1; i--) {
    res *= i;
  }
  return res;
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
