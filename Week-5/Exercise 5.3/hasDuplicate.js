var arr = [55, 65, 65];
var set = new Set(arr);



const hasDuplicate = arr => set.size!==arr.length; //hasDuplicate arrow function takes array 'arr' as parameter
if(hasDuplicate(arr)){
    console.log("True - Conatins Duplicate");
}else{
    console.log("False - Do not contain duplicate");
}