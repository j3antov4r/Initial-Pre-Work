/*
Using multiple ternary operators to eval a condition

Jean Tovar
*/
function checkSign(num) {
  return (num < 0)? "negative" : (num === 0)? "zero" : "positive";
}

checkSign(10);
