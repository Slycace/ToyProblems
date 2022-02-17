/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
        const subSets = [];
    subSets.push([]);
    let startIndex = 0,
        endIndex = 0;
    
    for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
        startIndex = 0;
    if( i > 0 && nums[i] === nums[i - 1]) {
        startIndex = endIndex + 1
    }
    endIndex = subSets.length - 1
        for(let j = startIndex; j < endIndex + 1; j++) {
        let newSet = subSets[j].slice(0);
        newSet.push(num);
        subSets.push(newSet);
        }
    }
    
    return subSets;
};