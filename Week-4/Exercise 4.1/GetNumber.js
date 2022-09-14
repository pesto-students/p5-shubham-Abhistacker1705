function getNumber(ms){
    const num = Math.floor(Math.random() * 100)
    return new Promise(function(resolve,reject){
        if(num%5===0){
            setTimeout(() => {
                reject(num);
            },ms);
        }else{
            setTimeout(() => {
                resolve(num);
            },ms);
        }
    })
}

getNumber(2000).then((result) => {
    console.log("After 2 seconds resolved");
    console.log(result +" is not divisible by 5")
}).catch((err) => {
    console.log("After 2 seconds rejected");
    console.log(`${err} is divisible by 5`)
})

