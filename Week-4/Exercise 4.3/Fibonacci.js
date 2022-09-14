const fib = (n) =>({
    [Symbol.iterator] : function() {
        let i = 0;
        let first=0 ,second =0;
        return{
            next: () => {
                if(i++ <= n){
                    [first,second] = [second, (first+second)|| 1];
                    return {value: a, done: false} 
                }else{
                    return{done : true}
                }
                
            }
        }
    }
});

for (let num of fib(6)){
    console.log(num);
}