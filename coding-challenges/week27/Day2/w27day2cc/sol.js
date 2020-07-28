function pivotedBinarySearch(arr, n, key) { 
  
    let pivot = findPivot(arr, 0, n-1); 
  
    
    if (pivot == -1) { 
        return binarySearch(arr, 0, n-1, key); 
    }
  
    if (arr[pivot] == key) {
        return pivot;
    }

    if (arr[0] <= key) {
        return binarySearch(arr, 0, pivot-1, key);
    }

    return binarySearch(arr, pivot+1, n-1, key); 
}
  

function findPivot(arr, low, high) {
      
    if (high < low) {
        return -1;
    }
    if (high == low) { 
        return low;
    }
      
    // low + (high - low)/2; 
    let mid = parseInt((low + high)/2);
      
    if (mid < high && arr[mid] > arr[mid + 1]) { 
        return mid; 
    }

    if (mid > low && arr[mid] < arr[mid - 1]) { 
        return (mid-1); 
    }

    if (arr[low] >= arr[mid]) { 
        return findPivot(arr, low, mid-1);
    }

    return findPivot(arr, mid + 1, high);
}
  
function binarySearch(arr, low, high, key) {
  
    if (high < low) { 
        return -1;
    }
          
    // low + (high - low)/2;     
    let mid = parseInt((low + high)/2);
      
    if (key == arr[mid]) { 
        return mid;
    }

    if (key > arr[mid]) { 
        return binarySearch(arr, (mid + 1), high, key);
    }

    return binarySearch(arr, low, (mid -1), key); 
}
  
  
// Driver program to check above functions */ 
// Let us search 3 in below array 
let arr1 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let n = arr1.length; 
let key = 3;
console.log("Index of the element is : ",  pivotedBinarySearch(arr1, n, key));