const longest_common_prefix = (arr) => {
    let result = '';
    arr = arr.sort();
    let last_index = arr.length - 1;
    let len = arr[0].length
    for (let i=0; i<len; i++) {
        if (arr[0][i] === arr[last_index][i]) {
            result += arr[0][i];
        } else break;
    }
    return result;
};

console.log(longest_common_prefix(["flower","flow","flight"])) // 'fl'
// console.log(longest_common_prefix(["dog","racecar","car"])) // ''