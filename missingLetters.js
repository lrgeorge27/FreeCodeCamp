//input - string of characters "a-z", (no special characters, no wrap around "z to a" - infered my test cases).
//output - the missing character or undefined. (single character output - infered from direction language)
//example: input = "abce" output="i"

//1. first character = first character of input
//2. check if next letter is next in alphabet
//3. if - check if another letter is available
//4. got to next letter, repeat step 2
//5. else 
//6. return undefined 
//7. else
//8. return expected character
function fearNotLetter(str) {
    // var firstChar = str[0]; //start with string index 0
    // console.log(firstChar.charCodeAt(0));
    // console.log("char code of a:", "a".charCodeAt(0));
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) == str.charCodeAt(i) + 1) { //string index 1 character code equals first character code + 1
            console.log("next char is next in alphabet");
        }
        else {
            console.log("next char is not expected char");
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    console.log("hello");
    return undefined;
}

console.log(fearNotLetter("abce"));
