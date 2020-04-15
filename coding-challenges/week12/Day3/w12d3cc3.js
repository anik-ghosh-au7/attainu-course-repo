let equalSlices = (total_slices, no_recipients, slices_each) => (no_recipients * slices_each) <= total_slices;

console.log(equalSlices(11, 5, 2)); //  true
console.log(equalSlices(11, 5, 3)); //  false
console.log(equalSlices(8, 3, 2));  //  true
console.log(equalSlices(8, 3, 3));  //  false
console.log(equalSlices(24, 12, 2));    //  true