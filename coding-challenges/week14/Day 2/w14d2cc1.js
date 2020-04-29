// const buy = (no_shops, price_list) => {
//     // console.log(no_shops); // 3
//     // console.log(price_list); // [ [ 1, 50, 50 ], [ 50, 50, 50 ], [ 1, 50, 50 ] ]
//     let min_amount = 0;
//     let min_index = -1;
//     let max_num = Number.MAX_VALUE;
//     for (let i = 0; i < no_shops; i++){
//         if (price_list[i].indexOf(Math.min(...price_list[i])) === min_index){
//             price_list[i][min_index] = max_num;
//             min_amount += Math.min(...price_list[i]);
//             min_index = price_list[i].indexOf(Math.min(...price_list[i]));
//         }
//         else{
//             min_amount += Math.min(...price_list[i]);
//             min_index = price_list[i].indexOf(Math.min(...price_list[i]));
//         }
//     }
//     return min_amount;
// };

// let no_testCases = 1;
// // let input_arr = [[3, [[1, 50, 50], [50, 50, 50], [1, 50, 50]]]]; // 52

// for (let i = 0; i < no_testCases; i++){
//     console.log(buy(input_arr[i][0], input_arr[i][1]));
// }


const buy = (no_shops, priceList) => {
    // console.log(no_shops); // 4
    // console.log(price_list); // [ '1 50 50', '50 50 40', '60 50 1', '30 10 20' ]
    let min_amount = 0;
    let min_index = -1;
    let max_num = Number.MAX_VALUE;
    price_list = []
    for (let k = 0; k < no_shops; k++ ){
        price_list[k] = priceList[k].split(" ").map(elem => parseInt(elem));
    }
    // console.log(price_list);
    for (let i = 0; i < no_shops; i++){
        if (price_list[i].indexOf(Math.min(...price_list[i])) === min_index){
            price_list[i][min_index] = max_num;
            min_amount += Math.min(...price_list[i]);
            min_index = price_list[i].indexOf(Math.min(...price_list[i]));
        }
        else{
            min_amount += Math.min(...price_list[i]);
            min_index = price_list[i].indexOf(Math.min(...price_list[i]));
        }
    }
    return min_amount;
};

// let no_testCases = 1;
// let input_arr = [[3, ['1 50 50', '50 50 50', '1 50 50']]]; // 52

let no_testCases = 3;
let input_arr = [[3, ['1 50 50', '50 50 50', '1 50 50']], [3, ['1 50 50', '50 50 40', '60 50 1']], [4, ['1 50 50', '50 50 40', '60 50 1', '30 10 20']]]; // 52 91 111

for (let i = 0; i < no_testCases; i++){
    console.log(buy(input_arr[i][0], input_arr[i][1]));
}