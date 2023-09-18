const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (9*celsius + 160) / 5;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
