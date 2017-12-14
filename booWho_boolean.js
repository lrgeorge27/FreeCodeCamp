// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

//input - string, numbers, special characters, or boolean primitive.
//output - true or false
//1. look at the input.
// 2. if input if === to true or false, return true
// 3. if input is !=== to true or false, return false

function booWho(bool) {
    if (bool === true) {
        return true;
    }
    else if (bool === false) {
        return true;
    }
    else {
        return false;
    }
}

console.log(booWho(null));
