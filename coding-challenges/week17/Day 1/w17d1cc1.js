const solution = (total_lambs) => {
    let generous_arr = [1];
    let stingy_arr = [1, 1];
    
    let sum = (arr) => arr.reduce((result, item) => result + item, 0);

    while (sum([...generous_arr, (generous_arr[generous_arr.length - 1] * 2)]) <= total_lambs) {
        generous_arr.push(generous_arr[generous_arr.length - 1] * 2);
    };

    while (sum([...stingy_arr, (stingy_arr[stingy_arr.length - 1] + stingy_arr[stingy_arr.length - 2])]) <= total_lambs) {
        stingy_arr.push(stingy_arr[stingy_arr.length - 1] + stingy_arr[stingy_arr.length - 2]);
    };

    // console.log(generous_arr);
    // console.log(stingy_arr);

    return (stingy_arr.length - generous_arr.length);
};

console.log(solution(10));  //  1
console.log(solution(20));  //  2