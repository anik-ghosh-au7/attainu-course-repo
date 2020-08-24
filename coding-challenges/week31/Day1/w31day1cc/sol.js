const evaluate_array = (arr) => {
    let result;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {
            // console.log('before -->', arr);
            let operator = arr.splice(i, 1);
            let num2 = arr.splice(i-1, 1);
            let num1 = arr.splice(i-2, 1);
            // console.log('operation -->', `${num1}${operator}${num2}`);
            result = Math.round(eval(`${num1}${operator}${num2}`));
            arr.splice(i-2, 0, result);
            // console.log('after -->', arr);
            i = 0; 
        };
        i++;
    };
    return result
};


console.log(evaluate_array(["2", "1", "+", "3", "*"])); // 9
console.log(evaluate_array(["4", "13", "5", "/", "+"])); // 7
console.log(evaluate_array(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22