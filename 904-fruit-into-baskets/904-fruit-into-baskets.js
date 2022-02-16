/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {

  let fruitBasket = {};
  let windowStart = 0, 
  highestoutPut = 0,
  currentFruitOutput = 0;

  for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let fruit = fruits[windowEnd];
    currentFruitOutput++;
    if(!(fruit in fruitBasket)) fruitBasket[fruit] = 1;
    else fruitBasket[fruit]++;

    while(Object.keys(fruitBasket).length > 2) {
      lastFruit = fruits[windowStart];
      fruitBasket[lastFruit]--;
      currentFruitOutput--;
      windowStart++;
      if(fruitBasket[lastFruit] === 0) delete fruitBasket[lastFruit];
    }
    
    highestoutPut = Math.max(currentFruitOutput, highestoutPut)

    
  }
  return highestoutPut;
};