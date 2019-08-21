/*
Solved using simple if conditions and a flag (found) to stop iterations if the
contact is found before reach the last element in the array

Jean Tovar
*/
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  var result = "No such ";
  var found = false;
  for(var i=0; i < contacts.length && !found ; i++){
    var obj= contacts[i];
    if(obj.firstName === name ){
      found = true;
      if(obj.hasOwnProperty(prop)){
        result= obj[prop];
      }else{
        result +="property";
      }
    }
  }
  if(!found){
    result+= "contact";
  }
  return result;
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
