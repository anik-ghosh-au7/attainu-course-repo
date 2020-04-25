const num_0 = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const num_10 = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function numToEng(num){
    if (num < 20) {
        return num_0[num]
    };
    if (num < 100) {
        let dig = num % 10;
        return num_10[Math.floor(num / 10) - 2] + (dig ? " " + num_0[dig] : "")
    };
    if (num < 1000) {
        return num_0[Math.floor(num / 100)] +" hundred" + (num % 100 == 0 ? "" : " " + numToEng(num%100))
    };
    return 'Number out of range 0 - 999';
};


console.log(numToEng(0)); // zero
console.log(numToEng(18)); // eighteen
console.log(numToEng(126)); // one hundred twenty six
console.log(numToEng(1000)); // Number out of range 0 - 999