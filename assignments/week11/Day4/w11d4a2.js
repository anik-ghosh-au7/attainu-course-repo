// Write a Javascript program that prints multiplication table of 5 upto 10.
 
// The output should show:
// 1 * 5 = 5
// 2 * 5 = 10
// .
// .
// .
// 10 * 5 = 50

function multiplication_table(num){
    for (let i=1; i<11; i++){
        console.log("{0} * {1} = {2}".replace('{0}', i).replace('{1}', num).replace('{2}', (i*num)));
    }
}

multiplication_table(5);