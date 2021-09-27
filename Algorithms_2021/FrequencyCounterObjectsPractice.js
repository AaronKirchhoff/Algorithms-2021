function squared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  // you use this method because it sorts the arrays for you when you build an object, think, now that my arrays are in order in an object, what can I do? how can I compare?
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let num of arr1) {
    frequencyCounter1[num] = frequencyCounter1[num] + 1 || 1
  }
  console.log(frequencyCounter1)

  for (let num of arr2) {
    frequencyCounter2[num] = frequencyCounter2[num] + 1 || 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false
  }
  console.log(frequencyCounter1)
  console.log(true);
  return true
}
squared([2,3,4,5,5,4] , [4,9,16,25,4,6]);


// check to see which value shows up the most often

function firstTry(Arr){
  let max = 0;
  let myCount = {}
  for( let num of Arr){
    myCount[num] = myCount[num] + 1 || 1
  }
  console.log(myCount);
  for( let key in myCount){
    if (myCount[key] > max){
      // here I know how many times the max key shows up
      max = myCount[key];
      console.log(max);
    }
  }
  // here i return that key
  let ans = Object.keys(myCount).find(bat => myCount[bat] === max)
  console.log(ans);
  return ans;
}
// firstTry([1,3,4,3,6,2,3,2,2,2,2,2,2]);


// leetcode 1528 shuffle string
var shuffleString = function(s, indices){
  for(var i=0; i< indices.length; i++){
    if(indices[i] >= indices.length){
      return null;
    }
  }
  let arrS = Array.from(s);
  let newString = {};
  let count = 0;
  for (let val of indices){
    newString[val] = arrS[count];
    count++;
  }
  let ans = Object.values(newString).join('');
  console.log(ans);
  return ans;
}
// shuffleString('drwazi', [5,4,0,3,2,1])
// return wizard

// leetcode