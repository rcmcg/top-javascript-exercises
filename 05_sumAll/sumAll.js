const sumAll = function(firstNumber, secondNumber) {
    if (!validateParams(firstNumber, secondNumber)) {
        return 'ERROR';
    }
    const [min, max] = getMinMax(firstNumber, secondNumber);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }  
    return sum;
};

const validateParams = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return false;
    }
    if (firstNumber < 0 || secondNumber < 0) {
        return false;
    }
    return true;
};

const getMinMax= function(firstNumber, secondNumber) {
    let min = -1;
    let max = -1;
    if (firstNumber <= secondNumber) {
        min = firstNumber;
        max = secondNumber;
    } else {
        min = secondNumber;
        max = firstNumber;
    }
    return [min, max];
}

// Do not edit below this line
module.exports = sumAll;
