function confirmEnding(str, target) {
    //str.substr(start, length) 
    //start = Location at which to begin extracting characters. If a negative number is given, it is treated as strLength - start where strLength is the length of the string. 
    //length = The number of characters to extract. If this argument is undefined, all the characters from start to the end of the string are extracted.
    var x = str.substr(str.length - target.length); { //Create a var to make changes to string. Set start point = to the index position of the target length.
        if (x === target) { //compare substring with target string using strict equality
            return true;
        }
        else {
            return false;
        }
    }
}

confirmEnding("Bastian", "n");
