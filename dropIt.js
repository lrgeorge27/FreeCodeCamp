// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
// Return the rest of the array, otherwise return an empty array.
// Here are some helpful links:
// Arguments object
// Array.prototype.shift()
// Array.prototype.slice()

//input = function with integers
//output = an array with integers that meet the function requirements


//2. compare the first index to the function parameters
//3. If the integer in the index meets the condition of the function, store it in a new array.
//4. Else drop(delete) the integer
//5. Iterate through the array checking each index
//6. If no itegers meet the conidition return []
function dropElements(arr, func) {
    var length = arr.length; //arr.length needs to be in a var to use the original arr length, as length is affected by arr.shift
    for (var i = 0; i < length; i++) {
        if (func(arr[0])) { //if arr[0] meets the function condition break out of the loop and return the current arr
            break; //breaks the loop and moves to return
        }
        else {
            arr.shift(); //arr.shift() drops the first index element and shifts all elements forward
        }
    }
    return arr;

}

// var newArr = arr.shift(func);
//   return arr;

console.log(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; }));
console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; }));
console.log(dropElements([1, 2, 3], function(n) { return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; }));
