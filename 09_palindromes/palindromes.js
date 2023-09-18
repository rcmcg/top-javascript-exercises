const palindromes = function (string) {
    let normalized = normalize(string)
    for (let i = 0; i < Math.floor(normalized.length / 2); i++) {
        let j = normalized.length - i - 1;
        if (normalized[i] != normalized[j]) {
            return false;
        }
    }
    return true;
};

const normalize = function(string) {
    let normalized = string.replace(' ', '');
    normalized = normalized.toLowerCase();
    return normalized.replace(/\W/g, '');
};

// Do not edit below this line
module.exports = palindromes;
