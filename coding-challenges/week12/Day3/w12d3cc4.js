let helloWorld = (num) => num % 15 === 0 ? 'Hello World' : num % 5 === 0 ? 'World' : num % 3 === 0 ? 'Hello' : '';

console.log(helloWorld(3)); //  Hello
console.log(helloWorld(5)); //  World
console.log(helloWorld(15));    //  Hello World