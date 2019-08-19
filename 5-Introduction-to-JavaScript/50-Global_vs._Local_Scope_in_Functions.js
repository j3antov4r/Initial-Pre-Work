/*
When you have a local variable with the same name of a global variable, The local
variable takes precedence over the global variable

Jean Tovar 
*/
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var myOutfit="sweater";
  var outerWear = myOutfit;

  // Only change code above this line
  return outerWear;
}

myOutfit();
