/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let counter = 0;
    nums.sort((a,b) => a - b );
    for(let i = 0; i < nums.length-2; i++) {
        counter += findSmallerTriplets(nums, target-nums[i], i)
    }
    return counter

};


var findSmallerTriplets = function(nums, target, index) {
    let counter = 0;
    let left = index + 1,
        right = nums.length-1
 
    
    while(left < right) {
    let sum = nums[left] + nums[right];
        if(sum < target) {
            
            counter +=  right-left;
            left++
        } else {
            right--
        }
    }
    return counter;   
}