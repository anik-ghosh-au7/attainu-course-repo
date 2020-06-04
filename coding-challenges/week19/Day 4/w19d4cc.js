const decode = (str) => {
    let str_arr = [];
    for (c of str) {
        if (c === '#') {
            if (str_arr.length > 0) {
                str_arr.pop();
            };
        } else {
            str_arr.push(c);
        };
    };
    return str_arr.join('');
};

console.log(decode('abc#d##c'));    //  'ac'
console.log(decode('abc##d######'));    //  ''
console.log(decode('#######'));     //  ''
