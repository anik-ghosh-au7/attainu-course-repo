const binary_sum = (a, b) => {
    let result = '',
        carry = '0';

    if (a.length > b.length) {
        b = '0' * (a.length - b.length) + b;
    } else if (a.length < b.length) {
        a = '0' * (b.length - a.length) + b;
    }
    
    for(let i=a.length-1; i>=0; i--) {

            if(a[i] === '0' && b[i] === '0') {
                if (carry === '0') {
                    result = '0' + result;
                } else {
                    result = '1' + result;
                    carry = '0';
                }
            };

            if((a[i] === '0' && b[i] === '1') || (a[i] === '1' && b[i] === '0')) {
                if (carry === '0') {
                    result = '1' + result;
                } else {
                    result = '0' + result;
                }
            };

            if(a[i] === '1' && b[i] === '1') {
                if (carry === '0') {
                    result = '0' + result;
                    carry = '1';
                } else {
                    result = '1' + result;
                }
            };
        }
    if(carry === '1') result = '1' + result;
    console.log(result);
};

binary_sum("11", "1"); // 100
binary_sum("1010", "1011"); // 10101