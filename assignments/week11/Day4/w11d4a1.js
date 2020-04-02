// Write a Javascript function that takes an array and a value and search that value in the array.
// Function should take two arguments - an array and a value to search inside the array.
// If the element is found, the function should return the position of the element in an array.
// If the element is not found, the function should return "-1".
// (parseInt(i)+1)


function find_number(arr, num){
    for (let i in arr){
        if (arr[i] == num){
            return "{0} is present in the {1}th position of the array".replace('{0}', num).replace('{1}', (parseInt(i)+1));
        }
    }
    return -1;
}

console.log(find_number([3, 8, 7, 6, -4,  2, 1, 5], 2));
console.log(find_number([3, 8, 7, 6, -4,  2, 1, 5], 9));