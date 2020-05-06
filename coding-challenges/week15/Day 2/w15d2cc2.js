let findUniq = (arr) => {
    unique_vals = [...new Set(arr)];
    for (let k of unique_vals){
        if(arr.filter(elem => elem === k).length === 1){
            return k;
        };
    };
};

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // 0.55