function sumOfOdd(arr){
  var sum = 0;
  let l = arr.length;
    // Traverse the given array arr[]
    for(let i = 0; i < l; i++){
      // Add to the sum for each
      // contribution of the arr[i]
      sum += Math.floor(((i + 1) * (l - i) + 1) / 2) * arr[i];
    }
    // Return the final sum
    console.log(sum)
    return sum;
}  
    // Function call
sumOfOdd([2,4,3,6,7])