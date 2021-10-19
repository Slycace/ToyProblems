/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let object = {}

    for (let num of nums) {
        if (!(num in object)) {
            object[num] = 1;
        } else {
            object[num]+=1;
        }    
    }

    for (let key in object){
        if (object[key] > 1) {
            return true;
        }
    }

        return false;
    
};