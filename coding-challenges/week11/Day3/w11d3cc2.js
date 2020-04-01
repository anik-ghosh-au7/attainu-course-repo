let arr1 = [3, 8, 7, 6, -4,  2, 1, 5];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr.pop();
    let lower_elms = [];
    let higher_elms = [];
    for (let i of arr) {
        if (i <= pivot) {
            lower_elms.push(i);
        } else {
            higher_elms.push(i);
        }
    }
    return quickSort(lower_elms).concat(pivot, quickSort(higher_elms));
}
console.log(quickSort(arr1));