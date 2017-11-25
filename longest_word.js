//My method
function findLongestWord(str) {
    var word = str.split(" "); //split the string into an array of words by divinding at the space
    var longestWord = 0; //create a variable to store and compare the longestWord
    for (var i = 0; i < word.length; i++); { //loop through the array...
        if (word[i].length > longestWord) { //...comparing the length of each item to the longestWord...
            longestWord = word[i].length; //...reassigning each new longest length.
        }
    }
    return longestWord;

}
findLongestWord("The quick brown fox jumped over the lazy dog");


//Sort method, https://medium.freecodecamp.org/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c
function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. Sort the elements in the array
    var longestWord = strSplit.sort(function(a, b) {
        return b.length - a.length;
    });
    /* Sorting process
      a           b            b.length     a.length     var longestWord
    "The"      "quick"            5            3         ["quick", "The"]
    "quick"    "brown"            5            5         ["quick", "brown", "The"]  
    "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
    "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
    "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
    "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
    "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
    "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
    */

    // Step 3. Return the length of the first element of the array
    return longestWord[0].length; // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
    // longestWord[0]="jumped" => jumped".length => 6
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Reduce method, https://medium.freecodecamp.org/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c
function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. Use the reduce method
    var longestWord = strSplit.reduce(function(longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else
            return longest;
    }, "");

    /* Reduce process
    currentWord      longest       currentWord.length     longest.length    if(currentWord.length > longest.length)?   var longestWord
    "The"             ""                  3                     0                              yes                          "The"
    "quick"           "The"               5                     3                              yes                         "quick"
    "brown"           "quick"             5                     5                              no                          "quick"
    "fox"             "quick"             3                     5                              no                          "quick"
    "jumped"          "quick"             6                     5                              yes                         "jumped"
    "over"            "jumped"            4                     6                              no                          "jumped"
    "the"             "jumped"            3                     6                              no                          "jumped"
    "lazy"            "jumped"            4                     6                              no                          "jumped"
    "dog"             "jumped"            3                     6                              no                          "jumped"
    */

    // Step 3. Return the length of the longestWord
    return longestWord.length; // var longestWord = "jumped" 
    // longestWord.length => "jumped".length => 6
}

findLongestWord("The quick brown fox jumped over the lazy dog");
