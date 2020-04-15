let match = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

console.log(match("hello", "hELLo"));   //  true
console.log(match("motive", "emotive"));    //  false
console.log(match("venom", "VENOM"));   //  true
console.log(match("mask", "mAskinG"));  //  false
