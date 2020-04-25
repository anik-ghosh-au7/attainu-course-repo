const canAlternate = (str) => {
    let count_0 = [...str].filter((elem) => elem==='0').length;
    let count_1 = [...str].filter((elem) => elem==='1').length;
    if ((str.length/2) % 1 === 0){
        return count_0 === str.length/2 && count_1 === count_0 ? true : false;
    } else {
        let temp = parseInt(str.length/2);
        if (count_0 === temp || count_0 === temp + 1 && count_1 === temp || count_1 === temp + 1){
            return true;
        }
        else {
            return false;
        }
    } 
};


console.log(canAlternate("0001111")); // true
console.log(canAlternate("01001")); // true
console.log(canAlternate("010001")); // false
console.log(canAlternate("1111")); // false

console.log(canAlternate("010011")); // true
console.log(canAlternate("0000011")); // false
console.log(canAlternate("0011111")); // false