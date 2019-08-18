/*
Using concatenation operator in a function and returning a new String

Jean Tovar
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result = "There is a "+ myAdjective + " "+ myNoun + ", it "+ myVerb + " "+ myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("cat", "little", "hit", "slowly");
