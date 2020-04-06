function palindrome(str){
    const regex = /[\W]/g;
    let lowerCase = str.toLowerCase().replace(regex, '');
    var reverseStr = lowerCase.split('').reverse().join('');

    if(lowerCase === reverseStr){
        return true;
    }
    return false;
}

console.log(palindrome('eye'));
console.log(palindrome('eyes'));