let findVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'],
        count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.indexOf(str[i]) !== -1)
            count++;
    }
    return count;
}

console.log(findVowels('hello'));   //  2
console.log(findVowels('why'));     //  0