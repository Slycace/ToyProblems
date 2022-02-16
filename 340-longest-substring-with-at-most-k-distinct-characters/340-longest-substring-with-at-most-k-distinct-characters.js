/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
      //create a new map to store how many keys are there
  let newMap =  {}

  let windowStart = 0,
    largestSubStrLength = -Infinity;

  //itterate through the array
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) { //e
          let char = s[windowEnd];
            // if the char is not in the map add it in and the index
           if(!(char in newMap)) newMap[char] = 1
            else newMap[char]++;
            // else update the count
 
            // if mapsize is over delete next key value pair and set windows start to the index after
          while(Object.keys(newMap).length > k) {
            let key = s[windowStart]
    
            newMap[key]--;
              
            if(newMap[key] === 0) {
                delete newMap[key];
            }
        
            windowStart++;
          }
        
          let currentWindowLength = windowEnd-windowStart + 1
          largestSubStrLength = Math.max(largestSubStrLength, currentWindowLength);
    }

    //add the key and first apprent of index
    // if the map size is bigger than k remove next key value pair in the map and set window start 
    // to the index after
  return largestSubStrLength;
};