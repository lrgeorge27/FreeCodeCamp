// Sum All Numbers in a Range
// We'll pass you an array of two numbers. 
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

// Here are some helpful links:
// Math.max()
// Math.min()
// Array.prototype.reduce()

// Psuedo Code:
// Establish minimum and maximum values from numbers given
// Store min and max in a variable
// for each number between min and max and add them together
// Return the total

// Input: [number, number], array, no order
// Output: single integer


function sumAll(arr) {
    var min = Math.min(...arr); //find the min, need ... when pass an array argument
    // console.log("min:", min);
    var max = Math.max(...arr); //find the max
    // console.log("max:", max);
    var total = 0; //create a running total

    for (var i = min; i <= max; i++) { //loop through values to get all the # in between
        console.log("start");
        total += i; //add each # to the running total
    }
    // console.log(total);

    return total;
}



console.log(sumAll([1, 4])); //should return 10.
console.log(sumAll([4, 1])); //should return 10.
console.log(sumAll([5, 10])); //should return 45.
console.log(sumAll([10, 5])); //should return 45.
