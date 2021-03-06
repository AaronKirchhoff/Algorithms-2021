const { Console, count } = require("console");
const { resourceUsage } = require("process");
const { stringify } = require("querystring");
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
// twoNums([2,5,5,11], 10);
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
// console.log(gasStation([1,2,3,4,5], [3,4,5,1,2]));


// 4. merge two linked lists
// now we're working with nodes and a linked list. a linked list is a lot like an array, but the values don't have indexes. to find anythin gin the linked list, you have to start from the beginning and work your way to it, which takes up time, so not super efficient, but it's easy to add or delete nodes in a linked list. so...
//  you have two linked lists, merge them so that the result is an ascending, linked list of all the values. right...


// we can copmare the first values in each list, and if one is smaller than the other, add it to an empty place of node in an open list we create. do this until one list ends, then append the remainder to the open list.
// define what data and next actually mean in your node class.
// class ListNode {
//   constructor(val, next) {
//     this.next = (next === undefined ? null : next);
//     this.val = (val === undefined ? 0 : val);
//   }
// }

// how to implement a list node in javascript
class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

// how to implement a linked list class in javascript
class LinkedList{
  constructor(){
      this.head = null;
  }
  mergeTwoLists(l1,l2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    while(l1 !== null && l2 !== null) {
      // keep getting 'data is undefined here'?????
      if(l1.data < l2.data) {
        dummy.next = l1;
        l1 = l1.next;
      } else {
        dummy.next = l2;
        l2 = l2.next;
      }
      dummy = dummy.next;
    }
    if(l1 !== null) {
      dummy.next = l1;
    } else {
      dummy.next = l2;
    }
    console.log(head.next);
    return head.next;
  }
}
// creating an object for the linkedlist class
// var callList = new LinkedList();
// console.log(callList.mergeTwoLists([1,3,5,7], [2,4,6,8]));

// 5. leetocode 1920 build array form permuation
var buildArray =  function(nums) {
  ans = [];
    for(var i=0; i< nums.length; i++){
    ans.push(nums[nums[i]]);
    }
    console.log(ans);
    return ans;
  };
  // buildArray([0,2,1,5,3,4]);

  // 6 leetcode #1859 sorting the sentence.
  // given a string with spaces in it, that is already shuffled and has corresponding indecies appended to each word, retun the original sentence in order without indeces.
  // had to look up solution, this was tough

var sortSentence = function(s) {
  // split string into a string array with split() method
  let arr = s.split(" ");
  console.log(arr);
  let minValue = 1;
  // you must return an array, so create an empty one for now
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // checking if minValue is equal to the Number in the index
    if(minValue === Number(arr[i][arr[i].length-1])) {
      // split the string index even further
      let removeArr = arr[i].split("");
      console.log(removeArr);
      // splice the removeArr, at the last position in the array, and remove 1 item
      removeArr.splice(removeArr.length-1,1)
      // push to our result array. what to push? removeArr and join() it to result as a string, The join() method creates and returns a new string by concatenating all of the elements in an array
      result.push(removeArr.join(''));
      // increment by one for minValue
      minValue++;
      // in arr, at the i position, remove 1 item.
      arr.splice(i,1);
      // why is 1 = -1???
      i = -1;
    }     
  }
  console.log(result.join(' '));
  return result.join(' ');
};

// sortSentence("Myself2 Me1 I4 and3")

// 7 concatenation of array
// here is my brute force, accepted submission in leetcode. Time complexity is somwhere between O(n) or O(n2) so not very good, lets see if i can incorparate a JS method to speed it up.
var getConcatenation = function(nums) {
  ans = [];
  for (var i=0; i<nums.length; i++){
      ans.push(nums[i]);
  }
  for (var i=0; i<nums.length; i++){
      ans.push(nums[i]);
  }
  console.log(ans);
  return ans;
};
// getConcatenation([1,2,3,4])

