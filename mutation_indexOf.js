function mutation(arr) {
    var a = arr[0].toLowerCase();
    var aCheck = arr[1].toLowerCase();
    for (var pos = 0; pos <= aCheck.length;) {
        if (a.indexOf(aCheck) != -1) { //check the whole 2nd array to see if it is part of the first. -1 if not there.
            console.log((a.indexOf(aCheck)));
            return true;
        }
        else if (a.indexOf(aCheck[pos]) != -1) { //if a letter in the second array is in the first, increment through each index of the 2nd array.
            console.log(pos);
            pos++;
        }
        else if (pos == aCheck.length) { //if each index of the second array is present and == to the array length.
            console.log(aCheck.length);
            return true;
        }
        else {
            console.log("not here");
            return false;
        }

    }
}


console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
