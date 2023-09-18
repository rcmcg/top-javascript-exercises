const reverseString = function(string) {
    let stringLength = string.length;
    let reversedStringArr = new Array(stringLength);
    for(let i = Math.floor(stringLength / 2); i < stringLength; i++) {
        let j = stringLength - i - 1;
        let tmp = string[i];
        reversedStringArr[i] = string[j];
        reversedStringArr[j] = tmp;
    }
    return reversedStringArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
