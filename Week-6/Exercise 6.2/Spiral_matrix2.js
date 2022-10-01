function spiral_Matrix(arr){
let m =arr[0].length;
let n = arr.length;
let top = 0;
let right = m-1;
let bottom =n-1;
let left = 0;
let array =[];
let index=0;
let loop1_flag=0,loop2_flag=0 ,loop3_flag=0 ,loop4_flag =0;


 while (( top<=bottom ) && ( left<=right )){ 
                                                     //Stop when bottom pointer greater than top pointer or if 
    for (let i = left; i <=right; i++) {            // left pointer greater than right pointer
         array[index] =arr[top][i];
         index++;
         loop1_flag =1;
    }
        if(loop1_flag){
            top++;
            loop1_flag=0;

        }


    for (let i = top; i <= bottom; i++) {
        array[index] =arr[i][right];
        index++;
        loop2_flag =1;
        }

        if(loop2_flag){
            right--;
            loop2_flag =0;
        }


        if(top<bottom){                          // do not print right to left ie. Bottom row  if top > bottom

    
            for (let i = right; i >=left ; i--) {
                array[index] =arr[bottom][i];
                index++;
                loop3_flag =1;
            }
    
        if(loop3_flag){
             bottom--;
             loop3_flag=0;
            }
}


        if(left<right){                          // do not print left side ie left column if left >right 
                                                 // ie. no left side available
            for (let i = bottom; i >=top; i--) {
                array[index] =arr[i][left];
                index++;
                loop4_flag=1;
               }
            if(loop4_flag){
                left++;
                loop4_flag=0;
            }
        
  }
}

  return array;
}

// let input_arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
let input_arr = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];
// let input_arr = [[1,2,3],[6,7,8],[11,12,13],[16,17,18],[21,22,23]];
console.log(spiral_Matrix(input_arr));


//      Time Complexity - O(n^2)
//      Space Complexity - O(n)