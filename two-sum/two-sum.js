/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
    //create a hashmap to store are remainders
    let hash = {};
    //itterate through nums
    for(let i = 0; i < nums.length; i++) {
           if(nums[i] in hash) {
               return [hash[nums[i]],i];
           } else {
               hash[target-nums[i]] = i
           }
           //if num in hash return the index in the tupple and the other index in the hash
        //store missing number with current index
            // else store
    
        
    }
     
    return [];
    
    //return the created tupple
    
    //time : O(n)
    //space : O(n)

};