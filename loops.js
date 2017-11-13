//Nesting For Loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
  }
  // Only change code above this line
  return product;
}

//Iterate While Loops
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,4,7]]);

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}

//Profile Lookup
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
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName === firstName) {
    if (contacts[i].hasOwnProperty(prop)) {
    return contacts[i][prop];
  }
  else {
    return "No such property";
    }
  }
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Sherlock", "likes");


//Generate random fractions
function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}

//Generate Randon Whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
   return Math.floor(Math.random() * 10);
}


//Generate random whole #s w/in a range.
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
