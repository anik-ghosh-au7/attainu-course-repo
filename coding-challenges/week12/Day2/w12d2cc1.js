var removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1,2,3,4,3,2,1])); // [ 1, 2, 3, 4 ]