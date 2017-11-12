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