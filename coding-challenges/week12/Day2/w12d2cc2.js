var anagram = (str1, str2) => str1.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('') === str2.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('');

console.log(anagram('Mary', 'Army'));   // True
console.log(anagram('Anik', 'Avik'));   // False