//data structures - organize data in various ways: var, string, array, object, etc. 
//Solving DNA Pairing using data structures:

function pairElement(str) {
    var dnaMap = { C: "G", G: "C", A: "T", T: "A" }
    var charArray = str.split("");
    var pairArray = [];
    // console.log(pairArray);
    for (var i = 0; i < charArray.length; i++) {
        pairArray.push([charArray[i], dnaMap[charArray[i]]]);
        console.log(pairArray);

        // if (charArray[i] === "G") {
        //     pairArray.push(["G", "C"]);
        //     console.log(pairArray);
        // }
        // else if (charArray[i] === "C") {
        //     pairArray.push(["C", "G"]);
        //     console.log(pairArray);
        // }
        // else if (charArray[i] === "A") {
        //     pairArray.push(["A", "T"]);
        //     console.log(pairArray);
        // }
        // else if (charArray[i] === "T") {
        //     pairArray.push(["T", "A"]);
        //     console.log(pairArray);
        // }
    }
    return pairArray;
}
pairElement("GCG");
