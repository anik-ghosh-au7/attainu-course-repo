let filterUnique = (arr) => arr.filter((elem) => new Set(elem).size === elem.length);

console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));   //  [ 'abc' ]
console.log(filterUnique(["88", "999", "989", "9988", "9898"]));    //  []
console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]));  //  [ 'ABCDE', 'BED', 'BAC' ]