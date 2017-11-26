function slasher(arr, howMany) {
    arr.splice(0, howMany); //Splice(startIndex, deleteCount, addChanges)
    return arr; //return original array after modification to get remaining items.
}

slasher([1, 2, 3], 2);
