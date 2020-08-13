const transform_matrix = (mat) => {
    
    let row_flag = false;
    let col_flag = false;
              
    for (let i=0; i< mat.length; i++) { 
          
        for (let j=0; j< mat[0].length; j++) {

            if (i == 0 && mat[i][j] == 0) { 
                row_flag = true;
            }
                      
            if (j == 0 && mat[i][j] == 0) { 
                col_flag = true;
            }
              
            if (mat[i][j] == 0) { 
                mat[0][j] = 0;
                mat[i][0] = 0;
            }
        }
    }  

    for (let i=1; i<mat.length; i++) { 

    
        for (let j=1; j<mat[0].length; j++) { 
            if (mat[0][j] == 0 || mat[i][0] == 0) { 
                mat[i][j] = 0;
            }
        }
    }
                  
    if (row_flag == true) { 
        for (let i=0; i<mat.length; i++) { 
            mat[0][i] = 0;
        }
    }      
    if (col_flag == true) { 
        for (let i=0; i<mat.length; i++) { 
            mat[i][0] = 0;
        }
    }

    for(let i=0; i< mat.length; i++) {
        console.log(mat[i]);
    };
};

let arr = [[1,1,1],[1,0,1],[1,1,1]];
let arr2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
transform_matrix(arr);
transform_matrix(arr2);