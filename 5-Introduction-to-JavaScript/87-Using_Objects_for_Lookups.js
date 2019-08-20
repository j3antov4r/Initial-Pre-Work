/*
Using an object for looking up a value

Jean Tovar
*/
// Setup
function phoneticLookup(val) {
  var result = "";




  var lookup ={
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }

  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
