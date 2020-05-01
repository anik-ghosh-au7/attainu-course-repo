// Using classes and inheritance

// const Fruit = class {
//     constructor(name, color){
//         this.name = name;
//         this.color = color;
//     };
//     ripe() {
//         return `${this.name} fruit is ripe.`;
//     };
//     grow() {
//         return `${this.name} is grown, and the color is ${this.color}.`;
//     };
// };

// const Apple = class extends Fruit {
//     constructor(name, color, type, variety) {
//         super(name, color);
//         this.type = type;
//         this.variety = variety;
//     };
//     description() {
//         return `The type of ${this.name} is ${this.type} and the variety is of ${this.variety} category.`;
//     };
// }

// let apple = new Apple('apple', 'red', 'cameo', 'wild');
// console.log(apple.ripe());
// console.log(apple.grow());
// console.log(apple.description());


// Using proyotype and prototype chaining

const Fruit = function (name, color) {
    this.name = name;
    this.color = color;
};

Fruit.prototype.ripe = function () {
    return `${this.name} fruit is ripe.`;
};

Fruit.prototype.grow = function () {
    return `${this.name} is grown, and the color is ${this.color}.`;
};

const Apple = function (name, color, type, variety) {
    // substitute  of super()
    Fruit.call(this, name, color);
    this.type = type;
    this.variety = variety;
};

// Substitute of extends using prototype chaining
Object.setPrototypeOf(Apple, Fruit.prototype);
Apple.prototype = Object.create(Fruit.prototype);
Apple.prototype.description = function () {
    return `The type of ${this.name} is ${this.type} and the variety is of ${this.variety} category.`;
};

let apple = new Apple('apple', 'green', 'Honey Crisp', 'Organic');
console.log(apple.ripe());
console.log(apple.grow());
console.log(apple.description());
