function stocks_Maxprofit(prices){
    let current_Min = prices[0];
    let profit =0;
    let maxProfit =0;
    for(let i = 1; i<prices.length;i++){
        if(current_Min > prices[i]){          // find min in array by comparing while traversing through array
            current_Min = prices[i];
        }
        profit = prices[i] - current_Min;    //using this min to check profits

        if(profit > maxProfit){             //checks if this current profit is greater than previous max profit 
            maxProfit = profit;             //if yes, greater sets max profit to cuurent profit
        }
    }
    return maxProfit;

}

console.log(stocks_Maxprofit([7,5,5,8,5,3]));


 //Time complexity - O(n)
 //Space Complexity - O(1)