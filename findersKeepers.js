// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
// input = array of numbers
// output = first even number in the array, based on modulo (%)
//modulo (%) calculates the remainder of a division opperation.  In this case, it calculates the remainder of i divided by 2. If i is an even number, the result will be 0 and if it is an odd number, the result will be 1. So this if statement checks to see if i is an even number. 
//1. create a variable to hold the arr.
//2. use array.prototype.filter to look through the array, using the function as it's condition.
//3. If the functions condition has been met return first occurence in the array.
//4. Else return undefined. 
function findElement(arr, func) {
    var a = arr.filter(func);
    var num = 0;    //?
    return a[num];
}

    //or 
    // function findElement(arr, func) {
    // var num = 0;    
    // return arr.filter(func)[0];
    // }

console.log(findElement([1, 2, 3, 4], function(num) { return num % 2 === 0; }));
