// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

// Here are some helpful links:
// For Loops
// Array.prototype.push()

//Input = integer, may not be prime
//Output = integer that is equal to the sumed prime numbers up to (and including if prime) the number given.

//example:
//input: 10
//  2+3+5+7 = 17
//output: 17

//Solution:
//Running total starts at 0 - var created outside of loop/function can be accessed inside loop
//Find prime numbers for range 2 - input. loop
//      num = 2
//check if num is prime
//  Add to running total
//  Repeat with next num
//If not 
//  Repeat with next num
//Print running total
//Add prime numbers

//Check for a prime number encapsulation - Sperate code
//isPrime
//Input - number, positive integer
//Output - boolean
// loop 2 through n (non-inclusive)
// check if input is divisible by current number
//     Not prime
// If not
//     Check the next number
// Is prime

function isPrime(num) {
    for (var n = 2; n < num; n++) {
        if (num % n == 0) {
            return false // num is not prime
        }
    }
    return true;
}

function sumPrimes(num) {
    var total = 0;
    for (var n = 2; n <= num; n++) {
        // console.log("interation", n);
        if (isPrime(n)) {
            // console.log(n, "is prime");
            total = total + n; //shortcut: total += n
            continue; //tells loop to start repeat now. Not necessary because loop with cause the repeat.
        }
        // console.log("looping");
    }
    return total;
}
// console.log("2", isPrime(2));
// console.log("5", isPrime(5));
// console.log("9", isPrime(9));
console.log(sumPrimes(10)); //should return 17.
console.log(sumPrimes(977)); //should return 73156.

// Use to test if same var name -> num in two functions will be a problem.
// function sumPrimes(num) {
//     console.log("before is prime", num);
//     isPrime(num);
//     console.log("after is prime", num);
//     return num;
// }
