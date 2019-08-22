/*
Using default paramenters in ES6 functions

Jean Tovar
*/
"use strict";
return function increment(number, value = 1) {
  return number + value;
};
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
