/*
Using the .hasOwnProperty(propname) method of objects to determine if that object
has the given property name. Return true if the given property exits, false in other case

Jean Tovar 
*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
