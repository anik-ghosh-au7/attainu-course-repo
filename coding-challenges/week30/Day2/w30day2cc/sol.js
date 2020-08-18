let result = [];
function printCombination(n, k) { 
    let arr = [];
    for (let i=1; i<=n; i++) {
        arr.push(i)
    };
    let data = new Array(k).fill(0); 
  
    combinationUtil(arr, data, 0, n - 1, 0, k); 
    console.log(result);
} 
function combinationUtil(arr, data, start, end, index, k) {                         
    let data_arr = [];
    if (index === k) {
        for (let j=0; j<k; j++) { 
            data_arr.push(data[j]);
        }
        result.push(data_arr);
        return; 
    }
    
    let i = start;  
    while(i <= end && end - i + 1 >= k - index) {
        data[index] = arr[i]; 
        combinationUtil(arr, data, i + 1, end, index + 1, k); 
        i ++; 
    }
};

printCombination(4, 2); // [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
// printCombination(1, 1); // [ [ 1 ] ]