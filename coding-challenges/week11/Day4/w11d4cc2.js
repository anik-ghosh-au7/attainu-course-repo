// Write javascript program for following conditions:
// A function  evenFunction() that returns if a number is even or not.
// A function oddFunction() that returns if a number is odd or not.
// A function squareFunction() that returns if a number is square or not.

function evenFunction(num){
    if (num % 2 == 0){
        console.log(`${num} is a even number`);
        return;
    }
    console.log(`${num} is not a even number`);
}

function oddFunction(num){
    if (num % 2 != 0){
        console.log(`${num} is a odd number`);
        return;
    }
    console.log(`${num} is not a odd number`);
}

function squareFunction(num){
    for (let i =0; i*i <= num; i++){
        if (num % i ==0 && num/i == i){
            console.log(`${num} is a square number`);
            return;
        }
    }
    console.log(`${num} is not a square number`);
}

evenFunction(6);
oddFunction(6);
squareFunction(6);

evenFunction(9);
oddFunction(9);
squareFunction(9);