function getIndexToIns(arr, num) {
    function compareNumbers(a, b) {
        return a - b;
    }
    arr.sort(compareNumbers);
    console.log(arr);
    return arr;

}

getIndexToIns([60, 40], 50);
console.log(getIndexToIns);
