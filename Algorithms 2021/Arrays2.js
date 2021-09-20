function sumOfOdd(arr){
  var sum = 0;
  let l = arr.length;
    // Traverse the given array arr[]
    for(let i = 0; i < l; i++){
      // Add to the sum for each
      // contribution of the arr[i]
      sum += Math.floor(((i + 1) * (l - i) + 1) / 2) * arr[i];
      console.log(sum)
    }
    // Return the final sum
    console.log(sum)
    return sum;
}  
    // Function call
// sumOfOdd([2,4,3,6,7])

// leetcode panagram, 1832
// The Set object lets you store unique values of any type, whether primitive values or object references. but all values must be unique
// ... the Spread operator, spread over the the object/array/string and get all its properties
function panagramCheck(str){
  return new Set([...str]).size === 26 ? true : false;
}
panagramCheck('thequickbrownfoxjumpsoverthelazydog')