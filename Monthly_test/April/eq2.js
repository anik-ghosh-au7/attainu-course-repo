// const reverse = (str) => {
//     let i = 0;
//     let j = str.length -1;
//     str_arr = str.split('');
//     while (i < j){
//         let numbers = /^[0-9]/;
//         if (!str_arr[i].match(numbers) && !str_arr[j].match(numbers))
//         {
//         let temp = str_arr[i];
//         str_arr[i] = str_arr[j];
//         str_arr[j] = temp;
//         }
//         i++;
//         j--;
//     }
//     return str_arr.join('');
// };

// console.log(reverse("ab89c")); // "cb89a"
// console.log(reverse("jkl5mn923o")); // "onm51k923j"
// console.log(reverse("123a45")); // "123a45"


function reverse (str) {
    let rev_arr = [];
    let numbers = /^[0-9]/;
    for(let i = 0; i < str.length; i++){
      if(!str[i].match(numbers)) {
        rev_arr.push(str[i])
      }
    }
    rev_arr = rev_arr.reverse()
    let str_rev = "";
    let temp = 0;
    for(let i = 0; i < str.length; i++){
      if(!str[i].match(numbers)) {
        str_rev += rev_arr[i - temp];
      }
      else{
        temp++;
        str_rev += str[i];
      }
    }
    return str_rev;
}


console.log(reverse("ab89c")); // "cb89a"
console.log(reverse("jkl5mn923o")); // "onm51k923j"
console.log(reverse("123a45")); // "123a45"