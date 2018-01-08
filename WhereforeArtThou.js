// Wherefore art thou
// Make a function that looks through an array of objects (first argument) 
// and returns an array of all objects that have matching property and value pairs (second argument). 
// Each property and value pair of the source object has to be present in the object from the collection 
// if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
// { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
// and the second argument is { last: "Capulet" }, then you must return the third object 
// from the array (the first argument), because it contains the property and its value, 
// that was passed on as the second argument.


// Here are some helpful links:
// Global Object
// Object.prototype.hasOwnProperty()
// Object.keys()

//Input = array of multiple objects that include numbers and strings
//Output = one object that matches the source object

//start with the first object in the array
//compare the source key value pair to each key value pair in the object
//if the key value pair matches, push the object to a new array and return
//loop through array

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var property = Object.keys(source);
    var value = source.valueOf();
    // source = Object.entries(source);
    // console.log("source:", source);
    console.log(property);
    console.log(value);

    for (var i = 0; i < collection.length; i++) {
        console.log("start");
        console.log(collection.filter(value));

        // var collProperty = collection[i].hasOwnProperty(property);
        for (var j = 0; j < collection[i].length; j++) {
            console.log("j loop");
            var collProperty = collection[i].hasOwnProperty(property);
            var pairValue = collection[i][j].valueOf(property);
            console.log(pairValue);
            if (pairValue == value) {
                arr.push(collection[i]);
            }
        }
    }


    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
