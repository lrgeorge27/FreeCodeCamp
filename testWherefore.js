function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    function sourceConvert() {
        var property = Object.keys(source);
        var value = source.valueOf();
        property + value;
    }
    // source = Object.entries(source);
    // console.log("source:", source);
    // console.log(property);
    // console.log(value);

    for (var i = 0; i < collection.length; i++) {
        var filter = collection.filter(sourceConvert);
        arr.push(filter);




        // Only change code above this line
        return arr;
    }
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
