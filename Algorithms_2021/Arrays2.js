

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
// panagramCheck('thequickbrownfoxjumpsoverthelazydog')


// leetcode 189. Rotate Array
function rotateArr(arr, jump){
  let hold = 0;
  let last = arr.length-1;
  for(let i=1; i<=jump; i++){
    hold = arr[last];
    arr.pop();
    arr.unshift(hold);
    hold = 0;
  }
  console.log(arr);
  return arr
}
// rotateArr([7,3,4,1,2,6,9], 4)
// but too slow


function rotateArr2(arr, jump){
  var num = 1;
  while( num <= jump){
    arr.unshift(arr[arr.length-1]);
    arr.pop();
    num++;
  }
  console.log(arr);
}
// rotateArr2([7,3,4,1,2,6,9], 4)
// damn still too slow.


function rotateArr3(nums, k){
  var next = nums.unshift(...nums.splice(nums.length-1,1)) * k;
  console.log(next);

}
// rotateArr2([1,2,3,4,5,6,7], 3)

// 4th try, gathering k number of values ina group, saving them to temp array, splicing them out and for looping thoguh to added them one by one. 
function rotateArr4(arr, k){
  var temp = [];
    temp = arr.slice(arr.length-k)
    console.log(temp);
    arr.splice(arr.length-k,k);
    for (var i=temp.length-1; i>=0; i--){
      arr.unshift(temp[i])
    }
    console.log(arr);
};
// rotateArr4([1,2,3,4,5,6,7], 3)
// ahh this wont work for an array that has a smaller length than k!!!!!!

// 5th try new tactic, reverse whole list, then reverse the k number at the front of array, this gives you the array you need to have at the front. then reverse back the array after k! Woah... no wait that didn't work i think only java can take in arguments for reverse method, sooooo...

// HELPER METHOD CREATED FOR REVERSAL, rotate array
const numsReverse = (nums, start, end) => {
  while( start < end){
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
function rotateArr5(nums, k){
  // k could sometimes be greater than the array length, no need to run it that many times, if you ran this the same number of times as the length of the array, nothing would change. this gets rid of the modulos excess, and only uses the leftovers
  k %= nums.length;
  // reverse nums!!!
  nums.reverse();
  // helper function, so this whle thing is a function with a function in it.
  // this is swapping values using out helper method, has a starting point and an end point. cool, so rather than use these inbuilt JS methods, we just created our own. above I complained reverse didn;t take in arguments, well here you go! we made our own!
  numsReverse(nums, 0, k-1);
  numsReverse(nums, k, nums.length-1)
  console.log(nums)
}
// rotateArr5([1,2,3,4,5,6,7], 3)

// TWO POINTER, HELPER METHOD SWAP VALUES
// 344. Reverse String, leetcode! actually did this one mostly from memory!
const helperPointer = (s, start, end) => {
  while (start < end){
    [s[start], s[end]] = [s[end], s[start]];    
    start++;
    end--;
  }
}
var reverseString = function(s) {
  helperPointer(s, 0, s.length-1);
  console.log(s);
};
// reverseString(['h','e','l','l','o'])



// reverse integer, Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// A signed integer is a 32-bit datum that encodes an integer in the range [-2147483648 to 2147483647]. 


// function reverseInt(x){
//   // console.log(x)
//   if (x < 0){
//     let newX = x * -1;
//   } else {
//     let myString = newX.toString();
//     let splitString = myString.split("");
//   let count = splitString.length -1;
//   while(splitString[count] == 0){
//     splitString.pop()
//     count--;
//   }
//   let reverseArray = splitString.reverse();
//   let joinArray = reverseArray.join("");
//   let newNumber = parseInt(joinArray, 10)
//   if( x < 0){
//     newNumber = newNumber * -1
//     console.log(newNumber)
//   }
//   if (newNumber > 2147483647 || newNumber < -2147483648){
//     return 0;
//   }
  
  // console.log(newNumber)
//   return newNumber
// };
// reverseInt(-23423700)

// leetcode 2011
var finalValueAfterOperations = function(operations) {
  var x = 0;
  console.log(operations)

  for (var i = 0; i<operations.length; i++){
    if (operations[i].includes('+')){
        x++;            
    } else {
        x--;
    }
  }
  console.log(x)
  return x;
  
};
// finalValueAfterOperations(["--X","X++","X++"]);

var plusOne = function(digits) {
  console.log(digits)
  for (var i=digits.length-1; i>=0; i--){
      if(digits[i] !== 9){
          digits[i] += 1;
          console.log(digits)

          return digits;
      }
      if(digits[i] == 9 && digits[i-1] !== 9){
          if(digits[i-1] == null){
              digits[i] = 0;
              digits.unshift(1)
              console.log(digits)

              return digits
          } else {
              digits[i-1] += 1;
              digits[i] = 0;
              console.log(digits)

              return digits;  
          }
      }
      digits[i] = 0;
  }
};
plusOne([9])