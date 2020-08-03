const reach_last_index = (arr) => {
    let last_index = arr.length - 1;
    for (let i=0; i<=last_index; i++) {
        if ((arr[i] + i) >= last_index) return true;
        if (arr[i] === 0) return false;
    }
};

console.log(reach_last_index([2,3,1,1,4])); // true
console.log(reach_last_index([3,2,1,0,4])); // false
console.log(reach_last_index([3,2,2,0,4])); // true