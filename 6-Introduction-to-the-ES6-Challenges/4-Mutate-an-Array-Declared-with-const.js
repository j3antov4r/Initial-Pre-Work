/*
Even when you declare an array or object as a const, you are able to change their
internal elements or values, but not the array or object it self.

Jean Tovar
*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0]=2;
  s[1]=5;
  s[2]=7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
