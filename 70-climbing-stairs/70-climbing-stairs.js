/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    
    const dp = {};
    return climbStairsRecurisve(n, dp)
    
};


function climbStairsRecurisve(n, dp){  
    

    
    
    if(n === 0) {
        return 1;
    }
    
    if(n < 0){
        return 0
    }
    
    
    if(!(n in dp)) {
        dp[n] = climbStairsRecurisve(n-1, dp) + climbStairsRecurisve(n - 2, dp)
    }
 
    
    return dp[n];
    
    
}
