// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Here are some helpful links:

// RegExp
// String.prototype.replace()

// Input - 
// A string may contain multiple words. Words can be separated by an Uppercase character, spaces, and non-alphanumeric characters.
// Output - 
// Return a string in all lowercase and dashes in between words
// Example:
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"
// 1 use regex to recognize the space or separators between words
// 	Use patterns & flags
// 2 replace each space or separator with a dash
// 3 convert string to lowercase
// 4 return string

function spinalCase(str) {
    var newStr = str.replace(/[^A-Za-z]/g, "-").toLowerCase();
    // (/(a-z)(A-Z)/, /$1 $2/)
    return newStr;
}

//regExp: 
// (The decimal point) matches any single character except the newline character.
// For example, /.n/ matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap")); // should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); // should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); // should return "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); // should return "all-the-small-things".
