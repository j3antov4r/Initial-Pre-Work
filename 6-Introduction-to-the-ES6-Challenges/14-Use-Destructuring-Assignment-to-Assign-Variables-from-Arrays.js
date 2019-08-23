/*
swaping values of a and b using destructuring

Jean Tovar
 */
 let a = 8, b = 6;
 (() => {
   "use strict";
   // change code below this line
   [b,a] = [a,b];
   // change code above this line
 })();
 console.log(a); // should be 6
 console.log(b); // should be 8
