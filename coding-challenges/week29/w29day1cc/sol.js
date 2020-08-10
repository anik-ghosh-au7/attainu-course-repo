const removeDuplicates = (arr) => {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            count++
        }
        if (count > 1) {
            arr.splice(i, 1);
            i--;
        }
        if (arr[i] !== arr[i+1]) {
            count = 0;
        }
    }
    return arr.length;
};

let nums = [1,1,1,2,2,3];
let len = removeDuplicates(nums);
console.log(len); // 5
console.log(nums); // [ 1, 1, 2, 2, 3 ]

let nums1 = [0,0,1,1,1,1,2,3,3];
let len1 = removeDuplicates(nums1);
console.log(len1); // 7
console.log(nums1); // [ 0, 0, 1, 1, 2, 3, 3 ]
    