const removeFromArray = function(array, ...removeNums) {
    for (const removeNum of removeNums) {
        array = array.filter(num => num !== removeNum);
    }
    return array;
};

// removeFromArray([1, 2, 34, 4, 55, 4], 3, 4);
// Do not edit below this line
module.exports = removeFromArray;
