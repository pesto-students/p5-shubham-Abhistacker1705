function printNGE(arr, n)
	{
        let result_array =[];
        let cmax = 0;
        for(let i=n-1; i>=0; i--){
            if(i === n-1){
                result_array[i] = -1
                console.log("in")
                cmax = arr[i];  
            }
            else if(cmax<=arr[i]){
                result_array[i] = -1;
                cmax = arr[i];
            }
            else if(cmax>arr[i]){
                result_array[i] = cmax ;
            }
        }
        return result_array;
	}
	

let arr = [ 3, 13, 47, 40 ];
let n = arr.length;

console.log(printNGE(arr, n));