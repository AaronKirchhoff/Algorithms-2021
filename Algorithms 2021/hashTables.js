var romanToInt = function(s){
  const romanMap = new Map();
  // in a hash map, the key is the argument you take in, the related value is what it's set as in your function.
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

// 2. #1512 number of good pairs. i'm finding a common problem of mine, that I don't understand he question well enough. I write decent code, but my answer doesn't answer the question. ask more clarifying questions, be more specific dont assume you understand the question!!!
var numOfPairs = function(nums) {
  const map = {}
  let count = 0
  for (const number of nums) {
      if (map[number]) {
          count += map[number];
          map[number] += 1;
      } else {
          map[number] = 1;
      }
  }
  console.log(map);
  console.log(count);
  return count;
};
// numOfPairs([1,2,3,1,1,3]);


// 744. Find Smallest Letter Greater Than Target, leetcode
// 1. create hash map of alphabet to numbers
// 2. for loop and if statement, ask if any index value in the array is greater than the target, if nothing is, return that first value character.
// 3. if an index value is... return that value.
var nextGreatestLetter = function(letters, target){
  const letterMap = new Map();
    letterMap.set('a',1);
    letterMap.set('b',2);
    letterMap.set('c',3);
    letterMap.set('d',4);
    letterMap.set('e',5);
    letterMap.set('f',6);
    letterMap.set('g',7);
    letterMap.set('h',8);
    letterMap.set('i',9);
    letterMap.set('j',10);
    letterMap.set('k',11);
    letterMap.set('l',12);
    letterMap.set('m',13);
    letterMap.set('n',14);
    letterMap.set('o',15);
    letterMap.set('p',16);
    letterMap.set('q',17);
    letterMap.set('r',18);
    letterMap.set('s',19);
    letterMap.set('t',20);
    letterMap.set('u',21);
    letterMap.set('v',22);
    letterMap.set('w',23);
    letterMap.set('x',24);
    letterMap.set('y',25);
    letterMap.set('z',26);

  for(var i=0; i<letters.length; i++){
    if(letterMap.get(letters[i]) > letterMap.get(target)){
      console.log(letters[i]);
      return letters[i];
    }
  }
  console.log(letters[0]);
  return letters[0];
}
// nextGreatestLetter(['b','f','h','l','m'],'z');

// leetcode 1365 how many numbers are smaller than the current number?
var numOfSmall = function(arr){
  var count = 0;
  var newArray = [];
  for(var j=0; j<arr.length; j++){
    for(var b=1; b< arr.length; b++){
      if(arr[0] > arr[b]){
        count++;
      }
    }
    arr.push(arr[0]);
    arr.splice(0,1);
    newArray.push(count);
    count = 0;
  }
  console.log(newArray);
  return newArray;
}
numOfSmall([6,7,10,15,4,3]);
// [2,3,4,5,1,0]