const spinWords = (String) => {
    let str_arr = String.split(' ');
    str_arr.map((element, idx) => {
        if (element.length >= 5) {
            str_arr[idx] = element.split('').reverse().join('');
        };
    });
    return str_arr.join(' ');
};

console.log(spinWords( "Hey fellow warriors" )); // Hey wollef sroirraw
console.log(spinWords( "This is a test")); // This is a test
console.log(spinWords( "This is another test" )); // This is rehtona test