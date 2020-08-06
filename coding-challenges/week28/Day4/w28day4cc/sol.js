function diff_paths(m, n) {
    if(m == 1 || n == 1) {
        return 1
    }
    return diff_paths(m-1, n) + diff_paths(m, n-1) 
};

console.log(diff_paths(3, 2)) // 3

console.log(diff_paths(7, 3)) // 28