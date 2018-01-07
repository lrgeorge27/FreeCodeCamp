// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Here are some helpful links:
// Comparison Operators
// Array.prototype.slice()
// Array.prototype.filter()
// Array.prototype.indexOf()
// Array.prototype.concat()

// Input: two arrays
// Output: new array with items found in only 1 array, but not both 

// Steps:
// Add an var holder
// Check the first array against the second array
// Check each one if they have the same value add to the holder
// Repeat step 2 to the second array 
// If it can't find the holder return the result.


function diffArray(arr1, arr2) {
    var newArr = []; //create an empty array to hold diff values

    for (var i = 0; i < arr1.length; i++) { //loop through first array 
        if (arr2.indexOf(arr1[i]) === -1) { //check if each index in first array appears in second array.  
            newArr.push(arr1[i]); //If it doesn't (-1), hold it in a new array
        }
    }
    for (var i = 0; i < arr2.length; i++) { //then loop through second array
        if (arr1.indexOf(arr2[i]) === -1) { //check if each index in second array appears in first array.
            newArr.push(arr2[i]); //check if each index in first array appear in second array.
        }
    }
    // console.log(newArr);
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //should return [4].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //should return ["pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //should return ["diorite", "pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); //should return [].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //should return ["piglet", 4].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); //should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); //should return [1, "calf", 3, "piglet", 7, "filly"].
