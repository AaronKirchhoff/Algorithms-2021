const { Console } = require("console");
const { start } = require("repl");

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

// 3.
// Gas station problem. you have two array s the same length, N. 
// number of gas staions = [1,2,3,4,5], in a circular route.
//  each station has gas[i] amount of fuel there
//  you have a car with an unlimited gas tank, but it costs fuel to get from one statio nto the next. the amount of fuel is cost[i].
// gas[i] = amount of fuel at that index/ station
// cost[i] = cost of fuel at that index.
// begin your journey with an empty tank at one of  gas stations.
// given two integer arrays. gas[] and cost[],
// return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1
// also, assume there is only one right gas station to start at to make a full circle.
//  the sum of gas must be >= sum of cost otherwise no solution exists.

function gasStation(gas, cost){
  // first thing, compare sum(gas) to sum(cost), if the total cost is higher than the amount of gas you get, there is no solution, so right away you return -1, let's check. Get sum of each array =...
  var sum = gas.reduce(function(a, b){
    return a + b;
  }, 0);
  var sum2 = cost.reduce(function(a, b){
    return a + b;
  }, 0);
  if( sum < sum2) {
    return -1;
  }
  var tank = 0;
  var startingPt = 0;
  for( var i=0; i< gas.length; i++){
    // get the differnce between gas and cost, this will tell us if we have enough fuel to get to next station add it to our gas tank.
    tank += gas[i] - cost[i] 
    if( tank < 0){
      tank = 0;
      startingPt = i + 1;
    }
  }
  return startingPt;
}
console.log(gasStation([1,2,3,4,5], [3,4,5,1,2]));