// ////// 2nd try, optimized for speed. for this to work, i had to set the concat method to a variable. I was setting ans = [];, then trying to concat nums to nums, then setting ans equal to nums, but that wasn't working. Big O is O(1) Nice!
var getConcatenation2 = function(nums) {
  ans = nums.concat(nums);
  return ans;
};
// getConcatenation2([1,2,3,4])


// 8 slowest key, leetcode #1629. this is what I came up with, but I couldn't fit all edge cases... input [1,2] "ba", didn't know how to return a lexicographically largest key if the counterrest's were the same. Moving on, never found a solution to this...
var slowestKey = function(releaseTimes, keysPressed){
	var myArr = keysPressed.split('');
	thisKey = 0;
  counterRest = 0;
	longestRest= 0;
  equalRestArray = [];
	for(var i=0; i<releaseTimes.length; i++){
    if(releaseTimes[i -1] === null){
      counterRest = releaseTimes[i];
    } else {
      counterRest = releaseTimes[i] - releaseTimes[i - 1];
    }
    if(counterRest === longestRest){
      equalRestArray.push(myArr[i]);
    } else if(counterRest >= longestRest){
      longestRest = counterRest;
      thisKey = myArr[i];
    }
	}
  console.log(equalRestArray);
  console.log(thisKey);
	return thisKey;
};

// slowestKey([1,2],"ba");

// 9 letcode roman numerals.

var romanToInt = function(s){
  const romanMap = new Map();
  romanMap.set('I',1);
  romanMap.set('V',5);
  romanMap.set('X',10);
  romanMap.set('L',50);
  romanMap.set('C',100);
  romanMap.set('D',500);
  romanMap.set('M',1000);
  // set result equal to the last character in the string input.
  var result = romanMap.get(s.charAt(s.length-1));
  // iterate through the string, starting from second to last character, and decrement, building our result from the back. this way we are comparing two charcters, and if one character is less than the following char, subract it, otherwise, add that amount.
  for (var i=s.length-2; i>=0; i--){
    if(romanMap.get(s.charAt(i)) < romanMap.get(s.charAt(i+1))){
      result-=romanMap.get(s.charAt(i));
    } else {
      result+=romanMap.get(s.charAt(i));
    }
  }
  console.log(result);
  return result;
}
// romanToInt("MCLX");

// 10 #1480 running sum of 1d array. mock interview went well. now know differnce between == and ===. == compares two variables. but === is more strict and compares variables and their datatypes.
var runningSum = function(nums){
  var mySum = [];
  for(var i=0; i<= nums.length -1; i++){
    if(nums[i -1] == null){
      mySum.push(nums[i]);
    } else {
      mySum.push(nums[i] + mySum[i-1]);
    }
  }
  console.log(mySum);
  return mySum;
}
// runningSum([2,5,7,3,6]);

// 11 leetcode 1470 shuffle array
// i see a mistake, i needed to delete the i+n after splicing it in. also I think you're allowed to create another array, that was an ssumtion on my part. should have asked!
var shuffleArray = function(nums, n){
  var newArray = [];
  var temp = n;
  for(var i=0; i<n; i++){
    // nums.splice(nums[i],0,nums[i+n]);
    // console.log(nums);
    // nums.length = n*2;
    newArray.push(nums[i]);
    newArray.push(nums[temp]);
    temp++;    
  }
  console.log(newArray);
  return newArray;
}
// shuffleArray([2,5,1,3,4,7],3);
  // [2,3,5,4,1,7]


  // 12
// 771 jewels and stones leetcode #771
var numJewels = function(jewels, stones){
  var count = 0;
  var jewelArr = Array.from(jewels);
  var stonesArr = Array.from(stones);
  for(var i=0; i< jewelArr.length; i++){
    for(var b=0; b<=stonesArr.length; b++){
      if(jewelArr[i] == stonesArr[b]){
        console.log(stonesArr[b]);
        count++;
      }
    }
  }
  console.log(count);
  return count;
}
// numJewels("AB","tLirBsA");

