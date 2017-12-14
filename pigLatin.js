// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

// Here are some helpful links:
// Array.prototype.indexOf()
// Array.prototype.push()
// Array.prototype.join()
// String.prototype.substr()
// String.prototype.split()

//input = string, English, lowercase
//output = new string ending in "ay" or "way"
//1. create a variable to store string
//2. split string
//3. determine if first letter is a vowel or a consonant.
//4. if string begins with a consonant, move first letter (index 0) to end
//4a. then add "ay" to end of string
//5. if vowel add "way" to end of string
//6. join and return new string

function translatePigLatin(str) {
    var newStr = str.split("");
    // var dropFirst = newStr.slice(0, 1);
    if (newStr[0] == "a" || newStr[0] == "e") {
        newStr.push("way");
        console.log(newStr);
    }
    else if (newStr[0] == "i" || newStr[0] == "o" || newStr[0] == "u") {
        newStr.push("way");
        console.log(newStr);
    }
    else {
        newStr.push(newStr[0] + "ay").substr(0, newStr.length);
        // return dropFirst;

    }
    return newStr.join("");
}

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
