function subarray(arr){
    let csum =arr[0];
    let max =arr[0];
    for(let i=1; i<arr.length;i++){
        csum = csum + arr[i];
        if (arr[i]>csum){
            console.log("1st if")
            csum =arr[i];
        }
        if (csum>max){
            console.log("2nd if")
            max = csum;
        }        
    }
        
    return max;
}

console.log(subarray([-6,-5 , -3 , -3 , 5 ,8 , -9 , 12]));


//  Time Complexity - O(n)
//  Space Complexity - O(1) 