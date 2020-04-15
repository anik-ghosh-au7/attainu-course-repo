let numArgs = (...args) => args.length;

console.log(numArgs()); //  0
console.log(numArgs("foo"));    //  1
console.log(numArgs("foo", "bar")); //  2
console.log(numArgs(true, false));  //  2
console.log(numArgs({}));   //  1