// 12 again 771 jewels and ston4s, but optimized for time complexity
var numJewels2 = function(jewels, stones){
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
      if(jewels.indexOf(stones.charAt(i)) !== -1)
          count++;
  }
  return count;
}
// numJewels2("AB","tLirBsA");

// 13 1431. Kids With the Greatest Number of Candies. need to check one by one. I was 99 percent there on whiteboard practice, i miss understood the question. I thought you add extra candies to all first, then compare them. but instead the question asked for you to add extracandies to one index first, then compare values. prou dof myself for writing ternary operator by memory.
var kidsWithCandies = function(candies, extraCandies){
  let result = [];
  var greatestCandies = 0;
  for(var i=0; i<candies.length; i++){
    if(candies[i] >= greatestCandies){
      greatestCandies = candies[i];
    }
  }
  for( var b=0; b<candies.length; b++){
    candies[b] + extraCandies < greatestCandies ? result.push(false) : result.push(true);
  }
  console.log(result);
  return result;
}

// kidsWithCandies([2,3,5,1,3], 3);
// [5,6,8,4,6]











// 14 1672. Richest Customer Wealth
var maxWealth = function(accounts){
  var max = 0;
  var count = 0;
  for(var i=0; i<accounts.length; i++){
    for(var b=0; b<accounts[i].length; b++){
      count = count + (accounts[i][b]);
    }
    if( count >= max){
      max = count;
    }
    count = 0;
  }
  console.log(max);
  return max;
}
// maxWealth([[2,3,4],[1,2,3],[7,4,6]]);






// 15 mock interview with kristin 8/23/21
// determine if a string im given is a palandrome. 'racecar', expecting true or false. determine is importnant, means boolean.
// edge cases, like capitol letters, set everything to lower case
var palindrome = function(pal){
  // 1. consider corener cases. what if the string has capitol letters? or spaces or odd characters like &%? let's define a variable that is equal to regex expression.
  var noChars = /[^A-Za-z0-9]/g;
  // 2. use method .toLowerCase to change all characters to lower case. then let's also get rid of anything not regex, no spaces, no periods, etc...
  pal = pal.toLowerCase().replace(noChars, '');
  console.log(pal);
  var newArray = [];
  // 3. convert string pal to array.
  var thisArray = Array.from(pal);
  // 4. create for loop that iterates through thisArray, but i start from the end
  for(var i=thisArray.length -1; i>=0; i--){
  // 5. push that value into newArray
    newArray.push(thisArray[i]);
  }
  // 6. compare each value in both arrays and if they are not equal, return false. if each value is equal till end of loop, return true.
  for(var b=0; b< thisArray.length; b++){
    if( newArray[b] !== thisArray[b] ){
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}
// palindrome("A man, a plan, a canal. Panama");


// 4. 3Sum 
// compare three values in an integer array. all values must not be equal to eachother, can;t be the same. and. when you add them up, == 0.
// questions i can ask are, will the input ever be empty? is that a corner case i have to consider? does it include negeative integers? always? if there is no solution, return what? am i reaturning indexes or values? am i returning an array? in order? can I have mulitple answers?
// pseudo code == does this value, plus any other two values equal 0?
// if they do, push them to an empty array, and push them again to a bigger array of arrays. maybe delete the small array and then loop again.
//  it feels like 3 for loops... 

var threeSum = function(nums){
  // didn't add if empty return empty array
  // didn't check to ask if they are the same values, they cannot be.
  var tempArr = [];
  var ansArr = [];
  if (nums.length < 3) return ansArr;
  // sort ascending will make it easier..
  nums = nums.sort((a, b) => a - b);
  // is it possible to have a for loop that runs the length of nums, but doesn't increment? always starts at zero?
  
  for(var i=0; i< nums.length; i++){
    for(var j=1; j< nums.length -2; j++){
      if(nums[i]+nums[j]+nums[j+1] == 0){
        tempArr.push(nums[i],nums[j],nums[j+1]);
        ansArr.push(tempArr);
        tempArr = [];
      }
    }
    nums.push(nums[i]);
    nums.pop(nums[i]);
    console.log(nums);
  }
  console.log(ansArr);
  return ansArr;
}
// threeSum([-1,2,0,1,3]);

// 3sum solution
var threeSum = function(nums){
const results = []
	if (nums.length < 3) return results
	nums = nums.sort((a, b) => a - b)

	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break
		if (i > 0 && nums[i] === nums[i - 1]) continue
		let j = i + 1
		let k = nums.length - 1
		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]
      if (sum === target) {
				results.push([nums[i], nums[j], nums[k]])
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
				j++
				k--
			} else if (sum < target) {
				j++
			} else { // (sum > target)
				k--
			}
		}
	}
  console.log(results);
	return results
};
// threeSum([-1,2,0,1,3]);


