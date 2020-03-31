var start = 100;
var end = 0;
function evenNumber(start, end) {
    while (start > end) {
        if (start % 2 == 0){
            console.log(start);
        }
        start--;
    }
}
evenNumber(start, end)