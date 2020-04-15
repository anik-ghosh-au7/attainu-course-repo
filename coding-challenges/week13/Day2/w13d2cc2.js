var anagram = (str1, str2) => str1.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('') === str2.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('');

console.log(anagram('finder', 'Friend'));   // true
console.log(anagram('hello', 'bye'));   // false