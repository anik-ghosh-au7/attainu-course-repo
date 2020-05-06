let LargestPair = (num) => {
    str_num = num + "";
    if (str_num.length == 2){
        return num;
    };
    max_num = parseInt(str_num.slice(0, 2));
    for(let i = 2; i < str_num.length - 1; i++) {
        new_num = parseInt(str_num[i] + str_num[i+1])
        max_num = new_num > max_num ? new_num : max_num;
    }
    return max_num;
};

console.log(LargestPair(4759472));
console.log(LargestPair(4759499));