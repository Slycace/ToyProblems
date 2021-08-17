/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value) {
    // TODO: implement `insert()`
    console.log(key, value,'checking here')
    //take the value and push into hash table to get the index
    let index = getIndexBelowMaxForKey(key, storageLimit)
    console.log(index,'what is the index')
      // check and see if the index is undefined if so add an empty array
      if(storage[index] === undefined) {
        storage[index] = []
      }
      let bucket = storage[index]
      // check to see any parts of the array is occupied
      for (let i = 0; i < bucket.length; i++) {
        let tupple = bucket[i];

        if (tupple[0] === key) {
          tupple[1] = value;
          console.log('tuppple overwrote')
          return;
        }
      }

      bucket.push([key,value])
      console.log(('pushing in new value'))
    // go to the index on storage and check if there's an array created there, if there isn't make a new bucket which will store tupples
    //

  };

  result.retrieve = function(key) {
    //put the key in the hashing function and get the index
      let index = getIndexBelowMaxForKey(key, storageLimit)
    // go to the index and check and see if anything exist
        if(storage[index] !== undefined) {
            // if so itterate through the index aray and look for  tupple that has the key
          let bucket = storage[index]

          for(let i = 0; i < bucket.length; i++) {
            let tupple = bucket[i]

            if(tupple[0] === key) {
              console.log(tupple[1])
              return tupple[1]
            }
          }
        } else {
          console.log('nothing found')
          return "nothing found";
        }
  };

  result.remove = function(key) {
    // TODO: implement `remove()`
    // use hash machine to get index
    let index = getIndexBelowMaxForKey(key, storageLimit)
    // if there is nothing at that index
    console.log(storage[index],'checking here')
      if (storage[index] === undefined) {
        console.log('key was not found')
        return;
      }



        let deleteIndex;
        bucket = storage[index]
        for(let i = 0; i < bucket.length ;i++) {
          let tupple = bucket[i];
           if(tupple[0] === key) {
              if(bucket.length === 1) {
                delete bucket
                console.log('item deleted')
                break;
              }

           }
        }




      // return key was found

      // else there is something
      // got to index and delete the tupple with the key by itterating through the bucket
      // return key and value destroyed
  };

  return result;
};


let result = makeHashTable();
// result.insert("name", "jeeus")
// result.insert("name", "pizza")
result.insert("jeesus", "pizza")

// result.retrieve("names")
// result.retrieve("jeesus")

result.remove("jeesus")
result.retrieve("jeesus")
// console.log(result,'what is this?')

