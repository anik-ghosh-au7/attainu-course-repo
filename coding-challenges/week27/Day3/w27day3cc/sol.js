const rotate_image = (arr) => {

    let len = arr[0].length;

    // diagonal flip
    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    // horizontal flip
    let half_len = parseInt(len/2);
    for (let i=0; i<len; i++) {
        for (let j=0; j<half_len; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[i][len-j-1];
            arr[i][len-j-1] = temp;
        }
    }
    return arr;
};

console.log(rotate_image([[1,2,3],
                          [4,5,6],
                          [7,8,9]]));

console.log(rotate_image([[ 5, 1, 9,11],
                          [ 2, 4, 8,10],
                          [13, 3, 6, 7],
                          [15,14,12,16]]));