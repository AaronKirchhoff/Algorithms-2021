// cracking the Coding interview book

// page 192 1.1 Is Unique
var isUnique = function(str){
  var lowercase = str.toLowerCase();
  var strArray = Array.from(lowercase);
  var sortedArray = strArray.sort();
  console.log(sortedArray);
  for (var i=0; i<sortedArray.length; i++){
    if(sortedArray[i] == sortedArray[i+1]){
      console.log(false);
      return false;
    }
  }
  console.log(true)
  return true
};
// isUnique('Elephant');
// great first try! not the most optimal though,

// page 192, 1.1 optimzed using obejct technique, we create an object then loop thorugh that object ans ask if this value in our strong is already in our obejct, then we have found a duplicate and we can return false becuase our string has duplicate values. otherwise, go ahead and add that value to our object. if we search and add to our obejct till then end and find no duplicates... return true, there are no duplicate values! yay!
var isUniqueOptimized = function(str) {
  var stringObject = {};
  for(var i = 0; i < str.length; i++){
      if(stringObject[str[i]]) {
        console.log(false)
        return false;
      }
      stringObject[str[i]] = true;
  }
  console.log(true)
  return true;
};
// isUniqueOptimized('anaconda');


// URLify page 90 1.3
function URLify(str){
  return str.replace(/ /g,"%20");
}
URLify('Mr John Smith')