// interview prep with Kristin 8/27
//  there are algorithm patterns to use that  are helpful

// same. decide if one array is the square of the other.
// they could be empty, the output boolean, true and false
// taking in two arrays [2,3,4,5] , [4,9,16,25], not always the same length, watch out for cats
// javascript object, frequency table, 

var same = function(Arr1, Arr2){
//1. check if either array is empty, return false
// 2. make sure arrays are sorted ascending order. 
// 3. creat for loop
// 4 compare each index value in both arrays, and if Arr2 is !== the square of Arr1, return false.
// return true.
if (arr1.length !== arr2.length) return false

  for (let num of arr1) {
    let foundIndex = arr2.indexOf(num ** 2)

    if (foundIndex === -1) return false

    arr2.splice(foundIndex, 1)
  }

  return true
//  this is my fist approach but best case it's O(n). instead lets create JS objects, put each array value into them and search them for squared values. this will speed up our function.

//  let can be changed, const=  non changable variable

// 2nd try.. Frequency counter objects
};
// same([2,3,4,5] , [4,9,16,25]);

// 2nd try.. Frequency counter objects
//  note let and the for loops below are wirtten for ES6 version of javascipt and won't run in today browswers.
function squared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // Create frequencyCounter1, here is a for loop, with each iteration we're inputting values from the array into our empty object, when we do that we assign that number as a key, and give it the value (number of times it has shown up) + 1. if we encounter the same number over and over again, the count (value) will increment. || or... set the vlaue as one if it's the first time we're seeing this number in the array. I guess this is a shorthand for loop? let num of arr1? its quicker than writing for(var i=0; i<arr1.length; i++).
  for (let num of arr1) {
    frequencyCounter1[num] = frequencyCounter1[num] + 1 || 1
  }
  console.log(frequencyCounter1);
  // { '2': 1, '3': 1, '4': 1, '5': 1 }

  // Create frequencyCounter2
  for (let num of arr2) {
    frequencyCounter2[num] = frequencyCounter2[num] + 1 || 1
  }

  // Compare frequency counters
  for (let key in frequencyCounter1) {
    // asking if ! this is not in this frequencyCounter2 object... return false.
    if (!(key ** 2 in frequencyCounter2)) return false

    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false
  }
  console.log(true);
  return true
}
// squared([2,3,4,5] , [4,9,16,25]);


// leetcode 1720 decode XORed array
// firstly XOR or ^ means exclusive Or... so either side must be true but not both.
var decode = function(encoded, first) {
  let result = [first];
for (let i = 0; i < encoded.length; i++) {
  result.push(result[i] ^ encoded[i]);
  // first pass, because they are both 1 on each side of ^, push 0
  // 2nd pass, push 2, beacuse 2+0 = 0
  // 3rd pass, actually i have to leave this here, i dont understand it...
}
console.log(result);
return result;
};
// decode([1,2,3], 1);
// [1,0,2,1]

// intiger palidrmoe leetcode #9 using two pointer technique
var intPalindrome = function(int){
  let myFunc = num => Number(num);
  var Arr1 = Array.from(String(int), myFunc);
  console.log(Arr1);
  var pointer = 0;
  for (var i=Arr1.length-1; i>=Arr1.length/2; i--){
    if(Arr1[pointer] !== Arr1[i]){
      console.log(false);
      return false;
    }
    pointer++;
  }
  console.log(true)
  return true;
};
// intPalindrome(10);
// wait 0 is a palindrome???????

