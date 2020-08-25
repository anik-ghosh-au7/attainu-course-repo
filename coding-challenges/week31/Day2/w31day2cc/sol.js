const bingo = (arr) => {
    let result_obj = new Object();
    for (let i of arr) {
        if (i === 2 || i === 9 || i === 14 || i === 7 || i === 15) {
            result_obj[i] = true;
        }
    };
    for (let c of [2, 7, 9, 14, 15]) {
        if(!result_obj[c]) return 'LOSE'
    }
    return 'WIN'
};

console.log(bingo([21,13,2,7,5,14,7,15,9,10])); // WIN
console.log(bingo([1,2,3,4,5,6,7,8,9,10])); // LOSE