const valid_binary_tree = (tree) => {
    let i = 0;
    while (i < tree.length/2+2) {
        if(tree[i]) {
            // console.log(`${tree[2*i+1]}<${tree[i]} && ${tree[2*i+2]}>${tree[i]}`);
            if(tree[2*i+1] && tree[2*i+1]>tree[i]) return false;
            if(tree[2*i+2] && tree[2*i+2]<tree[i]) return false;
        }
        i++;
    }
    return true;
};

// console.log(valid_binary_tree([2,1,3])); // true
// console.log(valid_binary_tree([5,1,4,null,null,3,6])); // false
console.log(valid_binary_tree([8,3,10,1,6,null,14,null,null,4,7,null,null,13])); // true
console.log(valid_binary_tree([8,3,10,1,6,null,14,null,null,4,7,null,null,15])); // false