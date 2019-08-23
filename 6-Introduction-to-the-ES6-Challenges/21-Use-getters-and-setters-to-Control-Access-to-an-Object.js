/*
Using getters and setter in a class

Jean Tovar
*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(fahrenheit){
      this.temperature= fahrenheit;
    }
    temperature(){
      return (5/9 *(this.temperature-32));
    }

    temperature(fahrenheit){
      this.temperature = fahrenheit;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