// 1313. Decompress Run-Length Encoded List
var DecomList = function(nums){
  var decomArray = [];
  for(var i=1; i<nums.length; i+=2){
    var temp = new Array(nums[i-1]).fill(nums[i]);
    decomArray = decomArray.concat(temp);
  }
  console.log(decomArray);
  return decomArray;
}
// DecomList([1,2,3,4,3,1]);

// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
var defangIP = function(address){
  var defanged = Array.from(address);
  console.log(defanged);
  for(let val in address){
    if(address[val] == '.'){
      defanged.splice(val,1,'['+defanged[val]+']');
    }
  }
  let ansArray = defanged.join("");
  console.log(ansArray);
  return ansArray;
}
// defangIP("255.11.72.314");


// 1389. Create Target Array in the Given Order
var createTarget = function(nums, index) {
  let target=[]
  for(let number of nums){
      let idx = index.shift();
      console.log(idx);
      target.splice(idx,0,number)
  }
  console.log(target)
  return target
};
// createTarget([0,1,2,3,4], [0,1,2,2,1]);

// fizzBuzz!!
// test functoin up and including the n input
// write a funcotin that takes in an integer.
// for loop up to and equal to n, incrementing by one each loop
//  conditionals, and i'll use ternary operators as clean shortcuts for code.
function fizzBuzz(n){
  for(var i=1; i<=n; i++){
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 3 == 0 && i % 5 !== 0) {
      console.log('Fizz')
    } else if (i % 3 !== 0 && i% 5 == 0) {
      console.log('Buzz');
    } else { 
      console.log(i);
    }
  }
  return;
}

// fizzBuzz(15)



// Amazon AWS coding assessment, 9/14/21, let's do this!!!
// need to find most optimal solution too, the pair that's the best but not over. need array of arrays, beacuse you want id's of the pairs.
// of no pair is found... return -1 -1
// sort array ascending
// wait sorting the array changes the indeces... dammit!
function busSong(rideDuration, songDuration){
  const sortArr = songDuration.sort(function(a,b){return a-b});
  console.log(sortArr);
  let pointer = 0;
  let i = sortArr.length-1
  let result = [];
  while (pointer < i){

  // for (var i=sortArr.length-1; i>0; i--){
    if (sortArr[pointer] + sortArr[i] == (rideDuration - 30)){
      result.push(pointer, i)
      pointer++;
    } else if (sortArr[pointer] + sortArr[i] < (rideDuration - 30)){
      pointer++;
    } else {
      i--;
    }
  }
  result = null ? console.log([-1,-1]) : console.log(result)
  // if (result = []){
  //   console.log([-1,-1])
  //   return [-1,-1]
  // }
  // console.log(result)
  return result 
};
busSong(90, [1,10,25,20,35,60,40])
// busSong(90, [1,7])
// wont work if there are multiple values


// second question
function applicationPairs(deviceCapacity, foregroundAppList, backgroundAppList) {
  // result = []
  // for loop through first array and grab first one, 
  // second nested for loop, compare first array to all others and ask if they are less than or equal to device capacity, the push the 0 index of arrays to result
  var result = [];
  var tempArr = [];
  for( var i = 0; i< foregroundAppList.length; i++){
      for( var b = 0; b<foregroundAppList.length; b++){
          if(foregroundAppList[i][1] + backgroundAppList[b][1] <= deviceCapacity){
            // console.log(foregroundAppList[i][1])
              tempArr.push(foregroundAppList[i][0], backgroundAppList[b][0] )
              console.log(tempArr)
              result.concat(tempArr)
              console.log(result)
              tempArr = [];
          }
      }
  }
  console.log(result)
  return result;
};
// applicationPairs(10, [[1,3],[2,5],[3,7],[4,10]], [[1,2],[2,3],[3,4],[4,5]])



