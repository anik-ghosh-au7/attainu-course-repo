var fibonnaci = (num) => {
    var result = [];
    result[0] = 0;
    result[1] = 1;
    if (num > 2){
        for (let i = 2; i <= num; i++){
            result[i] = result[i-1] + result[i-2];
        }
    }
    return result[num];
}

console.log(fibonnaci(5)); // 5
console.log(fibonnaci(6)); // 8