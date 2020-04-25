// let keysAndValues = (obj) => [Object.keys(obj).map((key) => key), Object.keys(obj).map((key) => obj[key])];

const toArray = (obj) => console.log(Object.entries(obj));


toArray({a: 1, b: 2}); // [ [ 'a', 1 ], [ 'b', 2 ] ]
toArray({shrimp: 15, tots: 12}); // [ [ 'shrimp', 15 ], [ 'tots', 12 ] ]
toArray({}); // []