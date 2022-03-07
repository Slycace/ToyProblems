/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    
    if(sum % 2 === 1 ) return false;
    const dp = []
    return canPartitionRecursive(dp, nums, sum/2, 0);
};

function canPartitionRecursive(dp, nums, sum, currentIndex) {
    if(sum === 0) return true;
    if(currentIndex >= nums.length) return false;
    
    dp[currentIndex] = dp[currentIndex] || [];
    
    if(typeof dp[currentIndex][sum] === 'undefined') {
        if(nums[currentIndex] <= sum) {
         if(canPartitionRecursive(dp, nums, sum - nums[currentIndex], currentIndex + 1)) {
         dp[currentIndex][sum] = true
         return true;
        }
      }
      dp[currentIndex][sum] = canPartitionRecursive(dp, nums, sum, currentIndex + 1);
    }
    

        
    
    return dp[currentIndex][sum]

}