/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    const dp = [];
    
    const result = coinChangeRecursive(coins, amount, 0, dp);
    if(result === Infinity) {
        return -1;
    } else {
        return result;
    }
};

function coinChangeRecursive(coins, amount, currentIndex, dp) {
    const key =  amount + ',' + currentIndex;
    
    if(key in dp) return dp[key];
    if(amount === 0) return 0;
    if(currentIndex > coins.length) return Infinity;
    

    let count1 = Infinity;
    
    if(coins[currentIndex] <= amount) {
        const result = coinChangeRecursive(coins, amount - coins[currentIndex], currentIndex, dp);
                 if(result != Infinity) {
        count1 = result + 1;
        }
    
   
    }


    
    const count2 = coinChangeRecursive(coins, amount, currentIndex + 1, dp);
    dp[key] = Math.min(count1, count2);
    
    return dp[key];
}