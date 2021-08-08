const { Console } = require("console");

// add all numbers between 1 and 100 together,
function Allnums() {
  var tot = 0;
  for (i = 0; i <= 100; i++) {
      tot = tot + i;
  }
  return tot;
}
// console.log(Allnums())
// 5050

// Leetcode remove duplicates from sorted array 
// nums = [], 
function removeDups(nums) {
  // place the first index start at one because its always unique
  var output = 1;
  // nums.sort();
  // console.log(nums);
  // now we want to run thorugh the array and compare each element with the following element. and we do nums.length - 1 when we compare the second to last value to the last value, we don;t go out of bounds. 
  //  this function is replacing indecies with the current value. no need to use .sort()
    for(var i = 0; i < nums.length - 1; i++){
      if(nums[i] != nums[i + 1]) {
        // we want to place the current number at the current index we're on.
        nums[output++] = nums[i + 1];
        // output.push(i);
      }
    }
    return output;
    
};
// console.log(removeDups([1,2,1]));
// answer nums = [1,2,3,4,_,_] so answer should be 4. 


// 2. two nums in javascript
// right so given an array and another integer, iteragte throught eh array and and find two numbers whose sum is equal to the lone target integer, then return the two indecies in an array.
function twoNums(nums, target){
  var hold = 0;
  var hold2 = 1;
  var myArray = [];
  for (var i = 0; i < nums.length; i++){
    hold = nums[i];
    for (var b = hold2; b < nums.length; b++){
      if( hold + nums[b]  === target){
        myArray.push(i, b);
        console.log(myArray);
        return myArray;
      }
    }
    hold2++;
  }
}
twoNums([2,5,5,11], 10);
// twoNums([2,7,11,15], 9);
