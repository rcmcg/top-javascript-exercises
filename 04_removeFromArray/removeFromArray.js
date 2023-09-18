const removeFromArray = function(arr, ...toRemove) {
    for (const elem of toRemove) {
        let index = arr.indexOf(elem);
        if (index != -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
