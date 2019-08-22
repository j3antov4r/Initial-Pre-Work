/*
Introducing JavaScript let statement that allows you to declare a variable
with block scope.. so, a variable with the same name can only be declared once.

Jean Tovar
*/
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
