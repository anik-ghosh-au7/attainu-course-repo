const compare_trees = (tree1, tree2) => {
    if (tree1.length != tree2.length) return false;
    else {
        for (let i=0; i<tree1.length; i++) {
            if (tree1[i] !== tree2[i]) return false; 
        };
    };
    return true
};


console.log(compare_trees([1,2,3], [1,2,3])); // true
console.log(compare_trees([1,2], [1,null,2])); // flase
console.log(compare_trees([1,2,1], [1,1,2])); // false
