const fibonacci = function(num) {
    let parsedNum = parse(num);
    if (parsedNum == -1) {
        return 'OOPS';
    }
    let prev = 1;
    let curr = 1;
    for (let i = 3; i <= parsedNum; i++) {
        let tmp = prev + curr;
        prev = curr;
        curr = tmp;
    }
    return curr;
};

const parse = function(num) {
    if (!isNaN(num)) {
        let asInt = Number.parseInt(num);
        if (asInt > 0) {
            return asInt;
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}

// Do not edit below this line
module.exports = fibonacci;
