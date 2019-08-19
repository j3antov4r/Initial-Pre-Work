/*
Using local scope variables

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.
*/
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar="hola";
  console.log(myVar);
}
myLocalScope();
