/*
I solved this exercise using a simple boolean table to eval all conditions,
taken the apropiate action in the switch sentence

    Prop-Exist   Value-Not-Empty  Prop-is-tracks     Action
    1               1               1               .push(value) at tracks arrays
    1               1               0               set value to property
    1               0               1               delete property
    1               0               0               delete property
    0               1               1               create tracks array & push value
    0               1               0               set value to property
    0               0               1               create tracks array
    0               0               0               set value to property

Jean Tovar
*/
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var album = collection[id];
  var eprop = (album.hasOwnProperty(prop))? 4 : 0; //ckecking if property exists
  var evalu = (value !== "") ? 2 : 0;             //checking is value is not-empty
  var etrack = (prop === "tracks") ? 1 : 0;       //checking is property is "tracks"
  var applyAction = eprop + evalu + etrack;
  switch(applyAction){
    case 7:
      album[prop].push(value);
      break;
    case 6:
    case 2:
    case 0:
      album[prop] = value;
      break;
    case 5:
    case 4:
      delete album[prop];
      break;
    case 1:
      album[prop] = [];
      break;
    case 3:
      album[prop] = [];
      album[prop].push(value);
      break;
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
