function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments); //turn arguments into an array for comparison
    for (var i = 0; i < arr.length; i++) { //iterate through the arr to look for values
        for (var j = 0; j < args.length; j++) { //iterate through the args (nested) to compare values
            if (arr[i] === args[j]) { //compare index values of arr and args for strict equalitiy, if they are equal
                delete arr[i]; //delete the equal value
            }
        }
    }
    return arr.filter(Boolean); //leave nesting iterations to return modified arr filter for "" values
}



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
