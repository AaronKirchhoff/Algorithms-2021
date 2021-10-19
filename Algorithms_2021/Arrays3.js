// 1119. Remove Vowels from a String
function removeVowels(str){
  return str.replace(/[aeiou]/g,'')
}
// removeVowels("leetcodeisacommunityforcoders")


// 1221. Split a String in Balanced Strings
function balancedSubString(str){
  var balanceVar = 0;
  var count = 0;
  var myArr = Array.from(str)
  for(var i=0; i<myArr.length; i++){
    if(myArr[i] == 'R'){
      balanceVar--
    }
    if(myArr[i] == 'L'){
      balanceVar++
    }
    if(balanceVar == 0){
      count++
    }
  }
  console.log(count)
}
balancedSubString("RLRRLLRLRL")