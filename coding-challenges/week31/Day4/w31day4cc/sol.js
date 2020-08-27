const concat_square = (num) => {

    let result = '';
    num = num.toString();
    for (let d of num) {
        let digit= parseInt(d);
        result = digit * digit + result;
    };
    return parseInt(result);
};

console.log(concat_square(9119)); // 811181