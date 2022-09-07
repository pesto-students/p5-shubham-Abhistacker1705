//Given reducer method:
function add(...args){
    
    const sum = args.reduce(function (first,next){
        return first + next;
    },0);
      //  console.log(sum);
     return(sum);
    
 }/*Created a method called memoize such that: it wil map the element and
  it its respective keys as an array in pairs and returns if parameters are already in 
  array,if not then will set that as a next element and then return it.*/
 
 function memoize(fn){
     const cache = new Map();
     return function(...args){
         const key = args.toString();
         if (cache.has(key)){
             //  console.log(key);
             // console.log(cache);
             return cache.get(key);

         }
         else{
             cache.set(key,fn(...args));
             // console.log(cache);
             return cache.get(key);
         }
     }
 }
 
 
 
 const memoizeAdd=memoize(add); //add which is reducer function and memoize returns a function which is stored as memoizeAdd; 
 

 console.time("1");
 console.log(memoizeAdd(100,200,300,400));
 console.timeEnd("1");
 console.time("2");
 console.log(memoizeAdd(500,600));
 console.timeEnd("2");
 console.time("3");
 console.log(memoizeAdd(100,200));
 console.timeEnd("3");
 console.time("4");
 console.log(memoizeAdd(100,200,300,400));
 console.timeEnd("4");
 console.time("5");
 console.log(memoizeAdd(500,600));
 console.timeEnd("5");