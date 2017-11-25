function largestOfFour(arr) {
    var num = [0, 0, 0, 0]; //Create an var array to hold the largest numbers
    for (var i = 0; i < arr.length; i++) { //for loop through the main array index
        for (var j = 0; j < arr[i].length; j++) { //then for loop through each subarray
            if (arr[i][j] > num[i]) { //if the value of the index subarray is > the index value of var..
                num[i] = arr[i][j]; //..replace it and hold.
            }
        }

    }
    return num; //return the completed array [four indexes, one highest value each]
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
