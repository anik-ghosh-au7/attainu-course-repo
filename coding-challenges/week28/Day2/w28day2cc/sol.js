function maxSubArraySum(a,size) { 
  
    let max_so_far = -99999;
    let max_ending_here = 0;
    let start = 0;
    let end = 0;
    let s = 0;
   
    for (let i=0; i<size; i++) {
  
        max_ending_here += a[i]; 
  
        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here; 
            start = s;
            end = i;
        };
        if (max_ending_here < 0) { 
            max_ending_here = 0;
            s = i+1;
        };
    }
    console.log("Maximum contiguous sum is " + max_so_far);
    console.log("Sub array with maximum contiguous sum is  " + a.slice(start, end+1));
}
  
a = [-2, -3, 4, -1, -2, 1, 5, -3];
b = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArraySum(a,a.length); // 7  [4,-1,-2,1,5]
maxSubArraySum(b, b.length); // 6 [4,-1,2,1]
