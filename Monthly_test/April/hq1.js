
let majorityVote = (arr) => {
    count = {};
    for (let i in arr){
        count[arr[i]] = [...arr].filter(x => x === arr[i]).length;
        // console.log(count);
        // console.log(arr[i]);
    };
    // console.log(count);
    if (Object.keys(count).length === 1){
        return Object.keys(count)[0];
    }
    max = 0;
    max_second = 0;
    max_elem = null;
    for (let [key, value] of Object.entries(count)){
        // console.log(key, value);
        if (value === max && value > parseInt(arr.length/2)){
            return null;
        }
        else if (value > max && value > parseInt(arr.length/2)){
            max = value;
            max_elem = key;
        }
    }
    return max_elem;
}

// majorityVote(["A", "A", "A"]); // "A"
console.log(majorityVote(["A", "A", "B"])); // "A"
console.log(majorityVote(["A", "A", "A", "B", "C", "A"])); // "A"
console.log(majorityVote(["A", "B", "B", "A", "C", "C"])); // null