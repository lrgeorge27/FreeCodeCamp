function bouncer(arr) {
    return arr.filter(function(value) { //create a function to filter the value of the array, return the function.
        if (value !== Boolean) { //if the value is not equal to a Boolean value, return the value
            return value;
        }

        return arr; //return the array of non-boolean values
    });
}
bouncer([7, "ate", "", false, 9]);


//https://medium.com/@hugh.winchester/falsy-bouncer-8c95916fb4ed
