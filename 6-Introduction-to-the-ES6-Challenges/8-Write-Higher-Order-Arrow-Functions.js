/*
Using arrow functions with parameters and some ES5 and ES6 features

Jean Tovar
*/
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers= [];
  arr.map(val =>{
    if (Number.isInteger(val) && val > 0){
      squaredIntegers.push(val**2);
    }
  })
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
