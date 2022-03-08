/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = {};
    let count = coinChangeRecursive(amount, coins, dp) 
    if(count === Infinity) return -1
    return count;
};

function coinChangeRecursive(amount, coins, dp) {
    if(amount in dp) return dp[amount];
    if(amount === 0) return 0;
    if(amount < 0) return -1;
    let shortestCount = Infinity;
    
      
    for(coin of coins) {
        const count = coinChangeRecursive(amount - coin, coins, dp);
        if(count !== -1) {
          shortestCount = Math.min(shortestCount, 1+count );
        }
        
    }
     
    dp[amount] = shortestCount
    return shortestCount;
        
}