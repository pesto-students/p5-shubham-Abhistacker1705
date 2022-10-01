function sort_ZerotoTwo(arr){

    //storing number of appearance of 0 1 and 2 in an auxillary array
    //then, using this auxillary array values to display 0 ,1 and 2 order wise
    let aux_arr = [0,0,0];
    let auxarr_sum =0;
    for (let el of arr){
        if(el===0){
            aux_arr[0] +=1;
        }
        else if(el===1){
            aux_arr[1] +=1;
        }
        else if(el===2){
            aux_arr[2] +=1;
        }
        else{
             console.log('Error - Undefined no in array');
        }

    }
  
   

// iterating over auxillary array values and display 0 1 and 2
for(let i=0;i<3;i++){
    auxarr_sum+=aux_arr[i];
    arr =arr.fill(i,(auxarr_sum-aux_arr[i]),auxarr_sum);
}
console.log(arr);
console.log(aux_arr);
}

sort_ZerotoTwo([1,1,0,0,0,2,2,2,2]);



// TimeComplexity - O(n)
// Space Complexity - O(1)