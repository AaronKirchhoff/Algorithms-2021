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
numOfPairs([1,2,3,1,1,3]);