let check = (arr, num) => arr.indexOf(num) !== -1 ? true : false;

console.log(check([1, 2, 3, 4, 5], 3)); //  true
console.log(check([1, 1, 2, 1, 1], 3)); //  false
console.log(check([5, 5, 5, 6], 5));    //  true
console.log(check([], 5));  //  false