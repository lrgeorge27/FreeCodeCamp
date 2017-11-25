function titleCase(str) {
    str = str.toLowerCase().split(" "); //Change string characters to lowercase, then split at spaces
    for (var i = 0; i < str.length; i++) { //for each string in the array...
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); //...change the character at index 0 to uppercase, 
        //and slice off the lowercase index 0 by cutting right after it at index 1
    }
    return str.join(" "); //join the array of strings back together to form 1 string.
}

titleCase("I'm a little tea pot");

//map() method, https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
function titleCase(str) {
    // Step 1. Lowercase the string
    str = str.toLowerCase() // str = "i'm a little tea pot";

        // Step 2. Split the string into an array of strings
        .split(' ') // str = ["i'm", "a", "little", "tea", "pot"];

        // Step 3. Map over the array
        .map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
            /* Map process
            1st word: "i'm"    => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                                        "I"                     +     "'m";
                                  return "I'm";
            2nd word: "a"      => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "a".charAt(0).toUpperCase()   + "".slice(1);
                                        "A"                     +     "";
                                  return "A";
            3rd word: "little" => (word.charAt(0).toUpperCase()    + word.slice(1));
                                  "little".charAt(0).toUpperCase() + "little".slice(1);
                                        "L"                        +     "ittle";
                                  return "Little";
            4th word: "tea"    => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "tea".charAt(0).toUpperCase() + "tea".slice(1);
                                        "T"                     +     "ea";
                                  return "Tea";
            5th word: "pot"    => (word.charAt(0).toUpperCase() + word.slice(1));
                                  "pot".charAt(0).toUpperCase() + "pot".slice(1);
                                        "P"                     +     "ot";
                                  return "Pot";                                                        
            End of the map() method */
        });

    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");

//map() and replace() method, https://medium.freecodecamp.org/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
function titleCase(str) {
    // Step 1. Lowercase the string
    str = str.toLowerCase() // str = "i'm a little tea pot";

        // Step 2. Split the string into an array of strings
        .split(' ') // str = ["i'm", "a", "little", "tea", "pot"];

        // Step 3. Map over the array
        .map(function(word) {
            return word.replace(word[0], word[0].toUpperCase());
            /* Map process
            1st word: "i'm" => word.replace(word[0], word[0].toUpperCase());
                               "i'm".replace("i", "I");
                               return word => "I'm"
            2nd word: "a" => word.replace(word[0], word[0].toUpperCase());
                             "a".replace("a", "A");
                              return word => "A"
            3rd word: "little" => word.replace(word[0], word[0].toUpperCase());
                                  "little".replace("l", "L");
                                  return word => "Little"
            4th word: "tea" => word.replace(word[0], word[0].toUpperCase());
                               "tea".replace("t", "T");
                               return word => "Tea"
            5th word: "pot" => word.replace(word[0], word[0].toUpperCase());
                               "pot".replace("p", "P");
                               return word => "Pot"                                                        
            End of the map() method */
        });

    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");
