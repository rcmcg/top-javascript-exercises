const getTheTitles = function(books) {
    let retArr = []
    for (const book of books) {
        retArr.push(book.title)
    }
    return retArr;
};

// Do not edit below this line
module.exports = getTheTitles;
