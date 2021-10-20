/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     //create a start and set it to first index
     let start = 0;
     //create a end and set it to first index
     let end = 0;
     //create a max variable to keep track 
     let max = nums[0];
     //create an accumilator to watch current value
     let accumilator = nums[0];
    // itterate through the array
    for (let i = 1; i < nums.length;i++) {
             let currentValue = nums[i]
             accumilator += nums[i];
              if (currentValue >  accumilator) {
                  accumilator = currentValue
                  end = i;
                  start = i
              }
       if(accumilator > max) {       
            max = accumilator;
            end = i;
       }
    }
   return max;
};