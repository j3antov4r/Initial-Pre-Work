/*
Using the rest operator to receive any quantity of parameters in a functions

Jean Tovar
*/
const sum = (function() {
  "use strict";
  return function sum(...args) {
    let suma = 0;
    args.map(val =>{
      suma+=val;
    })
    return suma;
  };
})();
console.log(sum(1, 2, 3)); // 6
