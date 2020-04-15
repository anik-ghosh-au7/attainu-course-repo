let getIndexToIns = (arr, num) => arr.filter((elem) => elem < num).length;

console.log(getIndexToIns([1, 2, 3, 4], 1.5));  //  1
console.log(getIndexToIns([20, 3, 5], 19));     //  2